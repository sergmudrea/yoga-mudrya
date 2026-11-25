import sys,json,re,csv,os
sys.path.insert(0,''+os.path.dirname(os.path.abspath(__file__))+'')
from registry import *
MERGE={'muka bujangasana':'bujangasana','urdva muka bujangasana':'bujangasana','sirsa bujangasana':'bujangasana','muka jatara parivartanasana':'jatara parivartanasana',
 'jatara supta padmasana':'jatara parivartanasana','supta jatara padmasana':'jatara parivartanasana','jatara padmasana':'jatara parivartanasana','jatara garudasana':'jatara parivartanasana',
 'supta jatara garudasana':'jatara parivartanasana','jatara supta garudasana':'jatara parivartanasana','jatarasana':'jatara parivartanasana','jatara padasana':'jatara parivartanasana',
 'ekapadasana':'padasana','urdva urdva gomukasana':'urdva gomukasana','muka badda konasana':'badda konasana','sirsa parsva konasana':'parsva konasana','prasarita parsva konasana':'parsva konasana',
 'janu halasana':'halasana','muka sirsa makarasana':'ado muka makarasana','prasarita caturanga dandasana':'caturanga dandasana','urdva caturanga dandasana':'caturanga dandasana',
 'sirsa janu sirsasana':'janu sirsasana','supta balasana':'balasana','sirsa prapadasana':'prapadasana','urdva prapadasana':'prapadasana','janu bitilasana':'bitilasana','sirsa bitilasana':'bitilasana'}
for a,b in MERGE.items():
    if a in groups and b in groups: groups[b]+=groups.pop(a)
# мелкие группы, отличающиеся от крупной только уточнением рук, поворота, половины или опоры, — вариации крупной
SOFT={'urdva','viparita','parivrta','utita','parsva','ardha','badda','prapada','eka','dvi','pada','padma','hasta','namaskar','urdvahasta','sirsa','janu','prasarita'}
big={k for k,v in groups.items() if len(v)>=3}
for k in sorted(list(groups)):
    if k in big or k not in groups: continue
    w=k.split(); root=w[-1]; extra=set(w[:-1])
    if root in big and root!=k and extra<=SOFT:
        groups[root]+=groups.pop(k)
# мелкие группы с общим корнем и мягкими уточнениями — одна базовая
byroot=defaultdict(list)
for k in groups:
    w=k.split()
    if len(groups[k])<=2 and set(w[:-1])<=SOFT|{'ado'}: byroot[w[-1]].append(k)
for root,ks in byroot.items():
    if len(ks)>1 and root not in groups:
        main=max(ks,key=lambda k:len(groups[k]))
        for k in ks:
            if k!=main: groups[main]+=groups.pop(k)
base_rec={k:min(v,key=lambda r,k=k:(norm(r['sa'])!=k,)+mod_score(r)) for k,v in groups.items()}
OVR={'caturanga dandasana':'lb_B1129'}
for k,i in OVR.items():
    base_rec[k]=next(r for r in groups[k] if r['id']==i)
# семейства (основное) по типу Лакерды
FAM=['Стоячие','Балансы на ногах','Наклоны вперёд','Прогибы назад','Скрутки','Боковые наклоны','Перевёрнутые','Балансы на руках','Сидячие и раскрытие тазобедренных','Лёжа на спине','Лёжа на животе','На коленях','Восстанавливающие и расслабляющие']
RESTORE={'savasana','balasana','makarasana','nakrasana','supta badda konasana','viparita karani','supta virasana','sukasana'}
def fam_of_type(t,key):
    if key in RESTORE: return 'Восстанавливающие и расслабляющие'
    t=t.replace('fore','')
    if 'перевёрнут' in t: return 'Перевёрнутые'
    if 'баланс на руках' in t: return 'Балансы на руках'
    if 'баланс на одной ноге' in t: return 'Балансы на ногах'
    if t.startswith('лёжа на животе'): return 'Лёжа на животе'
    if 'прогиб' in t and ('стоя' not in t or t.startswith('прогиб')): return 'Прогибы назад'
    if 'on the knees' in t: return 'На коленях'
    if t.startswith('стоя, наклон вперёд, скручивание') or t.startswith('сидя, скручивание') or t.startswith('стоя, скручивание') or t.startswith('сидя, наклон вперёд, скручивание'): return 'Скрутки'
    if 'боковой наклон' in t: return 'Боковые наклоны'
    if 'наклон вперёд' in t and t.startswith('лёжа на спине'): return 'Лёжа на спине'
    if 'наклон вперёд' in t: return 'Наклоны вперёд'
    if t.startswith('лёжа на спине') or 'лёжа на спине' in t: return 'Лёжа на спине'
    if 'прогиб' in t: return 'Прогибы назад'
    if t.startswith('сидя') or 'сидя' in t: return 'Сидячие и раскрытие тазобедренных'
    if t.startswith('стоя'): return 'Стоячие'
    return ''
def family(k):
    b=base_rec[k]; f=fam_of_type(typ(b),k)
    if not f:
        c=Counter(fam_of_type(typ(r),k) for r in groups[k]); c.pop('',None)
        f=c.most_common(1)[0][0] if c else 'Сидячие и раскрытие тазобедренных'
    return f
# атлас: ключевые слова → база (надёжнее, чем разбор составных санскритских слов)
KW=[(r'всадник','utkata konasana'),(r'наклон вперёд сидя|наклон в бабочке','pascimottanasana'),(r'обратная планка','purvottanasana'),(r'широкий наклон','prasarita padottanasana'),(r'поза героя','virasana'),(r'лотос','padmasana'),(r'бабочк','badda konasana'),(r"всадник","utkata konasana"),('собака мордой вниз|упор-горк|горка','ado muka svanasana'),('собака мордой вверх|змеиный прогиб|скользящий прогиб','urdva muka svanasana'),('кобр|бхуджанг','bujangasana'),('сфинкс','bujangasana'),
 ('низкая планка|чатуранг|планк|упор лёжа|горизонтальный упор','caturanga dandasana'),('кошк|бидала|верблюжья спина','bitilasana'),('стойка на голове|ширша|полукольцо в стойке','sirsasana'),('стойк[аи] на плечах|полустойка|березк','sarvangasana'),
 ('плуг','halasana'),('мост','setu banda sarvangasana'),('верблюд|уштрас','ustrasana'),('выпад-полумесяц|полумесяц на колене|ардха чандрасана —','anjaneyasana'),('выпад|ашва санчалан','sancalanasana'),
 ('лягушк','mandukasana'),('широкий сед|наклон в широком седе|широком седе','upavista konasana'),('шпагат','hanumanasana'),('черепах','kurmasana'),('павлин','mayurasana'),('стул','utkatasana'),
 ('ребён|шишуас','balasana'),('пирамид','parsvottanasana'),('скрутка лёжа','jatara parivartanasana'),(r'ноги на \d|ноги вертикально|поднимани[ея] (прямых )?ног|махи','urdva prasarita padasana'),('крокодил','makarasana'),
 ('саранч','salabasana'),('поза горы|^гора','tadasana'),('шавасан|расслабление лёжа','savasana'),('пранамас|поза молитвы','tadasana'),('аштанга намаскар|восемь точек','astangasana'),('лук|дханур','danurasana'),
 ('наклон вперёд|полунаклон|падахаст|наклон с круглой спиной|наклон стоя','uttanasana'),('руки вверх|хаста уттан','urdva hastasana'),('прогиб назад стоя','urdva hastasana'),('боковой наклон','urdva hastasana'),
 ('паук','caturanga dandasana'),('рыб','matsyasana'),('посох','dandasana'),('лодк','navasana'),('ваджрас|на пятках','vajrasana'),('герой|вирасан','virasana'),('лотос','padmasana'),
 (r'связанн\w* угол|бабочк','badda konasana'),('дерев','vriksasana'),('орёл|орла','garudasana'),('треугольн','trikonasana'),('воин','virabadrasana'),(r'голов\w* к колену','janu sirsasana'),(r'западн\w* вытяж|пащимоттан','pascimottanasana'),
 ('коленно-локтевой','bitilasana'),(r'вытяж\w* поясниц|растягивание нижней части спины','pascimottanasana'),('тройное вытяжение|плечевое вытягивание|перевёрнутый .*наклон','prasarita padottanasana'),('стойка-замок','garudasana'),('прямой крест','tadasana'),('руки за голову','navasana'),('низкое вытягивание','balasana'),('железный мост','setu banda sarvangasana'),(r'растягивани\w* (бёдер|передней)','sarvangasana')]
def atlas_key(r):
    ru=r['ru'].lower()
    for pat,k in KW:
        if re.search(pat,ru): return k
    return atlas_map.get(r['id'],'')

NOT_ASANA=re.compile(r'^(вдох|выдох|перекат|«)',re.I)
def build():
    rows=[]; extra=defaultdict(list)
    # атлас
    at_orig=[r for r in at if not r['id'].endswith('_m')]
    at_key={}
    for r in at_orig:
        if NOT_ASANA.search(r['ru']): at_key[r['id']]='!not'; continue
        k=atlas_key(r)
        if k and k not in groups: extra[k].append(r)
        at_key[r['id']]=k or '!doubt'
    for k,v in extra.items(): groups[k]=list(v); base_rec[k]=v[0]
    keys=sorted(groups,key=lambda k:(FAM.index(family(k)), base_rec[k]['ru'].lower()))
    fam={k:family(k) for k in keys}
    bid={k:f'A-{i+1:04d}' for i,k in enumerate(keys)}
    vidx=defaultdict(int); out={}
    for k in keys:
        b=base_rec[k]; seen={}
        for r in sorted(groups[k],key=lambda r:(r is not b, mod_score(r))):
            if r is b: st,iid='Базовая',bid[k]
            elif r['ru'].strip().lower() in seen: st,iid='Дубль',seen[r['ru'].strip().lower()]
            else:
                vidx[k]+=1; st,iid='Вариация',f'{bid[k]}-V{vidx[k]:02d}'
            seen.setdefault(r['ru'].strip().lower(),iid)
            out[r['id']]=(st,iid,k)
    # атлас, привязанный к существующим базам: совпадение с названием базовой — дубль, иначе вариация
    for r in at_orig:
        k=at_key[r['id']]
        if r['id'] in out: continue
        if k=='!not': out[r['id']]=('Не асана (связочное движение)','—','')
        elif k=='!doubt': out[r['id']]=('Сомнительно','—','')
        else:
            b=base_rec[k]
            if r['ru'].strip().lower()==b['ru'].strip().lower(): out[r['id']]=('Дубль',bid[k],k)
            else:
                vidx[k]+=1; out[r['id']]=('Вариация',f'{bid[k]}-V{vidx[k]:02d}',k)
    for r in doubt: out[r['id']]=('Сомнительно','—','')
    for r in at:
        if r['id'].endswith('_m'):
            o=out.get(r['id'][:-2])
            out[r['id']]=('Дубль (другая сторона)',o[1] if o else '—',o[2] if o else '')
    return keys,bid,fam,out
