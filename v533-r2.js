/* UNFINISHED V5.3.3 R2 — final handoff/runtime correction.
   Fixes the demo handoff path revealed by real mobile recordings.
   Causal engine + cold-test neutrality remain unchanged. */
(() => {
  const RUNTIME='5.3.3-mobile-finish-r2';
  const oldBeginDebriefR2=beginDebrief;
  const oldShowR2=show;
  let enforceQueued=false;

  const nice=v=>{
    const s=String(v||'').trim().replace(/[^\p{L}\p{N} _.-]/gu,'').slice(0,24);
    return /[\p{L}]{2,}/u.test(s)?s:'';
  };
  const who=v=>nice(v)||'You';
  const contributor=()=>nice(S?.currentContributorName)||nice(localStorage.getItem('unfinished:v532:lastName')||'')||'You';
  const prior=()=>who(S?.name||'Maya');

  function coauthorNames(){
    return `${prior()} + ${contributor()}`;
  }

  function ensurePersistentCoauthor(){
    if(!S?.demo || S?.testMode) return;
    const card=$('play');
    if(!card) return;
    let mark=card.querySelector('.v533r2-coauthor');
    if(!mark){
      mark=document.createElement('div');
      mark.className='v533r2-coauthor';
      const title=card.querySelector('.v53-title');
      (title||card.firstChild)?.after?.(mark);
    }
    mark.innerHTML=`<span>CO-AUTHORED ROUTE</span><b>${coauthorNames()}</b>`;
  }

  function chainNames(){
    const arr=Array.isArray(S?.next?.humanChain)?S.next.humanChain:Array.isArray(S?.humanChain)?S.humanChain:[];
    const names=arr.map(v=>who(typeof v==='string'?v:v?.name)).filter(Boolean);
    if(!names.length) names.push(prior(),contributor());
    if(!names.includes(contributor())) names.push(contributor());
    return [...new Set(names)].slice(-5);
  }

  function ensureFinalReceipt(){
    if(!S?.demo || S?.testMode) return;
    const card=$('postReport');
    if(!card) return;
    card.querySelectorAll('.v531-demo-receipt,.v532-receipt').forEach(n=>n.remove());
    let receipt=card.querySelector('.v533r2-receipt');
    if(!receipt){
      receipt=document.createElement('div');
      receipt.className='v533r2-receipt';
      const title=card.querySelector('.v53-title');
      (title||card.firstChild)?.after?.(receipt);
    }
    const outcome=S?.complete==='CONNECT'?'Traversable crossing':'Ascent route';
    const nextPressure=S?.next?.pressure||'Next condition';
    const nextTension=S?.next?.tension!=null?` · tension ${S.next.tension}`:'';
    const used=S?.used?'Route used':S?.skipped?'Route left early':`${Math.round((S?.routeProgress||0)*100)}% explored`;
    receipt.innerHTML=`
      <div class="v533r2-receipt-head"><span>CREATION RECEIPT</span><b>${coauthorNames()}</b></div>
      <div class="v533r2-receipt-row"><span>Prior author</span><b>${prior()}</b></div>
      <div class="v533r2-receipt-row"><span>Your completion</span><b>${S?.complete==='CONNECT'?'BRIDGE':'STAIR'}</b></div>
      <div class="v533r2-receipt-row"><span>Outcome</span><b>${outcome}</b></div>
      <div class="v533r2-receipt-row"><span>Route</span><b>${used}</b></div>
      <div class="v533r2-receipt-row"><span>Next inherits</span><b>${nextPressure}${nextTension}</b></div>
      <div class="v533r2-chain"><span>HUMAN CHAIN</span><div>${chainNames().map((n,i,a)=>`<b>${n}</b>${i<a.length-1?'<em>→</em>':''}`).join('')}</div></div>`;
    const after=$('afterText');
    if(after) after.textContent='You completed someone else’s unfinished condition. What you leave now becomes the next person’s beginning.';
  }

  async function shareNext(){
    const url=nextVisitorURL();
    if(!url) return;
    const data={title:'UNFINISHED',text:'I left something unfinished for you.',url};
    try{
      if(navigator.share){await navigator.share(data);log('HANDOFF_SHARED',{mode:'native'});}
      else{await navigator.clipboard.writeText(url);badge('NEXT PLAYER LINK COPIED');log('HANDOFF_SHARED',{mode:'clipboard'});}
    }catch(err){
      if(err?.name!=='AbortError'){
        try{await navigator.clipboard.writeText(url);badge('NEXT PLAYER LINK COPIED');log('HANDOFF_SHARED',{mode:'clipboard-fallback'})}catch{}
      }
    }
  }

  function enforceActions(){
    if(!S?.demo || S?.testMode) return;
    const actions=document.querySelector('.v531-demo-actions');
    if(!actions) return;
    const btns=actions.querySelectorAll('button');
    const next=btns[1];
    if(next){
      if(next.textContent!=='SHARE NEXT PLAYER LINK →') next.textContent='SHARE NEXT PLAYER LINK →';
      next.onclick=shareNext;
    }
    let note=actions.parentElement?.querySelector('.v533-share-note');
    if(!note){
      note=document.createElement('div');
      note.className='v533-share-note';
      note.textContent='Self-completion is blocked by design. Pass the handoff to another person.';
      actions.before(note);
    }
  }

  function enforceHandoff(){
    if(!S?.demo || S?.testMode) return;
    document.body.dataset.v533Phase='postReport';
    ensureFinalReceipt();
    enforceActions();
    const card=$('postReport');
    if(card){
      card.scrollTop=0;
      card.querySelector('.v533r2-receipt')?.scrollIntoView({block:'nearest'});
    }
  }

  function scheduleEnforce(){
    if(enforceQueued) return;
    enforceQueued=true;
    requestAnimationFrame(()=>{
      enforceQueued=false;
      enforceHandoff();
    });
  }

  beginDebrief=function(){
    const r=oldBeginDebriefR2.apply(this,arguments);
    if(S?.demo && !S?.testMode){
      setTimeout(scheduleEnforce,0);
      setTimeout(scheduleEnforce,80);
      setTimeout(scheduleEnforce,220);
    }
    return r;
  };

  show=function(id){
    const r=oldShowR2(id);
    if(id==='play') ensurePersistentCoauthor();
    if(id==='postReport') scheduleEnforce();
    return r;
  };

  const post=$('postReport');
  if(post && !post.dataset.v533r2Observed){
    post.dataset.v533r2Observed='1';
    const observer=new MutationObserver(()=>{
      if(S?.demo && !S?.testMode && !post.classList.contains('hidden')) scheduleEnforce();
    });
    observer.observe(post,{childList:true,subtree:true,characterData:true});
  }

  if(S){S.version=RUNTIME}
  window.__UNFINISHED_RUNTIME__=RUNTIME;
  if($('debug')) $('debug').textContent='v5.3.3-r2';
  ensurePersistentCoauthor();
})();