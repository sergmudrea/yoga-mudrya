import asyncio,sys,json,base64,os
from playwright.async_api import async_playwright
keys=json.load(open('/home/claude/fig2/seq_sn.json'))[:12]
# убрать повтор подряд
k2=[];[k2.append(k) for k in keys if not k2 or k2[-1]!=k]; keys=k2
FPS=25; TR=1.7; HOLD=.45; W,H=720,540
out='/home/claude/fig2/film'; os.makedirs(out,exist_ok=True)
def ease(x): return x
async def main():
  async with async_playwright() as p:
    b=await p.chromium.launch(args=['--use-gl=swiftshader','--enable-webgl','--ignore-gpu-blocklist'])
    pg=await b.new_page(viewport={'width':W,'height':H})
    await pg.goto('http://localhost:8790/index.html');await pg.wait_for_function('window.Mudrya&&Mudrya.loaded',timeout=90000)
    await pg.evaluate("Mudrya.setTheme('light')")
    info=await pg.evaluate("([k,y,p])=>__filmInit(k,y,p)",[keys,28,9]); print(info, keys)
    n=0; total=info['n']*(int(HOLD*FPS)+int(TR*FPS))
    for i in range(info['n']):
      frames=[0.0]*int(HOLD*FPS)+[ (j+1)/int(TR*FPS) for j in range(int(TR*FPS))]
      for k in frames:
        d=await pg.evaluate("([i,k,g])=>__filmFrame(i,k,g)",[i,k,n/total])
        open(f'{out}/f{n:05d}.jpg','wb').write(base64.b64decode(d.split(',')[1])); n+=1
      print(i,n,flush=True)
    await b.close()
asyncio.run(main())
