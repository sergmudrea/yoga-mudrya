const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage();
  await p.goto('file://' + process.argv[2], {waitUntil: 'load', timeout: 0});
  await p.pdf({path: process.argv[3], format: 'A4', printBackground: true, displayHeaderFooter: true,
    headerTemplate: '<div style="font-size:7pt;width:100%;text-align:right;padding-right:16mm;color:#999;font-family:DejaVu Sans">Каталог асан «Мудря йога»</div>',
    footerTemplate: '<div style="font-size:7pt;width:100%;text-align:center;color:#999;font-family:DejaVu Sans"><span class="pageNumber"></span> / <span class="totalPages"></span></div>',
    margin: {top: '18mm', bottom: '18mm', left: '16mm', right: '16mm'}, timeout: 0});
  await b.close();
})();
