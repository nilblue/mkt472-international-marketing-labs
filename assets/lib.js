/* MKT472 International Marketing Labs — shared library
   Plain JS, no dependencies. Each app page calls Lab.page({...}) then builds into Lab.app.
   Note: rich-text strings passed as `html` are authored teaching content bundled in this repo (never user input). */
(function(){
const LECTURES = [
 {n:1,w:1,topic:"Principles of Marketing, Competitive Advantage & Global Industries",app:"Competitive Advantage & Industry Globalization Lab",kind:"Simulation",desc:"Tune benefits and price to see customer value (V = B/P), then place industries on the multidomestic-to-global spectrum."},
 {n:2,w:1,topic:"Global Marketing Defined & Management Orientations (EPRG)",app:"EPRG Orientation Diagnostic",kind:"Diagnostic",desc:"Profile a company's practices to reveal whether it is ethnocentric, polycentric, regiocentric or geocentric; then balance driving vs restraining forces."},
 {n:3,w:2,topic:"World Economy Overview & Economic Systems",app:"Economic Systems Matrix",kind:"Interactive map",desc:"Place economies on the resource-allocation × ownership grid and compare market capitalism to centrally planned socialism."},
 {n:4,w:2,topic:"Stages of Market Development, Balance of Payments & Trade",app:"Balance of Payments Builder",kind:"Simulation",desc:"Record international transactions and watch the current and financial accounts update; classify countries by income stage."},
 {n:5,w:3,topic:"WTO, GATT & Preferential Trade Agreements",app:"Integration Ladder & Trade-Diversion Simulator",kind:"Simulation",desc:"Climb from FTA to economic union and see how a tariff preference shifts sourcing away from the cheapest supplier."},
 {n:6,w:3,topic:"Regional Trade & Integration Around the World",app:"Regional Bloc Explorer",kind:"Explorer + quiz",desc:"Explore major trade blocs (EU, ASEAN, USMCA, GCC, AfCFTA, SAFTA and more), then test yourself."},
 {n:7,w:4,topic:"Society, Culture & High/Low-Context Cultures",app:"High/Low-Context Negotiation Simulator",kind:"Role-play",desc:"Handle cross-cultural business scenarios and learn to read explicit vs implicit communication."},
 {n:8,w:4,topic:"Hofstede, Self-Reference Criterion & Diffusion Theory",app:"Hofstede Comparator + Diffusion Simulator",kind:"Simulation",desc:"Compare countries on cultural dimensions and simulate product adoption with the Bass diffusion model."},
 {n:9,w:5,topic:"Political Environment & International Law",app:"Political Risk Scorecard",kind:"Calculator",desc:"Weigh sovereignty, expropriation, tax and stability risks to build a country political-risk index."},
 {n:10,w:5,topic:"IP, Bribery, Conflict Resolution & Regulation",app:"Legal Dilemmas Game",kind:"Decision game",desc:"Navigate IP infringement, facilitation payments and contract disputes; see the legal and reputational fallout."},
 {n:11,w:6,topic:"IT, MIS, Big Data & Market Information Sources",app:"Market Intelligence Source Evaluator",kind:"Classifier",desc:"Sort information sources and rate their credibility for a global market decision."},
 {n:12,w:6,topic:"Formal Market Research (Steps 1–8) & HQ Control",app:"Research Process Builder + Sample Size Calculator",kind:"Sequencer",desc:"Put the eight research steps in order, then size a multi-country survey."},
 {n:13,w:7,topic:"Global Market Segmentation",app:"Global Segment Builder",kind:"Classifier",desc:"Match segmentation variables to their bases and profile cross-border segments."},
 {n:14,w:7,topic:"Market Potential, Targeting & Positioning",app:"Market Potential & Positioning Lab",kind:"Calculator",desc:"Estimate market potential with the chain-ratio method, pick a targeting strategy, and plot a positioning map."},
 {n:15,w:8,topic:"Export/Import, National Policies & Tariff Systems",app:"Landed Cost & Tariff Calculator",kind:"Calculator",desc:"Compute CIF value, specific/ad valorem/compound duties and the importer's landed cost."},
 {n:16,w:8,topic:"Organizing for Exporting, Trade Finance & Payment",app:"Payment Methods Risk Simulator",kind:"Simulation",desc:"Compare cash-in-advance, L/C, documentary collection and open account; sequence the letter-of-credit process."},
 {n:17,w:9,topic:"Market-Entry: Licensing & Investment",app:"Entry Mode Selector",kind:"Decision tool",desc:"Weight control, risk, resources and speed to recommend exporting, licensing, franchising, JV or a wholly owned subsidiary."},
 {n:18,w:9,topic:"Strategic Partnerships, Asian Cooperative Strategies & Expansion",app:"Alliance Partner Fit & Expansion Matrix",kind:"Simulation",desc:"Score potential partners and pick a country/segment expansion strategy."},
 {n:19,w:10,topic:"Branding, Local vs Global Brands & Country of Origin",app:"Country-of-Origin Effect Lab",kind:"Experiment",desc:"Run a mini perception experiment where only the 'Made in' label changes, and classify brands as local, international or global."},
 {n:20,w:10,topic:"Extend, Adapt, Create & New Product Development",app:"Product–Communication Strategy Matrix",kind:"Classifier",desc:"Match cases to the five product/communication strategies and compare their costs."},
 {n:21,w:11,topic:"Pricing Concepts, Objectives & Incoterms",app:"Incoterms 2020 Explorer + Price Escalation",kind:"Simulation",desc:"See where cost and risk pass from seller to buyer under each Incoterm, and how channels escalate export prices."},
 {n:22,w:11,topic:"Gray Markets, Dumping, Transfer Pricing & Countertrade",app:"Gray Market & Transfer Pricing Simulator",kind:"Simulation",desc:"Find the price gap that triggers parallel imports and test transfer prices against two tax regimes."},
 {n:23,w:12,topic:"Channel Structure, Intermediaries & Global Retail",app:"Channel Designer",kind:"Simulation",desc:"Add or remove intermediaries and watch margins stack up into the consumer price."},
 {n:24,w:12,topic:"Physical Distribution, Supply Chains & Logistics",app:"Logistics Total-Cost Optimizer",kind:"Simulation",desc:"Trade off freight cost, transit time and inventory carrying cost across sea, air, rail and road."},
 {n:25,w:13,topic:"Global Advertising: Standardization vs Adaptation & Agencies",app:"Standardize-or-Adapt Advertising Scorer",kind:"Decision tool",desc:"Score a campaign's context to decide how far to standardize, and pick an agency model."},
 {n:26,w:13,topic:"Creating Global Advertising, Media & PR",app:"Global Media Planner & Copy Checker",kind:"Simulation",desc:"Allocate a budget across media to maximise reach, then audit ad copy for cultural pitfalls."},
 {n:27,w:14,topic:"Sales Promotion & Personal Selling (Consultative Model)",app:"Promotion ROI + Consultative Selling Role-play",kind:"Simulation",desc:"Test coupon and sampling economics, then walk through a consultative selling conversation."},
 {n:28,w:14,topic:"Direct Marketing, Sponsorship & Digital Convergence",app:"Direct Marketing & Sponsorship Calculator",kind:"Calculator",desc:"Find the break-even response rate for a campaign and evaluate a sponsorship's value."},
 {n:29,w:15,topic:"Global E-Commerce, Web Design & New Digital Products",app:"Global Website Localization Audit",kind:"Audit tool",desc:"Audit a site's localization and simulate the cross-border e-commerce conversion funnel."},
 {n:30,w:15,topic:"Industry Analysis & National Competitive Advantage",app:"Five Forces & Porter's Diamond Analyzer",kind:"Analyzer",desc:"Rate industry forces and national diamond factors, and see the profile as a radar chart."},
 {n:31,w:16,topic:"Leadership & Organizing for Global Marketing",app:"Global Structure Selector",kind:"Decision tool",desc:"Use foreign-sales share and product diversity to choose between international division, area, product and matrix structures."},
 {n:32,w:16,topic:"Lean Production, Ethics & CSR",app:"CSR Stakeholder Dilemma Simulator",kind:"Decision game",desc:"Make supply-chain and marketing decisions and track profit, people and planet scores."}
];
const WEEKS = {1:"Introduction to Global Marketing",2:"The Global Economic Environment",3:"The Global Trade Environment",4:"Social and Cultural Environments",5:"Political, Legal & Regulatory Environments",6:"Global Information Systems & Market Research",7:"Segmentation, Targeting & Positioning",8:"Importing, Exporting & Sourcing",9:"Market-Entry Strategies & Alliances",10:"Brand and Product Decisions",11:"Pricing Decisions",12:"Channels & Physical Distribution",13:"Global Marketing Communications I",14:"Communications II & Digital Revolution",15:"Digital Commerce & Strategic Advantage",16:"Leadership, Organization & CSR"};
const CLO = {1:"CLO1",2:"CLO1",3:"CLO1",4:"CLO1",5:"CLO1",6:"CLO1",7:"CLO2",8:"CLO2",9:"CLO2",10:"CLO2",11:"CLO2",12:"CLO2",13:"CLO3",14:"CLO3",15:"CLO2",16:"CLO2",17:"CLO4",18:"CLO4",19:"CLO3",20:"CLO3",21:"CLO3",22:"CLO3",23:"CLO3",24:"CLO3",25:"CLO3",26:"CLO3",27:"CLO5",28:"CLO5",29:"CLO5",30:"CLO5",31:"CLO4",32:"CLO4"};

const clear = e => { e.replaceChildren(); return e; };
const markup = str => document.createRange().createContextualFragment(str); // authored content only
function h(tag, attrs, ...kids){
  const e = document.createElement(tag);
  if(attrs) for(const k in attrs){
    const v = attrs[k];
    if(v==null || v===false) continue;
    if(k==='class') e.className=v;
    else if(k==='html') e.append(markup(v));
    else if(k==='style' && typeof v==='object') Object.assign(e.style,v);
    else if(k.startsWith('on')) e.addEventListener(k.slice(2),v);
    else e.setAttribute(k,v===true?'':v);
  }
  for(const c of kids.flat()){ if(c==null||c===false) continue; e.append(c.nodeType?c:document.createTextNode(String(c))); }
  return e;
}
const pad = n => String(n).padStart(2,'0');
const fmt = (n,d=0) => (isFinite(n)? Number(n).toLocaleString('en-US',{minimumFractionDigits:d,maximumFractionDigits:d}) : '—');
const money = (n,d=0,cur='$') => (n<0?'-':'')+cur+fmt(Math.abs(n),d);
const pct = (n,d=0) => fmt(n*100,d)+'%';
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
const shuffle = a => { a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; };

function page(cfg){
  const L = LECTURES.find(x=>x.n===cfg.n);
  document.title = `L${pad(L.n)} · ${L.app} | MKT472`;
  const root = clear(document.body);
  const prev = LECTURES.find(x=>x.n===L.n-1), next = LECTURES.find(x=>x.n===L.n+1);
  root.append(
    h('header',{class:'top'}, h('div',{class:'wrap'},
      h('a',{class:'brand',href:'../index.html'},'MKT472 Labs ',h('span',null,'· International Marketing')),
      h('div',{class:'navlinks'},
        prev && h('a',{class:'btn',href:`L${pad(prev.n)}.html`},'← L'+prev.n),
        h('a',{class:'btn',href:'../index.html'},'All labs'),
        next && h('a',{class:'btn',href:`L${pad(next.n)}.html`},'L'+next.n+' →')
      ))),
    h('main',{class:'wrap'},
      h('section',{class:'hero'},
        h('div',{class:'kicker'},`Week ${L.w} · Lecture ${L.n} · ${WEEKS[L.w]}`),
        h('h1',null,L.app),
        h('p',{class:'lead'},L.topic+' — '+L.desc),
        h('div',{class:'tags'}, h('span',{class:'tag'},L.kind), h('span',{class:'tag'},CLO[L.n]))
      ),
      cfg.primer && h('section',{class:'card primer'},
        h('h2',null,'Concept primer'),
        h('ul',null, cfg.primer.map(p=>h('li',{html:p})))
      ),
      Lab.app = h('section',{id:'app'}),
      cfg.discussion && h('section',{class:'card discuss'},
        h('h2',null,'Discuss & reflect'),
        h('ol',null, cfg.discussion.map(p=>h('li',{html:p})))
      ),
      h('div',{class:'pager'},
        prev ? h('a',{class:'btn',href:`L${pad(prev.n)}.html`},'← '+prev.app) : h('span'),
        next ? h('a',{class:'btn',href:`L${pad(next.n)}.html`},next.app+' →') : h('span')
      )
    ),
    h('footer',null,h('div',{class:'wrap'},'MKT472 International Marketing · Department of Management Sciences, COMSATS University Islamabad, Wah Campus · Instructor: Abid Naeem. Figures in these labs are simplified or illustrative for teaching; verify real-world data before using it in assignments.'))
  );
  return Lab.app;
}

function card(title, ...kids){ return h('div',{class:'card'}, title && h('h2',null,title), ...kids); }

function slider(o){ // {label,min,max,step,value,fmt,oninput,hint}
  const out = h('output');
  const inp = h('input',{type:'range',min:o.min,max:o.max,step:o.step||1,value:o.value,'aria-label':o.label});
  const f = o.fmt || (v=>v);
  const upd = ()=>{ out.textContent=f(+inp.value); o.oninput && o.oninput(+inp.value); };
  inp.addEventListener('input',upd);
  const wrap = h('div',{class:'ctl'}, h('label',null, h('span',null,o.label), out), inp, o.hint && h('div',{class:'small muted'},o.hint));
  wrap.input=inp; wrap.get=()=>+inp.value; wrap.set=v=>{inp.value=v;upd();};
  out.textContent=f(+o.value);
  return wrap;
}
function numInput(o){
  const inp=h('input',{type:'number',value:o.value,step:o.step||'any',min:o.min,'aria-label':o.label});
  inp.addEventListener('input',()=>o.oninput&&o.oninput(+inp.value));
  const w=h('div',{class:'ctl'},h('label',null,h('span',null,o.label)),inp);
  w.get=()=>+inp.value; w.input=inp; return w;
}
function selectBox(o){ // {label, options:[[v,t]], value, onchange}
  const sel=h('select',{'aria-label':o.label||'select'},o.options.map(([v,t])=>h('option',{value:v, selected: v==o.value?true:null},t)));
  sel.addEventListener('change',()=>o.onchange&&o.onchange(sel.value));
  const w=h('div',{class:'ctl'}, o.label && h('label',null,h('span',null,o.label)), sel); w.get=()=>sel.value; w.input=sel; return w;
}
function stat(label){ const v=h('div',{class:'v'},'—'); const e=h('div',{class:'stat'},h('div',{class:'l'},label),v); e.set=t=>{v.textContent=t;}; e.v=v; return e; }
function fb(kind,html){ return h('div',{class:'fb '+kind,html}); }
function cssVar(n){ return getComputedStyle(document.documentElement).getPropertyValue(n).trim(); }
const SERIES=['--c1','--c2','--c3','--c4','--c5','--c6'];

/* ---------- Charts (SVG) ---------- */
const NS='http://www.w3.org/2000/svg';
function s(tag,attrs,...kids){ const e=document.createElementNS(NS,tag); for(const k in attrs||{}) e.setAttribute(k,attrs[k]); kids.flat().forEach(c=>c!=null&&e.append(c.nodeType?c:document.createTextNode(c))); return e; }
function bars(el, data, o={}){ // data [{label,value,color?}]
  clear(el);
  const W=o.width||Math.max(300,Math.min(el.clientWidth||600,720)), rowH=o.rowH||30, lw=Math.min(o.labelW||170,Math.round(W*0.42)), H=data.length*rowH+10;
  const fit=t=>{ const maxc=Math.floor((lw-12)/6.6); t=String(t); return t.length>maxc? t.slice(0,maxc-1)+'…' : t; };
  const max=o.max ?? Math.max(1e-9,...data.map(d=>d.value));
  const min=o.min ?? Math.min(0,...data.map(d=>d.value));
  const span=max-min||1, plotW=W-lw-80, x0=lw+(0-min)/span*plotW;
  const svg=s('svg',{viewBox:`0 0 ${W} ${H}`,width:'100%',style:`max-width:${W}px`,role:'img'});
  data.forEach((d,i)=>{
    const y=5+i*rowH, x=lw+(Math.min(0,d.value)-min)/span*plotW, w=Math.abs(d.value)/span*plotW;
    svg.append(s('text',{x:lw-8,y:y+rowH/2+4,'text-anchor':'end','font-size':13},s('title',null,d.label),fit(d.label)));
    svg.append(s('rect',{x,y:y+5,width:Math.max(w,1),height:rowH-10,rx:4,fill:cssVar(d.color||'--c1')}));
    svg.append(s('text',{x:(d.value<0?x-4:x+w+6),y:y+rowH/2+4,'font-size':12,'text-anchor':d.value<0?'end':'start',fill:cssVar('--muted')},o.fmt?o.fmt(d.value):fmt(d.value,1)));
  });
  if(min<0) svg.append(s('line',{x1:x0,x2:x0,y1:0,y2:H,stroke:cssVar('--muted')}));
  el.append(svg);
}
function radar(el, axes, series, o={}){ // axes [labels], series [{name, values, color}]
  clear(el);
  const W=o.size||420, c=W/2, R=W/2-80, max=o.max||10, n=axes.length;
  const svg=s('svg',{viewBox:`0 0 ${W} ${W}`,width:'100%',style:`max-width:${W+40}px;display:block;margin:auto`,role:'img'});
  const pt=(i,r)=>[c+r*Math.sin(2*Math.PI*i/n), c-r*Math.cos(2*Math.PI*i/n)];
  for(let k=1;k<=4;k++){ svg.append(s('polygon',{points:axes.map((_,i)=>pt(i,R*k/4).join(',')).join(' '),fill:'none',stroke:cssVar('--border')})); }
  axes.forEach((a,i)=>{ const [x,y]=pt(i,R); svg.append(s('line',{x1:c,y1:c,x2:x,y2:y,stroke:cssVar('--border')}));
    const [lx,ly]=pt(i,R+18); svg.append(s('text',{x:lx,y:ly+4,'text-anchor':Math.abs(lx-c)<5?'middle':(lx>c?'start':'end'),'font-size':12},a)); });
  series.forEach((sr,j)=>{ const col=cssVar(sr.color||SERIES[j%6]);
    svg.append(s('polygon',{points:sr.values.map((v,i)=>pt(i,R*clamp(v,0,max)/max).join(',')).join(' '),fill:col,'fill-opacity':.15,stroke:col,'stroke-width':2}));
    sr.values.forEach((v,i)=>{const [x,y]=pt(i,R*clamp(v,0,max)/max); svg.append(s('circle',{cx:x,cy:y,r:3.5,fill:col}));});
  });
  el.append(svg);
  if(series.length>1) el.append(legend(series));
}
function legend(series){ return h('div',{class:'row small',style:{justifyContent:'center',marginTop:'6px'}}, series.map((sr,j)=>h('span',{class:'row',style:{gap:'4px'}}, h('i',{style:{display:'inline-block',width:'12px',height:'12px',borderRadius:'3px',background:cssVar(sr.color||SERIES[j%6])}}), sr.name))); }
function line(el, series, o={}){ // series [{name, points:[[x,y]], color, dash}]
  clear(el);
  const W=o.width||640,H=o.height||300,m={l:56,r:16,t:14,b:40};
  const all=series.flatMap(q=>q.points);
  const xmin=o.xmin??Math.min(...all.map(p=>p[0])), xmax=o.xmax??Math.max(...all.map(p=>p[0]));
  const ymin=o.ymin??Math.min(0,...all.map(p=>p[1])), ymax=o.ymax??(Math.max(...all.map(p=>p[1]))*1.05||1);
  const X=x=>m.l+(x-xmin)/(xmax-xmin||1)*(W-m.l-m.r), Y=y=>H-m.b-(y-ymin)/(ymax-ymin||1)*(H-m.t-m.b);
  const svg=s('svg',{viewBox:`0 0 ${W} ${H}`,width:'100%',role:'img'});
  for(let k=0;k<=4;k++){ const yv=ymin+(ymax-ymin)*k/4; svg.append(s('line',{x1:m.l,x2:W-m.r,y1:Y(yv),y2:Y(yv),stroke:cssVar('--border'),'stroke-dasharray':k?'3 3':''}));
    svg.append(s('text',{x:m.l-6,y:Y(yv)+4,'text-anchor':'end','font-size':11,fill:cssVar('--muted')},o.yfmt?o.yfmt(yv):fmt(yv))); }
  const ticks=o.xticks||5; for(let k=0;k<=ticks;k++){ const xv=xmin+(xmax-xmin)*k/ticks; svg.append(s('text',{x:X(xv),y:H-m.b+16,'text-anchor':'middle','font-size':11,fill:cssVar('--muted')},o.xfmt?o.xfmt(xv):fmt(xv))); }
  if(o.xlabel) svg.append(s('text',{x:(W+m.l)/2,y:H-4,'text-anchor':'middle','font-size':12,fill:cssVar('--muted')},o.xlabel));
  series.forEach((sr,j)=>{ const col=cssVar(sr.color||SERIES[j%6]);
    svg.append(s('polyline',{points:sr.points.map(p=>X(p[0])+','+Y(p[1])).join(' '),fill:'none',stroke:col,'stroke-width':2.5,'stroke-linejoin':'round','stroke-dasharray':sr.dash||''}));
  });
  (o.marks||[]).forEach(mk=>{ svg.append(s('line',{x1:X(mk.x),x2:X(mk.x),y1:m.t,y2:H-m.b,stroke:cssVar('--accent2'),'stroke-dasharray':'4 3'})); svg.append(s('text',{x:X(mk.x)+4,y:m.t+12,'font-size':11,fill:cssVar('--accent2')},mk.label)); });
  el.append(svg); if(series.length>1) el.append(legend(series));
}

/* ---------- Engines ---------- */
function quiz(el, items, o={}){ // items [{q, options:[], answer:index, explain}]
  let i=0, score=0; const list=o.shuffle===false?items:shuffle(items);
  function render(){
    clear(el);
    if(i>=list.length){ el.append(h('h3',null,`Score: ${score} / ${list.length}`), fb(score/list.length>=.7?'good':'warn', score/list.length>=.7?'Well done — you have a solid grasp of this topic.':'Review the primer and try again.'), h('button',{class:'primary',style:{marginTop:'10px'},onclick:()=>{i=0;score=0;render();}},'Try again')); return; }
    const it=list[i];
    el.append(h('div',{class:'row small muted'},`Question ${i+1} of ${list.length}`), h('div',{class:'progress',style:{margin:'6px 0 12px'}},h('i',{style:{width:(i/list.length*100)+'%'}})), h('h3',null,it.q));
    const box=h('div'); let done=false;
    it.options.forEach((op,k)=>{ const b=h('button',{class:'opt',onclick:()=>{ if(done) return; done=true;
      if(k===it.answer){score++; b.classList.add('right');} else { b.classList.add('wrong'); box.children[it.answer].classList.add('right'); }
      el.append(fb(k===it.answer?'good':'bad',(k===it.answer?'<b>Correct.</b> ':'<b>Not quite.</b> ')+(it.explain||'')), h('button',{class:'primary',style:{marginTop:'10px'},onclick:()=>{i++;render();}}, i+1<list.length?'Next question':'See score'));
    }},op); box.append(b); });
    el.append(box);
  }
  render();
}
function classify(el, cfg){ // {bins:[names], items:[{text, bin, why}], prompt}
  let pick=null; const placed={};
  const pool=h('div'), binsEl=h('div',{class:'grid3',style:{marginTop:'12px'}}), out=h('div');
  const items=shuffle(cfg.items);
  function render(){
    clear(pool); clear(binsEl);
    pool.append(h('div',{class:'small muted'}, cfg.prompt || 'Click an item, then click the category it belongs to. Click a placed item to send it back.'));
    items.forEach((it,idx)=>{ if(placed[idx]==null) pool.append(h('button',{class:'chip'+(pick===idx?' sel':''),onclick:()=>{pick=idx;render();}},it.text)); });
    cfg.bins.forEach((b,bi)=>{ binsEl.append(h('div',{class:'bin',onclick:()=>{ if(pick==null) return; placed[pick]=bi; pick=null; render(); }},
      h('h3',null,b), items.map((it,idx)=>placed[idx]===bi? h('button',{class:'chip',title:'Click to return',onclick:(e)=>{e.stopPropagation(); delete placed[idx]; render();}},it.text):null))); });
  }
  const check=h('button',{class:'primary',style:{marginTop:'12px'},onclick:()=>{
    clear(out); let ok=0; const rows=[];
    items.forEach((it,idx)=>{ const good=placed[idx]===it.bin; if(good) ok++; rows.push(h('tr',null,h('td',null,it.text),h('td',null,placed[idx]==null?'—':cfg.bins[placed[idx]]),h('td',null,good?'✓':'✗ '+cfg.bins[it.bin]),h('td',{class:'small muted'},it.why||''))); });
    out.append(fb(ok===items.length?'good':ok/items.length>=.6?'warn':'bad',`<b>${ok} of ${items.length} correct.</b>`), h('div',{class:'tablewrap'},h('table',null,h('tr',null,h('th',null,'Item'),h('th',null,'Your answer'),h('th',null,'Correct'),h('th',null,'Why')),rows)));
  }},'Check answers');
  const reset=h('button',{style:{marginTop:'12px'},onclick:()=>{for(const k in placed) delete placed[k]; pick=null; clear(out); render();}},'Reset');
  el.append(pool,binsEl,h('div',{class:'row'},check,reset),out); render();
}
function sequence(el, cfg){ // {steps:[text in correct order], explain, prompt}
  let order=shuffle(cfg.steps.map((t,i)=>i)); if(order.every((v,i)=>v===i)) order.reverse();
  const ol=h('ol',{class:'seq'}), out=h('div');
  function render(marks){ clear(ol); order.forEach((si,pos)=>{ ol.append(h('li',{class:marks?(si===pos?'ok':'no'):''}, h('b',null,pos+1+'.'), h('span',null,cfg.steps[si]),
      h('button',{'aria-label':'Move up',onclick:()=>{ if(pos>0){[order[pos-1],order[pos]]=[order[pos],order[pos-1]]; clear(out); render();}}},'↑'),
      h('button',{'aria-label':'Move down',onclick:()=>{ if(pos<order.length-1){[order[pos+1],order[pos]]=[order[pos],order[pos+1]]; clear(out); render();}}},'↓'))); }); }
  el.append(h('div',{class:'small muted'},cfg.prompt||'Use the arrows to put the steps in the correct order.'), ol,
    h('div',{class:'row',style:{marginTop:'10px'}},
      h('button',{class:'primary',onclick:()=>{ render(true); const ok=order.filter((v,i)=>v===i).length; clear(out); out.append(fb(ok===order.length?'good':'warn',`<b>${ok} of ${order.length} in the right position.</b> `+(ok===order.length?(cfg.explain||''):'Green = correct position. Keep adjusting.'))); }},'Check order'),
      h('button',{onclick:()=>{order=cfg.steps.map((t,i)=>i); render(true); clear(out); out.append(fb('info','Correct order shown. '+(cfg.explain||'')));}},'Show answer')),
    out); render();
}
function scenarios(el, cfg){ // {start, meters:[{key,label,init}], nodes:{id:{title,text, choices:[{label, effects, result, tone, next}]}}, endText(state)}
  const state={}; cfg.meters.forEach(m=>state[m.key]=m.init);
  const meters=h('div',{class:'grid3'}), body=h('div',{style:{marginTop:'14px'}}), log=[];
  function drawMeters(){ clear(meters); cfg.meters.forEach(m=>{ const v=clamp(state[m.key],0,100); meters.append(h('div',{class:'stat'},h('div',{class:'l'},m.label),h('div',{class:'v'},fmt(v)),h('div',{class:'progress'},h('i',{style:{width:v+'%',background:cssVar(v<35?'--bad':v<65?'--warn':'--good')}})))); }); }
  function go(id){ drawMeters(); clear(body);
    if(!id){ body.append(h('h3',null,'Debrief'), fb('info',cfg.endText?cfg.endText(state):'Scenario complete.'), h('ol',null,log.map(l=>h('li',{class:'small',html:l}))), h('button',{class:'primary',onclick:()=>{cfg.meters.forEach(m=>state[m.key]=m.init); log.length=0; go(cfg.start);}},'Play again')); return; }
    const n=cfg.nodes[id];
    body.append(n.title && h('div',{class:'kicker'},n.title), h('p',{html:n.text}));
    n.choices.forEach(c=>body.append(h('button',{class:'opt',onclick:()=>{
      for(const k in c.effects||{}) state[k]=clamp(state[k]+c.effects[k],0,100);
      log.push(`<b>${n.title||''}</b> — ${c.label}`);
      drawMeters(); clear(body);
      body.append(n.title && h('div',{class:'kicker'},n.title), h('p',null,h('b',null,'You chose: '),c.label), fb(c.tone||'info',c.result), h('button',{class:'primary',style:{marginTop:'10px'},onclick:()=>go(c.next)},c.next?'Continue':'See debrief'));
    }},c.label)));
  }
  el.append(meters,body); go(cfg.start);
}
function weighted(el, cfg){ // {criteria:[{name,weight}], options:[{name, scores:[..]}], max, explain(name)}
  const wrap=h('div',{class:'grid2'}), res=h('div'), chart=h('div');
  let ready=false;
  const wEls=cfg.criteria.map(c=>slider({label:c.name,min:0,max:10,value:c.weight,oninput:()=>ready&&calc()}));
  function calc(){
    const ws=wEls.map(w=>w.get()), tot=ws.reduce((a,b)=>a+b,0)||1;
    const scored=cfg.options.map(o=>({label:o.name,value:o.scores.reduce((a,sc,i)=>a+sc*ws[i],0)/tot})).sort((a,b)=>b.value-a.value);
    scored.forEach((d,i)=>d.color=i===0?'--c3':'--c1');
    bars(chart,scored,{max:cfg.max||5,fmt:v=>fmt(v,2),labelW:cfg.labelW||190});
    clear(res); res.append(fb('good',`<b>Best fit: ${scored[0].label}</b> (weighted score ${fmt(scored[0].value,2)} / ${cfg.max||5}). `+(cfg.explain?cfg.explain(scored[0].label):'')));
  }
  wrap.append(h('div',null,h('h3',null,cfg.weightTitle||'How important is each criterion? (0–10)'),wEls), h('div',null,h('h3',null,'Weighted fit'),chart,res));
  el.append(wrap, h('details',{style:{marginTop:'12px'}},h('summary',null,'Show the scoring matrix (1 = poor fit, 5 = strong fit)'),h('div',{class:'tablewrap'},h('table',null,h('tr',null,h('th',null,'Option'),cfg.criteria.map(c=>h('th',{class:'num'},c.name))),cfg.options.map(o=>h('tr',null,h('td',null,o.name),o.scores.map(v=>h('td',{class:'num'},v))))))));
  ready=true; calc();
}
function tabs(el, defs){ // [{label, build(container)}]
  const bar=h('div',{class:'tabs',role:'tablist'}), body=h('div'); const built={};
  const panes=defs.map(()=>h('div'));
  defs.forEach((d,i)=>bar.append(h('button',{role:'tab',onclick:()=>show(i)},d.label)));
  function show(i){ [...bar.children].forEach((b,j)=>b.classList.toggle('on',i===j)); panes.forEach((p,j)=>p.style.display=i===j?'':'none'); if(!built[i]){built[i]=1; defs[i].build(panes[i]);} }
  body.append(...panes); el.append(bar,body); show(0);
}

window.Lab = {LECTURES,WEEKS,CLO,h,s,clear,markup,pad,fmt,money,pct,clamp,shuffle,page,card,slider,numInput,selectBox,stat,fb,cssVar,bars,radar,line,legend,quiz,classify,sequence,scenarios,weighted,tabs};
})();
