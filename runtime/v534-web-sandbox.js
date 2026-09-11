/* UNFINISHED V5.3.4 — web sandbox boundary
   Root web visits always begin from the canonical Maya seed, but the resulting branch is local/web-only.
   Decentraland remains the only shared Supabase chain. */
(() => {
  const RUNTIME='5.3.4-web-sandbox';
  const DCL='decentraland://?realm=unfinished.dcl.eth&dclenv=org';
  const ROOT=location.origin+location.pathname;
  const MAYA={
    anchor:'HIGH',vector:'FLAT',reach:'SHORT',pressure:'SPAN',tension:3,engineBias:.25,
    name:'MAYA',note:'I left this unfinished for whoever arrives next.',generation:1,
    demo:true,testMode:false,authorMode:false,mode:'HUMAN'
  };

  const oldConfig534=config;
  const oldShow534=show;
  const oldFresh534=fresh;
  const oldChooseComplete534=chooseComplete;

  function isRootSandbox(q){
    const p=new URLSearchParams(location.search);
    return !!q?.demo && !q?.testMode && !q?.authorMode && !p.get('s') && !p.get('play') && !p.get('receipt');
  }

  function routeStart(){
    const y=anchorY(MAYA.anchor);
    return {x:.12,y:y+.035};
  }

  function snapAvatarToRouteStart(){
    if(!S || !S.avatar) return;
    const start=routeStart();
    S.avatar.x=start.x;
    S.avatar.y=start.y;
    S.routeProgress=0;
    S.offRouteAttempts=0;
    if(S.metrics){
      S.metrics.dpadMoves=0;
      S.metrics.dragStarts=0;
      S.metrics.dragSamples=0;
    }
  }

  config=function(){
    const q=oldConfig534();
    if(isRootSandbox(q)){
      Object.assign(q,MAYA);
      q.authorId='web-maya-seed';
      q.humanChain=[{name:'Maya',role:'started'}];
      q.stateId=q.stateId||'web-maya-start';
      q.chainId=q.chainId||('web-sandbox-'+Date.now().toString(36));
      q.runLabel='WEB SANDBOX';
    }
    return q;
  };

  function applyMayaToCurrentState(){
    if(!S || !isRootSandbox(S)) return;
    Object.assign(S,MAYA);
    S.authorId='web-maya-seed';
    S.humanChain=[{name:'Maya',role:'started'}];
    S.runLabel='WEB SANDBOX';
    snapAvatarToRouteStart();
  }

  function addBoundary(){
    const app=document.querySelector('.app');
    if(!app || app.querySelector('.v534-boundary')) return;
    const el=document.createElement('div');
    el.className='v534-boundary';
    el.innerHTML='<b>WEB SANDBOX</b><span>Maya is always the seed here. Your continuation stays in this web branch.</span><a href="'+DCL+'">ENTER THE SHARED WORLD ↗</a>';
    const scene=app.querySelector('.scene');
    if(scene) app.insertBefore(el,scene); else app.prepend(el);
  }

  function simplifyCopy(){
    const intro=$('intro');
    if(intro && !S?.testMode){
      const prompt=intro.querySelector('.prompt'); if(prompt) prompt.textContent='MAYA LEFT THIS';
      const title=intro.querySelector('.v53-title'); if(title) title.textContent='SPAN · T3';
      const neutral=intro.querySelector('.neutral'); if(neutral) neutral.textContent='Finish the gap. Use what your choice creates. Then leave a condition behind.';
      const start=$('start'); if(start) start.textContent='ENTER';
    }
    const complete=$('complete');
    if(complete && !S?.testMode){
      const prompt=complete.querySelector('.prompt'); if(prompt) prompt.textContent='FINISH THE GAP';
      const title=complete.querySelector('.v53-title'); if(title) title.textContent='Choose the consequence.';
    }
    const play=$('play');
    if(play && !S?.testMode){
      const prompt=play.querySelector('.prompt'); if(prompt) prompt.textContent='USE WHAT YOU MADE';
      const title=play.querySelector('.v53-title'); if(title) title.textContent='Reach the handoff point.';
      const micro=play.querySelector('.micro'); if(micro) micro.textContent='Move through the route. The next step unlocks only after you use it.';
    }
    const leave=$('leave');
    if(leave && !S?.testMode){
      const prompt=leave.querySelector('.prompt'); if(prompt) prompt.textContent='LEAVE WHAT IS NEXT';
      const title=leave.querySelector('.v53-title'); if(title) title.textContent='Your ending becomes a beginning.';
    }
  }

  function clearBranchAndRestart(){
    try{
      localStorage.removeItem('unfinished:v51:activeState');
      localStorage.removeItem('unfinished:v51:lineage');
    }catch{}
    location.href=ROOT;
  }

  async function shareBranch(){
    let url='';
    try{url=nextVisitorURL()||''}catch{}
    if(!url) return;
    try{
      if(navigator.share){
        await navigator.share({title:'UNFINISHED — web branch',text:'Maya left something unfinished. I continued it and left this for you.',url});
      }else{
        await navigator.clipboard.writeText(url);
        badge('WEB BRANCH LINK COPIED');
      }
    }catch(err){
      if(err?.name!=='AbortError'){
        try{await navigator.clipboard.writeText(url);badge('WEB BRANCH LINK COPIED')}catch{}
      }
    }
  }

  function ensureReceiptActions(){
    if(!S?.demo || S?.testMode) return;
    const card=$('postReport');
    if(!card) return;
    let note=card.querySelector('.v534-local-note');
    if(!note){
      note=document.createElement('div');
      note.className='v534-local-note';
      note.textContent='WEB BRANCH · This continuation is local to the web sandbox. The real shared human chain lives in unfinished.dcl.eth.';
      card.appendChild(note);
    }
    let actions=card.querySelector('.v534-receipt-actions');
    if(!actions){
      actions=document.createElement('div');
      actions.className='v534-receipt-actions';
      const share=document.createElement('button');share.type='button';share.textContent='SHARE THIS WEB BRANCH';share.onclick=shareBranch;
      const world=document.createElement('a');world.href=DCL;world.textContent='ENTER SHARED WORLD';
      const replay=document.createElement('button');replay.type='button';replay.textContent='RESTART FROM MAYA';replay.onclick=clearBranchAndRestart;
      actions.append(share,world,replay);
      card.appendChild(actions);
    }
  }

  function decorate(id){
    document.body.classList.add('v534-web-sandbox');
    addBoundary();
    simplifyCopy();
    if(id==='postReport' || document.body.dataset.v533Phase==='postReport') ensureReceiptActions();
    const debug=$('debug');if(debug)debug.textContent='web 2.5D';
  }

  show=function(id){
    const r=oldShow534(id);
    if(id==='play' && S?.demo && !S?.testMode){
      snapAvatarToRouteStart();
      try{draw()}catch{}
    }
    decorate(id);
    return r;
  };

  chooseComplete=function(v,source='button'){
    const r=oldChooseComplete534(v,source);
    if(S?.demo && !S?.testMode){
      snapAvatarToRouteStart();
      try{draw()}catch{}
    }
    return r;
  };

  fresh=function(){
    const r=oldFresh534();
    applyMayaToCurrentState();
    decorate(document.body.dataset.v532Phase||document.body.dataset.phase||'intro');
    try{draw()}catch{}
    return r;
  };

  applyMayaToCurrentState();
  decorate(document.body.dataset.v532Phase||document.body.dataset.phase||'intro');
  const visible=['intro','complete','play','leave','postReport','author','ownState','staleState','returnReceipt'].find(id=>{const el=$(id);return el&&!el.classList.contains('hidden')});
  if(visible) try{show(visible)}catch{}
  try{draw()}catch{}
  document.documentElement.classList.add('v534ready');
  window.__UNFINISHED_RUNTIME__=RUNTIME;
})();
