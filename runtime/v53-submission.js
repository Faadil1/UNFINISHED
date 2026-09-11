/* UNFINISHED V5.3 — submission hardening + TRACE visual system.
   Keeps the validated causal engine; upgrades experiment integrity, demo clarity, interaction, and design. */
(() => {
  const RUNTIME = '5.3.0-submission';
  const TEST_KEY = 'unfinished:v53:test:';
  const oldConfig = config;
  const oldFresh = fresh;
  const oldShow = show;
  const oldCollectDebrief = collectDebrief;
  const oldMakeHandoff = makeHandoff;
  const oldSubmitDebrief = submitDebrief;
  const oldStart = start;
  const oldDrawCreatorMark = drawCreatorMark;
  const oldDrawBackground = drawBackground;

  const hash = (s='') => {
    let h = 2166136261;
    for (let i=0;i<s.length;i++){h ^= s.charCodeAt(i); h = Math.imul(h,16777619)}
    return (h>>>0).toString(36).slice(0,8);
  };
  const currentParams = () => new URLSearchParams(location.search);
  const decodeToken = token => decodePayload(token || '');
  const encodeState = (state, mode, run, testMode=false) => encodePayload({
    v:RUNTIME, mode, authored:mode==='HUMAN', testMode, run:run||null,
    anchor:state.anchor, vector:state.vector, reach:state.reach, pressure:state.pressure,
    tension:Number(state.tension||1), engineBias:Number(state.engineBias||0),
    name:mode==='HUMAN' ? cleanName(state.name||'VISITOR') : 'WORLD',
    authorId:mode==='HUMAN' ? state.authorId : 'world-seed', generation:Number(state.generation||1),
    version:Number(state.version||1), stateId:state.stateId, parentStateId:state.parentStateId||null,
    chainId:state.chainId||'', pairId:state.pairId||null, issuedAt:new Date().toISOString()
  });
  const tokenFromLocation = () => {
    const p = currentParams();
    const direct = p.get('s');
    if (direct) return direct;
    const play = p.get('play');
    if (play) return sessionStorage.getItem(TEST_KEY+play) || history.state?.v53Token || null;
    return history.state?.v53Token || null;
  };
  const parseRaw = () => {
    const p = currentParams();
    const receipt = decodePayload(p.get('receipt')||'');
    if (receipt) return {receipt};
    if (p.get('author')==='1') return {authorMode:true, viewerId:getSessionId()};
    const hasState = ['mode','anchor','vector','reach','stateId','pair'].some(k=>p.has(k));
    if (!hasState) {
      return {
        demo:true,testMode:false,authorMode:false,mode:'HUMAN',anchor:'MID',vector:'UP',reach:'MEDIUM',
        pressure:'HEIGHT',tension:2,engineBias:0,name:'MAYA',authorId:'demo-maya',viewerId:getSessionId(),
        generation:1,stateVersion:1,stateId:'demo-maya-start',parentStateId:null,chainId:'demo-chain',pairId:'demo-pair',
        runLabel:'DEMO',controlled:false
      };
    }
    const authored=p.get('authored')==='1',requested=valid((p.get('mode')||'').toUpperCase(),['HUMAN','WORLD']);
    const mode=authored&&requested==='HUMAN'?'HUMAN':'WORLD';
    return {authorMode:false,testMode:false,mode,
      anchor:valid((p.get('anchor')||'').toUpperCase(),['LOW','MID','HIGH'])||'MID',
      vector:valid((p.get('vector')||'').toUpperCase(),['FLAT','UP'])||'FLAT',
      reach:valid((p.get('reach')||'').toUpperCase(),['SHORT','MEDIUM','LONG'])||'MEDIUM',
      pressure:valid((p.get('pressure')||'').toUpperCase(),['SPAN','HEIGHT','BALANCE'])||'BALANCE',
      tension:clamp(parseInt(p.get('tension')||'1',10)||1,0,3),engineBias:clamp(parseFloat(p.get('engineBias')||'0')||0,-1,1),
      name:cleanName(p.get('name')||(mode==='HUMAN'?'VISITOR':'WORLD')),authorId:p.get('authorId')||(mode==='WORLD'?'world-seed':'missing-author'),viewerId:getSessionId(),
      generation:Math.max(1,parseInt(p.get('g')||'1',10)||1),stateVersion:Math.max(1,parseInt(p.get('version')||'1',10)||1),
      stateId:p.get('stateId')||('seed-'+Date.now().toString(36)),parentStateId:p.get('parent')||null,chainId:p.get('chain')||('chain-'+Date.now().toString(36)),
      pairId:p.get('pair')||null,runLabel:p.get('run')||null,controlled:p.get('run')!==null||p.get('pair')!==null};
  };

  config = function(){
    const token = tokenFromLocation();
    if (!token) return parseRaw();
    const z = decodeToken(token);
    if (!z || !z.stateId || !z.chainId) return parseRaw();
    return {authorMode:false,testMode:!!z.testMode,demo:false,mode:z.mode==='HUMAN'?'HUMAN':'WORLD',
      anchor:valid(String(z.anchor||'').toUpperCase(),['LOW','MID','HIGH'])||'MID',
      vector:valid(String(z.vector||'').toUpperCase(),['FLAT','UP'])||'FLAT',reach:valid(String(z.reach||'').toUpperCase(),['SHORT','MEDIUM','LONG'])||'MEDIUM',
      pressure:valid(String(z.pressure||'').toUpperCase(),['SPAN','HEIGHT','BALANCE'])||'BALANCE',tension:clamp(Number(z.tension||1),0,3),engineBias:clamp(Number(z.engineBias||0),-1,1),
      name:cleanName(z.name||(z.mode==='HUMAN'?'VISITOR':'WORLD')),authorId:z.mode==='HUMAN'?z.authorId:'world-seed',viewerId:getSessionId(),
      generation:Math.max(1,Number(z.generation||1)),stateVersion:Math.max(1,Number(z.version||1)),stateId:z.stateId,parentStateId:z.parentStateId||null,
      chainId:z.chainId,pairId:z.pairId||null,runLabel:z.run||null,controlled:true,conditionToken:token};
  };

  makeStateURL = function(state, mode='HUMAN', run=null){
    const isMatchedTest = !!run && /^(HUMAN|WORLD)-/i.test(run);
    const token = encodeState(state,mode,run,isMatchedTest);
    const u = new URL(location.origin + location.pathname);
    u.searchParams.set('s',token);
    return u.toString();
  };

  const conditionFingerprint = q => hash([q.mode,q.anchor,q.vector,q.reach,q.pressure,q.tension,q.engineBias,q.stateId,q.pairId].join('|'));
  const cleanTestURL = q => {
    if (!q?.testMode || !q.conditionToken) return;
    const fp = conditionFingerprint(q);
    sessionStorage.setItem(TEST_KEY+fp,q.conditionToken);
    history.replaceState({v53Token:q.conditionToken},'',location.pathname+'?play='+fp);
  };

  const setMeta = () => {
    document.title = 'UNFINISHED — Every solution becomes someone else’s beginning';
    let meta=document.querySelector('meta[name="description"]'); if(!meta){meta=document.createElement('meta');meta.name='description';document.head.appendChild(meta)}
    meta.content='An asynchronous social world where every player inherits a real unfinished condition, completes it, traverses the result, and leaves the next challenge.';
    let theme=document.querySelector('meta[name="theme-color"]'); if(theme)theme.content='#241429';
    if(!document.querySelector('link[data-v53-favicon]')){
      const link=document.createElement('link');link.rel='icon';link.dataset.v53Favicon='1';
      link.href='data:image/svg+xml,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="g" x1="0" x2="1"><stop stop-color="#ffb09c"/><stop offset=".55" stop-color="#ff8fa9"/><stop offset="1" stop-color="#d4b0ff"/></linearGradient></defs><rect width="64" height="64" rx="16" fill="#241429"/><path d="M49 31a17 17 0 1 1-6-13" fill="none" stroke="url(#g)" stroke-width="7" stroke-linecap="round"/><circle cx="45" cy="18" r="3.5" fill="#fff0f7"/></svg>`);
      document.head.appendChild(link);
    }
  };

  const title = (card,text) => {
    if(!card || card.querySelector('.v53-title')) return;
    const p=card.querySelector('.prompt'); if(!p) return;
    const h=document.createElement('div');h.className='v53-title';h.textContent=text;p.after(h);
  };
  const eyebrow = (card,text) => {
    if(!card || card.querySelector('.v53-eyebrow')) return;
    const e=document.createElement('div');e.className='v53-eyebrow';e.textContent=text;card.prepend(e);
  };
  const ensureConditionStrip = () => {
    const card=$('complete'); if(!card || card.querySelector('.v53-condition') || S?.testMode) return;
    const el=document.createElement('div');el.className='v53-condition';
    const rows=[['Anchor',S.anchor],['Vector',S.vector],['Reach',S.reach],['Pressure',S.pressure],['Tension',String(S.tension)]];
    el.innerHTML=rows.map(([a,b])=>`<div><b>${a}</b><span>${b}</span></div>`).join('');
    const grid=card.querySelector('.grid'); if(grid)grid.before(el);
  };
  const ensureChain = () => {
    const card=$('postReport'); if(!card || card.querySelector('.v53-chain')) return;
    const el=document.createElement('div');el.className='v53-chain';
    el.innerHTML='<span class="node"><i class="dot"></i>inherit</span><span class="arrow">→</span><span class="node"><i class="dot"></i>complete</span><span class="arrow">→</span><span class="node"><i class="dot"></i>leave next</span>';
    card.appendChild(el);
  };
  const ensureProvenance = () => {
    document.querySelector('.v53-provenance')?.remove();
    if(S?.testMode || !S || S.authorMode || S.mode!=='HUMAN') return;
    const p=document.createElement('div');p.className='v53-provenance';p.innerHTML='Inherited condition from<strong>'+cleanName(S.name||'MAYA')+'</strong>';
    document.querySelector('.scene')?.appendChild(p);
  };
  const decorateStatic = () => {
    setMeta();
    const brand=$('phase')?.parentElement?.querySelector('.brand');
    if(brand && !brand.parentElement.classList.contains('v53-topmark')){
      const wrap=document.createElement('div');wrap.className='v53-topmark';const ring=document.createElement('span');ring.className='v53-logo-ring';brand.before(wrap);wrap.append(ring,brand);
    }
    eyebrow($('intro'),'Async co-authorship'); title($('intro'),'Something unfinished is waiting.');
    if($('intro')){$('intro').querySelector('.prompt').textContent='INHERITED CONDITION';$('intro').querySelector('.neutral').textContent='Step into a condition shaped before you. Complete it, use it, and decide what comes next.';$('start').textContent='ENTER THE LOOP';}
    eyebrow($('complete'),'Inherited condition'); title($('complete'),'Complete what was started.');
    if($('complete')){$('complete').querySelector('.prompt').textContent='YOUR DECISION';const btns=$('complete').querySelectorAll('[data-complete]');if(btns[0])btns[0].innerHTML='<strong>BRIDGE</strong><span>Connect the missing span</span>';if(btns[1])btns[1].innerHTML='<strong>STAIR</strong><span>Turn pressure into height</span>';}
    eyebrow($('play'),'Reveal + route usage'); title($('play'),'Walk what you made.'); if($('play')){$('play').querySelector('.prompt').textContent='THE ROUTE IS LIVE';$('play').querySelector('.micro').textContent='Drag the traveler along the route, or use the controls.';$('skip').textContent='LEAVE THE ROUTE';}
    eyebrow($('leave'),'Successor problem'); title($('leave'),"Leave what’s next."); if($('leave')){$('leave').querySelector('.prompt').textContent='AUTHOR THE NEXT CONDITION';$('leave').querySelector('.neutral').textContent=S?.testMode?'Place one more unfinished segment.':'Your solution becomes the next visitor’s starting pressure.';$('leaveCommit').textContent='LEAVE FOR THE NEXT PLAYER';}
    eyebrow($('report'),'Evidence'); title($('report'),'What did you experience?'); if($('report'))$('report').querySelector('.prompt').textContent='SHORT DEBRIEF';
    eyebrow($('postReport'),'Creation receipt'); title($('postReport'),'The chain continues.');
    if($('postReport'))$('postReport').querySelector('.prompt').textContent='HANDOFF CREATED';
    eyebrow($('author'),'Author mode'); title($('author'),"Shape what’s next."); if($('author')){$('author').querySelector('.prompt').textContent='PLACE A REAL STARTING CONDITION';$('author').querySelector('.neutral').textContent='Drag from a socket and place an unfinished condition in the world. Your exact gesture becomes someone else’s beginning.';$('authorName').placeholder='Your name or alias';$('makeHandoff').textContent='CREATE MATCHED TEST LINKS';}
    ensureChain();
  };

  const updatePhaseUI = id => {
    document.body.dataset.phase=id||'';
    document.body.classList.toggle('test-safe',!!S?.testMode);
    ensureConditionStrip();ensureProvenance();
    if(id==='postReport' && !S?.testMode){const a=$('afterText');if(a)a.textContent=S.complete==='CONNECT'?'You closed the span. The next visitor inherits the height pressure you created.':'You gained height. The next visitor inherits the distance pressure you created.'}
  };
  show = function(id){oldShow(id);decorateStatic();updatePhaseUI(id)};

  const setupAuthorValidation = () => {
    const input=$('authorName'),button=$('makeHandoff'); if(!input||!button||input.dataset.v53Validation)return;
    input.dataset.v53Validation='1';
    const validate=()=>{const real=/[A-Za-zÀ-ÿ]{2,}/.test(input.value.trim());button.dataset.nameOk=real?'1':'0';button.disabled=!(real&&authorDraft?.end)};
    input.addEventListener('input',validate);validate();
  };

  const setupHoldChoices = () => {
    const card=$('complete'); if(!card)return;
    if(!card.querySelector('.v53-hold-hint')){const hint=document.createElement('div');hint.className='v53-hold-hint';hint.textContent='Press and hold a path to commit';card.querySelector('.grid')?.after(hint)}
    card.querySelectorAll('[data-complete]').forEach(btn=>{
      if(btn.dataset.v53Hold)return;btn.dataset.v53Hold='1';btn.onclick=null;
      let raf=0,startAt=0,done=false;
      const stop=()=>{cancelAnimationFrame(raf);btn.classList.remove('v53-holding');btn.style.setProperty('--hold','0');startAt=0};
      const tick=t=>{if(!startAt)startAt=t;const p=Math.min(1,(t-startAt)/650);btn.style.setProperty('--hold',String(p));if(p>=1&&!done){done=true;stop();haptic(24);chooseComplete(btn.dataset.complete,'hold');return}raf=requestAnimationFrame(tick)};
      btn.addEventListener('pointerdown',e=>{if(S?.complete)return;done=false;btn.classList.add('v53-holding');btn.setPointerCapture?.(e.pointerId);raf=requestAnimationFrame(tick)});
      ['pointerup','pointercancel','pointerleave'].forEach(ev=>btn.addEventListener(ev,()=>{if(!done)stop()}));
      btn.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&!S?.complete){e.preventDefault();chooseComplete(btn.dataset.complete,'keyboard')}});
    });
  };

  const neutralCreatorMark = () => {
    const y=anchorY(S.anchor),p=pt([.105,y],.36);x.save();x.shadowColor='rgba(255,124,174,.22)';x.shadowBlur=18;x.fillStyle='rgba(41,25,48,.90)';x.strokeStyle='rgba(255,179,207,.58)';x.lineWidth=1.5;x.beginPath();x.arc(p[0],p[1],15,0,Math.PI*2);x.fill();x.stroke();x.strokeStyle='rgba(255,229,239,.78)';x.beginPath();x.arc(p[0],p[1],7,-2.7,1.25);x.stroke();x.restore();
  };
  drawCreatorMark = function(){if(S?.testMode)return neutralCreatorMark();return oldDrawCreatorMark()};

  drawBackground = function(){
    const horizon=H*.72,px=(parallax.x-.5)*16,py=(parallax.y-.5)*8,g=x.createLinearGradient(0,0,0,H);
    g.addColorStop(0,'#29172f');g.addColorStop(.36,'#54304f');g.addColorStop(.66,'#a65d6f');g.addColorStop(.73,'#d98782');g.addColorStop(.74,'#3a2534');g.addColorStop(1,'#211622');x.fillStyle=g;x.fillRect(0,0,W,H);
    const sun=x.createRadialGradient(W*.76+px*.15,H*.46+py*.12,1,W*.76+px*.15,H*.46+py*.12,W*.22);sun.addColorStop(0,'rgba(255,220,166,.94)');sun.addColorStop(.08,'rgba(255,183,157,.48)');sun.addColorStop(.45,'rgba(255,136,165,.10)');sun.addColorStop(1,'rgba(255,136,165,0)');x.fillStyle=sun;x.fillRect(0,0,W,H);
    x.save();x.translate(px*.08,py*.04);
    const islands=[[.04,.61,.13,.10],[.20,.50,.10,.08],[.72,.55,.12,.09],[.86,.43,.09,.07],[.56,.34,.07,.055]];
    islands.forEach(([xx,yy,ww,hh],i)=>{x.fillStyle=i%2?'rgba(29,18,31,.54)':'rgba(36,22,38,.62)';x.beginPath();x.ellipse(W*xx,H*yy,W*ww,H*hh,0,0,Math.PI*2);x.fill();x.fillRect(W*(xx-ww*.45),H*yy,W*ww*.9,H*(.12+i*.006));});
    x.strokeStyle='rgba(255,218,226,.10)';x.lineWidth=1.2;
    [[.16,.43,.11,.16],[.82,.35,.10,.19],[.48,.27,.07,.13]].forEach(([xx,yy,ww,hh])=>{const X=W*xx,Y=H*yy,A=W*ww,B=H*hh;x.beginPath();x.moveTo(X-A/2,Y+B/2);x.lineTo(X-A/2,Y-B/2);x.quadraticCurveTo(X,Y-B*.9,X+A/2,Y-B/2);x.lineTo(X+A/2,Y+B/2);x.stroke()});
    for(let i=0;i<20;i++){const xx=((i*47)%101)/100*W,yy=(((i*83)%59)/100)*H*.62;x.fillStyle=`rgba(255,231,238,${.06+(i%4)*.025})`;x.beginPath();x.arc(xx,yy,1+(i%3)*.45,0,Math.PI*2);x.fill()}
    x.restore();
    const floor=x.createLinearGradient(0,horizon,0,H);floor.addColorStop(0,'rgba(21,13,24,.12)');floor.addColorStop(1,'rgba(13,8,17,.55)');x.fillStyle=floor;x.fillRect(0,horizon,W,H-horizon);
  };

  fresh = function(){
    const q=config();oldFresh();
    if(S){S.version=RUNTIME;S.testMode=!!q.testMode;S.demo=!!q.demo;S.conditionFingerprint=conditionFingerprint(q)}
    cleanTestURL(q);decorateStatic();setupAuthorValidation();setupHoldChoices();updatePhaseUI(document.querySelector('.card:not(.hidden)')?.id||'');
    if($('debug'))$('debug').textContent='v5.3';draw();
  };

  start = function(){
    oldStart();
    if(!S?.testMode && S?.mode==='HUMAN') setTimeout(()=>badge('INHERITED FROM '+cleanName(S.name||'MAYA').toUpperCase()),560);
  };
  if($('start'))$('start').onclick=start;

  collectDebrief = function(){
    oldCollectDebrief();
    const q=config();
    S.version=RUNTIME;S.conditionFingerprint=S.conditionFingerprint||conditionFingerprint(q);
    S.experimentIntegrity={runtime:RUNTIME,testSafe:!!S.testMode,opaqueURL:!!q.conditionToken,sourcePrimingBeforeDebrief:!S.testMode,conditionFingerprint:S.conditionFingerprint,pairId:S.pairId||null,runLabel:S.runLabel||null,uiMode:S.testMode?'COLD_TEST':'DEMO',capturedAt:new Date().toISOString()};
    if(S.causalProof?.engine)S.causalProof.engine.policy='deterministic-causal-v5.3-submission';
    S.designProof={direction:'TRACE dusk-plum spatial editorial',interaction:'press-hold completion + tactile route + successor authoring',favicon:'unfinished-open-loop',mobileFirst:true};
  };

  makeHandoff = function(){
    const input=$('authorName');
    if(!input || !/[A-Za-zÀ-ÿ]{2,}/.test(input.value.trim())){badge('ADD A REAL NAME OR ALIAS');input?.focus();return}
    const result=oldMakeHandoff.apply(this,arguments);setupHoldChoices();return result;
  };
  if($('makeHandoff'))$('makeHandoff').onclick=makeHandoff;

  submitDebrief = function(){oldSubmitDebrief();ensureChain();updatePhaseUI('postReport')};
  if($('submitDebrief'))$('submitDebrief').onclick=submitDebrief;

  document.documentElement.classList.add('v53ready');
  window.__UNFINISHED_RUNTIME__=RUNTIME;
  setMeta();decorateStatic();setupAuthorValidation();setupHoldChoices();
  // Re-bootstrap once so root demo mode and opaque token parsing use V5.3 config.
  fresh();resize();
})();
