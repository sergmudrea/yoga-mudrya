import os
import json,re,unicodedata
from collections import defaultdict,Counter
S=os.path.join(os.path.dirname(os.path.abspath(__file__)),'work')+'/'
R=json.load(open(S+'raw.json',encoding='utf-8'))
CYR=dict(zip('абвгдеёжзийклмнопрстуфхцчшщъыьэюя',['a','b','v','g','d','e','e','zh','z','i','y','k','l','m','n','o','p','r','s','t','u','f','h','ts','ch','sh','sch','','y','','e','yu','ya']))
def translit(s): return ''.join(CYR.get(c,c) for c in s.lower())
def norm(s):
    s=translit(s)
    s=unicodedata.normalize('NFKD',s); s=''.join(c for c in s if not unicodedata.combining(c)).lower()
    s=re.sub(r'\(.*?\)','',s)
    s=re.sub(r'[—\-.,;:*«»"/]',' ',s)
    s=s.replace('sh','s').replace('w','v').replace('ee','i').replace('vrit','vrt').replace('rtt','rt').replace('kh','k').replace('th','t').replace('dh','d').replace('bh','b').replace('ph','p').replace('gh','g').replace('jh','j').replace('ch','c')
    s=s.replace('asana','asana ').replace('  ',' ')
    return re.sub(r'\s+',' ',s).strip()
STRIP={'a','b','c','d','e','f','i','ii','iii','iv','v','vi','1','2','3','4','5','6','7','8','prep','variation','modification','namaskar','namaskara','namaste','salamba','niralamba','parivrta','parsva','ardha','utita','badda','hasta','eka','dvi','pada','prapada','padma','visama','sama','kriya'}
# пары, которые образуют самостоятельную базовую асану (геометрия иная)
KEEP={('badda','konasana'),('upavista','konasana'),('supta','konasana'),('parsva','konasana'),('prasarita','padotanasana'),('ardha','candrasana'),('ardha','matsyendrasana'),('parsva','utanasana'),('adomuka','svanasana'),
      ('pada','sirsasana'),('raja','kapotasana'),('setu','bandasana'),('setu','banda'),('urdva','danurasana'),('urdva','muka'),('ado','muka'),('supta','virasana'),('supta','padangustasana'),('pinca','mayurasana'),('jatara','parivartanasana'),('janu','sirsasana'),('parivrta','trikonasana'),('parivrta','parsvakonasana'),('utita','trikonasana'),('utita','parsvakonasana'),('virabadrasana','')}
JUNK=('also knovn as','dristi point','drishti point','as ')
def base_key(sa,en=''):
    n=norm(sa)
    if not n or any(n.startswith(j) for j in JUNK) or 'asana' not in n:
        return ''
    if ' in ' in n: n=n.split(' in ')[-1]
    t=n.split()
    out=[]
    for i,w in enumerate(t):
        nxt=t[i+1] if i+1<len(t) else ''
        if (w,nxt) in KEEP: out.append(w); continue
        if w in STRIP: continue
        out.append(w)
    idx=[k for k,w in enumerate(out) if w.endswith('asana') or w.endswith('asana ')]
    if not idx: return ' '.join(out)
    r=idx[-1]; out=out[max(0,r-2):r+1]
    # оставить перед корнем только «геометрические» слова
    GEO={'caturanga','makara','kurma','sayana','yoga','upavista','ado','urdva','muka','supta','upavista','badda','prasarita','setu','banda','raja','janu','jatara','parivrta','utita','parsva','ardha','pada','virparita','viparita','sirsa','kapota','candra','surya','yoga','marica','padangusta','danda'}
    keep=[w for w in out[:-1] if w in GEO or (w,out[-1]) in KEEP]
    return ' '.join(keep+[out[-1]])
