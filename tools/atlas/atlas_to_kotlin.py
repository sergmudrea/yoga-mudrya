#!/usr/bin/env python3
"""
Генерирует из атласа нулевого цикла:
- core/catalog/.../AtlasCatalog.kt — сеты Сидерского (кольца книги, старт-сет, стоп-сет …) и классика;
- core/catalog/.../LibraryCatalog.kt — библиотека 2100 асан Д. Лакерды по разделам книги.

Входы: tools/atlas/atlas.json (позы P, сеты SEQS, описания DESC), translations_en.json (английские
тексты сетов Сидерского), library.json (разделы и позы библиотеки с переводами), а для плоской схемы
поз библиотеки — точки марионетки (node tools/atlas/library_poses.mjs → путь первым аргументом).
Запуск: python3 tools/atlas/atlas_to_kotlin.py <library_points.json>
"""
import json
import math
import re
import sys
from collections import OrderedDict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
ATLAS = json.loads((ROOT / "tools/atlas/atlas.json").read_text(encoding="utf-8"))
OUT = ROOT / "core/catalog/src/main/kotlin/ru/mudrya/yoga/catalog/AtlasCatalog.kt"
OUT_LIB = ROOT / "core/catalog/src/main/kotlin/ru/mudrya/yoga/catalog/LibraryCatalog.kt"
TR = json.loads((ROOT / "tools/atlas/translations_en.json").read_text(encoding="utf-8"))
LIB = json.loads((ROOT / "tools/atlas/library.json").read_text(encoding="utf-8"))
LIB_POINTS = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8")) if len(sys.argv) > 1 else None

P = ATLAS["P"]
DESC = ATLAS["DESC"]
SEQS = {s["id"]: s for s in ATLAS["SEQS"]}

# Какие последовательности атласа становятся сетами приложения.
# Кольца книги (sk, lk) — под прежними id «surya» и «chandra», чтобы история и путь не сбились;
# они делятся на блоки по разделам книги (вход, связки, кольца, выход), стороны берутся из раздела.
SPLIT = {"sk": ("surya", "Солнечное кольцо", "Sun ring"), "lk": ("chandra", "Лунное кольцо", "Moon ring")}
SETS = [
    # id атласа, id сета, название по-английски, нужна ли вторая половина с другой ноги
    ("sk", "surya", "Sun ring", False),
    ("lk", "chandra", "Moon ring", False),
    ("sn", "at_sn", "Surya Namaskar (classic)", True),
    ("cn", "at_cn", "Chandra Namaskar (classic)", True),
    ("ns", "at_ns", "Transition to the start set", False),
    ("ss1", "at_ss1", "Start set 1", False),
    ("ss2", "at_ss2", "Start set 2", False),
    ("ss3", "at_ss3", "Start set 3: inversions", False),
    ("ss4", "at_ss4", "Start set 4", False),
    ("ss5", "at_ss5", "Start set 5", False),
    ("ss6", "at_ss6", "Start set 6", False),
    ("ss7", "at_ss7", "Start set 7", False),
    ("st", "at_st", "Core set", False),
    ("ds", "at_ds", "Link to the stop set", False),
    ("zs", "at_zs", "Stop set", False),
    ("ssd", "at_ssd", "Start set: extra elements", False),
    ("zsd", "at_zsd", "Stop set: extra elements", False),
    ("skd", "at_skd", "Sun ring: extra elements", False),
    ("lkd", "at_lkd", "Moon ring: extra elements", False),
]

HAND = ATLAS.get("HAND", {})


def hand_lock(pose_id):
    """Пальцы в замке (перед собой или за спиной) — по разметке кистей атласа."""
    h = HAND.get(pose_id)
    hs = h if isinstance(h, list) else [h]
    return any(isinstance(x, str) and x.split(":")[0] in ("lock", "lockrev") for x in hs)

FREE_MARKERS = ["свободн", "произвольн", "расслаблен", "ровное дыхание", "как можно дольше", "сколько угодно",
                "без ограничения", "созерцан", "полное дыхание", "дыхание,"]


def norm(a):
    return int(round(a)) % 360


def mirror(p):
    """Как mirror() в атласе: ближние и дальние конечности меняются местами; вид спереди отражается."""
    q = dict(p)
    q["L1"], q["L2"] = p["L2"], p["L1"]
    q["A1"], q["A2"] = p["A2"], p["A1"]
    if p.get("v"):
        f = lambda a: 180 - a
        q["t"] = [f(a) for a in p["t"]]
        for k in ("L1", "L2", "A1", "A2"):
            q[k] = [f(a) for a in q[k]]
    return q


def pose_kt(p):
    t, l1, l2, a1, a2 = p["t"], p["L1"], p["L2"], p["A1"], p["A2"]
    args = [norm(t[0]), norm(t[2]), norm(a1[0]), norm(a1[1]), norm(l1[0]), norm(l1[1]), norm(l1[2]),
            norm(l2[0]), norm(l2[1]), norm(l2[2]), norm(a2[0]), norm(a2[1]), norm(t[1])]
    extra = ""
    if p.get("v"):
        extra += f", front = {float(p['v'])}"
    if p.get("sc") and p["sc"] != 1:
        extra += f", spineScale = {float(p['sc'])}"
    return "p(" + ", ".join(str(a) for a in args) + extra + ")"


def breaths(text, is_move):
    """Схема дыхания из текста атласа → список фаз. None — свободное дыхание."""
    s = (text or "").strip().lower()
    if s in ("", "—", "-"):
        return []
    if any(m in s for m in FREE_MARKERS):
        return None
    if s.startswith("задержка") or s == "задержка":
        return ["IN"] if "вдох" in s else ["EX"]
    tokens = ["EX" if m == "выдох" else "IN" for m in re.findall(r"выдох|вдох", s)]
    rep = re.search(r"×\s*(\d+)", s)
    if rep:
        tokens = tokens * int(rep.group(1))
    return tokens


FREE = ["IN", "EX", "IN", "EX", "IN", "EX"]


def step_breath(move, hold):
    enter = breaths(move, True)
    hold_b = breaths(hold, False)
    if enter is None:
        enter = FREE
    if hold_b is None:
        hold_b = FREE
    if not enter:
        # Движение без своего вдоха или выдоха: первая фаза удержания и есть переход.
        if hold_b:
            enter, hold_b = hold_b[:1], hold_b[1:]
        else:
            enter = ["EX"]
    return enter, hold_b


SWAP = [("правую", "левую"), ("правая", "левая"), ("правой", "левой"), ("правое", "левое"), ("правый", "левый"),
        ("Правую", "Левую"), ("Правая", "Левая"), ("Правой", "Левой")]


def swap_side(text):
    out = text
    # Меняем «правую» ↔ «левую» через временные метки, чтобы замены не наложились.
    for i, (a, b) in enumerate(SWAP):
        out = out.replace(a, f"@@{i}@@")
        out = out.replace(b, a)
        out = out.replace(f"@@{i}@@", b)
    return out


SWAP_EN = [("right", "left"), ("Right", "Left"), ("RIGHT", "LEFT")]


def swap_side_en(text):
    out = text
    for i, (a, b) in enumerate(SWAP_EN):
        out = re.sub(rf"\b{a}\b", f"@@{i}@@", out)
        out = re.sub(rf"\b{b}\b", a, out)
        out = out.replace(f"@@{i}@@", b)
    return out


def en_title(ru):
    return TR["titles"].get(ru)


def en_cue(ru):
    return TR["cues"].get(ru) if ru else None


def kstr(s):
    if s is None:
        return "null"
    s = s.replace("\\", "\\\\").replace('"', '\\"').replace("$", "\\$").replace("\n", " ")
    return f'"{s}"'


asanas = OrderedDict()   # ключ (pose, m) → dict
blocks = []              # (block_id, steps)
sequences = []           # (seq_id, name_ru, name_en, [block ids], count)


def symmetric(p):
    """Ближние и дальние конечности совпадают (с точностью до 3°): отражение ничего не меняет."""
    close = lambda xs, ys: all(abs(((a - b + 180) % 360) - 180) <= 3 for a, b in zip(xs, ys))
    return not p.get("v") and close(p["L1"], p["L2"]) and close(p["A1"], p["A2"])


def asana_for(pose_id, m, title, sanskrit, cue, title_en=None):
    if m and symmetric(P[pose_id]):
        m = 0
    key = (pose_id, m)
    aid = f"at_{pose_id}" + ("_m" if m else "")
    if key not in asanas:
        base = P[pose_id]
        p = mirror(base) if m else base
        desc = DESC.get(pose_id)
        asanas[key] = {"id": aid, "name": title, "sanskrit": sanskrit or None, "pose": pose_kt(p), "desc": desc, "cues": [],
                       "figure": (pose_id, bool(m)), "name_en": title_en, "desc_en": TR["desc"].get(pose_id),
                       "lock": hand_lock(pose_id)}
    a = asanas[key]
    if cue and cue not in a["cues"] and len(a["cues"]) < 3:
        a["cues"].append(cue)
    if not a["sanskrit"] and sanskrit:
        a["sanskrit"] = sanskrit
    return aid


def build_steps(steps, flip):
    out = []
    for st in steps:
        code, pose_id, m, title, sk, move, hold, cue = st[:8]
        m = 1 - m if flip else m
        title_en, cue_en = en_title(title), en_cue(cue)
        if flip:
            title, cue = swap_side(title), swap_side(cue or "")
            title_en = swap_side_en(title_en) if title_en else None
            cue_en = swap_side_en(cue_en) if cue_en else None
        aid = asana_for(pose_id, m, title, sk, cue, title_en)
        enter, hold_b = step_breath(move, hold)
        dog = "металлическая собака" in (hold or "")
        out.append({"asana": aid, "enter": enter, "hold": hold_b, "dog": dog, "title": title, "cue": cue or None, "code": code,
                    "title_en": title_en, "cue_en": cue_en, "group": st[8] if len(st) > 8 else None})
    return out


def side_of(group):
    g = (group or "").lower()
    return "RIGHT" if "прав" in g else "LEFT" if "лев" in g else "NONE"


entry_exit = {}
block_titles = {}
for atlas_id, set_id, name_en, two_sides in SETS:
    s = SEQS[atlas_id]
    if atlas_id in SPLIT:
        _, name_ru, _ = SPLIT[atlas_id]
        steps = build_steps(s["steps"], flip=False)
        parts = []
        for st in steps:
            if not parts or parts[-1][0] != st["group"]:
                parts.append((st["group"], []))
            parts[-1][1].append(st)
        refs = []
        for i, (group, chunk) in enumerate(parts):
            bid = f"{set_id}_{i + 1}"
            blocks.append((bid, chunk))
            block_titles[bid] = (group, TR["groups"].get(group))
            refs.append((bid, side_of(group)))
        entry_exit[set_id] = (refs[0][0], refs[-1][0])
        sequences.append((set_id, name_ru, name_en, refs, len(steps)))
        continue
    if two_sides:
        right = build_steps(s["steps"], flip=False)
        left = build_steps(s["steps"], flip=True)
        blocks.append((f"{set_id}_r", right))
        blocks.append((f"{set_id}_l", left))
        block_titles[f"{set_id}_r"] = (s["name"] + " — правая сторона", name_en + " — right side")
        block_titles[f"{set_id}_l"] = (s["name"] + " — левая сторона", name_en + " — left side")
        sequences.append((set_id, s["name"], name_en, [(f"{set_id}_r", "RIGHT"), (f"{set_id}_l", "LEFT")], len(right) + len(left)))
    else:
        steps = build_steps(s["steps"], flip=False)
        blocks.append((set_id, steps))
        block_titles[set_id] = (s["name"], name_en)
        sequences.append((set_id, s["name"], name_en, [(set_id, "NONE")], len(steps)))

# ---- Вставки дополнительных элементов на места, указанные в книге ----
# зона: id, название, вставки (сет-источник, коды шагов, после какого шага основной последовательности, зеркально)
def codes(prefix, a, b, extra=()):
    return [f"{prefix}-{i}" for i in range(a, b + 1)] + list(extra)
ZONES = [
    ("x_sun", "Солнце: доп. элементы", "Sun: extras",
     [("skd", codes("СКД", 1, 25), "СК-28", False), ("skd", codes("СКД", 1, 25), "СК-47", True)]),
    ("x_moon", "Луна: верхние верблюды", "Moon: upper camels",
     [("lkd", codes("ЛКД", 1, 2), "ЛК-40", False), ("lkd", codes("ЛКД", 3, 4), "ЛК-45", False),
      ("lkd", codes("ЛКД", 1, 2), "ЛК-70", True), ("lkd", codes("ЛКД", 3, 4), "ЛК-75", True)]),
    ("x_backbends", "Прогибы лёжа: верблюд и скорпион", "Prone backbends: camel and scorpion",
     [("ssd", codes("ССД", 1, 5), "СС-15′", False)]),
    ("x_cobra", "Королевская кобра", "King cobra", [("ssd", ["ССД-6"], "СС-43", False)]),
    ("x_headstand", "Стойка на голове: лотос, скорпион, стойка на предплечьях", "Headstand: lotus, scorpion, forearm stand",
     [("ssd", codes("ССД", 7, 25), "СС-96", False)]),
    ("x_viparita", "Перевёрнутые позы с лотосом", "Inversions with lotus", [("ssd", codes("ССД", 26, 34), "СС-133", False)]),
    ("x_plough", "Супер-плуг и стойка на плечах без поддержки", "Super plough and unsupported shoulder stand",
     [("ssd", codes("ССД", 35, 37, ("ССД-35а",)), "СС-135", False)]),
    ("x_pendulum", "Маятник и стойки на руках", "Pendulum and handstands", [("ssd", codes("ССД", 38, 54), "СС-138", False)]),
    ("x_reverse", "Обратные упоры", "Reverse supports", [("ssd", codes("ССД", 55, 58), "СС-146", False)]),
    ("x_mula", "Корневая фиксация", "Root lock", [("ssd", codes("ССД", 59, 62), "СС-177", False)]),
    ("x_scissors", "Ножницы: упор-стойка и кольцо", "Splits: tuck balance and pigeon ring",
     [("ssd", ["ССД-63"], "СС-187", False), ("ssd", ["ССД-65"], "СС-191", False),
      ("ssd", ["ССД-65"], "СС-197", True), ("ssd", ["ССД-64"], "СС-198", False)]),
    ("x_lotus", "Связка в лотосе", "Lotus sequence", [("zsd", codes("ЗСД", 1, 57), "ЗС-10", False)]),
]
block_map = dict(blocks)
def cut_after(code):
    """Разрезает блок так, чтобы шаг code был последним в своём блоке; возвращает id блока."""
    for i, (bid, steps) in enumerate(blocks):
        pos = [k for k, st in enumerate(steps) if st["code"] == code]
        if not pos:
            continue
        k = pos[0]
        if k == len(steps) - 1:
            return bid
        nid = f"{bid}_{len(blocks)}"
        blocks[i] = (bid, steps[:k + 1])
        blocks.insert(i + 1, (nid, steps[k + 1:]))
        block_titles[nid] = block_titles.get(bid, (None, None))
        for j, (sid, nr, ne, refs, cnt) in enumerate(sequences):
            nrefs = []
            for b, side in refs:
                nrefs.append((b, side))
                if b == bid:
                    nrefs.append((nid, side))
            sequences[j] = (sid, nr, ne, nrefs, cnt)
        if bid in entry_exit and entry_exit[bid][1] == bid:
            pass
        return bid
    raise SystemExit(f"нет шага {code}")
zone_slots = []   # (zone id, block id of insertion, after-block id)
for zid, zru, zen, inserts in ZONES:
    for n, (src, cs, after, flip) in enumerate(inserts):
        src_steps = [st for st in SEQS[src]["steps"] if st[0] in cs]
        assert len(src_steps) == len(cs), (zid, src, len(src_steps), len(cs))
        ib = f"{zid}_{n + 1}"
        blocks.append((ib, build_steps(src_steps, flip=flip)))
        block_titles[ib] = (zru, zen)
        cut_after(after)
        zone_slots.append((zid, ib, after))

# Полный цикл одной практикой — по разделу книги «Соединение двух кругов и старт-сета в единую
# последовательность» и «Связка для соединения старт-сета и стоп-сета»:
#  • круг солнечного света без стандартного выхода: после глубокого упора-горки, которым заканчивается
#    левостороннее солнечное кольцо (с его связкой), сразу плечевое вытягивание в упоре-горке —
#    начало правостороннего лунного кольца (лунный стандартный вход и первая связка не выполняются);
#  • круг лунного света без стандартного выхода: из последнего расслабления на пятках — переход к старт-сету;
#  • старт-сет (семь мини-последовательностей), связка (стандартный вход + внутренняя связка с выходом
#    в шавасану) и заключительный стоп-сет, который заканчивается сиддхасаной и шавасаной.
# Стержневой сет в книге — дополнительная практика, в основную цепочку не входит (отдельный сет).
FLOW = ["at_ns", "at_ss1", "at_ss2", "at_ss3", "at_ss4", "at_ss5", "at_ss6", "at_ss7", "at_ds", "at_zs"]
seq_by_id = {sid: (refs, count) for sid, _, _, refs, count in sequences}
block_len = {bid: len(steps) for bid, steps in blocks}
sun_refs, _ = seq_by_id["surya"]
moon_refs, _ = seq_by_id["chandra"]
moon_title = {b: block_titles[b][0] for b, _ in moon_refs}
ring_idx = [k for k, r in enumerate(moon_refs) if "кольцо" in (moon_title[r[0]] or "")]
i0, i1 = ring_idx[0], ring_idx[-1]
MOON_RINGS = moon_refs[i0:i1 + 1]          # правое кольцо, связка, левое кольцо (до расслабления на пятках)
SUN_NO_EXIT = sun_refs[:-1]                 # всё солнечное кольцо до стандартного выхода
MOON_NO_EXIT = moon_refs[:i1 + 1]           # лунный вход, связка, кольца — без последней связки и выхода
COMPOSITES = [
    ("full_sun", "Полный цикл: Солнце и Луна", "Full cycle: Sun and Moon", SUN_NO_EXIT + MOON_RINGS),
    ("full_moon", "Полный цикл: Луна", "Full cycle: Moon", MOON_NO_EXIT),
]
for cid, name_ru, name_en, head in COMPOSITES:
    refs = list(head) + [r for f in FLOW for r in seq_by_id[f][0]]
    sequences.append((cid, name_ru, name_en, refs, sum(block_len[b] for b, _ in refs)))

for a in asanas.values():
    if not a["cues"]:
        first = (a["desc"] or a["name"]).split(". ")[0].rstrip(".")
        a["cues"].append(first)


def blist(xs):
    return "listOf(" + ", ".join(xs) + ")" if xs else "emptyList()"


lines = []
w = lines.append
w("// Сгенерировано tools/atlas/atlas_to_kotlin.py из атласа нулевого цикла. Не редактировать вручную.")
w("@file:Suppress(\"LargeClass\", \"MaxLineLength\")")
w("")
w("package ru.mudrya.yoga.catalog")
w("")
w("import ru.mudrya.yoga.model.Asana")
w("import ru.mudrya.yoga.model.Block")
w("import ru.mudrya.yoga.model.BlockRef")
w("import ru.mudrya.yoga.model.Breath")
w("import ru.mudrya.yoga.model.FigureRef")
w("import ru.mudrya.yoga.model.HandShape")
w("import ru.mudrya.yoga.model.Pose")
w("import ru.mudrya.yoga.model.SequenceDef")
w("import ru.mudrya.yoga.model.Side")
w("import ru.mudrya.yoga.model.Slot")
w("import ru.mudrya.yoga.model.Step")
w("")
w("/**")
w(" * Сеты из атласа нулевого цикла: классические Сурья и Чандра Намаскар, переход, старт-сет,")
w(" * стержневой сет, связка, стоп-сет и дополнительные элементы. Позы, дыхание и подсказки — из атласа.")
w(" */")
w("object AtlasCatalog {")
w("    private val IN = Breath.INHALE")
w("    private val EX = Breath.EXHALE")
w("")
w("    @Suppress(\"LongParameterList\")")
w("    private fun p(")
w("        t: Int, n: Int, ua: Int, fa: Int, th: Int, sh: Int, ft: Int,")
w("        th2: Int, sh2: Int, ft2: Int, ua2: Int, fa2: Int, ut: Int,")
w("        front: Double = 0.0, spineScale: Double = 1.0,")
w("    ) = Pose(")
w("        t.toDouble(), n.toDouble(), ua.toDouble(), fa.toDouble(), th.toDouble(), sh.toDouble(), ft.toDouble(),")
w("        ua2.toDouble(), fa2.toDouble(), th2.toDouble(), sh2.toDouble(), ft2.toDouble(), ut.toDouble(),")
w("        front = front, spineScale = spineScale,")
w("    )")
w("")
w("    @Suppress(\"LongParameterList\")")
w("    private fun s(id: String, enter: List<Breath>, hold: List<Breath>, title: String, cue: String?, titleEn: String?, cueEn: String?, dog: Boolean = false) =")
w("        Step(id, enter = enter, hold = hold, metalDog = dog, titleRu = title, cueRu = cue, titleEn = titleEn, cueEn = cueEn)")
w("")

# Простые названия поз (tools/atlas/plain_names.json): имя асаны и совпадающие с ним названия шагов.
PLAIN = {k: v for k, v in json.loads((ROOT / "tools/atlas/plain_names.json").read_text(encoding="utf-8")).items() if not k.startswith("_")}
_old_names = {}
for _a in asanas.values():
    _pn = PLAIN.get(_a["id"]) or PLAIN.get(_a["id"].removesuffix("_m"))
    if _pn:
        _old_names[_a["id"]] = (_a["name"], _a["name_en"] or _a["sanskrit"] or _a["name"])
        _a["name"], _a["name_en"] = _pn
for _bid, _steps in blocks:
    for _st in _steps:
        _o = _old_names.get(_st["asana"])
        if not _o:
            continue
        _pn = PLAIN.get(_st["asana"]) or PLAIN.get(_st["asana"].removesuffix("_m"))
        if _st["title"] == _o[0]:
            _st["title"] = _pn[0]
        if _st["title_en"] == _o[1]:
            _st["title_en"] = _pn[1]

# Простые названия сетов и блоков вместо терминов методики.
SEQ_PLAIN = {
    "surya": ("Солнце", "Sun flow"), "chandra": ("Луна", "Moon flow"),
    "at_ns": ("Подготовка к разминке", "Lead-in to the warm-up"),
    "at_ss1": ("Разминка 1", "Warm-up 1"), "at_ss2": ("Разминка 2", "Warm-up 2"), "at_ss3": ("Разминка 3: перевёрнутые позы", "Warm-up 3: inversions"),
    "at_ss4": ("Разминка 4", "Warm-up 4"), "at_ss5": ("Разминка 5", "Warm-up 5"), "at_ss6": ("Разминка 6", "Warm-up 6"), "at_ss7": ("Разминка 7", "Warm-up 7"),
    "at_st": ("Для продвинутых", "Advanced set"), "at_ds": ("Переход к заминке", "Lead-in to the cool-down"), "at_zs": ("Заминка", "Cool-down"),
    "at_ssd": ("Разминка · доп. элементы", "Warm-up: extra elements"), "at_zsd": ("Заминка · доп. элементы", "Cool-down: extra elements"),
    "at_skd": ("Солнце · доп. элементы", "Sun: extra elements"), "at_lkd": ("Луна · доп. элементы", "Moon: extra elements"),
    "full_sun": ("Солнце и Луна: полная практика", "Sun and Moon: full practice"), "full_moon": ("Луна: полная практика", "Moon: full practice"),
}
_seq_old = {s[0]: (s[1], s[2]) for s in sequences}
sequences[:] = [(s[0],) + SEQ_PLAIN.get(s[0], (s[1], s[2])) + tuple(s[3:]) for s in sequences]
BLOCK_PLAIN = {
    "Стандартный вход": ("Начало", "Opening"), "Стандартный выход": ("Завершение", "Closing"),
    "Внутренняя связка (виньяса)": ("Связка (виньяса)", "Vinyasa"), "Внутренняя связка": ("Связка", "Flow"),
    "Внутреннее солнечное кольцо, правый шаг": ("Круг с выпадом, правая нога", "Lunge round, right leg"),
    "Внутреннее солнечное кольцо, левый шаг": ("Круг с выпадом, левая нога", "Lunge round, left leg"),
    "Связка на трёх точках, правая нога": ("Связка на одной ноге, правая", "One-leg flow, right"),
    "Связка на трёх точках, левая нога": ("Связка на одной ноге, левая", "One-leg flow, left"),
    "Правостороннее внутреннее лунное кольцо": ("Лунный круг, правая сторона", "Moon round, right side"),
    "Левостороннее внутреннее лунное кольцо": ("Лунный круг, левая сторона", "Moon round, left side"),
    "Солнце: допэлементы колец": ("Солнце: доп. элементы", "Sun: extras"),
    "Лотосовая связка стоп-сета": ("Связка в лотосе", "Lotus sequence"),
}
for _bid, _tt in list(block_titles.items()):
    _sid = _bid
    if _tt[0] in BLOCK_PLAIN:
        block_titles[_bid] = BLOCK_PLAIN[_tt[0]]
        continue
    for _k, (_ru, _en) in SEQ_PLAIN.items():
        _o = _seq_old.get(_k)
        if _o and _tt[0] and _tt[0].startswith(_o[0]):
            block_titles[_bid] = (_ru + _tt[0][len(_o[0]):], _en + (_tt[1] or "")[len(_o[1]):] if _tt[1] and _tt[1].startswith(_o[1]) else _en)
            break

# Ссылки на коды фото книги в подсказках не нужны.
import re as _re
def _nocode(c):
    if not c:
        return c
    c = _re.sub(r"\s*Чередовать с [А-Я]{2,3}-\d+\.", " Чередовать с предыдущей позой.", c)
    c = _re.sub(r"\s*Alternate with [A-Z]{2,3}-\d+\.", " Alternate with the previous pose.", c)
    c = c.strip()
    if _re.fullmatch(r"(Как [А-Я]{2,3}-\d+\.|As in [A-Z]{2,3}-\d+\.)", c):
        return None
    return c
for _bid, _steps in blocks:
    for _st in _steps:
        _st["cue"] = _nocode(_st["cue"])
        _st["cue_en"] = _nocode(_st["cue_en"])
for _a in asanas.values():
    _a["cues"] = [x for x in (_nocode(c) for c in _a["cues"]) if x]

alist = list(asanas.values())
CH = 40
chunks = [alist[i:i + CH] for i in range(0, len(alist), CH)]
w("    val asanas: List<Asana> by lazy { " + " + ".join(f"asanas{i}()" for i in range(len(chunks))) + " }")
w("")
for i, ch in enumerate(chunks):
    w(f"    private fun asanas{i}(): List<Asana> = listOf(")
    for a in ch:
        cues = ", ".join(kstr(c) for c in a["cues"])
        w(f"        Asana(id = {kstr(a['id'])}, nameRu = {kstr(a['name'])}, nameEn = {kstr(a['name_en'] or a['sanskrit'] or a['name'])}, pose = {a['pose']},")
        w(f"            cuesRu = listOf({cues}), sanskrit = {kstr(a['sanskrit'])}, descriptionRu = {kstr(a['desc'])}, descriptionEn = {kstr(a['desc_en'])},")
        lock = ", hands = HandShape.LOCK" if a["lock"] else ""
        w(f"            figure = FigureRef({kstr(a['figure'][0])}, {str(a['figure'][1]).lower()}{lock})),")
    w("    )")
    w("")

w("    val blocks: List<Block> by lazy { listOf(" + ", ".join(f"b{i}()" for i in range(len(blocks))) + ") }")
w("")
for i, (bid, steps) in enumerate(blocks):
    w(f"    // {bid}")
    bt = block_titles.get(bid, (None, None))
    w(f"    private fun b{i}() = Block({kstr(bid)}, titleRu = {kstr(bt[0])}, titleEn = {kstr(bt[1])}, steps = listOf(")
    for st in steps:
        dog = ", dog = true" if st["dog"] else ""
        w(f"        s({kstr(st['asana'])}, {blist(st['enter'])}, {blist(st['hold'])}, {kstr(st['title'])}, {kstr(st['cue'])}, {kstr(st['title_en'])}, {kstr(st['cue_en'])}{dog}),")
    w("    ))")
    w("")

w("    val sequences: List<SequenceDef> = listOf(")
for sid, name_ru, name_en, refs, count in sequences:
    items = ", ".join(f"BlockRef({kstr(b)}, Side.{side})" for b, side in refs)
    ee = ""
    if sid in entry_exit:
        ee = f", entryBlockId = {kstr(entry_exit[sid][0])}, exitBlockId = {kstr(entry_exit[sid][1])}"
    order = [b for b, _ in refs]
    last_code = {b: dict(blocks)[b][-1]["code"] for b in order}
    sl = []
    for z, ib, code in zone_slots:
        idx = [k for k, b in enumerate(order) if last_code[b] == code]
        if idx:
            sl.append(f"Slot({kstr(z)}, {kstr(ib)}, {idx[0]})")
    slots_kt = f", slots = listOf({', '.join(sl)})" if sl else ""
    w(f"        SequenceDef(id = {kstr(sid)}, nameRu = {kstr(name_ru)}, nameEn = {kstr(name_en)}, items = listOf({items}){slots_kt}{ee}),")
w("    )")
w("")
w("    /** Зона дополнительных элементов книги: включается в карточке сессии, элементы встают на свои места. */")
w("    data class Zone(val id: String, val nameRu: String, val nameEn: String, val positions: Int)")
w("")
w("    val zones: List<Zone> = listOf(")
for zid, zru, zen, inserts in ZONES:
    npos = sum(len(cs) for _, cs, _, _ in inserts)
    w(f"        Zone({kstr(zid)}, {kstr(zru)}, {kstr(zen)}, {npos}),")
w("    )")
w("")
w("    /** Сколько позиций в каждом сете атласа — для проверки при перегенерации. */")
w("    val stepCounts: Map<String, Int> = mapOf(" + ", ".join(f"{kstr(sid)} to {count}" for sid, _, _, _, count in sequences) + ")")
w("}")

OUT.write_text("\n".join(lines) + "\n", encoding="utf-8")
print(f"{len(asanas)} asanas, {len(blocks)} blocks, {len(sequences)} sets -> {OUT.relative_to(ROOT)}")

exec((ROOT / "tools/atlas/library_to_kotlin.py").read_text(encoding="utf-8"))
