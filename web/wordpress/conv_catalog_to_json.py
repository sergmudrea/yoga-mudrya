import re,json
src=open('/home/claude/yoga-mudrya/core/catalog/src/main/kotlin/ru/mudrya/yoga/catalog/AtlasCatalog.kt').read()
def kstr(s):
    return None if s=='null' else json.loads(s)
STR=r'("(?:[^"\\]|\\.)*"|null)'
# asanas
A={}
for m in re.finditer(r'Asana\(id = "([^"]+)", nameRu = '+STR+r', nameEn = '+STR+r'.*?figure = FigureRef\("([^"]+)", (true|false)(?:, hands = HandShape\.(\w+))?\)',src,re.S):
    A[m.group(1)]={'n':kstr(m.group(2)),'f':m.group(4),'m':m.group(5)=='true','h':(m.group(6) or '').lower() or None}
# blocks
B={}
for m in re.finditer(r'Block\("([^"]+)", titleRu = '+STR+r', titleEn = '+STR+r', steps = listOf\((.*?)\n    \)\)',src,re.S):
    steps=[]
    for s in re.finditer(r's\("([^"]+)", listOf\(([^)]*)\), (?:listOf\(([^)]*)\)|emptyList\(\)), '+STR+', '+STR+', '+STR+', '+STR+r'(, dog = true)?\)',m.group(4)):
        br=lambda x:[1 if t.strip()=='IN' else 0 for t in (x or '').split(',') if t.strip()]
        steps.append({'a':s.group(1),'e':br(s.group(2)),'h':br(s.group(3)),'t':kstr(s.group(4)),'c':kstr(s.group(5))})
    B[m.group(1)]={'t':kstr(m.group(2)),'s':steps}
S=[]
for m in re.finditer(r'SequenceDef\(id = "([^"]+)", nameRu = '+STR+r', nameEn = '+STR+r', items = listOf\((.*?)\)\)',src):
    items=re.findall(r'BlockRef\("([^"]+)", Side\.(\w+)',m.group(4))
    S.append({'id':m.group(1),'n':kstr(m.group(2)),'b':[i[0] for i in items]})
miss=[s['a'] for b in B.values() for s in b['s'] if s['a'] not in A]
print(len(A),len(B),sum(len(b['s']) for b in B.values()),len(S),'missing',len(miss),miss[:5])
print([ (s['id'],s['n'],sum(len(B[b]['s']) for b in s['b'] if b in B)) for s in S])
json.dump({'A':A,'B':B,'S':S},open('plugin/mudrya-hub/app/data.json','w'),ensure_ascii=False,separators=(',',':'))
