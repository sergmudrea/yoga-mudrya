import asyncio,sys,json,base64,os,shutil
from playwright.async_api import async_playwright
seq='pranam,hastaut,padah,ashwaR,edog,a8,sarp,edog,ashwaL,padah,hastaut,pranam'.split(',')
FPS=25; W,H=720,540; yaw=float(sys.argv[1]) if len(sys.argv)>1 else 72
out='/home/claude/fig2/film2'; shutil.rmtree(out,ignore_errors=True); os.makedirs(out)
async def main():
  async with async_playwright() as p:
    b=await p.chromium.launch(args=['--use-gl=swiftshader','--enable-webgl','--ignore-gpu-blocklist'])
    pg=await b.new_page(viewport={'width':W,'height':H})
    await pg.goto('http://localhost:8790/index.html');await pg.wait_for_function('window.Mudrya&&Mudrya.loaded',timeout=90000)
    await pg.evaluate("Mudrya.setTheme('light')")
    info=await pg.evaluate("([s,y])=>__tl(s,y,8)",[seq,yaw]); print(info['T'])
    n=int(info['T']*FPS)
    for i in range(n):
      d=await pg.evaluate("t=>__tlFrame(t,1)",info['T']*i/n)
      open(f'{out}/f{i:05d}.jpg','wb').write(base64.b64decode(d.split(',')[1]))
    print('frames',n); await b.close()
asyncio.run(main())
