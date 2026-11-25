package ru.mudrya.yoga.engine

import org.junit.jupiter.api.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull

class VideoTwinsTest {
    @Test
    fun `own clip, mirrored pair and twin pose`() {
        assertEquals(ClipRef("lb_B308", mirrored = false), VideoSlots.resolve("lb_B308", setOf("lb_B308")))
        assertEquals(ClipRef("lb_B308", mirrored = true), VideoSlots.resolve("lb_B308_m", setOf("lb_B308")))
        // библиотечная собака берёт ролик собаки атласа
        assertEquals(ClipRef("at_edog", mirrored = false), VideoSlots.resolve("lb_B270", setOf("at_edog")))
        assertNull(VideoSlots.resolve("lb_B270", setOf("at_tad")))
    }
}
