package ru.mudrya.yoga.engine

import ru.mudrya.yoga.model.Asana
import ru.mudrya.yoga.model.Block
import ru.mudrya.yoga.model.BlockRef
import ru.mudrya.yoga.model.Breath
import ru.mudrya.yoga.model.Catalog
import ru.mudrya.yoga.model.Joint
import ru.mudrya.yoga.model.Pose
import ru.mudrya.yoga.model.SequenceDef
import ru.mudrya.yoga.model.Side
import ru.mudrya.yoga.model.Slot
import ru.mudrya.yoga.model.Step
import ru.mudrya.yoga.model.Support

/** Маленький каталог по образцу Сурья Намаскар — для тестов движка. */
object Fixtures {
    val P = Pose(90.0, 90.0, 270.0, 270.0, 270.0, 270.0, 0.0)
    private val ALL = setOf(Support.FISTS, Support.PALMS, Support.FINGERS)

    val asanas: Map<String, Asana> = listOf(
        Asana("tadasana", "Основная стойка", "Mountain", P),
        Asana("arms_up", "Вытянутый полупрогиб", "Arms up", P, load = mapOf(Joint.LUMBAR to 1)),
        Asana("uttanasana", "Закрытый вытянутый наклон", "Forward fold", P, load = mapOf(Joint.LUMBAR to 1)),
        Asana("plank", "Наклонный упор", "Plank", P, supports = ALL, load = mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 2)),
        Asana("chaturanga", "Горизонтальный упор", "Chaturanga", P, supports = ALL, load = mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 3)),
        Asana(
            "up_dog", "Упор-прогиб", "Upward dog", P, supports = ALL,
            load = mapOf(Joint.WRISTS to 2, Joint.LUMBAR to 3), saferAlternative = "sphinx",
        ),
        Asana("sphinx", "Сфинкс", "Sphinx", P, load = mapOf(Joint.LUMBAR to 1)),
        Asana("down_dog", "Глубокий упор-горка", "Downward dog", P, supports = setOf(Support.PALMS, Support.FISTS), load = mapOf(Joint.WRISTS to 3, Joint.SHOULDERS to 2)),
        Asana("lunge", "Широкий шаг", "Lunge", P, load = mapOf(Joint.KNEES to 2)),
        Asana("crescent", "Полумесяц с широким шагом", "Crescent", P, load = mapOf(Joint.KNEES to 2, Joint.LUMBAR to 2)),
        Asana("crow", "Стойка-сборка", "Crow", P, supports = setOf(Support.PALMS), load = mapOf(Joint.WRISTS to 3)),
        Asana("plow", "Плуг", "Plow", P, inversion = true, load = mapOf(Joint.NECK to 3), saferAlternative = "bridge"),
        Asana("bridge", "Мост", "Bridge", P, load = mapOf(Joint.LUMBAR to 2)),
    ).associateBy { it.id }

    private fun steps(vararg ids: String) = ids.map { Step(it) }

    val blocks: Map<String, Block> = listOf(
        Block("entry", steps("tadasana", "arms_up", "uttanasana", "plank")),
        Block("vinyasa", steps("chaturanga", "up_dog", "down_dog")),
        Block("ring", steps("lunge", "crescent", "down_dog")),
        Block("exit", listOf(Step("uttanasana"), Step("arms_up", enter = listOf(Breath.INHALE)), Step("tadasana"))),
        Block("crow_slot", steps("crow", "plank")),
        Block("plow_slot", steps("plow", "down_dog")),
    ).associateBy { it.id }

    val surya = SequenceDef(
        id = "surya",
        nameRu = "Сурья Намаскар",
        nameEn = "Surya Namaskar",
        items = listOf(
            BlockRef("entry"),
            BlockRef("vinyasa"),
            BlockRef("ring", Side.RIGHT),
            BlockRef("vinyasa"),
            BlockRef("ring", Side.LEFT),
            BlockRef("vinyasa"),
            BlockRef("exit"),
        ),
        slots = listOf(
            Slot("crow", "crow_slot", afterItemIndex = 1),
            Slot("plow", "plow_slot", afterItemIndex = 3),
            Slot("advanced", "crow_slot", afterItemIndex = 5, minLevel = 1),
        ),
        entryBlockId = "entry",
        exitBlockId = "exit",
    )

    val alternatives: Map<String, String> =
        asanas.values.mapNotNull { a -> a.saferAlternative?.let { a.id to it } }.toMap()

    val catalog: Catalog = Catalog(
        asanas = asanas,
        blocks = blocks,
        transitions = GraphBuilder.build(blocks, listOf(surya), alternatives),
    )
}
