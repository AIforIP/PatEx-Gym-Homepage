import {chromium} from 'playwright';
import {mkdir,writeFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
await mkdir('qa',{recursive:true});
const browser=await chromium.launch({headless:true});
const report=[];
for(const width of [1440,375,768]){
 const page=await browser.newPage({viewport:{width,height:1000},reducedMotion:'reduce'});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:4173/',{waitUntil:'networkidle'});
 await page.evaluate(()=>document.fonts.ready);
 assert.equal(await page.locator('h1').count(),1);
 const overflow=await page.evaluate(()=>({viewport:innerWidth,document:document.documentElement.scrollWidth,offenders:[...document.querySelectorAll('body *')].filter(e=>e.getBoundingClientRect().right>innerWidth+1).map(e=>({tag:e.tagName,class:e.className})).slice(0,15)}));
 assert.ok(overflow.document<=width,JSON.stringify(overflow));
 const badAnchors=await page.locator('a[href^="#"]').evaluateAll(links=>links.map(a=>a.getAttribute('href')).filter(h=>!document.getElementById(h.slice(1))));
 assert.deepEqual(badAnchors,[]);
 if(width===375){
 const button=page.locator('button[aria-controls="main-navigation"]');
 await button.click();assert.equal(await button.getAttribute('aria-expanded'),'true');
 await page.keyboard.press('Escape');assert.equal(await button.getAttribute('aria-expanded'),'false');assert.equal(await button.evaluate(e=>e===document.activeElement),true);
 await button.click();await page.getByRole('navigation').getByRole('link',{name:'Framework',exact:true}).click();
 assert.equal(await button.getAttribute('aria-expanded'),'false');
 await page.waitForFunction(()=>document.querySelector('.navigation a[href="#framework"]').getAttribute('aria-current')==='location');
 await page.goto('http://127.0.0.1:4173/',{waitUntil:'networkidle'});
 }
 assert.deepEqual(errors,[]);
 await page.evaluate(()=>{if(document.activeElement instanceof HTMLElement)document.activeElement.blur()});
 await page.screenshot({path:'qa/'+width+'-full.png',fullPage:true});
 await page.screenshot({path:'qa/'+width+'-hero.png'});
 for(const section of ['framework','overview'])await page.locator('#'+section).screenshot({path:'qa/'+width+'-'+section+'.png',style:'.site-header,.skip-link{visibility:hidden!important}'});
 report.push({width,overflow:overflow.document,anchors:'passed',javascriptErrors:errors,mobileMenu:width===375?'passed':'not applicable'});
 await page.close();
}
await browser.close();
await writeFile('qa/results.json',JSON.stringify(report,null,2));
console.log(JSON.stringify(report,null,2));
