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
    ("ss3", "at_ss3", "Start set 3", False),
    ("ss4", "at_ss4", "Start set 4", False),
    ("ss5", "at_ss5", "Start set 5", False),
    ("ss6", "at_ss6", "Start set 6", False),
    ("ss7", "at_ss7", "Start set 7", False),
    ("st", "at_st", "Core set", False),
    ("ds", "at_ds", "Link to the stop set", False),
    ("zs", "at_zs", "Stop set", False),
    ("skd", "at_skd", "Sun ring: extra elements", False),
    ("lkd", "at_lkd", "Moon ring: extra elements", False),
    ("ssd", "at_ssd", "Start set: extra elements", False),
    ("zsd", "at_zsd", "Stop set: extra elements", False),
]

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
                       "figure": (pose_id, bool(m)), "name_en": title_en, "desc_en": TR["desc"].get(pose_id)}
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
            refs.append((bid, side_of(group)))
        entry_exit[set_id] = (refs[0][0], refs[-1][0])
        sequences.append((set_id, name_ru, name_en, refs, len(steps)))
        continue
    if two_sides:
        right = build_steps(s["steps"], flip=False)
        left = build_steps(s["steps"], flip=True)
        blocks.append((f"{set_id}_r", right))
        blocks.append((f"{set_id}_l", left))
        sequences.append((set_id, s["name"], name_en, [(f"{set_id}_r", "RIGHT"), (f"{set_id}_l", "LEFT")], len(right) + len(left)))
    else:
        steps = build_steps(s["steps"], flip=False)
        blocks.append((set_id, steps))
        sequences.append((set_id, s["name"], name_en, [(set_id, "NONE")], len(steps)))

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
w("import ru.mudrya.yoga.model.Pose")
w("import ru.mudrya.yoga.model.SequenceDef")
w("import ru.mudrya.yoga.model.Side")
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
        w(f"            figure = FigureRef({kstr(a['figure'][0])}, {str(a['figure'][1]).lower()})),")
    w("    )")
    w("")

w("    val blocks: List<Block> by lazy { listOf(" + ", ".join(f"b{i}()" for i in range(len(blocks))) + ") }")
w("")
for i, (bid, steps) in enumerate(blocks):
    w(f"    // {bid}")
    w(f"    private fun b{i}() = Block({kstr(bid)}, listOf(")
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
    w(f"        SequenceDef(id = {kstr(sid)}, nameRu = {kstr(name_ru)}, nameEn = {kstr(name_en)}, items = listOf({items}){ee}),")
w("    )")
w("")
w("    /** Сколько позиций в каждом сете атласа — для проверки при перегенерации. */")
w("    val stepCounts: Map<String, Int> = mapOf(" + ", ".join(f"{kstr(sid)} to {count}" for sid, _, _, _, count in sequences) + ")")
w("}")

OUT.write_text("\n".join(lines) + "\n", encoding="utf-8")
print(f"{len(asanas)} asanas, {len(blocks)} blocks, {len(sequences)} sets -> {OUT.relative_to(ROOT)}")

exec((ROOT / "tools/atlas/library_to_kotlin.py").read_text(encoding="utf-8"))
