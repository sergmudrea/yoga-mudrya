import sys,json,re,os
sys.path.insert(0,''+os.path.dirname(os.path.abspath(__file__))+'')
from group2 import *
lib=[r for r in R if r['src']=='Лакерда']; at=[r for r in R if r['src']!='Лакерда']
groups=defaultdict(list); junk=[]
for r in lib:
    k=base_key(r['sa'],r['en']); (groups[k] if k else junk).append(r)
def typ(r):
    m=re.search(r'Тип: ([^.]*)\.',r.get('long','')); return m.group(1) if m else ''
MODS_RU=re.compile(r'(подготовк|вариант|скручен|связан|полу|боков|на одной|на носк|с опорой|без опоры|в замке|замок|захват|колен[оаи]? (согнут|на полу)|ладони вместе|руки |рука |кист|ладон|на предплеч|на локт|с блоком|у стены|наклон|прогиб|:|,)',re.I)
def mod_score(r):
    n=norm(r['sa']); ru=r['ru']
    return (r['src']!='Лакерда', (':' in ru) or (',' in ru), 'подготов' in ru.lower(), bool(re.search(r'\b[A-DА-Г1-9]\b|\d',ru)), len(MODS_RU.findall(ru)), len(n.split()), len(ru))
# базовая запись группы — с наименьшим числом уточнений
base_rec={k:min(v,key=lambda r,k=k:(norm(r['sa'])!=k,)+mod_score(r)) for k,v in groups.items()}
# мусорные санскритские имена — по русскому названию к группе с тем же началом
ru_index={}
for k,b in base_rec.items():
    head=re.split(r'[,:(]',b['ru'])[0].strip().lower()
    ru_index.setdefault(head,k)
def ru_head(ru): return re.split(r'[,:(]',ru)[0].strip().lower()
def find_by_ru(ru):
    h=ru_head(ru)
    if h in ru_index: return ru_index[h]
    # самое длинное совпадение начала
    best=''
    for head,k in ru_index.items():
        if len(head)>len(best) and (h.startswith(head) or head.startswith(h)) and len(head)>=6: best=head
    return ru_index.get(best,'')
doubt=[]
for r in junk:
    k=find_by_ru(r['ru'])
    if k: groups[k].append(r); r['_via']='ru'
    else: doubt.append(r)
compact={k.replace(' ',''):k for k in groups}
MOVE=re.compile(r'^(вдох|выдох|переход|прыж|шаг|подъём|подъем|опускан|раскач|вращен|скольж|перекат|возврат|покачив|встрях|выход|вход|подтяг|разворот|поворот головы|круг|дыхани|отдых)',re.I)
atlas_map={}
for r in at:
    if r['id'].endswith('_m'): continue
    c=norm(r['sa']).replace(' ','') if r['sa'] else ''
    k=''
    if c:
        cands=[ck for ck in compact if ck and ck in c]
        if cands: k=compact[max(cands,key=len)]
    if not k: k=find_by_ru(r['ru'])
    atlas_map[r['id']]=k
