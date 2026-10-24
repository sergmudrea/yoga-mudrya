package ru.mudrya.yoga.catalog

import ru.mudrya.yoga.engine.Base
import ru.mudrya.yoga.model.Joint

// Сгенерировано tools/atlas/overrides_to_kotlin.py из load_overrides.json — не править руками.

data class LoadOverride(val load: Map<Joint, Int>, val inversion: Boolean, val base: Base? = null)

/** Нагрузки, выверенные вручную там, где геометрическое правило ошибается. */
object LoadOverrides {
    val map: Map<String, LoadOverride> = mapOf(
        // Колено к голове снизу: сгибание колена без нагрузки — K1
        "anticat_knee" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 1, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 1), false),
        // Аштанга намаскара: руки согнуты и держат часть веса, подбородок на полу
        "at_a8" to LoadOverride(mapOf(Joint.WRISTS to 1, Joint.SHOULDERS to 1, Joint.LUMBAR to 1, Joint.NECK to 1, Joint.KNEES to 1), false),
        // Лёжа, крестец и шея прижаты, тянем пальцы ног — растяжка задней поверхности, L3 ошибочно
        "at_angstr" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Полумесяц на колене: заднее колено на полу под весом + выпад — K2 (как kneel_backbend)
        "at_ardhach" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 2, Joint.NECK to 0, Joint.KNEES to 2), false),
        // Полумесяц на колене: заднее колено на полу под весом + выпад — K2 (как kneel_backbend)
        "at_ardhach_m" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 2, Joint.NECK to 0, Joint.KNEES to 2), false),
        // Полустойка на плечах / плуг: вес на плечах и шее — перевёрнутая (как hala)
        "at_ardhasarv" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 1, Joint.NECK to 3, Joint.KNEES to 0), true),
        // Ашва санчаланасана: колено на полу + глубокий выпад (K2), руки лишь касаются пола, лёгкий прогиб с взглядом вверх
        "at_ashwa" to LoadOverride(mapOf(Joint.WRISTS to 1, Joint.SHOULDERS to 0, Joint.LUMBAR to 1, Joint.NECK to 1, Joint.KNEES to 2), false),
        // Ашва санчаланасана: колено на полу + глубокий выпад (K2), руки лишь касаются пола, лёгкий прогиб с взглядом вверх
        "at_ashwa_m" to LoadOverride(mapOf(Joint.WRISTS to 1, Joint.SHOULDERS to 0, Joint.LUMBAR to 1, Joint.NECK to 1, Joint.KNEES to 2), false),
        // Наклон в баддха-падмасане — не баланс на руках
        "at_baddhafold" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 3), false, Base.STANDING),
        // Захват стоп из-за спины — S2
        "at_baddhapadma" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 3), false),
        // Захват стоп из-за спины — S2
        "at_baddhapadma_m" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 3), false),
        // Лёжа, ноги к груди — сгибание без нагрузки; L3 ошибочно
        "at_baddhaup" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false),
        // «Медвежий замок» (руки гомукхасаны) — S2; наклон — L1
        "at_bearbend" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false),
        // «Медвежий замок» (руки гомукхасаны) — S2; наклон — L1
        "at_bearbend_m" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false),
        // «Медвежий замок» (руки гомукхасаны) — S2; наклон — L1
        "at_bearfold" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false),
        // «Медвежий замок» (руки гомукхасаны) — S2; наклон — L1
        "at_bearfold_m" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Бабочка/сиддхасана — не лотос: вращение в колене умеренное, K2
        "at_bhadra" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 2), false),
        // Наклон в бабочке: грудь на полу — не баланс на руках
        "at_bhadrafold" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 2), false, Base.STANDING),
        // Бабочка/сиддхасана — не лотос: вращение в колене умеренное, K2
        "at_bhadraknees" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 2), false),
        // Бабочка с захватом стоп — K2 (не лотос)
        "at_bhadralock" to LoadOverride(mapOf(Joint.WRISTS to 1, Joint.SHOULDERS to 0, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 2), false),
        // Змеиный прогиб на прямых руках, торс вертикален, макушка назад — глубокий прогиб; не SEATED
        "at_bhuj" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 1, Joint.LUMBAR to 3, Joint.NECK to 1, Joint.KNEES to 0), false, Base.LYING),
        // Боковой наклон с вывернутым замком вверху — как side_crescent (L1), плечи на пределе
        "at_bok" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 1, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Боковой наклон с вывернутым замком вверху — как side_crescent (L1), плечи на пределе
        "at_bok_m" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 1, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Плечевой мост (сету бандха): прогиб L2, вес на плечах при согнутой шее — N2
        "at_bridge" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 1, Joint.LUMBAR to 2, Joint.NECK to 2, Joint.KNEES to 1), false),
        // Кошка-прогиб на четвереньках — мягкое разгибание, L1 (лечебная поза для спины)
        "at_cat" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 1, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 1), false),
        // Чатуранга/планка: плечи несут вес тела — S2 (как у chaturanga/plank)
        "at_chat" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 2, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Кольцо в выпаде: макушка к стопе — глубокий прогиб; рука из-за головы держит стопу — S2
        "at_cring1" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 3, Joint.NECK to 1, Joint.KNEES to 2), false),
        // Кольцо в выпаде: макушка к стопе — глубокий прогиб; рука из-за головы держит стопу — S2
        "at_cring2" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 3, Joint.NECK to 1, Joint.KNEES to 2), false),
        // Верхний верблюд: рука вывернута в плече, локоть вверх — S2
        "at_cverb1" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 2, Joint.LUMBAR to 3, Joint.NECK to 0, Joint.KNEES to 1), false),
        // Верхний верблюд: рука вывернута в плече, локоть вверх — S2
        "at_cverb2" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 2, Joint.LUMBAR to 3, Joint.NECK to 0, Joint.KNEES to 1), false),
        // Сидя на пятках/поза ребёнка: глубокое сгибание коленей под весом — K2; руки не нагружены
        "at_darnika" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 2), false),
        // Глубокое плечевое вытягивание с опорой на руки — S2
        "at_deepsh" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 2, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 1), false),
        // Стойка-полусборка: баланс на руках, поясница не нагружена
        "at_ekabaka" to LoadOverride(mapOf(Joint.WRISTS to 3, Joint.SHOULDERS to 3, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Односторонний верблюд из кобры: одна рука держит верх тела, другая вывернута — W2 S2
        "at_ekoshtra" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 2, Joint.LUMBAR to 3, Joint.NECK to 1, Joint.KNEES to 1), false, Base.LYING),
        // Обе руки тянут стопу ко лбу — глубокий прогиб, плечи вывернуты
        "at_ekoshtra2" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 3, Joint.NECK to 1, Joint.KNEES to 1), false),
        // Односторонний верблюд с замкнутым полулотосом: рука вывернута
        "at_ekoshtralotus" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 3, Joint.NECK to 1, Joint.KNEES to 2), false),
        // Односторонний скорпион: лоб на предплечье под весом, таз поднят, прогиб
        "at_ekscorp" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 2, Joint.NECK to 2, Joint.KNEES to 1), false),
        // Скорпион с поворотом: плечи и верх груди на полу — не баланс на руках
        "at_ekscorptw" to LoadOverride(mapOf(Joint.WRISTS to 1, Joint.SHOULDERS to 2, Joint.LUMBAR to 3, Joint.NECK to 1, Joint.KNEES to 0), false, Base.STANDING),
        // Подбородок на кистях при поднятом тазе — шея в разгибании под весом (сейчас ошибочно служит заменой планки по запястьям)
        "at_ekscorpup" to LoadOverride(mapOf(Joint.WRISTS to 1, Joint.SHOULDERS to 1, Joint.LUMBAR to 1, Joint.NECK to 2, Joint.KNEES to 0), false),
        // Мост с опорой на лоб: глубокий прогиб, вес на голове — «требует большого внимания к шее»; было всё 0
        "at_fbridge" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 3, Joint.NECK to 3, Joint.KNEES to 0), false),
        // Сфинкс в лотосе — лотос K3
        "at_fishsphinx" to LoadOverride(mapOf(Joint.WRISTS to 1, Joint.SHOULDERS to 0, Joint.LUMBAR to 2, Joint.NECK to 0, Joint.KNEES to 3), false),
        // Открытый наклон стоя, пальцы едва касаются пола — не баланс на руках
        "at_foldreach" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false, Base.STANDING),
        // Лёжа, ноги к груди — сгибание без нагрузки; L3 ошибочно
        "at_freeup" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Лягушка с наклоном: торс на полу — не баланс на руках
        "at_frogfold" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 3), false, Base.STANDING),
        // Скорпион на предплечьях: вес на предплечьях/плечах (не на голове), глубокий прогиб, голова поднята
        "at_fscorp" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 3, Joint.LUMBAR to 3, Joint.NECK to 2, Joint.KNEES to 0), true),
        // Скорпион на предплечьях: вес на предплечьях/плечах (не на голове), глубокий прогиб, голова поднята
        "at_fscorp1" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 3, Joint.LUMBAR to 3, Joint.NECK to 2, Joint.KNEES to 0), true),
        // Скорпион на предплечьях: вес на предплечьях/плечах (не на голове), глубокий прогиб, голова поднята
        "at_fscorpext" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 3, Joint.LUMBAR to 3, Joint.NECK to 2, Joint.KNEES to 0), true),
        // Скорпион на предплечьях с лотосом: плечи, предельный прогиб, лотос
        "at_fscorplotus" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 3, Joint.LUMBAR to 3, Joint.NECK to 2, Joint.KNEES to 3), true),
        // Полный прогиб стоя: макушка назад — явное разгибание шеи; руки в вывернутом замке назад — плечи. at_full = та же поза, было L2
        "at_full" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 1, Joint.LUMBAR to 3, Joint.NECK to 2, Joint.KNEES to 0), false),
        // Мост на предплечьях: плечи в полном сгибании под весом — S3, не STANDING
        "at_fwheel" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 3, Joint.LUMBAR to 3, Joint.NECK to 1, Joint.KNEES to 0), false),
        // Мост на предплечьях: плечи в полном сгибании под весом — S3, не STANDING
        "at_fwheeltight" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 3, Joint.LUMBAR to 3, Joint.NECK to 1, Joint.KNEES to 0), false),
        // Мост на предплечьях: плечи в полном сгибании под весом — S3, не STANDING
        "at_fwheelup" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 3, Joint.LUMBAR to 3, Joint.NECK to 1, Joint.KNEES to 0), false),
        // Баланс на руках со скрещёнными голенями/полулотосом
        "at_galava" to LoadOverride(mapOf(Joint.WRISTS to 3, Joint.SHOULDERS to 3, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 2), false),
        // Переход: голова на полу, лотос на руке
        "at_galavahead" to LoadOverride(mapOf(Joint.WRISTS to 3, Joint.SHOULDERS to 3, Joint.LUMBAR to 0, Joint.NECK to 2, Joint.KNEES to 3), false),
        // Гарудасана: обвитые руки и ноги, полуприсед с закруткой колена
        "at_garuda" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 1, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 1), false),
        // Гарудасана: обвитые руки и ноги, полуприсед с закруткой колена
        "at_garuda_m" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 1, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 1), false),
        // Обвитые руки вытянуты вверх — S1
        "at_garudaup" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 1, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Обвитые руки вытянуты вверх — S1
        "at_garudaup_m" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 1, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Полуприсед со спиной горизонтально: колени под весом в сгибании, поясница держит наклон
        "at_gturtle" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 2), false),
        // Полуприсед со спиной горизонтально: колени под весом в сгибании, поясница держит наклон
        "at_gturtlefw" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 2), false),
        // Замкнутый плуг: ноги за головой — вес на плечах и шее (как uthala); перевёрнутая
        "at_halabaddha" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 1, Joint.NECK to 3, Joint.KNEES to 0), true),
        // Полумост на затылке: шея выгнута и пола не касается, опора на затылок; колени без веса — K1
        "at_halfbridge" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 2, Joint.NECK to 2, Joint.KNEES to 1), false),
        // Лёжа, ноги к животу, руки в плечевом вытягивании; запястья без опоры
        "at_halfinv" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 1, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Стойка на руках с ногами горизонтально — поясница не L3
        "at_handL" to LoadOverride(mapOf(Joint.WRISTS to 3, Joint.SHOULDERS to 3, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Стойка на руках с лотосом — лотос K3
        "at_handlotus" to LoadOverride(mapOf(Joint.WRISTS to 3, Joint.SHOULDERS to 3, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 3), false),
        // Стойка на руках с лотосом — лотос K3
        "at_handlotus_m" to LoadOverride(mapOf(Joint.WRISTS to 3, Joint.SHOULDERS to 3, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 3), false),
        // Скорпион в стойке на руках — глубокий прогиб («кольцо от носков до макушки»)
        "at_handscorp" to LoadOverride(mapOf(Joint.WRISTS to 3, Joint.SHOULDERS to 3, Joint.LUMBAR to 3, Joint.NECK to 1, Joint.KNEES to 0), false),
        // Скорпион в стойке на руках — глубокий прогиб («кольцо от носков до макушки»)
        "at_handscorp1" to LoadOverride(mapOf(Joint.WRISTS to 3, Joint.SHOULDERS to 3, Joint.LUMBAR to 3, Joint.NECK to 1, Joint.KNEES to 0), false),
        // Шпагат с прогибом: умеренное разгибание поясницы (тянет задняя нога) — L2, не L3
        "at_hanu" to LoadOverride(mapOf(Joint.WRISTS to 1, Joint.SHOULDERS to 0, Joint.LUMBAR to 2, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Шпагат с прогибом: умеренное разгибание поясницы (тянет задняя нога) — L2, не L3
        "at_hanu_m" to LoadOverride(mapOf(Joint.WRISTS to 1, Joint.SHOULDERS to 0, Joint.LUMBAR to 2, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Кольцо в шпагате: рука вывернута, локоть вверх — S2
        "at_hanuring" to LoadOverride(mapOf(Joint.WRISTS to 1, Joint.SHOULDERS to 2, Joint.LUMBAR to 3, Joint.NECK to 1, Joint.KNEES to 1), false),
        // Мост на голове — глубокий прогиб (L0/L2 ошибочны; зеркальные варианты расходились)
        "at_hbridge" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 3, Joint.NECK to 3, Joint.KNEES to 0), true),
        // Мост на голове — глубокий прогиб (L0/L2 ошибочны; зеркальные варианты расходились)
        "at_hbridgek" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 3, Joint.NECK to 3, Joint.KNEES to 0), true),
        // Мост на голове — глубокий прогиб (L0/L2 ошибочны; зеркальные варианты расходились)
        "at_hbridgek_m" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 3, Joint.NECK to 3, Joint.KNEES to 0), true),
        // Мост на голове — глубокий прогиб (L0/L2 ошибочны; зеркальные варианты расходились)
        "at_hbridgeup_m" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 3, Joint.NECK to 3, Joint.KNEES to 0), true),
        // Стойка на голове: плечи несут вес (S2)
        "at_hdanda" to LoadOverride(mapOf(Joint.WRISTS to 1, Joint.SHOULDERS to 2, Joint.LUMBAR to 3, Joint.NECK to 3, Joint.KNEES to 0), true),
        // «Ежовый» наклон с плечевым вытягиванием: принудительное сгибание, голова между ногами
        "at_hedgeplech" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 2, Joint.NECK to 1, Joint.KNEES to 0), false),
        // Стойка на голове на предплечьях — плечи несут значительную часть веса (S2)
        "at_hgoraksha" to LoadOverride(mapOf(Joint.WRISTS to 1, Joint.SHOULDERS to 2, Joint.LUMBAR to 0, Joint.NECK to 3, Joint.KNEES to 0), true),
        // Стойка на голове на предплечьях — плечи несут значительную часть веса (S2)
        "at_hkona" to LoadOverride(mapOf(Joint.WRISTS to 1, Joint.SHOULDERS to 2, Joint.LUMBAR to 0, Joint.NECK to 3, Joint.KNEES to 0), true),
        // Захват стопы из-за спины — S2; поясница не нагружена
        "at_hlbind" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 2), false),
        // Наклон с замкнутым полулотосом
        "at_hlbindfold" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 2), false),
        // Наклон сидя с полулотосом: L1, полулотос K2
        "at_hlfold" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 2), false),
        // Сидя в полулотосе, прямой позвоночник — поясница не нагружена
        "at_hlseat" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 2), false),
        // Полускручивание сидя, позвоночник прямой
        "at_hltwist" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 1, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 2), false),
        // Горизонтальный наклон стоя = horiz_fold (L2); сейчас служит «заменой» horiz_fold по пояснице, хотя это та же поза
        "at_hnak" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 2, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Стойка всадника, ладони между лопаток (обратное намасте) — S2; колени согнуты под весом
        "at_horse" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 1), false),
        // Стойка всадника с прогибом назад (подготовка к мосту) — L2
        "at_horse2" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 2, Joint.NECK to 0, Joint.KNEES to 1), false),
        // Стойка всадника с прогибом назад (подготовка к мосту) — L2
        "at_horse3" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 2, Joint.NECK to 0, Joint.KNEES to 1), false),
        // Подготовка к стойке на голове: голова на полу под частью веса, опора на предплечья; запястья не нагружены
        "at_hprep" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 0, Joint.NECK to 2, Joint.KNEES to 0), false),
        // Стойка на голове: плечи несут вес (S2)
        "at_hring" to LoadOverride(mapOf(Joint.WRISTS to 1, Joint.SHOULDERS to 2, Joint.LUMBAR to 3, Joint.NECK to 3, Joint.KNEES to 0), true),
        // Железный мост с опорой на затылок — вес тела на голове/шее
        "at_ironocc" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 2, Joint.NECK to 3, Joint.KNEES to 0), false),
        // Железный мост на плечах и пятках: вес на плечах/шее
        "at_ironsh" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 1, Joint.LUMBAR to 3, Joint.NECK to 2, Joint.KNEES to 0), false),
        // Скручивание лёжа с прямыми ногами на весу — скручивание под нагрузкой
        "at_jathara" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 2, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Скручивание лёжа с прямыми ногами на весу — скручивание под нагрузкой
        "at_jathara_m" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 2, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Коленно-кистевой мост: прямые руки, «запястья сильно растягиваются» под весом
        "at_kaphand" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 2, Joint.LUMBAR to 3, Joint.NECK to 1, Joint.KNEES to 1), false),
        // Капотасана: голова на полу в разгибании, локти на полу — плечи в полном сгибании
        "at_kapota" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 3, Joint.NECK to 2, Joint.KNEES to 1), false),
        // Плуг/карнапида с лотосом — лотос K3
        "at_karnalotus" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 2, Joint.NECK to 3, Joint.KNEES to 3), true),
        // Плуг/карнапида с лотосом — лотос K3
        "at_karnalotus_m" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 2, Joint.NECK to 3, Joint.KNEES to 3), true),
        // Прогиб назад стоя на коленях с подъёмом таза — L2
        "at_kneelbend" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 2, Joint.NECK to 0, Joint.KNEES to 1), false),
        // Висячий мост: перекат на колени в лотосе, расслабленный прогиб
        "at_kokila" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 1, Joint.LUMBAR to 2, Joint.NECK to 1, Joint.KNEES to 3), false),
        // Петух: баланс на руках с лотосом; поясница не нагружена; не SEATED
        "at_kukelb" to LoadOverride(mapOf(Joint.WRISTS to 3, Joint.SHOULDERS to 3, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 3), false),
        // Петух: баланс на руках с лотосом; поясница не нагружена; не SEATED
        "at_kukkuta" to LoadOverride(mapOf(Joint.WRISTS to 3, Joint.SHOULDERS to 3, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 3), false, Base.ARM_BALANCE),
        // Лотос к животу в СТОЙКЕ НА ГОЛОВЕ — вес на голове, перевёрнутая; лотос
        "at_kukprep" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 2, Joint.LUMBAR to 1, Joint.NECK to 3, Joint.KNEES to 3), true, Base.HANDS_AND_FEET),
        // Кольцевой наклон стоя: голова и плечи между ногами — сильное сгибание, не упор на руки
        "at_kundala" to LoadOverride(mapOf(Joint.WRISTS to 1, Joint.SHOULDERS to 1, Joint.LUMBAR to 2, Joint.NECK to 1, Joint.KNEES to 0), false),
        // Черепаха: лежим грудью на полу, ноги на руках — не баланс на руках; глубокое сгибание под весом ног
        "at_kurma" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 1, Joint.LUMBAR to 2, Joint.NECK to 0, Joint.KNEES to 0), false, Base.STANDING),
        // Полумесяц с коленом на полу: колено на полу + переднее колено (как kneel_backbend)
        "at_lcres3" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 3, Joint.NECK to 0, Joint.KNEES to 2), false),
        // Подъём прямых ног на 30° лёжа: максимальная тяга подвздошно-поясничной на поясницу
        "at_legs30" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 2, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Ноги на 60° — нагрузка на поясницу меньше, но есть
        "at_legs60" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Широкий шаг (выпад) без прогиба, торс вертикален: L1; переднее колено под весом — K2 (выровнено)
        "at_letstep" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 2), false),
        // Лоласана: зависание на прямых руках с поджатыми ногами — баланс на руках, поясница не нагружена (не KNEELING)
        "at_lola" to LoadOverride(mapOf(Joint.WRISTS to 3, Joint.SHOULDERS to 3, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 0), false, Base.ARM_BALANCE),
        // Лёжа на животе в лотосе — нагрузка на колени лотосная
        "at_lotusrelax" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 3), false),
        // Гарбха пиндасана: баланс на ягодицах с лотосом — поясница не L3
        "at_lotusturtle" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 1, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 3), false),
        // Подбородок на полу при поднятом тазе — шея в разгибании под весом; руки в упоре
        "at_lowstr" to LoadOverride(mapOf(Joint.WRISTS to 1, Joint.SHOULDERS to 1, Joint.LUMBAR to 0, Joint.NECK to 2, Joint.KNEES to 0), false),
        // Скручивание с головой/подбородком на полу и опорой на руку
        "at_lowtwist" to LoadOverride(mapOf(Joint.WRISTS to 1, Joint.SHOULDERS to 1, Joint.LUMBAR to 1, Joint.NECK to 1, Joint.KNEES to 0), false),
        // Скручивание с головой/подбородком на полу и опорой на руку
        "at_lowtwist_m" to LoadOverride(mapOf(Joint.WRISTS to 1, Joint.SHOULDERS to 1, Joint.LUMBAR to 1, Joint.NECK to 1, Joint.KNEES to 0), false),
        // Угол в упоре: весь вес тела на руках
        "at_lsit" to LoadOverride(mapOf(Joint.WRISTS to 3, Joint.SHOULDERS to 3, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 0), false, Base.ARM_BALANCE),
        // Широкий шаг (выпад) без прогиба, торс вертикален: L1; переднее колено под весом — K2 (выровнено)
        "at_lvdoh" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 2), false),
        // Рыба с опорой на лоб/макушку, спина выгнута до предела — вес на голове при разгибании шеи
        "at_matsya" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 3, Joint.NECK to 3, Joint.KNEES to 0), false),
        // Лотосовое скручивание на руках: таз висит над полом — вес на руках, предельное скручивание под весом, лотос; не SEATED
        "at_matsyendra" to LoadOverride(mapOf(Joint.WRISTS to 3, Joint.SHOULDERS to 3, Joint.LUMBAR to 3, Joint.NECK to 0, Joint.KNEES to 3), false, Base.ARM_BALANCE),
        // Павлин с полулотосом
        "at_mayuralotus" to LoadOverride(mapOf(Joint.WRISTS to 3, Joint.SHOULDERS to 3, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 2), false),
        // Руками упираемся в пол и поднимаем таз — запястья под весом
        "at_mula2" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 1, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 3), false),
        // Перевёрнутый открытый наклон: сильное сгибание, голова между ногами — L2, шея в сгибании
        "at_openinv" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 2, Joint.NECK to 1, Joint.KNEES to 0), false),
        // Бхуджапидасана: баланс на руках, поясница/шея не нагружены
        "at_padabhuja" to LoadOverride(mapOf(Joint.WRISTS to 3, Joint.SHOULDERS to 3, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Падахастасана: наклон стоя, ладони у стоп — не баланс на руках
        "at_padah" to LoadOverride(mapOf(Joint.WRISTS to 1, Joint.SHOULDERS to 0, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false, Base.STANDING),
        // Пада хастасана: стоим на ладонях (запястья в разгибании под весом стоп), наклон — не баланс на руках
        "at_padahasta" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 1, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false, Base.HANDS_AND_FEET),
        // Лотос, ладони позади таза
        "at_padmadhanu1" to LoadOverride(mapOf(Joint.WRISTS to 1, Joint.SHOULDERS to 1, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 3), false),
        // Лотосовый лук: таз поднят с опорой на руки, голова назад; лотос
        "at_padmadhanu2" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 2, Joint.LUMBAR to 2, Joint.NECK to 1, Joint.KNEES to 3), false, Base.HANDS_AND_FEET),
        // Наклон в лотосе с плечевым вытягиванием/ладонями между лопаток
        "at_padmafold" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 3), false),
        // Наклон в лотосе, лоб на полу — не баланс на руках
        "at_padmafold2" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 3), false, Base.STANDING),
        // Наклон в лотосе с плечевым вытягиванием/ладонями между лопаток
        "at_padmafoldnam" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 3), false),
        // Плуг/карнапида с лотосом — лотос K3
        "at_padmahala" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 2, Joint.NECK to 3, Joint.KNEES to 3), true),
        // Вращение головы с максимальной амплитудой — шея
        "at_padmaneck" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 0, Joint.NECK to 1, Joint.KNEES to 3), false),
        // Пассивное скручивание лёжа — лёгкая нагрузка на поясницу
        "at_parivr" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Пассивное скручивание лёжа — лёгкая нагрузка на поясницу
        "at_parivr_m" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Боковой петух с лотосом — лотос K3
        "at_parshvak" to LoadOverride(mapOf(Joint.WRISTS to 3, Joint.SHOULDERS to 3, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 3), false),
        // Прогиб из супта-вирасаны: голова и таз на полу, спина и шея выгнуты — не баланс на руках
        "at_paryarch" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 3, Joint.NECK to 2, Joint.KNEES to 2), false, Base.STANDING),
        // Наклон сидя — сгибание поясницы, L1
        "at_pasch" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Наклон сидя — сгибание поясницы, L1
        "at_paschprep" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Наклон сидя с плечевым вытягиванием/ладонями между лопаток — S2
        "at_paschsh" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Скручивание в наклоне сидя
        "at_paschtw" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 1, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Ноги за головой с опорой на руки: предельное сгибание позвоночника, голени давят на шею
        "at_pashini" to LoadOverride(mapOf(Joint.WRISTS to 3, Joint.SHOULDERS to 3, Joint.LUMBAR to 3, Joint.NECK to 2, Joint.KNEES to 0), false),
        // Ноги за головой с опорой на руки: предельное сгибание позвоночника, голени давят на шею
        "at_pashini2" to LoadOverride(mapOf(Joint.WRISTS to 3, Joint.SHOULDERS to 3, Joint.LUMBAR to 3, Joint.NECK to 2, Joint.KNEES to 0), false),
        // Стойка на предплечьях: вес на плечах/предплечьях, голова не нагружена
        "at_pincha" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 3, Joint.LUMBAR to 0, Joint.NECK to 1, Joint.KNEES to 0), true),
        // Чатуранга/планка: плечи несут вес тела — S2 (как у chaturanga/plank)
        "at_plank" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 2, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Наклон стоя с замком за спиной: нагрузка в плечах (S2), поясница — обычный наклон L1
        "at_plech" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Наклон с ногой вверх и вывернутым замком — S2
        "at_plechup" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Плугообразные махи: ноги за голову до пола 10–12 раз — динамическая нагрузка на шею и сгибание поясницы; перевёрнутая
        "at_plough" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 2, Joint.NECK to 2, Joint.KNEES to 0), true),
        // Полупрогиб в наклоне: ладони лишь подпирают (не упор всем весом), прогиб спины, взгляд в потолок — сильное разгибание шеи
        "at_pnak" to LoadOverride(mapOf(Joint.WRISTS to 1, Joint.SHOULDERS to 1, Joint.LUMBAR to 2, Joint.NECK to 2, Joint.KNEES to 0), false),
        // Грудной полупрогиб на носках — как arms_up (L1)
        "at_polu" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Наклон на одной ноге с поворотом таза, руки на полу — не баланс на руках
        "at_povtaz" to LoadOverride(mapOf(Joint.WRISTS to 1, Joint.SHOULDERS to 1, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false, Base.STANDING),
        // Полупрогиб в горизонтальном упоре: вес на согнутых руках + грудной прогиб; выровнено между дубликатами
        "at_ppchat" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 2, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Широкий наклон с опорой макушкой в пол: вес частично на голове — N2; поясница — наклон L1
        "at_prasarita" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 1, Joint.NECK to 2, Joint.KNEES to 0), false),
        // Обратный упор: плечи в разгибании под весом тела — S2
        "at_purvo" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 2, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Торс лежит на переднем бедре — поясница почти не нагружена
        "at_quad" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 2), false),
        // Растягивание бедра с прогибом назад — L2
        "at_quadbend" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 2, Joint.NECK to 0, Joint.KNEES to 2), false),
        // Королевская кобра: прямые руки, лоб к пальцам ног — предельный прогиб с запрокинутой головой
        "at_rajasarp" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 1, Joint.LUMBAR to 3, Joint.NECK to 2, Joint.KNEES to 1), false, Base.LYING),
        // Обратный упор: плечи в разгибании под весом тела — S2
        "at_revtable" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 2, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Обратный полуупор: S2
        "at_revtablehl" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 2, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 2), false),
        // Обратный упор: плечи в разгибании под весом тела — S2
        "at_revtableup" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 2, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Кольцо в выпаде: макушка к стопе — глубокий прогиб; рука из-за головы держит стопу — S2
        "at_ring1" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 3, Joint.NECK to 1, Joint.KNEES to 2), false),
        // Кольцо в выпаде: макушка к стопе — глубокий прогиб; рука из-за головы держит стопу — S2
        "at_ring2" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 3, Joint.NECK to 1, Joint.KNEES to 2), false),
        // Предельный змеиный прогиб: толчок руками, голова назад-вверх — сильное разгибание шеи
        "at_sarpfull" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 1, Joint.LUMBAR to 3, Joint.NECK to 2, Joint.KNEES to 0), false, Base.LYING),
        // Перевёрнутая поза с лотосом — лотос K3
        "at_sarvlotus" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 0, Joint.NECK to 3, Joint.KNEES to 3), true),
        // Полустойка на плечах / плуг: вес на плечах и шее — перевёрнутая (как hala)
        "at_sarvone" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 1, Joint.NECK to 3, Joint.KNEES to 0), true),
        // Полустойка на плечах / плуг: вес на плечах и шее — перевёрнутая (как hala)
        "at_sarvone_m" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 1, Joint.NECK to 3, Joint.KNEES to 0), true),
        // Полустойка на плечах с согнутой ногой — та же нагрузка на шею, что у at_sarvone; перевёрнутая
        "at_sarvonebent" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 1, Joint.NECK to 3, Joint.KNEES to 1), true),
        // Полустойка на плечах с согнутой ногой — та же нагрузка на шею, что у at_sarvone; перевёрнутая
        "at_sarvonebent_m" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 1, Joint.NECK to 3, Joint.KNEES to 1), true),
        // Боковой полумост из стойки на плечах с лотосом: прогиб в пояснице, лотос
        "at_sblotus" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 2, Joint.NECK to 3, Joint.KNEES to 3), true),
        // Стойка на голове с лотосом: плечи S2, лотос K3
        "at_shirlotus" to LoadOverride(mapOf(Joint.WRISTS to 1, Joint.SHOULDERS to 2, Joint.LUMBAR to 0, Joint.NECK to 3, Joint.KNEES to 3), true),
        // Стойка на голове с лотосом: плечи S2, лотос K3
        "at_shirlotus_m" to LoadOverride(mapOf(Joint.WRISTS to 1, Joint.SHOULDERS to 2, Joint.LUMBAR to 0, Joint.NECK to 3, Joint.KNEES to 3), true),
        // Наклон в стойке на голове с лотосом
        "at_shirlotusfold" to LoadOverride(mapOf(Joint.WRISTS to 1, Joint.SHOULDERS to 2, Joint.LUMBAR to 2, Joint.NECK to 3, Joint.KNEES to 3), true),
        // Стойка на голове на предплечьях — плечи несут значительную часть веса (S2)
        "at_shirsha" to LoadOverride(mapOf(Joint.WRISTS to 1, Joint.SHOULDERS to 2, Joint.LUMBAR to 0, Joint.NECK to 3, Joint.KNEES to 0), true),
        // Стойка на голове: плечи S2
        "at_shirsplit" to LoadOverride(mapOf(Joint.WRISTS to 1, Joint.SHOULDERS to 2, Joint.LUMBAR to 1, Joint.NECK to 3, Joint.KNEES to 0), true),
        // Сидя на пятках/поза ребёнка: глубокое сгибание коленей под весом — K2; руки не нагружены
        "at_shishu" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 2), false),
        // Бабочка/сиддхасана — не лотос: вращение в колене умеренное, K2
        "at_siddha" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 2), false),
        // Лев: прямые руки, тело провисает между плечами и коленями в лотосе — не баланс на руках
        "at_simha" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 1, Joint.LUMBAR to 2, Joint.NECK to 1, Joint.KNEES to 3), false, Base.HANDS_AND_FEET),
        // Скручивание в выпаде без веса на позвоночнике — L2
        "at_skrut" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 2, Joint.NECK to 0, Joint.KNEES to 2), false),
        // Сфинкс: опора на предплечья — запястья не нагружены
        "at_sphinx" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 2, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Сфинкс: опора на предплечья — запястья не нагружены
        "at_sphinxleg" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 2, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Паук: баланс на руках, поясница не нагружена
        "at_spider" to LoadOverride(mapOf(Joint.WRISTS to 3, Joint.SHOULDERS to 3, Joint.LUMBAR to 0, Joint.NECK to 1, Joint.KNEES to 0), false),
        // Прогиб стоя, ладони между лопаток, голова назад
        "at_standback" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 2, Joint.NECK to 1, Joint.KNEES to 0), false),
        // Прогиб стоя до горизонтали грудины — глубокий прогиб
        "at_standback2" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 3, Joint.NECK to 1, Joint.KNEES to 0), false),
        // Титтибхасана: баланс на руках, сгибание без веса на пояснице
        "at_tittibha" to LoadOverride(mapOf(Joint.WRISTS to 3, Joint.SHOULDERS to 3, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Толасана: лотос на весу на ладонях — весь вес на руках, лотос
        "at_tola" to LoadOverride(mapOf(Joint.WRISTS to 3, Joint.SHOULDERS to 3, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 3), false, Base.ARM_BALANCE),
        // Угол в упоре: весь вес тела на руках
        "at_tolang" to LoadOverride(mapOf(Joint.WRISTS to 3, Joint.SHOULDERS to 3, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 0), false, Base.ARM_BALANCE),
        // Руки вывернуты в плечах под весом — S2
        "at_triple" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 2, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 2), false),
        // Стойка на голове с опорой на ладони — вес на макушке; перевёрнутая (было N0, не INV)
        "at_tripod" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 2, Joint.LUMBAR to 0, Joint.NECK to 3, Joint.KNEES to 0), true, Base.HANDS_AND_FEET),
        // Стойка на голове с лотосом — вес на макушке; лотос
        "at_tripodlotus" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 2, Joint.LUMBAR to 0, Joint.NECK to 3, Joint.KNEES to 3), true, Base.HANDS_AND_FEET),
        // Подготовка к стойке на голове с ладонями: голова на полу, стопы на полу — не баланс на руках
        "at_tripprep" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 2, Joint.LUMBAR to 0, Joint.NECK to 2, Joint.KNEES to 0), false, Base.HANDS_AND_FEET),
        // Чатуранга/планка: плечи несут вес тела — S2 (как у chaturanga/plank)
        "at_uchat" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 2, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 0), false),
        // «Ежовый» наклон сидя: принудительное скругление спины, лоб к пупку; не баланс на руках
        "at_ugra" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 1, Joint.LUMBAR to 2, Joint.NECK to 1, Joint.KNEES to 0), false, Base.STANDING),
        // Подъём с прогибом, спина напряжена до предела, голова назад
        "at_upavfix" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 1, Joint.LUMBAR to 2, Joint.NECK to 1, Joint.KNEES to 0), false),
        // Наклон сидя — сгибание поясницы, L1
        "at_upavfold" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Наклон сидя с плечевым вытягиванием/ладонями между лопаток — S2
        "at_upavnam" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Наклон сидя с плечевым вытягиванием/ладонями между лопаток — S2
        "at_upavsh" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Наклон сидя — сгибание поясницы, L1
        "at_upavside" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Наклон сидя — сгибание поясницы, L1
        "at_upavside_m" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Наклон сидя — сгибание поясницы, L1
        "at_upavup" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Упор-прогиб на прямых руках (как updog), не SEATED/STANDING
        "at_updog" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 1, Joint.LUMBAR to 2, Joint.NECK to 0, Joint.KNEES to 0), false, Base.LYING),
        // Упор-прогиб на прямых руках (как updog), не SEATED/STANDING
        "at_updogtoes" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 1, Joint.LUMBAR to 2, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Вертикальный шпагат стоя: одна рука держит лодыжку — не баланс на руках
        "at_urdhvaeka" to LoadOverride(mapOf(Joint.WRISTS to 1, Joint.SHOULDERS to 1, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false, Base.STANDING),
        // Полустойка на плечах / плуг: вес на плечах и шее — перевёрнутая (как hala)
        "at_urdhvahala" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 1, Joint.NECK to 3, Joint.KNEES to 0), true),
        // Скользящий упор-прогиб: таз провисает, позвоночник в разгибании — L2; at_uslide: опора на прямые руки, не SEATED
        "at_uslide" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 1, Joint.LUMBAR to 2, Joint.NECK to 0, Joint.KNEES to 0), false, Base.LYING),
        // Уштрасана (верблюд/лук из вирасаны): глубокий прогиб — L3
        "at_ustra" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 1, Joint.LUMBAR to 3, Joint.NECK to 0, Joint.KNEES to 1), false),
        // Стул: бёдра горизонтальны — колени несут вес в глубоком сгибании
        "at_utkata" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 2), false),
        // Стул: бёдра горизонтальны — колени несут вес в глубоком сгибании
        "at_utkatapull" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 2), false),
        // Стул: бёдра горизонтальны — колени несут вес в глубоком сгибании
        "at_utkatatoe" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 2), false),
        // Уттанасана: пальцы лишь давят в пол, вес на ногах — запястья/плечи не несут вес тела
        "at_uttan" to LoadOverride(mapOf(Joint.WRISTS to 1, Joint.SHOULDERS to 1, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Верхний верблюд: рука вывернута в плече, локоть вверх — S2
        "at_verb1" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 2, Joint.LUMBAR to 3, Joint.NECK to 0, Joint.KNEES to 1), false),
        // Верхний верблюд: рука вывернута в плече, локоть вверх — S2
        "at_verb2" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 2, Joint.LUMBAR to 3, Joint.NECK to 0, Joint.KNEES to 1), false),
        // Перевёрнутая поза с лотосом — лотос K3
        "at_viplotus" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 0, Joint.NECK to 3, Joint.KNEES to 3), true),
        // Вирасана с наклоном — колени в вирасане (K2), не STANDING
        "at_virafold" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 2), false),
        // «Ежовый» наклон в вирасане: скругление спины, колени в вирасане; не баланс на руках
        "at_virahedge" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 1, Joint.NECK to 1, Joint.KNEES to 2), false, Base.STANDING),
        // Вирасана, вывернутый замок за спиной поднят высоко — S2
        "at_virash" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 2), false),
        // Перекат на колени в лотосе, грудь на полу, захват стоп из-за спины
        "at_vmatsya1" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 1, Joint.NECK to 1, Joint.KNEES to 3), false),
        // Перевёрнутая рыба с двойным лотосом — лотос K3
        "at_vmatsya2" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 2, Joint.NECK to 1, Joint.KNEES to 3), false),
        // Подбородок на полу, ладони между лопаток — лотос
        "at_vmatsya3" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 3), false),
        // Прогиб в лотосе, ладони между лопаток
        "at_vmatsya4" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 2, Joint.NECK to 1, Joint.KNEES to 3), false),
        // Захват голеней, прогиб до предела в лотосе
        "at_vmatsya5" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 3, Joint.NECK to 1, Joint.KNEES to 3), false),
        // Вытянутый сфинкс на прямых руках — вес верха тела на запястьях
        "at_vsphinx" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 1, Joint.LUMBAR to 3, Joint.NECK to 0, Joint.KNEES to 0), false, Base.LYING),
        // Вытянутый сфинкс на прямых руках — вес верха тела на запястьях
        "at_vsphinxknee" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 1, Joint.LUMBAR to 3, Joint.NECK to 0, Joint.KNEES to 0), false, Base.LYING),
        // Широкая чатуранга: стопы на полу (не баланс на руках) — W2; плечи под боковыми перекатами — S3
        "at_wchat" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 3, Joint.LUMBAR to 0, Joint.NECK to 0, Joint.KNEES to 0), false, Base.HANDS_AND_FEET),
        // Мост на одной ноге — как at_wheel, руки в упоре; не STANDING
        "at_wheel1" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 2, Joint.LUMBAR to 3, Joint.NECK to 1, Joint.KNEES to 0), false),
        // Подъём в мост: стопы на полу, не баланс на руках
        "at_wheelprep" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 2, Joint.LUMBAR to 3, Joint.NECK to 1, Joint.KNEES to 0), false, Base.HANDS_AND_FEET),
        // Предельный прогиб на прямых руках с коленями на полу
        "at_wideknees" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 1, Joint.LUMBAR to 3, Joint.NECK to 1, Joint.KNEES to 2), false, Base.LYING),
        // Широкий упор-прогиб: прямые руки в упоре — запястья под весом
        "at_wideup" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 1, Joint.LUMBAR to 2, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Широкий упор-прогиб: прямые руки в упоре — запястья под весом
        "at_wideupturn" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 1, Joint.LUMBAR to 2, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Широкий упор-прогиб: прямые руки в упоре — запястья под весом
        "at_wideupturn_m" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 1, Joint.LUMBAR to 2, Joint.NECK to 0, Joint.KNEES to 0), false),
        // «Ежовый» наклон на одной ноге: ладони у стопы, принудительное скругление — не баланс на руках
        "at_yozh" to LoadOverride(mapOf(Joint.WRISTS to 1, Joint.SHOULDERS to 1, Joint.LUMBAR to 2, Joint.NECK to 1, Joint.KNEES to 0), false, Base.STANDING),
        // Наклон стоя с захватом лодыжек — не баланс на руках; W3/S3/L3 ошибочны
        "at_zamk" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 1, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Кошка-прогиб на четвереньках — мягкое разгибание, L1 (лечебная поза для спины)
        "cat" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 1, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 1), false),
        // Колено к уху сбоку без прогиба — L3 ошибка; колено сгибается без нагрузки
        "cat_knee_side" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 1, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 1), false),
        // Упор-горка с прогибом: прогиб спины и голова вперёд-вверх (как at_dogbend)
        "dog_bend" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 2, Joint.LUMBAR to 1, Joint.NECK to 1, Joint.KNEES to 0), false),
        // Наклон стоя с захватом лодыжек — не баланс на руках; W3/S3/L3 ошибочны
        "fold_ankles" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 1, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false, Base.STANDING),
        // Полный прогиб стоя: макушка назад — явное разгибание шеи; руки в вывернутом замке назад — плечи. at_full = та же поза, было L2
        "full_backbend" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 1, Joint.LUMBAR to 3, Joint.NECK to 2, Joint.KNEES to 0), false),
        // Скользящий упор-прогиб: таз провисает, позвоночник в разгибании — L2; at_uslide: опора на прямые руки, не SEATED
        "glide_updog" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 1, Joint.LUMBAR to 2, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Полупрогиб в наклоне: ладони лишь подпирают (не упор всем весом), прогиб спины, взгляд в потолок — сильное разгибание шеи
        "half_lift" to LoadOverride(mapOf(Joint.WRISTS to 1, Joint.SHOULDERS to 1, Joint.LUMBAR to 2, Joint.NECK to 2, Joint.KNEES to 0), false),
        // Полупрогиб в горизонтальном упоре: вес на согнутых руках + грудной прогиб; выровнено между дубликатами
        "half_up_plank" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 2, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Наклон стоя с замком за спиной: нагрузка в плечах (S2), поясница — обычный наклон L1
        "shoulder_fold" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 2, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Скользящий упор-прогиб: таз провисает, позвоночник в разгибании — L2; at_uslide: опора на прямые руки, не SEATED
        "tp_glide_updog" to LoadOverride(mapOf(Joint.WRISTS to 2, Joint.SHOULDERS to 1, Joint.LUMBAR to 2, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Уттанасана: пальцы лишь давят в пол, вес на ногах — запястья/плечи не несут вес тела
        "uttanasana" to LoadOverride(mapOf(Joint.WRISTS to 1, Joint.SHOULDERS to 1, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 0), false),
        // Широкий шаг (выпад) без прогиба, торс вертикален: L1; переднее колено под весом — K2 (выровнено)
        "wide_step" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 2), false),
        // Выпад с разведёнными руками, без прогиба — L1
        "wings" to LoadOverride(mapOf(Joint.WRISTS to 0, Joint.SHOULDERS to 0, Joint.LUMBAR to 1, Joint.NECK to 0, Joint.KNEES to 2), false),
    )
}
