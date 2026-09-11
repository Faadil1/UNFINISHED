/* UNFINISHED V5.3.2 — final experience translation.
   Converts the validated causal prototype into the approved world-first, human-chain experience.
   The deterministic causal engine remains untouched. */
(() => {
  const RUNTIME='5.3.2-final-experience';
  const NAME_KEY='unfinished:v532:lastName';
  const TEST_KEY='unfinished:v53:test:';
  const oldConfig532=config;
  const oldFresh532=fresh;
  const oldShow532=show;
  const oldMakeStateURL532=makeStateURL;
  const oldBuildNextState532=buildNextState;
  const oldCollectDebrief532=collectDebrief;
  const oldMakeReturnReceipt532=makeReturnReceipt;
  const oldDrawBackground532=drawBackground;
  const oldDrawCreatorMark532=drawCreatorMark;
  const oldDrawDraft532=drawDraft;
  const oldBeginDebrief532=beginDebrief;

  const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  const niceName=v=>{
    const s=String(v||'').trim().replace(/[^\p{L}\p{N} _.-]/gu,'').slice(0,24);
    return /[\p{L}]{2,}/u.test(s)?s:'';
  };
  const initial=name=>(niceName(name)||'?').trim().charAt(0).toUpperCase();
  const humanLabel=name=>niceName(name)||'Anonymous';
  const tokenAtLocation=()=>{
    const p=new URLSearchParams(location.search);
    if(p.get('s'))return p.get('s');
    if(p.get('play'))return sessionStorage.getItem(TEST_KEY+p.get('play'))||history.state?.v53Token||null;
    return history.state?.v53Token||null;
  };
  const tokenExtras=()=>{try{return decodePayload(tokenAtLocation()||'')||{}}catch{return{}}};
  const normalizeChain=chain=>Array.isArray(chain)?chain.filter(Boolean).slice(-8).map(v=>typeof v==='string'?{name:humanLabel(v)}:{name:humanLabel(v.name),role:v.role||'contributor'}):[];
  const chainNames=()=>normalizeChain(S?.humanChain).map(x=>x.name);
  const currentAlias=()=>niceName(document.getElementById('v532SuccessorName')?.value)||niceName(localStorage.getItem(NAME_KEY)||'');
  const currentNote=()=>String(document.getElementById('v532SuccessorNote')?.value||'').trim().slice(0,120);

  config=function(){
    const q=oldConfig532();
    const z=tokenExtras();
    if(q?.demo){
      window.__v532DemoSeed=window.__v532DemoSeed||('demo-'+uuid());
      q.chainId='demo-chain-'+window.__v532DemoSeed;
      q.stateId='demo-maya-start-'+window.__v532DemoSeed;
      q.name='MAYA';
      q.note='I left this for you. Can you take it further?';
      q.humanChain=[{name:'Maya',role:'started'}];
    }else if(z&&Object.keys(z).length){
      q.humanChain=normalizeChain(z.humanChain);
      q.note=String(z.note||'').slice(0,120);
      q.demo=!!z.demo && !q.testMode;
      q.conditionKind=z.conditionKind||null;
    }
    return q;
  };

  makeStateURL=function(state,mode='HUMAN',run=null){
    const base=oldMakeStateURL532(state,mode,run);
    try{
      const u=new URL(base),tok=u.searchParams.get('s');if(!tok)return base;
      const z=decodePayload(tok);if(!z)return base;
      const matched=!!run&&/^(HUMAN|WORLD)-/i.test(run);
      z.v=RUNTIME;
      if(!matched){
        z.humanChain=normalizeChain(state.humanChain||S?.humanChain);
        z.note=String(state.note||'').slice(0,120);
        z.demo=!!(state.demo||S?.demo);
        z.conditionKind=state.conditionKind||S?.conditionKind||null;
      }else{
        delete z.humanChain;delete z.note;delete z.demo;delete z.conditionKind;
      }
      u.searchParams.set('s',encodePayload(z));return u.toString();
    }catch{return base}
  };

  buildNextState=function(){
    const st=oldBuildNextState532();
    if(S?.testMode)return st;
    const alias=currentAlias(),note=currentNote();
    if(alias)localStorage.setItem(NAME_KEY,alias);
    const contributor=alias||'Anonymous';
    st.name=contributor;
    st.note=note;
    st.demo=!!S?.demo;
    st.humanChain=[...normalizeChain(S?.humanChain),{name:contributor,role:'completed'}].slice(-8);
    st.conditionKind='spatial-gesture';
    S.currentContributorName=contributor;
    S.currentContributorNote=note;
    return st;
  };

  function phaseIndex(id){return({author:0,intro:1,complete:1,play:2,leave:3,report:3,postReport:3}[id]??0)}
  function ensurePhaseRail(){
    const top=document.querySelector('.top');if(!top||top.querySelector('.v532-phase-rail'))return;
    const rail=document.createElement('div');rail.className='v532-phase-rail';
    rail.innerHTML=`<span data-step="0"><i></i><b>CREATE</b></span><em>→</em><span data-step="1"><i></i><b>INHERIT</b></span><em>→</em><span data-step="2"><i></i><b>COMPLETE</b></span><em>→</em><span data-step="3"><i></i><b>CONTINUE</b></span>`;
    top.appendChild(rail);
  }
  function updatePhaseRail(id){
    ensurePhaseRail();const n=phaseIndex(id);
    document.querySelectorAll('.v532-phase-rail span').forEach((el,i)=>el.classList.toggle('active',i<=n));
  }

  function ensureInheritedStory(){
    const card=$('intro');if(!card||S?.testMode||S?.authorMode)return;
    let box=card.querySelector('.v532-human-card');if(!box){box=document.createElement('div');box.className='v532-human-card';const t=card.querySelector('.v53-title');(t||card.firstChild)?.after?.(box)}
    const note=S?.note||'I left this for you. Can you take it further?';
    box.innerHTML=`<div class="v532-avatar">${esc(initial(S?.name||'Maya'))}</div><div><span>Inherited from</span><strong>${esc(humanLabel(S?.name||'Maya'))}</strong><blockquote>“${esc(note)}”</blockquote></div>`;
  }

  function ensureConditionStory(){
    const card=$('complete');if(!card||S?.testMode)return;
    let box=card.querySelector('.v532-condition-story');if(!box){box=document.createElement('div');box.className='v532-condition-story';const grid=card.querySelector('.grid');grid?.before(box)}
    box.innerHTML=`<div><span>ANCHOR</span><b>${esc(S.anchor)}</b></div><div><span>VECTOR</span><b>${esc(S.vector)}</b></div><div><span>REACH</span><b>${esc(S.reach)}</b></div><div><span>PRESSURE</span><b>${esc(S.pressure)}</b></div><div><span>TENSION</span><b>${esc(String(S.tension))}</b></div>`;
  }

  function chainMarkup(extra='You'){
    const names=chainNames();const out=[...names];if(extra)out.push(extra);const view=out.slice(-5);
    return view.map((n,i)=>`<span class="v532-chain-person"><i>${esc(initial(n))}</i><b>${esc(n)}</b>${i<view.length-1?'<em>→</em>':''}</span>`).join('');
  }
  function ensureSuccessorIdentity(){
    const card=$('leave');if(!card)return;
    card.querySelector('.v532-successor-panel')?.remove();
    if(S?.testMode)return;
    const panel=document.createElement('div');panel.className='v532-successor-panel';
    const saved=niceName(localStorage.getItem(NAME_KEY)||'');
    panel.innerHTML=`<div class="v532-successor-head"><span>HUMAN CHAIN</span><b>Leave your mark, if you want.</b></div><div class="v532-chain-preview">${chainMarkup(saved||'You')}</div><label>Your name <small>(optional)</small><input id="v532SuccessorName" maxlength="24" autocomplete="name" placeholder="Be part of the chain" value="${esc(saved)}"></label><label>Leave a note <small>(optional)</small><textarea id="v532SuccessorNote" maxlength="120" placeholder="What do you want the next person to know?"></textarea></label><div class="v532-live-condition"><span>YOUR NEXT CONDITION</span><b id="v532LiveGeometry">Drag from a socket to author it</b></div>`;
    const commit=$('leaveCommit');commit?.before(panel);
    const input=panel.querySelector('#v532SuccessorName');input?.addEventListener('input',()=>{const target=panel.querySelector('.v532-chain-preview');if(target)target.innerHTML=chainMarkup(niceName(input.value)||'You')});
  }

  function updateLiveGeometry(d){
    const el=document.getElementById('v532LiveGeometry');if(!el)return;
    el.textContent=d?.anchor?`${d.anchor} · ${d.vector||'—'} · ${d.reach||'—'}`:'Drag from a socket to author it';
  }

  function ensureAuthorGuide(){
    const card=$('author');if(!card||card.querySelector('.v532-author-guide'))return;
    const guide=document.createElement('div');guide.className='v532-author-guide';
    guide.innerHTML='<div><i>1</i><span>Choose a socket</span></div><div><i>2</i><span>Drag the direction</span></div><div><i>3</i><span>Release to place</span></div><strong id="v532AuthorGeometry">Your gesture becomes the inherited condition.</strong>';
    const label=card.querySelector('label');label?.before(guide);
  }

  function ensureReceipt(){
    const card=$('postReport');if(!card||S?.testMode)return;
    card.querySelector('.v531-demo-receipt')?.remove();card.querySelector('.v532-receipt')?.remove();
    const alias=humanLabel(S?.next?.name||S?.currentContributorName||'You');
    const prior=humanLabel(S?.name||'Maya');
    const outcome=S?.complete==='CONNECT'?'Traversable crossing':'Ascent route';
    const next=S?.next?`${S.next.pressure} · tension ${S.next.tension}`:'New condition';
    const route=S?.used?'Route completed':S?.skipped?'Route left early':`${Math.round((S?.routeProgress||0)*100)}% explored`;
    const el=document.createElement('div');el.className='v532-receipt';
    el.innerHTML=`<div class="v532-receipt-top"><span>CREATION RECEIPT</span><b>#${esc(String(S?.stateId||'').slice(-6).toUpperCase())}</b></div><div class="v532-receipt-row"><i>${esc(initial(prior))}</i><span>Prior author<small>${esc(prior)}</small></span><b>Left the condition</b></div><div class="v532-receipt-row"><i>${esc(initial(alias))}</i><span>Completed by<small>${esc(alias)}</small></span><b>${S?.complete==='CONNECT'?'Built a bridge':'Built a stair'}</b></div><div class="v532-receipt-row"><i>↗</i><span>Outcome<small>${esc(outcome)}</small></span><b>${esc(route)}</b></div><div class="v532-receipt-row"><i>∞</i><span>Next inherits<small>${esc(next)}</small></span><b>Generation ${esc(String(S?.next?.generation||((S?.generation||1)+1)))}</b></div><div class="v532-session-chain"><span>SESSION CHAIN</span><div>${chainMarkup(null)}${S?.next?.humanChain?.length?`<span class="v532-chain-person current"><i>${esc(initial(alias))}</i><b>${esc(alias)}</b></span>`:''}</div></div><div class="v532-proofline"><span>✓ successor committed</span><span>✓ stale-write protected locally</span><span>✓ transferable handoff</span></div>`;
    const title=card.querySelector('.v53-title');(title||card.firstChild)?.after?.(el);
    card.querySelector('.receipt')?.classList.add('v532-core-receipt');
  }

  function ensureWorldCaption(id){
    document.querySelector('.v532-world-caption')?.remove();
    if(S?.testMode||S?.authorMode)return;
    const scene=document.querySelector('.scene');if(!scene)return;
    const cap=document.createElement('div');cap.className='v532-world-caption';
    if(id==='intro'||id==='complete')cap.innerHTML=`<span>REAL PEOPLE · INCOMPLETE WORLDS</span><strong>${esc(humanLabel(S?.name||'Maya'))} shaped what you see.</strong>`;
    else if(id==='play')cap.innerHTML='<span>REVEAL + ROUTE USAGE</span><strong>A new route is born.</strong>';
    else if(id==='leave')cap.innerHTML='<span>SUCCESSOR PROBLEM</span><strong>Your ending becomes someone else’s beginning.</strong>';
    else return;scene.appendChild(cap);
  }

  function decorateExperience(id){
    document.body.dataset.v532Phase=id||'';
    updatePhaseRail(id);ensureAuthorGuide();
    if(id==='intro')ensureInheritedStory();
    if(id==='complete')ensureConditionStory();
    if(id==='leave')ensureSuccessorIdentity();
    if(id==='postReport')ensureReceipt();
    ensureWorldCaption(id);
    if($('play')&&!S?.testMode){const title=$('play').querySelector('.v53-title');if(title)title.textContent='A new route is born.';const micro=$('play').querySelector('.micro');if(micro)micro.textContent='Walk the route you completed. Your action is now part of the world.'}
    if($('leave')&&!S?.testMode){const title=$('leave').querySelector('.v53-title');if(title)title.textContent='Leave what’s next.'}
  }

  show=function(id){oldShow532(id);decorateExperience(id)};

  collectDebrief=function(){
    oldCollectDebrief532();
    S.version=RUNTIME;
    S.humanContinuity={chain:normalizeChain(S.humanChain),nextContributor:S.next?.name||null,noteCarried:!!S.note,successorNote:currentNote()||null};
    S.experienceProof={world:'architectural floating ruins',humanChainVisible:!S.testMode,successorIdentityOptional:true,receipt:'human-readable causal receipt',coldTestSourceNeutral:!!S.testMode};
  };
  makeReturnReceipt=function(){
    const url=oldMakeReturnReceipt532();
    try{const u=new URL(url),r=decodePayload(u.searchParams.get('receipt')||'');if(!r)return url;r.v=RUNTIME;r.humanChain=normalizeChain(S?.next?.humanChain||S?.humanChain);r.nextName=S?.next?.name||null;r.note=S?.next?.note||'';u.searchParams.set('receipt',encodePayload(r));return u.toString()}catch{return url}
  };

  function stoneLedge(cx,cy,w,h,alpha=.72){
    x.save();x.globalAlpha=alpha;
    const g=x.createLinearGradient(cx,cy-h,cx,cy+h);g.addColorStop(0,'#80616f');g.addColorStop(.28,'#594350');g.addColorStop(1,'#201722');x.fillStyle=g;
    x.beginPath();x.moveTo(cx-w*.52,cy-h*.15);x.lineTo(cx-w*.34,cy-h*.48);x.lineTo(cx+w*.42,cy-h*.42);x.lineTo(cx+w*.55,cy-h*.08);x.lineTo(cx+w*.38,cy+h*.48);x.lineTo(cx-w*.30,cy+h*.55);x.closePath();x.fill();
    x.strokeStyle='rgba(255,193,179,.18)';x.lineWidth=1.2;x.beginPath();x.moveTo(cx-w*.34,cy-h*.48);x.lineTo(cx+w*.42,cy-h*.42);x.stroke();x.restore();
  }
  function ruinedPillar(cx,base,w,h,alpha=.6){
    x.save();x.globalAlpha=alpha;const g=x.createLinearGradient(cx-w/2,0,cx+w/2,0);g.addColorStop(0,'#3a2936');g.addColorStop(.5,'#795866');g.addColorStop(1,'#2b202c');x.fillStyle=g;x.fillRect(cx-w/2,base-h,w,h);
    x.fillStyle='rgba(17,11,19,.24)';for(let yy=base-h+8;yy<base;yy+=10){x.fillRect(cx-w/2+3+(yy%2?4:0),yy,w*.38,2);x.fillRect(cx+1,yy+3,w*.38,2)}
    x.fillStyle='#9d7581';x.fillRect(cx-w*.62,base-h-4,w*1.24,5);x.restore();
  }
  drawBackground=function(){
    oldDrawBackground532();
    const px=(parallax.x-.5)*18,py=(parallax.y-.5)*7;
    x.save();
    stoneLedge(W*.10+px*.18,H*.72+py*.12,W*.24,H*.11,.72);
    stoneLedge(W*.80+px*.25,H*.69+py*.14,W*.30,H*.12,.66);
    ruinedPillar(W*.075+px*.15,H*.67,W*.035,H*.15,.55);
    ruinedPillar(W*.87+px*.22,H*.64,W*.028,H*.12,.46);
    stoneLedge(W*.52-px*.08,H*.28-py*.18,W*.12,H*.045,.26);ruinedPillar(W*.53,H*.265,W*.018,H*.055,.20);
    x.restore();
  };

  function hologramCube(px,py,size=30,alpha=.82){
    x.save();x.globalAlpha=alpha;x.strokeStyle='#ff9ed0';x.lineWidth=1.6;x.shadowColor='#ff8fca';x.shadowBlur=18;
    const d=size*.34;x.strokeRect(px-size/2,py-size/2,size,size);x.strokeRect(px-size/2+d,py-size/2-d,size,size);[[px-size/2,py-size/2],[px+size/2,py-size/2],[px-size/2,py+size/2],[px+size/2,py+size/2]].forEach(([a,b])=>{const tx=a+d,ty=b-d;x.beginPath();x.moveTo(a,b);x.lineTo(tx,ty);x.stroke()});x.shadowBlur=0;x.fillStyle='rgba(255,143,203,.08)';x.fillRect(px-size/2+1,py-size/2+1,size-2,size-2);x.restore();
  }
  drawCreatorMark=function(){
    oldDrawCreatorMark532();
    if(!S||S.authorMode)return;const p=pt([.16,anchorY(S.anchor)-.055],.34);hologramCube(p[0],p[1],Math.max(24,Math.min(W,H)*.055),S.testMode?.45:.82);
  };
  drawDraft=function(d,z){
    oldDrawDraft532(d,z);
    if(d?.end){const p=pt(d.end,.38);hologramCube(p[0],p[1],Math.max(24,Math.min(W,H)*.052),.86)}
    updateLiveGeometry(d);
    const ag=document.getElementById('v532AuthorGeometry');if(ag)ag.textContent=d?.anchor?`${d.anchor} anchor · ${d.vector||'—'} vector · ${d.reach||'—'} reach`:'Your gesture becomes the inherited condition.';
  };

  beginDebrief=function(){oldBeginDebrief532();if(S?.demo)setTimeout(()=>{ensureReceipt();decorateExperience('postReport')},0)};

  fresh=function(){
    const q=config();oldFresh532();
    if(S){S.version=RUNTIME;S.humanChain=normalizeChain(q.humanChain);S.note=q.note||'';S.demo=!!q.demo;S.conditionKind=q.conditionKind||'spatial-gesture';if(S.demo&&!S.humanChain.length)S.humanChain=[{name:'Maya',role:'started'}]}
    const visibleCard=document.querySelector('.card:not(.hidden)')?.id||'';decorateExperience(visibleCard);draw();
  };

  document.documentElement.classList.add('v532ready');
  window.__UNFINISHED_RUNTIME__=RUNTIME;
  if($('debug'))$('debug').textContent='v5.3.2';
  fresh();resize();
})();