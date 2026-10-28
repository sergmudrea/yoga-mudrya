#!/usr/bin/env python3
"""Дополнительные сеты из книг второй подборки и раздел «Пилатес-йога» → core/catalog/.../ExtraSetsCatalog.kt.

Источники (последовательности поз; тексты подсказок написаны заново, простым языком):
- Common Yoga Protocol, Министерство АЮШ Индии (общий протокол йоги, 45 минут);
- Yoga for Mental Health, Национальный институт йоги им. Морарджи Десаи (протокол для душевного здоровья, Y-Break);
- Свами Шивананда «Kundalini Yoga», «Yoga in Daily Life» (двенадцать асан);
- «Хатха-йога прадипика» Сватмарамы, «Шива-самхита» (классические асаны и позы для медитации);
- Йог Рамачарака «Hatha Yoga» (физические упражнения йогов);
- Yogapoint «Guide to Yoga Practices» (серии павана муктасаны, шакти бандхи, серия ваджрасаны);
- М. Шифферс «Йога: здоровое долголетие» (комплексы для зрелого возраста по методу Айенгара);
- Embodied Yoga Principles (позы-архетипы: ян и инь);
- Pure Flow Yoga «Introduction to Yoga» (домашняя практика);
- IIITDM «A Handbook of Basic Asanas», RINL «Yoga Postures Step by Step» (базовые асаны);
- Pilates 101 Manual (Paalu Ramasamy), Niedra Gabriel «Basic Mat Workout», K. Gurtner «Pilates Essentials».

Шаг: (id позы, название по-русски, по-английски, дыхание). Позы — атлас (at_…) и библиотека Д. Лакерды (lb_B…);
«_m» — зеркальная сторона. Дыхание: i/e — вход на вдохе/выдохе без задержки, I/E — 3 цикла, R — 5,
L — 10 (около минуты), X — 20 циклов (2–3 минуты).
"""
import os

BR = {'i': ('IN', 0), 'e': ('EX', 0), 'I': ('IN', 3), 'E': ('EX', 3), 'R': ('EX', 5), 'L': ('EX', 10), 'X': ('EX', 20)}


def S(pose, ru, en, b='E'):
    return [(pose, ru, en, b)]


def mirror(pose):
    return pose[:-2] if pose.endswith('_m') else pose + '_m'


def both(pose, ru, en, b='E'):
    """Правая, затем левая сторона."""
    return [(pose, ru + ' — правая сторона', en + ' — right side', b),
            (mirror(pose), ru + ' — левая сторона', en + ' — left side', b)]


def seq(*parts):
    out = []
    for p in parts:
        out += p
    return out


# ============================================================ КЛАССИКА
SEAT = 'lb_B642'      # лёгкая поза сидя
KNEEL = 'at_vira'     # сидя на пятках

CYP = seq(
    S(SEAT, 'Настрой: сядьте удобно, ладони вместе', 'Settle in: sit comfortably, palms together', 'R'),
    S('at_tad', 'Наклоны головы вперёд и назад', 'Neck bends forward and back', 'E'),
    S('at_tad', 'Наклоны головы вправо и влево', 'Neck bends to the right and left', 'E'),
    S('at_tad', 'Повороты и круги головой', 'Neck turns and slow circles', 'E'),
    S('at_tad', 'Пальцы на плечах: круги плечами', 'Fingers on the shoulders: shoulder circles', 'E'),
    S('lb_B214', 'Повороты корпуса стоя', 'Standing trunk twists', 'E'),
    S('at_utkata', 'Приседания: колени работают', 'Squats for the knees', 'E'),
    S('lb_B5', 'Пальма: руки вверх, подняться на носки', 'Palm tree: arms up, rise onto the toes', 'I'),
    both('lb_B93', 'Дерево', 'Tree pose'),
    S('at_padah', 'Наклон к стопам', 'Hands-to-feet bend', 'E'),
    S('at_full', 'Полуколесо: прогиб назад стоя, ладони на пояснице', 'Half wheel: standing backbend, hands on the lower back', 'I'),
    both('lb_B308', 'Треугольник', 'Triangle pose'),
    S('lb_B720', 'Поза бабочки: стопы вместе, спина прямая', 'Butterfly: soles together, back straight', 'E'),
    S(KNEEL, 'Сидя на пятках, спина прямая', 'Sitting on the heels, back straight', 'E'),
    S('lb_B1227', 'Полуверблюд: ладонь на пояснице, прогиб', 'Half camel: hands on the lower back, gentle arch', 'I'),
    S('lb_B1223', 'Верблюд', 'Camel pose', 'I'),
    S('lb_B1068', 'Поза зайца: лоб к полу, руки вперёд', 'Hare pose: forehead down, arms forward', 'E'),
    S('lb_B890', 'Колени широко, локти за головой: раскрыть грудь', 'Knees wide, elbows behind the head: open the chest', 'I'),
    both('lb_B784', 'Скрутка сидя', 'Seated twist'),
    S('at_croc', 'Крокодил: отдых на животе', 'Crocodile: rest on the belly', 'R'),
    S('lb_B1510', 'Кобра', 'Cobra pose', 'I'),
    S('lb_B1487', 'Саранча', 'Locust pose', 'I'),
    S('lb_B1703', 'Мост', 'Bridge pose', 'I'),
    S('at_legs30', 'Прямые ноги на 30°', 'Straight legs raised to 30°', 'E'),
    S('at_legs90', 'Ноги вертикально (полуплуг)', 'Legs vertical (half plough)', 'E'),
    S('lb_B1772', 'Колени к груди', 'Knees to the chest', 'E'),
    S('at_shava', 'Расслабление на спине', 'Relaxation on the back', 'L'),
    S(SEAT, 'Очищающее дыхание: резкие выдохи животом', 'Cleansing breath: short sharp exhales from the belly', 'E'),
    S(SEAT, 'Попеременное дыхание через ноздри', 'Alternate nostril breathing', 'L'),
    S(SEAT, 'Охлаждающее дыхание: вдох через язык-трубочку', 'Cooling breath: inhale through a rolled tongue', 'R'),
    S(SEAT, 'Дыхание «пчела»: выдох с жужжанием', 'Bee breath: hum on the exhale', 'R'),
    S(SEAT, 'Медитация: внимание на дыхании', 'Meditation: attention on the breath', 'X'),
    S(SEAT, 'Намерение: «Я спокоен, здоров и полон сил»', 'Intention: "I am calm, healthy and full of energy"', 'E'),
)

YBREAK = seq(
    S('lb_B5', 'Руки вверх, потянуться', 'Arms up, stretch', 'I'),
    S('at_tad', 'Круги плечами', 'Shoulder circles', 'E'),
    S('lb_B890', 'Локти за головой: раскрыть грудь', 'Elbows behind the head: open the chest', 'I'),
    S('at_full', 'Прогиб назад стоя', 'Standing backbend', 'I'),
    S('at_prasarita', 'Широкий наклон', 'Wide-legged forward bend', 'E'),
    S('lb_B214', 'Повороты корпуса', 'Trunk twists', 'E'),
    S(SEAT, 'Глубокое дыхание', 'Deep breathing', 'R'),
    S(SEAT, 'Попеременное дыхание через ноздри', 'Alternate nostril breathing', 'R'),
    S(SEAT, 'Дыхание «пчела», затем тишина', 'Bee breath, then silence', 'R'),
)

MIND = seq(
    S(SEAT, 'Настрой на практику', 'Tune in to the practice', 'R'),
    S('at_tad', 'Голова: наклоны, повороты, круги', 'Neck: bends, turns, circles', 'E'),
    S('at_tad', 'Плечи: потянуться и покрутить', 'Shoulders: stretch and circle', 'E'),
    S('lb_B214', 'Повороты корпуса', 'Trunk twists', 'E'),
    S('at_utkata', 'Приседания для коленей', 'Squats for the knees', 'E'),
    S('lb_B5', 'Пальма', 'Palm tree', 'I'),
    both('lb_B93', 'Дерево', 'Tree pose'),
    S('lb_B214', 'Вращение талии', 'Waist rotation', 'E'),
    S('at_pasch', 'Наклон сидя', 'Seated forward bend', 'E'),
    S('lb_B1223', 'Верблюд', 'Camel pose', 'I'),
    S('lb_B1068', 'Поза зайца', 'Hare pose', 'E'),
    both('lb_B784', 'Скрутка сидя', 'Seated twist'),
    both('lb_B943', 'Коровья морда', 'Cow face pose'),
    S('at_croc', 'Крокодил', 'Crocodile rest', 'R'),
    S('lb_B1510', 'Кобра', 'Cobra pose', 'I'),
    S('at_legs90', 'Полуплуг: ноги вертикально', 'Half plough: legs vertical', 'E'),
    S('at_sarvanga', 'Стойка на плечах', 'Shoulderstand', 'R'),
    S('at_matsya', 'Рыба', 'Fish pose', 'E'),
    S('lb_B1703', 'Мост', 'Bridge pose', 'I'),
    S('lb_B1772', 'Колени к груди', 'Knees to the chest', 'E'),
    S('at_shava', 'Расслабление', 'Relaxation', 'L'),
    S(SEAT, 'Очищающее дыхание', 'Cleansing breath', 'E'),
    S(SEAT, 'Попеременное дыхание через ноздри', 'Alternate nostril breathing', 'R'),
    S(SEAT, 'Дыхание «пчела»', 'Bee breath', 'R'),
    S(SEAT, 'Дыхание с лёгким шумом в горле', 'Ocean breath: a soft sound in the throat', 'R'),
    S(SEAT, 'Медитация', 'Meditation', 'X'),
)

SIVA = seq(
    S(SEAT, 'Лёгкая поза: настрой', 'Easy pose: tune in', 'R'),
    S('at_shirsha', 'Стойка на голове', 'Headstand', 'R'),
    S('at_darnika', 'Отдых после стойки', 'Rest after the headstand', 'E'),
    S('at_sarvanga', 'Стойка на плечах', 'Shoulderstand', 'R'),
    S('at_hala', 'Плуг', 'Plough', 'E'),
    S('at_matsya', 'Рыба', 'Fish pose', 'E'),
    S('at_pasch', 'Наклон сидя', 'Seated forward bend', 'R'),
    S('lb_B1510', 'Кобра', 'Cobra pose', 'I'),
    S('lb_B1487', 'Саранча', 'Locust pose', 'I'),
    S('lb_B1543', 'Лук', 'Bow pose', 'I'),
    both('lb_B700', 'Полускрутка сидя', 'Half spinal twist'),
    S('at_baka', 'Ворона', 'Crow pose', 'E'),
    S('at_padah', 'Наклон к стопам стоя', 'Standing hands-to-feet bend', 'E'),
    both('lb_B308', 'Треугольник', 'Triangle pose'),
    S('at_mayura', 'Павлин (по желанию)', 'Peacock (optional)', 'E'),
    S(KNEEL, 'Сидя на пятках', 'Sitting on the heels', 'E'),
    S('at_padma', 'Лотос', 'Lotus', 'R'),
    S('at_shava', 'Расслабление', 'Relaxation', 'L'),
)

HYP = seq(
    S(SEAT, 'Благоприятная поза: стопы между бедром и голенью', 'Auspicious pose: feet between thigh and calf', 'R'),
    both('lb_B943', 'Коровья морда', 'Cow face pose'),
    S('at_hlseat', 'Поза героя: стопа на бедре', 'Hero pose: foot on the opposite thigh', 'E'),
    S('lb_B758', 'Черепаха', 'Tortoise pose', 'E'),
    S('lb_B1292', 'Петух: руки сквозь лотос', 'Rooster: arms through the lotus', 'E'),
    S('lb_B1448', 'Перевёрнутая черепаха', 'Inverted tortoise', 'E'),
    both('lb_B794', 'Лучник: стопа к уху', 'Archer: foot to the ear'),
    both('lb_B700', 'Скрутка сидя', 'Seated twist'),
    S('at_pasch', 'Наклон сидя', 'Seated forward bend', 'R'),
    S('at_mayura', 'Павлин', 'Peacock pose', 'E'),
    S('at_shava', 'Поза трупа: отдых', 'Corpse pose: rest', 'R'),
    S('at_siddha', 'Совершенная поза', 'Accomplished pose', 'R'),
    S('at_padma', 'Лотос', 'Lotus', 'R'),
    S('lb_B876', 'Поза льва: язык наружу, взгляд вверх', 'Lion pose: tongue out, gaze up', 'E'),
    S('lb_B720', 'Благая поза: стопы вместе, захват стоп', 'Gracious pose: soles together, hold the feet', 'R'),
)

SEATS = seq(
    S(SEAT, 'Лёгкая поза: скрестить ноги', 'Easy pose: legs crossed', 'L'),
    S(KNEEL, 'Сидя на пятках', 'Sitting on the heels', 'L'),
    S('at_hlseat', 'Полулотос', 'Half lotus', 'L'),
    S('at_siddha', 'Совершенная поза', 'Accomplished pose', 'L'),
    S('at_padma', 'Лотос — только если колени свободны', 'Lotus — only if the knees are free', 'L'),
    S('lb_B720', 'Бабочка: стопы вместе', 'Butterfly: soles together', 'R'),
    S('at_shava', 'Отдых', 'Rest', 'R'),
    S(SEAT, 'Тишина: выберите свою позу', 'Silence: pick your own seat', 'X'),
)

RAMA = seq(
    S('at_tad', 'Стойка: пятки вместе, грудь раскрыта', 'Stand tall: heels together, chest open', 'E'),
    S('at_cross', 'Руки вперёд — в стороны, на носки', 'Arms forward then wide, rise onto the toes', 'i'),
    S('at_cross', 'Руки в стороны: малые круги', 'Arms out to the sides: small circles', 'I'),
    S('lb_B5', 'Пальцы к макушке, затем руки вниз через стороны', 'Fingertips to the crown, then arms down through the sides', 'e'),
    S('at_tad', 'Пальцы на плечах: локти вперёд — назад', 'Fingers on the shoulders: elbows forward and back', 'E'),
    S('at_hnak', 'Руки на поясе: наклон вперёд, грудь вперёд', 'Hands on the hips: bend forward, chest open', 'e'),
    S('at_full', 'Руки на поясе: прогиб назад', 'Hands on the hips: bend back', 'i'),
    both('at_bok', 'Наклон в сторону', 'Side bend', 'E'),
    S('lb_B5', 'Руки вверх, наклон к полу без сгибания колен', 'Arms up, fold to the floor with straight knees', 'e'),
    S('at_tad', 'Подъёмы на носки', 'Rises onto the toes', 'E'),
    S('lb_B505', 'Приседания: стопы шире', 'Squats with feet apart', 'E'),
    both('lb_B59', 'Колено вверх, затем бег на месте', 'Knee up, then running on the spot', 'E'),
    S('at_plech', 'Наклон с махом рук назад и вверх', 'Forward bend with a swing of the arms back and up', 'e'),
    S('at_tad', 'Полное дыхание йогов стоя', 'Complete yogic breath standing', 'R'),
)

FLOW = seq(
    S('lb_B1068', 'Поза ребёнка: дыхание с лёгким шумом', "Child's pose: ocean breath", 'R'),
    S('at_tad', 'Поза горы', 'Mountain pose', 'E'),
    S('lb_B5', 'Руки вверх', 'Arms up', 'i'),
    S('at_uttan', 'Наклон вперёд', 'Forward fold', 'e'),
    S('at_pnak', 'Полунаклон', 'Half lift', 'i'),
    S('lb_B1129', 'Планка', 'Plank', 'e'),
    S('lb_B1159', 'Низкая планка', 'Low plank', 'e'),
    S('at_updog', 'Собака мордой вверх', 'Upward-facing dog', 'i'),
    S('at_edog', 'Собака мордой вниз', 'Downward-facing dog', 'R'),
    both('lb_B342', 'Воин 1', 'Warrior 1'),
    both('lb_B317', 'Воин 2', 'Warrior 2'),
    both('lb_B339', 'Обратный воин', 'Reverse warrior'),
    both('lb_B308', 'Треугольник', 'Triangle'),
    both('lb_B316', 'Боковой угол', 'Side angle'),
    both('lb_B133', 'Воин 3', 'Warrior 3'),
    S('lb_B1007', 'Лодка', 'Boat pose', 'E'),
    S('lb_B1145', 'Планка на предплечьях', 'Forearm plank', 'E'),
    both('lb_B1178', 'Боковая планка', 'Side plank'),
    S('lb_B1487', 'Саранча', 'Locust', 'I'),
    S('lb_B1543', 'Лук', 'Bow', 'I'),
    S('lb_B1223', 'Верблюд', 'Camel', 'I'),
    S('lb_B1703', 'Мост', 'Bridge', 'I'),
    S('at_pasch', 'Наклон сидя', 'Seated forward bend', 'R'),
    both('lb_B700', 'Скрутка сидя', 'Seated twist'),
    S('at_viparita', 'Ноги вверх', 'Legs up', 'R'),
    S('at_shava', 'Расслабление', 'Relaxation', 'L'),
)

BASIC = seq(
    S('at_tad', 'Поза горы', 'Mountain pose', 'E'),
    S('lb_B5', 'Пальма: руки вверх', 'Palm tree: arms up', 'I'),
    both('lb_B93', 'Дерево', 'Tree pose'),
    both('lb_B308', 'Треугольник', 'Triangle'),
    S('at_padah', 'Наклон к стопам', 'Hands-to-feet bend', 'E'),
    S(KNEEL, 'Сидя на пятках', 'Sitting on the heels', 'E'),
    S('lb_B1068', 'Поза зайца', 'Hare pose', 'E'),
    both('lb_B784', 'Скрутка сидя', 'Seated twist'),
    S('at_pasch', 'Наклон сидя', 'Seated forward bend', 'E'),
    S('lb_B1510', 'Кобра', 'Cobra', 'I'),
    S('lb_B1487', 'Саранча', 'Locust', 'I'),
    S('lb_B1543', 'Лук', 'Bow', 'I'),
    S('at_croc', 'Крокодил', 'Crocodile', 'R'),
    S('lb_B1772', 'Колени к груди', 'Knees to the chest', 'E'),
    S('at_sarvanga', 'Стойка на плечах', 'Shoulderstand', 'E'),
    S('at_hala', 'Плуг', 'Plough', 'E'),
    S('at_matsya', 'Рыба', 'Fish', 'E'),
    S('at_shava', 'Расслабление', 'Relaxation', 'L'),
)

# ============================================================ МЯГКАЯ ЙОГА 50+ (М. Шифферс)
SH_SEAT = seq(S(SEAT, 'Лёгкая поза, ладони у груди: настрой', 'Easy pose, palms at the chest: tune in', 'L'))
SH_SEAT_END = seq(S(SEAT, 'Лёгкая поза, ладони у груди', 'Easy pose, palms at the chest', 'L'))
CHILD = ('lb_B1068', 'Поза ребёнка, руки вперёд', "Child's pose, arms forward")
KNEE1 = both('lb_B1813', 'Колено к груди лёжа', 'Knee to the chest lying down', 'L')
KNEES2 = S('lb_B1772', 'Оба колена к груди', 'Both knees to the chest', 'L')
ARMSUP = S('at_shavaring', 'Лёжа: руки за голову, потянуться', 'Lying: arms overhead, stretch', 'R')
TAD = S('at_tad', 'Поза горы', 'Mountain pose', 'E')
UPH = S('lb_B5', 'Руки вверх', 'Arms up', 'E')
LOCKUP = S('lb_B6', 'Руки вверх, пальцы в замке', 'Arms up, fingers interlaced', 'E')
TRI = both('lb_B308', 'Треугольник', 'Triangle')
W2 = both('lb_B317', 'Воин 2', 'Warrior 2')
SIDE = both('lb_B316', 'Боковой угол', 'Side angle')
HMOON = both('lb_B131', 'Полумесяц с опорой', 'Supported half moon')
HALFUT = S('lb_B250', 'Полунаклон, ладони на опоре', 'Half forward bend, hands on a support', 'R')
UTT = S('at_zamk', 'Наклон вперёд, держась за локти', 'Forward bend holding the elbows', 'R')
DOG = S('at_edog', 'Собака мордой вниз', 'Downward-facing dog', 'R')
UPDOG = S('lb_B1523', 'Собака мордой вверх (колени на полу)', 'Upward dog (knees down)', 'E')
VAJRA = S(KNEEL, 'Сидя на пятках', 'Sitting on the heels', 'L')
PARV = S('lb_B898', 'Сидя на пятках, руки вверх в замке', 'Sitting on the heels, arms up interlaced', 'E')
COWV = both('lb_B943', 'Руки коровьей морды', 'Cow face arms')
SUPBUT = S('lb_B1750', 'Бабочка лёжа', 'Reclined butterfly', 'X')
BRIDGE = S('lb_B1703', 'Мост (можно с опорой под крестцом)', 'Bridge (a support under the sacrum is fine)', 'X')
VIPAR = S('lb_B1823', 'Ноги вверх (можно у стены)', 'Legs up (against a wall is fine)', 'X')
SAVA = S('at_shava', 'Расслабление на спине', 'Relaxation on the back', 'X')
REVTAB = S('lb_B1676', 'Раскрытие груди с опорой (обратный стол)', 'Supported chest opener (reverse tabletop)', 'L')
LEGSUP = S('lb_B1823', 'Ноги вверх у стены', 'Legs up the wall', 'L')
STAFF = S('lb_B775', 'Поза посоха', 'Staff pose', 'E')
WIDE = S('at_upavup', 'Широкий угол сидя', 'Wide-angle seat', 'L')
WIDEF = S('at_upavfold', 'Широкий угол: наклон (голова на опоре)', 'Wide-angle bend (head on a support)', 'L')
BADDHA = S('lb_B720', 'Бабочка сидя', 'Seated butterfly', 'L')
PRAS = S('at_prasarita', 'Широкий наклон (голова на опоре)', 'Wide-legged bend (head on a support)', 'L')
JANU = both('lb_B853', 'Наклон к одной ноге', 'Head-to-knee bend', 'L')
PASCH = S('at_pasch', 'Наклон сидя (голова на опоре)', 'Seated forward bend (head on a support)', 'L')
BHARA = both('lb_B887', 'Мягкая скрутка сидя', 'Gentle seated twist')
MARI = both('lb_B703', 'Скрутка с коленом вверх', 'Twist with one knee up')
HALFHALA = S('at_legs90', 'Полуплуг (ноги на стуле)', 'Half plough (legs on a chair)', 'L')
HALA = S('at_hala', 'Плуг', 'Plough', 'R')
KARNA = S('at_karna', 'Колени к ушам', 'Knees to the ears', 'E')
SARV = S('at_sarvanga', 'Стойка на плечах (под плечами одеяло)', 'Shoulderstand (blanket under the shoulders)', 'L')
YMUDRA = S('lb_B878', 'Наклон вперёд, ноги скрещены', 'Forward bend, legs crossed', 'R')
FISHREST = S('lb_B1685', 'Раскрытие груди лёжа на валиках', 'Chest opener lying on bolsters', 'X')
BREATH_EX = S('at_shava', 'Длинный спокойный выдох лёжа', 'Long calm exhales lying down', 'X')
BREATH_IN = S('at_shava', 'Длинный спокойный вдох лёжа', 'Long calm inhales lying down', 'X')
SUPTA1 = both('lb_B1818', 'Нога вверх лёжа, захват стопы', 'Reclining leg up, holding the foot', 'L')
SUPTA2 = both('lb_B1777', 'Нога в сторону лёжа', 'Reclining leg out to the side', 'L')
GOMT = both('lb_B943', 'Коровья морда стоя: руки', 'Cow face arms standing')
TADLOCK = S('lb_B4', 'Поза горы, пальцы в замке за спиной', 'Mountain pose, fingers interlaced behind', 'E')
REVNAM = S('lb_B3', 'Ладони вместе за спиной', 'Palms together behind the back', 'E')

SH_START = seq(SH_SEAT, S(*CHILD, 'R'), KNEE1, KNEES2, ARMSUP, TAD, UPH, TRI, W2, HALFUT, VAJRA,
               S('lb_B898', 'Сидя, руки вверх в замке', 'Seated, arms up interlaced', 'R'),
               SUPBUT, BRIDGE, VIPAR, SAVA, SH_SEAT_END)
SH_MAIN1 = seq(SH_SEAT, S(*CHILD, 'R'), LEGSUP, KNEES2, both('lb_B1813', 'Колено к груди лёжа', 'Knee to the chest lying down', 'R'), ARMSUP,
               TAD, UPH, LOCKUP, HALFUT, DOG, UTT, S('lb_B1344', 'Дельфин — подготовка к стойке на руках', 'Dolphin — handstand preparation', 'E'), UTT,
               REVTAB, SUPBUT, SUPTA1, SUPTA2, TRI, W2, SIDE, HMOON, PRAS, STAFF, WIDE, BADDHA, JANU, PASCH, BHARA,
               SARV, HALFHALA, BRIDGE, VIPAR, SAVA, SH_SEAT_END)
SH_MAIN2 = seq(SH_SEAT, LEGSUP, KNEES2, both('lb_B1813', 'Колено к груди лёжа', 'Knee to the chest lying down', 'R'), ARMSUP,
               TAD, UPH, TRI, W2, SIDE, HMOON, HALFUT, UTT, DOG, UTT, SUPBUT, REVTAB, UPDOG,
               S('at_updog', 'Собака мордой вверх', 'Upward-facing dog', 'E'), S(*CHILD, 'R'), VAJRA, PARV, COWV,
               S('lb_B1598', 'Щенок: раскрытие плеч', 'Puppy: shoulder opener', 'R'), STAFF, PASCH, BHARA, MARI,
               SARV, HALFHALA, BRIDGE, VIPAR, SAVA, SH_SEAT_END)
SH_TIRED = seq(SH_SEAT, S(*CHILD, 'X'),
               S('lb_B1750', 'Лёгкая поза лёжа (на валике)', 'Reclined easy pose (on a bolster)', 'X'),
               SUPBUT, REVTAB, BRIDGE, VIPAR, S('at_shava', 'Расслабление', 'Relaxation', 'L'),
               BREATH_EX, BREATH_IN, SAVA, SH_SEAT_END)
SH_MENO1 = seq(WIDE, BADDHA, SUPBUT, S('lb_B1068', 'Поза ребёнка на валике', "Child's pose on a bolster", 'X'),
               S('at_uttan', 'Наклон вперёд, руки на опоре', 'Forward fold, hands on a support', 'L'), PRAS,
               S('at_edog', 'Собака мордой вниз, голова на опоре', 'Downward dog, head supported', 'L'),
               JANU, PASCH, WIDEF, BHARA, HALFHALA, BRIDGE, YMUDRA, VIPAR, BREATH_EX, SAVA)
SH_MENO2 = seq(S('lb_B1068', 'Поза ребёнка на валике', "Child's pose on a bolster", 'L'),
               S('at_uttan', 'Наклон вперёд, руки на опоре', 'Forward fold, hands on a support', 'L'),
               S('at_edog', 'Собака мордой вниз, голова на опоре', 'Downward dog, head supported', 'L'), PRAS,
               S('lb_B1750', 'Бабочка лёжа, валик вдоль спины', 'Reclined butterfly, bolster along the spine', 'X'),
               S('lb_B1750', 'Бабочка лёжа, валик поперёк', 'Reclined butterfly, bolster across', 'X'),
               FISHREST, S('lb_B1687', 'Прогиб на опоре: голова назад', 'Supported backbend: head back', 'X'),
               BHARA, HALFHALA, BRIDGE, YMUDRA, VIPAR, BREATH_IN, SAVA)
SH_JOINTS = seq(S('at_tad', 'Поза горы', 'Mountain pose', 'R'), LOCKUP, TADLOCK, GOMT,
                both('lb_B308', 'Треугольник, рука на опоре', 'Triangle, hand on a support'), SIDE,
                S('at_edog', 'Собака мордой вниз, руки на опоре', 'Downward dog, hands on a support', 'L'), UPDOG,
                PARV, COWV, S('lb_B3', 'Сидя на пятках: ладони вместе за спиной', 'Sitting on the heels: palms together behind', 'R'),
                S('lb_B898', 'Сидя: руки вверх в замке', 'Seated: arms up interlaced', 'R'), YMUDRA,
                ARMSUP, SUPTA1, SUPTA2, SUPBUT, BRIDGE, VIPAR, SAVA)
SH_GUT = seq(ARMSUP, KNEES2, KNEE1, TAD, UPH, TRI, SIDE, HALFUT, DOG, S('at_updog', 'Собака мордой вверх', 'Upward-facing dog', 'E'),
             S(*CHILD, 'L'), SUPTA1, SUPTA2, SUPBUT, BHARA, MARI, S('at_pasch', 'Наклон сидя', 'Seated forward bend', 'L'),
             SARV, S('at_legs90', 'Полуплуг', 'Half plough', 'L'), KARNA, SAVA)

# ============================================================ СУСТАВНАЯ ГИМНАСТИКА (Yogapoint, школа Бихара)
PM1 = seq(
    S('lb_B775', 'Сидя, ноги вперёд: сгибать пальцы ног', 'Seated, legs forward: bend the toes', 'E'),
    S('lb_B775', 'Стопы на себя и от себя', 'Feet toward you and away', 'E'),
    S('lb_B775', 'Круги стопами', 'Ankle circles', 'E'),
    both('lb_B1813', 'Колено к груди: сгибать и разгибать ногу', 'Knee to the chest: bend and straighten the leg', 'E'),
    S('lb_B720', 'Бабочка: колени вверх-вниз', 'Butterfly: knees up and down', 'E'),
    S('lb_B732', 'Бабочка: наклон', 'Butterfly: forward bend', 'R'),
    both('lb_B1763', 'Круги бедром лёжа', 'Hip circles lying down', 'E'),
    S(SEAT, 'Сжимать и разжимать кулаки', 'Clench and open the fists', 'E'),
    S(SEAT, 'Круги кистями', 'Wrist circles', 'E'),
    S(SEAT, 'Руки вперёд: сгибать локти', 'Arms forward: bend the elbows', 'E'),
    S(SEAT, 'Пальцы на плечах: круги локтями', 'Fingers on the shoulders: elbow circles', 'E'),
    S(SEAT, 'Голова: вперёд-назад, вбок, повороты', 'Neck: forward and back, side to side, turns', 'E'),
    S('at_shava', 'Расслабление', 'Relaxation', 'R'),
)

PM2 = seq(
    both('lb_B1813', 'Колено к груди лёжа', 'Knee to the chest lying down', 'R'),
    S('lb_B1772', 'Оба колена к груди', 'Both knees to the chest', 'R'),
    S('at_rollball', 'Перекаты на спине', 'Rocking and rolling on the back', 'E'),
    both('lb_B1773', 'Скрутка лёжа', 'Supine twist'),
    S('at_legs30', 'Прямые ноги на 30°', 'Straight legs at 30°', 'E'),
    S('at_legs60', 'Ноги на 60°', 'Legs at 60°', 'E'),
    S('at_legs90', 'Ноги вертикально', 'Legs vertical', 'E'),
    S('lb_B1007', 'Лодка', 'Boat pose', 'E'),
    S('at_shava', 'Расслабление', 'Relaxation', 'R'),
)

PM3 = seq(
    S('lb_B775', 'Тянуть канат: руки поочерёдно вверх', 'Pulling the rope: hands up one after the other', 'E'),
    both('at_upavside', 'Динамическая скрутка: рука к стопе', 'Dynamic twist: hand to the opposite foot'),
    S('at_upavup', 'Жернова: круги корпусом', 'Grinding the mill: trunk circles', 'E'),
    S('lb_B775', 'Гребля: вперёд — назад', 'Rowing the boat: forward and back', 'E'),
    S('lb_B609', 'Рубка дров: из приседа руки вверх — вниз', 'Chopping wood: from a squat, arms up and down', 'E'),
    S('lb_B609', 'Присед, ладони вместе, локти разводят колени', 'Squat, palms together, elbows open the knees', 'E'),
    S('at_padah', 'Из приседа выпрямить ноги, держась за стопы', 'From the squat, straighten the legs holding the feet', 'e'),
    S('lb_B609', 'Шаги вороны в приседе', 'Crow walk in a squat', 'E'),
    both('lb_B604', 'Присед: колено к полу, скрутка', 'Squat: knee to the floor, twist'),
    S('at_shava', 'Расслабление', 'Relaxation', 'R'),
)

VAJRA_SER = seq(
    S(KNEEL, 'Сидя на пятках', 'Sitting on the heels', 'R'),
    S('at_paryanka', 'Лёжа на спине между пятками (по возможности)', 'Lying back between the heels (if comfortable)', 'E'),
    S('lb_B1068', 'Поза зайца', 'Hare pose', 'E'),
    S('lb_B1223', 'Верблюд', 'Camel', 'I'),
    S('at_cat', 'Кошка: прогиб', 'Cat: arch', 'i'),
    S('at_antcat', 'Кошка: спина вверх', 'Cat: round the back', 'e'),
    both('at_cat3', 'Тигр: нога назад', 'Tiger: leg back', 'I'),
    S('at_shishu', 'Поза ребёнка', "Child's pose", 'e'),
    S('at_sarp', 'Атакующая кобра: из ребёнка вперёд', 'Striking cobra: from child forward', 'i'),
    S('lb_B876', 'Поза льва', 'Lion pose', 'E'),
    S('lb_B878', 'Наклон сидя на пятках', 'Forward bend sitting on the heels', 'R'),
    S(KNEEL, 'Сидя на пятках: спокойное дыхание', 'Sitting on the heels: calm breathing', 'L'),
)

# ============================================================ ЙОГА ХАРАКТЕРА (Embodied Yoga Principles)
YANG = seq(
    S('at_tad', 'Стойка: «Я здесь»', 'Standing: "I am here"', 'R'),
    both('lb_B342', 'Толкать: руки вперёд в выпаде', 'Pushing: arms forward in a lunge'),
    both('lb_B317', 'Нет: ладонь вперёд в воине', 'No: palm forward in warrior'),
    both('at_lcres', 'Войти: шаг вперёд, грудь открыта', 'Entering: step forward, chest open'),
    S('lb_B5', 'Авторитет: рука вверх, взгляд ровный', 'Authority: arm up, steady gaze', 'R'),
    S('lb_B217', 'Занять место: широко, руки в стороны', 'Taking space: wide stance, arms out', 'R'),
    S('lb_B216', 'Энтузиазм: руки вверх, на выдохе — «да!»', 'Enthusiasm: arms up, exhale "yes!"', 'I'),
    S('lb_B504', 'Опора: присесть, будто держите ношу', 'Support: sit low as if carrying a load', 'R'),
    both('lb_B93', 'Над суетой: дерево, руки вверх', 'Rising above: tree with arms up'),
    S('at_tad', 'Стойка: заметить перемену', 'Standing: notice the change', 'R'),
)

YIN = seq(
    S('at_uttan', 'Отпустить: наклон, голова висит', 'Letting go: fold, head hanging', 'R'),
    S('at_full', 'Да: раскрыть грудь', 'Yes: open the chest', 'I'),
    S('lb_B1068', 'Смирение: поза ребёнка', "Surrender: child's pose", 'L'),
    S('lb_B875', 'Принять: сидя, ладони вверх', 'Receiving: seated, palms up', 'R'),
    S('lb_B1750', 'Открытость: бабочка лёжа', 'Openness: reclined butterfly', 'L'),
    S('lb_B1772', 'Забота о себе: обнять колени', 'Self-care: hug the knees', 'R'),
    S('lb_B638', 'Внутрь: сидя, колени к груди', 'Going inward: seated, knees to the chest', 'R'),
    S('at_shava', 'Отдых: ничего не делать', 'Rest: do nothing', 'X'),
)

# ============================================================ ПИЛАТЕС-ЙОГА
HUNDRED = S('lb_B1054', 'Сотня: голова и плечи над полом, руки пружинят', 'The hundred: head and shoulders up, arms pumping', 'L')
ROLLUP = S('at_ugra', 'Скручивание: позвонок за позвонком вверх и вниз', 'Roll up: vertebra by vertebra up and down', 'E')
CIRCLES = both('lb_B1817', 'Круги ногой', 'Single leg circles', 'E')
BALL = S('lb_B1001', 'Перекаты «мячик»', 'Rolling like a ball', 'E')
SLS = both('lb_B1813', 'Подтягивание одной ноги', 'Single leg stretch', 'E')
DLS = S('lb_B1054', 'Двойное вытяжение: руки и ноги от центра', 'Double leg stretch: arms and legs reach away', 'E')
SCISS = both('lb_B1818', 'Ножницы', 'Scissors', 'E')
LOWER = S('at_legs60', 'Опускание прямых ног', 'Lower lift', 'E')
CRISS = both('lb_B1058', 'Перекрёстные скручивания', 'Criss-cross', 'E')
SPINE = S('at_upavfold', 'Вытяжение позвоночника вперёд', 'Spine stretch forward', 'E')
ROCKER = S('lb_B756', 'Перекаты с открытыми ногами', 'Open leg rocker', 'E')
SAW = both('lb_B774', 'Пила', 'Saw', 'E')
CORK = seq(S('at_legs90', 'Штопор: ноги вверх', 'Corkscrew: legs up', 'e'), both('at_jathara', 'Штопор: ноги в сторону', 'Corkscrew: legs to the side', 'e'))
SWAN = S('lb_B1510', 'Лебедь', 'Swan', 'I')
SLK = S('at_vsphinxknee', 'Удар одной ногой', 'Single leg kick', 'E')
DLK = S('lb_B1493', 'Удар двумя ногами, руки в замке', 'Double leg kick, hands clasped', 'I')
TWIST = both('lb_B784', 'Скрутка позвоночника', 'Spine twist', 'E')
SHELL = S('lb_B1068', 'Ракушка: отдых', 'Shell stretch: rest', 'R')
SIDEKICK = both('lb_B788', 'Махи ногой лёжа на боку', 'Side kick series', 'E')
TEASERP = S('lb_B1003', 'Тизер: подготовка', 'Teaser prep', 'E')
TEASER = S('lb_B1007', 'Тизер', 'Teaser', 'E')
PUSHUP = seq(S('lb_B1129', 'Отжимание: планка', 'Push up: plank', 'e'), S('lb_B1159', 'Отжимание: вниз', 'Push up: lower down', 'e'))
SEAL = S('lb_B1004', 'Тюлень', 'Seal', 'E')
PELVIC = S('lb_B1703', 'Скручивание таза: мост по позвонку', 'Pelvic curl: bridge vertebra by vertebra', 'I')
SWIM = S('lb_B1494', 'Плавание', 'Swimming', 'E')
BEATS = S('lb_B1487', 'Хлопки пятками лёжа на животе', 'Heel beats lying on the belly', 'E')

PL_BASE = seq(
    S('at_shava', 'Дыхание грудной клеткой, живот подтянут', 'Breathe into the ribs, belly drawn in', 'R'),
    HUNDRED, ROLLUP, CIRCLES, BALL, SLS, DLS, SCISS, LOWER, CRISS, SPINE, SAW, TWIST,
    S('at_sphinx', 'Повороты головы на предплечьях', 'Neck roll on the forearms', 'E'),
    SLK, DLK, SHELL, SIDEKICK, TEASERP, TEASER, PUSHUP, SHELL,
    S('at_shava', 'Заминка: расслабление', 'Cool-down: relaxation', 'L'),
)

PL_MAT = seq(
    S('at_legs0', 'Разминка лёжа: поочерёдные подъёмы ног', 'Warm-up lying down: alternate leg lifts', 'E'),
    S('lb_B1054', 'Разминка: подъём груди к коленям', 'Warm-up: chest lift toward the knees', 'E'),
    HUNDRED, S('lb_B1001', 'Перекат назад и вверх', 'Roll back and up', 'E'), CIRCLES, BALL, SLS, DLS, SCISS, LOWER,
    SPINE, ROCKER, SAW, CORK, SLK, DLK, SIDEKICK, BEATS, TEASER, SEAL,
    S('at_uttan', 'У стены: скругление вниз и обратно', 'At the wall: roll down and up', 'E'),
)

PL_ABS = seq(
    HUNDRED, SLS, DLS, SCISS, LOWER, CRISS, TEASERP, TEASER,
    S('lb_B1129', 'Планка', 'Plank', 'R'),
    both('lb_B1134', 'Планка: нога вверх', 'Leg pull front'),
    both('lb_B1178', 'Боковая планка', 'Side plank'),
    S('lb_B1772', 'Колени к груди: отдых', 'Knees to the chest: rest', 'R'),
)

PL_BACK = seq(
    S('at_uttan', 'Скругление вниз стоя', 'Standing roll down', 'E'),
    S('at_cat', 'На четвереньках: нейтральная спина', 'All fours: neutral spine', 'E'),
    both('at_crosscat', 'Противоположные рука и нога', 'Opposite arm and leg lift'),
    both('lb_B1073', 'Нить в иголку', 'Thread the needle'),
    S('lb_B1068', 'Отдых: ракушка', 'Rest: shell', 'R'),
    S('lb_B1489', 'Дротик: грудь вверх, руки к стопам', 'Dart: chest up, arms toward the feet', 'I'),
    both('lb_B1499', 'Рука и нога вверх лёжа на животе', 'Alternate arm and leg lift on the belly'),
    SWIM,
    S('lb_B1492', 'Брасс: руки широко', 'Breast stroke: arms wide', 'I'),
    SWAN, SHELL, TWIST, PELVIC,
    S('at_legs90', 'Мёртвый жук: ноги и руки вверх', 'Dead bug: arms and legs up', 'E'),
    S('at_shava', 'Расслабление', 'Relaxation', 'R'),
)

PL_GLUTES = seq(
    PELVIC,
    both('at_sbridgek1', 'Мост на одной ноге', 'Single leg bridge'),
    SIDEKICK,
    both('lb_B1828', 'Ракушка лёжа на боку: колено вверх', 'Clam: top knee opens', 'E'),
    both('lb_B788', 'Круги ногой лёжа на боку', 'Side-lying leg circles', 'E'),
    both('lb_B1818', 'Высокий мах ногой лёжа', 'Grand battement lying down', 'E'),
    CIRCLES,
    both('lb_B1679', 'Обратная планка: нога вверх', 'Leg pull back', 'E'),
    both('lb_B1134', 'Планка: нога вверх', 'Leg pull front', 'E'),
    both('lb_B1763', 'Растяжка ягодиц лёжа', 'Supine glute stretch', 'R'),
    S('at_shava', 'Расслабление', 'Relaxation', 'R'),
)

PL_STAND = seq(
    S('at_tad', 'Стойка: макушка вверх, живот подтянут', 'Stand tall: crown up, belly in', 'E'),
    S('at_uttan', 'Скругление вниз и обратно', 'Roll down and back up', 'E'),
    S('lb_B5', 'Руки балерины: вверх через стороны', 'Ballerina arms: up through the sides', 'I'),
    S('at_cross', 'Круги руками', 'Arm circles', 'E'),
    both('at_bok', 'Тик-так: наклоны в сторону', 'Tic toc: side bends'),
    both('lb_B214', 'Лук и стрела: поворот с тягой рук', 'Bow and arrow: twist with arms drawing'),
    S('at_tad', 'Работа стоп: подъёмы на носки', 'Footwork: rises onto the toes', 'E'),
    both('lb_B59', 'Колено вверх', 'Knee lift'),
    both('lb_B133', 'Самолёт', 'Aeroplane'),
    S('at_tad', 'Стойка: дыхание', 'Stand: breathe', 'R'),
)

PL_FLOW = seq(
    S('at_tad', 'Поза горы: дыхание в рёбра', 'Mountain: breathe into the ribs', 'E'),
    S('lb_B5', 'Руки вверх', 'Arms up', 'i'),
    S('at_uttan', 'Скругление вниз', 'Roll down', 'e'),
    S('lb_B1129', 'Планка', 'Plank', 'E'),
    both('lb_B1134', 'Планка: нога вверх', 'Leg pull front'),
    S('at_edog', 'Собака мордой вниз', 'Downward-facing dog', 'E'),
    both('lb_B1178', 'Боковая планка', 'Side plank'),
    S('lb_B1159', 'Низкая планка', 'Low plank', 'e'),
    SWAN, SWIM, SHELL,
    TEASER, HUNDRED, CRISS, PELVIC,
    both('lb_B1773', 'Скрутка лёжа', 'Supine twist'),
    S('at_shava', 'Расслабление', 'Relaxation', 'L'),
)

# ============================================================ СПИСОК
SECTIONS = [
    ('CLASSIC', 'Классические комплексы', 'Classic sequences'),
    ('GENTLE', 'Мягкая йога 50+', 'Gentle yoga 50+'),
    ('JOINTS', 'Суставная гимнастика', 'Joint mobility'),
    ('CHARACTER', 'Йога характера', 'Yoga of character'),
    ('PILATES', 'Пилатес-йога', 'Pilates yoga'),
]

SETS = [
    ('ex_cyp', 'CLASSIC', 'Общий протокол йоги', 'Common Yoga Protocol',
     'Официальная практика Международного дня йоги: разминка, стоя, сидя, лёжа, дыхание, медитация. 45 минут.',
     'The official International Yoga Day practice: warm-up, standing, seated, lying, breathing, meditation. 45 minutes.', CYP),
    ('ex_ybreak', 'CLASSIC', 'Йога-перерыв на работе', 'Yoga break at work',
     'Пять минут у рабочего стола: потянуться, раскрыть грудь, подышать. Можно дважды в день.',
     'Five minutes by your desk: stretch, open the chest, breathe. Twice a day if you like.', YBREAK),
    ('ex_mind', 'CLASSIC', 'Спокойный ум', 'A calm mind',
     'Протокол Национального института йоги для душевного здоровья: мягкие асаны, дыхание и тишина.',
     'The National Institute of Yoga protocol for mental health: gentle poses, breathing and silence.', MIND),
    ('ex_siva', 'CLASSIC', 'Двенадцать асан Шивананды', "Sivananda's twelve poses",
     'Классика: стойки на голове и плечах, плуг, рыба, наклоны, прогибы, скрутка, ворона, треугольник. Для опытных.',
     'The classics: head and shoulder stands, plough, fish, bends, backbends, twist, crow, triangle. For experienced students.', SIVA),
    ('ex_hyp', 'CLASSIC', 'Асаны старинных текстов', 'Poses of the old texts',
     'Пятнадцать асан «Хатха-йога прадипики» (XV век) по порядку. Петух и павлин — по желанию.',
     'The fifteen poses of the Hatha Yoga Pradipika (15th century) in order. Rooster and peacock are optional.', HYP),
    ('ex_seats', 'CLASSIC', 'Найди позу для медитации', 'Find your meditation seat',
     'Шесть сидячих поз из «Шива-самхиты» и «Прадипики» — по минуте каждая. Выберите ту, где спина ровная без усилий.',
     'Six seated poses from the Shiva Samhita and the Pradipika, a minute each. Pick the one where the back stays straight without effort.', SEATS),
    ('ex_rama', 'CLASSIC', 'Зарядка йогов', 'The yogis’ morning exercises',
     'Упражнения стоя из книги Рамачараки (1904): махи и круги руками, наклоны, приседания, бег на месте.',
     'Standing exercises from Ramacharaka’s book (1904): arm swings and circles, bends, squats, running on the spot.', RAMA),
    ('ex_flow', 'CLASSIC', 'Виньяса дома', 'Vinyasa at home',
     'Шаблон домашней практики: приветствие солнцу, воины, кор, прогибы, наклоны, ноги вверх.',
     'A home practice template: sun salutation, warriors, core, backbends, forward bends, legs up.', FLOW),
    ('ex_basic', 'CLASSIC', 'Азбука асан', 'The ABC of poses',
     'Восемнадцать базовых поз из учебников йоги для студентов — по одной каждого вида.',
     'Eighteen basic poses from student yoga handbooks — one of every kind.', BASIC),
    ('ex_sh_start', 'GENTLE', 'Начало пути', 'First steps',
     'Первый комплекс для тех, кому за 50: лёжа, стоя, сидя и долгий отдых. Около 40 минут.',
     'A first sequence for those over 50: lying, standing, seated and a long rest. About 40 minutes.', SH_START),
    ('ex_sh_main1', 'GENTLE', 'Основной комплекс 1', 'Main sequence 1',
     'Большая программа: наклоны, позы стоя, скрутки, перевёрнутые позы. Можно делить на части.',
     'A full programme: bends, standing poses, twists, inversions. Feel free to split it.', SH_MAIN1),
    ('ex_sh_main2', 'GENTLE', 'Основной комплекс 2', 'Main sequence 2',
     'Позы стоя, мягкие прогибы, сидя на пятках, скрутки и перевёрнутые позы.',
     'Standing poses, gentle backbends, kneeling, twists and inversions.', SH_MAIN2),
    ('ex_sh_tired', 'GENTLE', 'Когда нет сил', 'When you have no energy',
     'Восстанавливающая практика с опорами: лежать, дышать, набираться сил.',
     'A restorative practice with props: lie down, breathe, recharge.', SH_TIRED),
    ('ex_sh_meno1', 'GENTLE', 'Менопауза: приливы и усталость', 'Menopause: hot flushes and fatigue',
     'Наклоны с опорой под голову и перевёрнутые позы — охлаждают и успокаивают.',
     'Forward bends with the head supported and inversions — cooling and calming.', SH_MENO1),
    ('ex_sh_meno2', 'GENTLE', 'Менопауза: настроение', 'Menopause: mood',
     'Мягкие прогибы на опоре и раскрытие груди — против хандры и упадка сил.',
     'Gentle supported backbends and chest openers — against low mood and fatigue.', SH_MENO2),
    ('ex_sh_joints', 'GENTLE', 'Здоровые суставы', 'Healthy joints',
     'Плечи, кисти, бёдра и колени: позы стоя, сидя на пятках и лёжа с опорой.',
     'Shoulders, wrists, hips and knees: standing, kneeling and supported lying poses.', SH_JOINTS),
    ('ex_sh_gut', 'GENTLE', 'Здоровый кишечник', 'Healthy digestion',
     'Колени к груди, позы стоя, скрутки и перевёрнутые позы — для работы кишечника.',
     'Knees to chest, standing poses, twists and inversions — to keep digestion moving.', SH_GUT),
    ('ex_pm1', 'JOINTS', 'Суставы от пальцев до шеи', 'Joints from toes to neck',
     'Мягкая разминка всех суставов сидя: стопы, колени, бёдра, кисти, локти, плечи, шея.',
     'A gentle seated warm-up of every joint: feet, knees, hips, wrists, elbows, shoulders, neck.', PM1),
    ('ex_pm2', 'JOINTS', 'Живот и пищеварение', 'Belly and digestion',
     'Лёжа на спине: колени к груди, перекаты, скрутки, подъёмы ног.',
     'Lying on the back: knees to chest, rolling, twists, leg raises.', PM2),
    ('ex_pm3', 'JOINTS', 'Разбуди энергию', 'Wake up your energy',
     'Бодрые движения из повседневной жизни: тянуть канат, грести, рубить дрова, шагать в приседе.',
     'Lively everyday movements: pulling a rope, rowing, chopping wood, walking in a squat.', PM3),
    ('ex_vajra', 'JOINTS', 'Серия на пятках', 'Kneeling series',
     'Всё — сидя на пятках или из этой позы. Подходит даже после еды.',
     'Everything sitting on the heels or starting from it. Fine even after a meal.', VAJRA_SER),
    ('ex_yang', 'CHARACTER', 'Сила и уверенность', 'Strength and confidence',
     'Позы-образы: толкать, сказать «нет», войти, занять место. Для решимости и ясных границ.',
     'Archetype poses: push, say "no", enter, take up space. For resolve and clear boundaries.', YANG),
    ('ex_yin', 'CHARACTER', 'Мягкость и принятие', 'Softness and acceptance',
     'Позы-образы: отпустить, сказать «да», принять, позаботиться о себе, отдохнуть.',
     'Archetype poses: let go, say "yes", receive, care for yourself, rest.', YIN),
    ('pl_base', 'PILATES', 'Пилатес: основа', 'Pilates basics',
     'Программа для начинающих: сотня, скручивания, круги ногой, серия на пресс, пила, тизер, отжимания.',
     'A beginner routine: hundred, roll up, leg circles, stomach series, saw, teaser, push ups.', PL_BASE),
    ('pl_mat', 'PILATES', 'Классический мат', 'Classic mat',
     'Порядок упражнений Джозефа Пилатеса на коврике: от сотни до тюленя.',
     "Joseph Pilates' mat order: from the hundred to the seal.", PL_MAT),
    ('pl_abs', 'PILATES', 'Сильный пресс', 'Strong core',
     'Пять упражнений на пресс подряд, тизер и планки.',
     'The series of five, teaser and planks.', PL_ABS),
    ('pl_back', 'PILATES', 'Пилатес для спины', 'Pilates for the back',
     'Разгибатели спины и осанка: на четвереньках и лёжа на животе, плавание, брасс, лебедь.',
     'Back extensors and posture: on all fours and on the belly, swimming, breast stroke, swan.', PL_BACK),
    ('pl_glutes', 'PILATES', 'Ягодицы и бёдра', 'Glutes and hips',
     'Мост по позвонку, махи лёжа на боку, «ракушка», планки с подъёмом ноги.',
     'Pelvic curl, side-lying kicks, clam, plank leg pulls.', PL_GLUTES),
    ('pl_stand', 'PILATES', 'Пилатес стоя', 'Standing Pilates',
     'Без коврика: скругления, руки балерины, наклоны, работа стоп, самолёт.',
     'No mat needed: roll downs, ballerina arms, side bends, footwork, aeroplane.', PL_STAND),
    ('pl_flow', 'PILATES', 'Пилатес-йога флоу', 'Pilates-yoga flow',
     'Йога и пилатес в одном потоке: планки, собака, лебедь, тизер, сотня, мост.',
     'Yoga and Pilates in one flow: planks, dog, swan, teaser, hundred, bridge.', PL_FLOW),
]


def kstr(s):
    return '"' + s.replace('\\', '\\\\').replace('"', '\\"') + '"'


def emit(out):
    L = []
    w = L.append
    w('package ru.mudrya.yoga.catalog')
    w('')
    w('import ru.mudrya.yoga.model.Block')
    w('import ru.mudrya.yoga.model.BlockRef')
    w('import ru.mudrya.yoga.model.Breath')
    w('import ru.mudrya.yoga.model.SequenceDef')
    w('import ru.mudrya.yoga.model.Step')
    w('')
    w('// Сгенерировано tools/books17/extra_sets.py — не править руками.')
    w('')
    w('/**')
    w(' * Дополнительные сеты из второй подборки книг (общий протокол йоги, Шивананда, «Хатха-йога прадипика»,')
    w(' * Рамачарака, школа Бихара, М. Шифферс, Embodied Yoga Principles) и раздел «Пилатес-йога».')
    w(' * Позы — из атласа и библиотеки, названия шагов — простым языком.')
    w(' */')
    w('object ExtraSetsCatalog {')
    w('')
    w('    enum class Section(val titleRu: String, val titleEn: String) {')
    for k, ru, en in SECTIONS:
        w(f'        {k}({kstr(ru)}, {kstr(en)}),')
    w('    }')
    w('')
    w('    data class ExtraSet(val id: String, val section: Section, val nameRu: String, val nameEn: String, val hintRu: String, val hintEn: String)')
    w('')
    w('    val sets: List<ExtraSet> = listOf(')
    for sid, sec, nru, nen, hru, hen, _ in SETS:
        w(f'        ExtraSet({kstr(sid)}, Section.{sec}, {kstr(nru)}, {kstr(nen)}, {kstr(hru)}, {kstr(hen)}),')
    w('    )')
    w('')
    w('    private val IN = Breath.INHALE')
    w('    private val EX = Breath.EXHALE')
    w('')
    w('    private fun hold(first: Breath, cycles: Int): List<Breath> =')
    w('        List(cycles * 2) { if (it % 2 == 0) (if (first == IN) EX else IN) else first }')
    w('')
    w('    private fun s(id: String, enter: Breath, cycles: Int, title: String, titleEn: String) =')
    w('        Step(id, enter = listOf(enter), hold = hold(enter, cycles), extraCycles = cycles > 0, titleRu = title, titleEn = titleEn)')
    w('')
    ids = set()
    for sid, _sec, _nru, _nen, _hru, _hen, steps in SETS:
        w(f'    private fun steps_{sid}(): List<Step> = listOf(')
        for pose, ru, en, b in steps:
            br, cyc = BR[b]
            ids.add(pose)
            w(f'        s({kstr(pose)}, {br}, {cyc}, {kstr(ru)}, {kstr(en)}),')
        w('    )')
        w('')
    w('    val blocks: List<Block> by lazy {')
    w('        listOf(')
    for sid, _sec, nru, nen, *_ in SETS:
        w(f'            Block({kstr(sid)}, steps_{sid}(), titleRu = {kstr(nru)}, titleEn = {kstr(nen)}),')
    w('        )')
    w('    }')
    w('')
    w('    val sequences: List<SequenceDef> by lazy { sets.map { SequenceDef(it.id, it.nameRu, it.nameEn, listOf(BlockRef(it.id))) } }')
    w('')
    mir = sorted(i for i in ids if i.startswith('lb_') and i.endswith('_m'))
    w('    /** Зеркальные копии поз библиотеки (левая сторона), нужные сетам. */')
    w('    val mirroredLibraryIds: List<String> = listOf(')
    for i in mir:
        w(f'        {kstr(i)},')
    w('    )')
    w('')
    w('    fun set(id: String): ExtraSet? = sets.firstOrNull { it.id == id }')
    w('}')
    open(out, 'w', encoding='utf-8').write('\n'.join(L) + '\n')
    return ids


if __name__ == '__main__':
    root = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    out = os.path.join(root, 'core/catalog/src/main/kotlin/ru/mudrya/yoga/catalog/ExtraSetsCatalog.kt')
    ids = emit(out)
    # проверка: все позы существуют
    import re
    cat = os.path.join(root, 'core/catalog/src/main/kotlin/ru/mudrya/yoga/catalog/')
    known = set(re.findall(r'Asana\(id = "([^"]+)"', open(cat + 'AtlasCatalog.kt', encoding='utf-8').read()))
    known |= set(re.findall(r'\ba\("(lb_B\d+)"', open(cat + 'LibraryCatalog.kt', encoding='utf-8').read()))
    bad = sorted(i for i in ids if (i[:-2] if i.startswith('lb_') and i.endswith('_m') else i) not in known)
    if bad:
        raise SystemExit('unknown poses: ' + ', '.join(bad))
    for sid, *_r, steps in SETS:
        print(sid, len(steps))
    print('poses', len(ids))
