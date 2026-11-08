import ru.mudrya.yoga.catalog.*
import ru.mudrya.yoga.engine.*
fun main(argv: Array<String>) {
    val args = java.io.File(argv[0]).readLines().filter { it.isNotBlank() }.toTypedArray()
    val all = (AtlasCatalog.asanas + LibraryCatalog.asanas).associateBy { it.id }
    val sb = StringBuilder("[")
    args.forEachIndexed { i, id ->
        val a = all[id] ?: return@forEachIndexed
        val f = FigureGeometry.grounded(a.pose)
        fun p(q: Pt) = "[${q.x},${q.y}]"
        if (sb.length > 1) sb.append(',')
        sb.append("{\"id\":\"$id\",\"front\":${f.front},\"r\":${f.headRadius},\"hip\":${p(f.hip)},\"waist\":${p(f.waist)},\"sh\":${p(f.shoulder)},\"neck\":${p(f.neck)},\"head\":${p(f.head)},")
        sb.append("\"near\":[${p(f.nearHip)},${p(f.knee)},${p(f.ankle)},${p(f.toe)}],\"far\":[${p(f.farHip)},${p(f.knee2)},${p(f.ankle2)},${p(f.toe2)}],")
        sb.append("\"arm\":[${p(f.nearShoulder)},${p(f.elbow)},${p(f.wrist)}],\"arm2\":[${p(f.farShoulder)},${p(f.elbow2)},${p(f.wrist2)}],\"shl\":[${p(f.nearShoulder)},${p(f.farShoulder)}],\"hpl\":[${p(f.nearHip)},${p(f.farHip)}]}")
    }
    sb.append("]"); println(sb)
}
