# Библиотека 2100 асан Д. Лакерды (из атласа) → LibraryCatalog.kt.
# Выполняется из atlas_to_kotlin.py (общие помощники kstr, blist, norm, step_breath там).
# Плоская схема позы считается из точек объёмной марионетки: вид сбоку по плоскости таза,
# а если поза раскрыта в стороны (боковые наклоны, треугольники, широкие ноги) — вид спереди.

CHAPTERS_EN = {"Стоя": "Standing", "Сидя": "Seated", "Кор": "Core", "На четвереньках": "On all fours",
               "Перевёрнутые": "Inversions", "Лёжа на животе": "Prone", "Лёжа на спине": "Supine"}


def _sub(a, b):
    return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]


def _dot(a, b):
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]


def _cross(a, b):
    return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]


def _unit(a):
    n = math.sqrt(_dot(a, a)) or 1.0
    return [x / n for x in a]


def pose2d(rec):
    """Точки марионетки → углы плоской схемы (0° — вперёд, 90° — вверх) и признак вида спереди."""
    P_ = rec["p"]
    lat = list(rec["lat"])                      # ось таза влево
    lat_h = _unit([lat[0], 0.0, lat[2]]) if abs(lat[1]) < 0.9 else [0.0, 0.0, -1.0]
    h = _unit(_cross(lat_h, [0.0, 1.0, 0.0]))   # горизонталь «вперёд» в плоскости таза
    pel = P_["pelvis"]
    s_lat = s_sag = 0.0
    for name, base in (("wristL", .2), ("wristR", .2), ("elbowL", .19), ("elbowR", .19), ("ankleL", .1),
                       ("ankleR", .1), ("kneeL", .1), ("kneeR", .1), ("head", 0.0)):
        d = _sub(P_[name], pel)
        s_lat += max(0.0, abs(_dot(d, lat_h)) - base)
        s_sag += abs(_dot(d, h))
    front = s_lat > 1.3 * s_sag and s_lat > 0.25
    axis = lat_h if front else h

    def xy(name):
        q = P_[name]
        return (_dot(q, axis), q[1])

    def ang(a, b):
        (ax_, ay), (bx, by) = (a if isinstance(a, tuple) else xy(a)), (b if isinstance(b, tuple) else xy(b))
        return math.degrees(math.atan2(by - ay, bx - ax_)) % 360

    sl, sr = xy("shoulderL"), xy("shoulderR")
    sh_mid = ((sl[0] + sr[0]) / 2, (sl[1] + sr[1]) / 2)
    t = [ang("pelvis", "waist"), ang("waist", sh_mid), ang(sh_mid, "head")]
    a1 = [ang("shoulderR", "elbowR"), ang("elbowR", "wristR")]
    a2 = [ang("shoulderL", "elbowL"), ang("elbowL", "wristL")]
    l1 = [ang("hipR", "kneeR"), ang("kneeR", "ankleR"), ang("heelR", "tipR")]
    l2 = [ang("hipL", "kneeL"), ang("kneeL", "ankleL"), ang("heelL", "tipL")]
    args = [norm(t[0]), norm(t[2]), norm(a1[0]), norm(a1[1]), norm(l1[0]), norm(l1[1]), norm(l1[2]),
            norm(l2[0]), norm(l2[1]), norm(l2[2]), norm(a2[0]), norm(a2[1]), norm(t[1])]
    return "p(" + ", ".join(str(x) for x in args) + (", front = 1.0" if front else "") + ")"


LOCK_WORDS = ("замк", "замок", "сцеплен", "interlac", "clasp", "bound hands", "baddha hasta", "baddha anguli", "hands bound")
PRAYER_WORDS = ("ладони вместе", "намаскар", "анджали", "prayer", "namaskar", "anjali")


def hand_shape(*texts):
    t = " ".join(x for x in texts if x).lower()
    if any(w in t for w in LOCK_WORDS):
        return "LOCK"
    if any(w in t for w in PRAYER_WORDS):
        return "PRAYER"
    return None


def title_case(s):
    small = {"and", "or", "the", "of", "with", "on", "in", "to", "a", "an", "over", "below", "above", "at", "&"}
    words = s.lower().split()
    return " ".join(w if (i and w in small) else w[:1].upper() + w[1:] for i, w in enumerate(words))


def lib_desc_en(row):
    n, _, _, _, kind, gaze, note, alt = row[:8]
    parts = []
    if note:
        parts.append(note[:1].upper() + note[1:].rstrip(".") + ".")
    if kind:
        parts.append(f"Type: {kind}.")
    if gaze:
        parts.append(f"Gaze: {gaze}.")
    if alt:
        parts.append(f"Also known as: {alt}.")
    parts.append(f"D. Lacerda, “2100 Asanas”, No. {n}.")
    return " ".join(parts)


lib_asanas, lib_blocks, lib_seqs, chapters = [], [], [], OrderedDict()
rows = {r[0]: r for r in LIB["ROWS"]}
neutral = "p(90, 90, 270, 270, 270, 270, 0, 270, 270, 0, 270, 270, 90)"
missing_points = 0
for i, (sid, seq) in enumerate(LIB["LIBSEQ"].items()):
    steps = []
    for st in seq["steps"]:
        code, jid, m, title, names, move, hold = st[:7]
        sk_, _, en = names.partition(" · ")
        aid = f"lb_{jid}"
        num = int(re.sub(r"\D", "", code) or 0)
        rec = (LIB_POINTS or {}).get(jid)
        if rec is None or "err" in rec:
            missing_points += 1
        desc = LIB["DESC"].get(jid)
        cue = (rows.get(num) or [None] * 7)[6]
        lib_asanas.append({
            "id": aid, "name": title, "name_en": en or sk_ or title, "sanskrit": sk_ or None,
            "pose": pose2d(rec) if rec and "err" not in rec else neutral,
            "desc": desc, "desc_en": lib_desc_en(rows[num]) if num in rows else None,
            "cue": (desc or title).split(". ")[0].rstrip("."), "figure": jid,
            "hands": hand_shape(title, names, desc, (rows.get(num) or [None] * 7)[6]),
        })
        enter, hold_b = step_breath(move, hold)
        steps.append({"asana": aid, "enter": enter, "hold": hold_b, "title": title, "title_en": en or sk_ or title})
    lib_blocks.append((sid, steps))
    en_name = title_case(LIB["SECS"][i][1])
    lib_seqs.append((sid, seq["name"], en_name, len(steps)))
    ch = seq["chapName"]
    chapters.setdefault(ch, []).append(sid)

L = []
w = L.append
w("// Сгенерировано tools/atlas/library_to_kotlin.py (через atlas_to_kotlin.py). Не редактировать вручную.")
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
w("import ru.mudrya.yoga.model.Step")
w("")
w("/** Глава библиотеки: название и разделы-сеты по порядку книги. */")
w("data class LibraryChapter(val nameRu: String, val nameEn: String, val sequenceIds: List<String>)")
w("")
w("/**")
w(" * Библиотека 2100 асан Д. Лакерды из атласа: каждая поза — на объёмной марионетке, названия")
w(" * по-русски, на санскрите и по-английски; каждый раздел книги — сет, который можно пройти в плеере.")
w(" */")
w("object LibraryCatalog {")
w("    private val IN = Breath.INHALE")
w("    private val EX = Breath.EXHALE")
w("    private val FREE = listOf(IN, EX, IN, EX, IN, EX)")
w("")
w("    @Suppress(\"LongParameterList\")")
w("    private fun p(")
w("        t: Int, n: Int, ua: Int, fa: Int, th: Int, sh: Int, ft: Int,")
w("        th2: Int, sh2: Int, ft2: Int, ua2: Int, fa2: Int, ut: Int,")
w("        front: Double = 0.0,")
w("    ) = Pose(")
w("        t.toDouble(), n.toDouble(), ua.toDouble(), fa.toDouble(), th.toDouble(), sh.toDouble(), ft.toDouble(),")
w("        ua2.toDouble(), fa2.toDouble(), th2.toDouble(), sh2.toDouble(), ft2.toDouble(), ut.toDouble(),")
w("        front = front,")
w("    )")
w("")
w("    @Suppress(\"LongParameterList\")")
w("    private fun a(id: String, ru: String, en: String, sk: String?, pose: Pose, cue: String, desc: String?, descEn: String?, fig: String, hands: HandShape? = null) =")
w("        Asana(id = id, nameRu = ru, nameEn = en, pose = pose, cuesRu = listOf(cue), sanskrit = sk, descriptionRu = desc,")
w("            descriptionEn = descEn, figure = FigureRef(fig, hands = hands))")
w("")
w("    private fun s(id: String, enter: List<Breath>, title: String, titleEn: String) =")
w("        Step(id, enter = enter, hold = FREE, titleRu = title, titleEn = titleEn)")
w("")


def hold_kt(h):
    return "FREE" if h == FREE else blist(h)


CH_A = 40
ach = [lib_asanas[i:i + CH_A] for i in range(0, len(lib_asanas), CH_A)]
w("    val asanas: List<Asana> by lazy { " + " + ".join(f"a{i}()" for i in range(len(ach))) + " }")
w("")
for i, chunk in enumerate(ach):
    w(f"    private fun a{i}(): List<Asana> = listOf(")
    for x in chunk:
        hs = f", HandShape.{x['hands']}" if x["hands"] else ""
        w(f"        a({kstr(x['id'])}, {kstr(x['name'])}, {kstr(x['name_en'])}, {kstr(x['sanskrit'])}, {x['pose']}, {kstr(x['cue'])}, {kstr(x['desc'])}, {kstr(x['desc_en'])}, {kstr(x['figure'])}{hs}),")
    w("    )")
    w("")
CH_B = 20
bch = [lib_blocks[i:i + CH_B] for i in range(0, len(lib_blocks), CH_B)]
w("    val blocks: List<Block> by lazy { " + " + ".join(f"b{i}()" for i in range(len(bch))) + " }")
w("")
for i, chunk in enumerate(bch):
    w(f"    private fun b{i}(): List<Block> = listOf(")
    for bid, steps in chunk:
        w(f"        Block({kstr(bid)}, listOf(")
        for st in steps:
            if st["hold"] != FREE:
                raise SystemExit(f"library hold is not free breathing: {bid}")
            w(f"            s({kstr(st['asana'])}, {blist(st['enter'])}, {kstr(st['title'])}, {kstr(st['title_en'])}),")
        w("        )),")
    w("    )")
    w("")
CH_S = 60
sch = [lib_seqs[i:i + CH_S] for i in range(0, len(lib_seqs), CH_S)]
w("    val sequences: List<SequenceDef> by lazy { " + " + ".join(f"q{i}()" for i in range(len(sch))) + " }")
w("")
for i, chunk in enumerate(sch):
    w(f"    private fun q{i}(): List<SequenceDef> = listOf(")
    for sid, ru, en, _ in chunk:
        w(f"        SequenceDef({kstr(sid)}, {kstr(ru)}, {kstr(en)}, listOf(BlockRef({kstr(sid)}, Side.NONE))),")
    w("    )")
    w("")
w("    val chapters: List<LibraryChapter> = listOf(")
for ru, ids in chapters.items():
    w(f"        LibraryChapter({kstr(ru)}, {kstr(CHAPTERS_EN.get(ru, ru))}, listOf({', '.join(kstr(x) for x in ids)})),")
w("    )")
w("")
w("    /** Сколько поз в библиотеке — для проверки при перегенерации. */")
w(f"    const val POSE_COUNT = {len(lib_asanas)}")
w("}")
OUT_LIB.write_text("\n".join(L) + "\n", encoding="utf-8")
print(f"library: {len(lib_asanas)} asanas, {len(lib_blocks)} sections, {len(chapters)} chapters, no points: {missing_points} -> {OUT_LIB.relative_to(ROOT)}")
