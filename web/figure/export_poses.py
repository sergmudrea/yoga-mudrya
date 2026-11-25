import asyncio,json
from playwright.async_api import async_playwright
keys=json.load(open('/home/claude/fig2/posekeys.json'))
JS='''([f,m,h])=>{Mudrya.go(f,m,0,h||undefined);const c=__cur();const TW={};for(const n in c.TW){const q=c.TW[n];TW[n]=[q.x,q.y,q.z,q.w].map(v=>+v.toFixed(5));}
const P={};for(const q of c.pts)P[q.name]=[q.v.x,q.v.y,q.v.z].map(v=>+v.toFixed(4)).concat([+q.r.toFixed(3)]);
return {TW,P,hands:c.hands,cam:c.cam,ik:Object.keys(c.ik||{}),kind:c.kind,bd:!!c.bd};}'''
async def main():
  async with async_playwright() as p:
    b=await p.chromium.launch(args=['--use-gl=swiftshader','--enable-webgl','--ignore-gpu-blocklist'])
    pg=await b.new_page(viewport={'width':600,'height':500})
    pg.on('pageerror',lambda e:print('ERR',e))
    await pg.goto('http://localhost:8791/index.html');await pg.wait_for_function('window.Mudrya&&Mudrya.loaded',timeout=60000)
    out={};bad=[]
    for k in keys:
      try: out['%s|%d|%s'%tuple(k)]=await pg.evaluate(JS,k)
      except Exception as e: bad.append((k,str(e)[:100]))
    json.dump(out,open('/home/claude/fig2/poses_tw.json','w'))
    print(len(out),'bad',bad[:5])
    await b.close()
asyncio.run(main())
