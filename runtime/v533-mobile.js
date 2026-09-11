/* UNFINISHED V5.3.3 — mobile finish + human continuity polish.
   Targeted polish from real mobile recordings. Causal engine and cold-test neutrality remain untouched. */
(() => {
  const RUNTIME='5.3.3-mobile-finish';
  const oldShow533=show;
  const oldFresh533=fresh;
  const oldStart533=start;
  const oldChooseComplete533=chooseComplete;
  const oldDrawAvatar533=drawAvatar;
  const oldDrawDraft533=drawDraft;

  const niceName533=v=>{
    const s=String(v||'').trim().replace(/[^\p{L}\p{N} _.-]/gu,'').slice(0,24);
    return /[\p{L}]{2,}/u.test(s)?s:'';
  };
  const human533=v=>niceName533(v)||'You';
  const lastName=()=>niceName533(localStorage.getItem('unfinished:v532:lastName')||'');

  function ensureIntroIdentity(){
    const card=$('intro');
    if(!card || S?.testMode || S?.authorMode || !S?.demo) return;
    if(card.querySelector('.v533-intro-identity')) return;
    const host=card.querySelector('.v532-human-card') || card.querySelector('.v53-title');
    const box=document.createElement('div');
    box.className='v533-intro-identity';
    const saved=lastName();
    box.innerHTML=`<div><span>YOUR TURN</span><b>Sign your part of the chain <small>(optional)</small></b></div>
      <input id="v533IntroName" maxlength="24" autocomplete="name" placeholder="Your name" value="${saved.replace(/"/g,'&quot;')}">
      <p>${human533(S?.name||'Maya')} → <strong id="v533IntroChainName">${saved||'You'}</strong></p>`;
    if(host?.after) host.after(box); else card.appendChild(box);
    const input=box.querySelector('input');
    input.addEventListener('input',()=>{
      const n=niceName533(input.value);
      box.querySelector('#v533IntroChainName').textContent=n||'You';
    });
  }

  function captureIntroIdentity(){
    if(!S?.demo || S?.testMode) return;
    const input=document.getElementById('v533IntroName');
    const n=niceName533(input?.value)||lastName();
    if(n){
      localStorage.setItem('unfinished:v532:lastName',n);
      S.currentContributorName=n;
    }else{
      S.currentContributorName='You';
    }
  }

  function contributorName(){
    return niceName533(S?.currentContributorName)||lastName()||'You';
  }

  function patchRevealNames(){
    if(!S?.demo || S?.testMode) return;
    setTimeout(()=>{
      const r=document.querySelector('.v531-reveal');
      if(!r) return;
      const sub=r.querySelector('span');
      if(sub) sub.textContent=`${human533(S?.name||'Maya')} + ${contributorName()}`;
    },140);
  }

  function bindKeyboardSafety(root=document){
    if(!('visualViewport' in window)) return;
    root.querySelectorAll('#v532SuccessorName,#v532SuccessorNote,#v533IntroName').forEach(el=>{
      if(el.dataset.v533Keyboard) return;
      el.dataset.v533Keyboard='1';
      el.addEventListener('focus',()=>{
        document.body.classList.add('v533-keyboard');
        setTimeout(()=>el.scrollIntoView({block:'center',behavior:'smooth'}),100);
      });
      el.addEventListener('blur',()=>setTimeout(()=>document.body.classList.remove('v533-keyboard'),120));
    });
  }

  function patchSuccessorPanel(){
    if(S?.testMode) return;
    const panel=document.querySelector('.v532-successor-panel');
    if(!panel) return;
    const input=panel.querySelector('#v532SuccessorName');
    if(input && !input.value && contributorName()!=='You'){
      input.value=contributorName();
      input.dispatchEvent(new Event('input',{bubbles:true}));
    }
    const head=panel.querySelector('.v532-successor-head b');
    if(head) head.textContent='Pass the chain forward.';
    let expl=panel.querySelector('.v533-chain-explainer');
    if(!expl){
      expl=document.createElement('p');
      expl.className='v533-chain-explainer';
      expl.textContent='Your name is optional. The next person can add theirs, so the world carries a visible human lineage.';
      panel.querySelector('.v532-chain-preview')?.after(expl);
    }
    bindKeyboardSafety(panel);
  }

  function patchDemoActions(){
    if(!S?.demo || S?.testMode) return;
    const actions=document.querySelector('.v531-demo-actions');
    if(!actions || actions.dataset.v533) return;
    actions.dataset.v533='1';
    const btns=actions.querySelectorAll('button');
    const next=btns[1];
    if(next){
      next.textContent='SHARE NEXT PLAYER LINK →';
      next.onclick=async()=>{
        const url=nextVisitorURL();
        if(!url) return;
        const data={title:'UNFINISHED',text:'I left something unfinished for you.',url};
        try{
          if(navigator.share){await navigator.share(data);log('HANDOFF_SHARED',{mode:'native'});}
          else{await navigator.clipboard.writeText(url);badge('NEXT PLAYER LINK COPIED');log('HANDOFF_SHARED',{mode:'clipboard'});}
        }catch(err){
          if(err?.name!=='AbortError'){
            try{await navigator.clipboard.writeText(url);badge('NEXT PLAYER LINK COPIED')}catch{}
          }
        }
      };
    }
    let note=actions.parentElement?.querySelector('.v533-share-note');
    if(!note){
      note=document.createElement('div');
      note.className='v533-share-note';
      note.textContent='Self-completion is blocked by design. Pass this handoff to another person.';
      actions.before(note);
    }
  }

  drawAvatar=function(){
    if(!S?.avatar) return oldDrawAvatar533();
    const p=pt([S.avatar.x,S.avatar.y-.035],.5);
    const k=Math.max(8,Math.min(W,H)*.018);
    x.save();
    x.translate(p[0],p[1]);
    x.shadowColor='rgba(255,157,192,.28)';
    x.shadowBlur=14;
    x.fillStyle='rgba(22,13,27,.96)';
    x.beginPath();
    x.moveTo(0,-k*.45);
    x.quadraticCurveTo(-k*.55,k*.15,-k*.70,k*1.15);
    x.lineTo(k*.08,k*.92);
    x.lineTo(k*.62,k*1.18);
    x.quadraticCurveTo(k*.45,k*.10,0,-k*.45);
    x.closePath();
    x.fill();
    x.fillStyle='#d8b0a8';
    x.beginPath();x.arc(0,-k*.78,k*.30,0,Math.PI*2);x.fill();
    x.shadowBlur=0;x.strokeStyle='rgba(255,187,204,.72)';x.lineWidth=1.2;
    x.beginPath();x.moveTo(-k*.52,k*.32);x.quadraticCurveTo(-k*.64,k*.78,-k*.68,k*1.12);x.stroke();
    x.strokeStyle='rgba(20,12,25,.95)';x.lineWidth=2;
    x.beginPath();x.moveTo(-k*.12,k*.86);x.lineTo(-k*.25,k*1.38);x.moveTo(k*.12,k*.88);x.lineTo(k*.31,k*1.35);x.stroke();
    x.restore();
  };

  drawDraft=function(d,z){
    if(!d?.anchor){
      ['LOW','MID','HIGH'].forEach((a,i)=>{
        const p=pt([z.x0,anchorY(a)],.36);
        x.save();
        const pulse=1+Math.sin((performance.now()/480)+i)*.08;
        x.shadowColor='rgba(255,118,180,.38)';x.shadowBlur=18;
        x.fillStyle='rgba(44,22,48,.78)';
        x.strokeStyle='rgba(255,166,203,.82)';x.lineWidth=2;
        x.beginPath();x.arc(p[0],p[1],10*pulse,0,Math.PI*2);x.fill();x.stroke();
        x.fillStyle='rgba(255,215,231,.92)';x.beginPath();x.arc(p[0],p[1],2.4,0,Math.PI*2);x.fill();
        x.restore();
      });
      return;
    }
    const y=anchorY(d.anchor), end=d.end||[z.x0+.08,y];
    const points=[[z.x0,y],end];
    try{
      drawExtruded(points,{top:'#8e7778',side:'rgba(55,35,52,.82)',shadow:'rgba(0,0,0,.24)',edge:'rgba(255,171,199,.56)',width:16,depth:9,alpha:.9});
    }catch{ oldDrawDraft533(d,z); return; }
    const A=pt([z.x0,y],.36), B=pt(end,.36);
    x.save();
    [A,B].forEach((p,idx)=>{
      x.shadowColor='rgba(255,121,187,.36)';x.shadowBlur=16;
      x.fillStyle=idx?'rgba(255,143,189,.10)':'rgba(34,20,39,.78)';
      x.strokeStyle='rgba(255,170,208,.84)';x.lineWidth=1.8;
      x.beginPath();x.arc(p[0],p[1],idx?8:7,0,Math.PI*2);x.fill();x.stroke();
    });
    const s=12;x.strokeStyle='rgba(255,132,195,.9)';x.lineWidth=1.4;x.strokeRect(B[0]-s/2,B[1]-s/2,s,s);
    x.strokeStyle='rgba(207,170,255,.55)';x.strokeRect(B[0]-s/2+4,B[1]-s/2-4,s,s);
    x.beginPath();x.moveTo(B[0]-s/2,B[1]-s/2);x.lineTo(B[0]-s/2+4,B[1]-s/2-4);x.moveTo(B[0]+s/2,B[1]-s/2);x.lineTo(B[0]+s/2+4,B[1]-s/2-4);x.moveTo(B[0]+s/2,B[1]+s/2);x.lineTo(B[0]+s/2+4,B[1]+s/2-4);x.stroke();
    x.restore();
  };

  function patchReceiptLayout(){
    if(!S?.demo || S?.testMode) return;
    const card=$('postReport');
    if(!card) return;
    patchDemoActions();
    const chain=card.querySelector('.v532-session-chain');
    if(chain){
      const lab=chain.querySelector(':scope > span');
      if(lab) lab.textContent='HUMAN CHAIN';
    }
  }

  function apply533(id){
    document.body.dataset.v533Phase=id||'';
    ensureIntroIdentity();
    patchSuccessorPanel();
    patchReceiptLayout();
    bindKeyboardSafety();
    if(id==='postReport') patchDemoActions();
  }

  show=function(id){
    oldShow533(id);
    apply533(id);
  };

  start=function(){
    captureIntroIdentity();
    const r=oldStart533.apply(this,arguments);
    apply533(document.querySelector('.card:not(.hidden)')?.id||'complete');
    return r;
  };

  chooseComplete=function(v,source='button'){
    captureIntroIdentity();
    const r=oldChooseComplete533(v,source);
    patchRevealNames();
    return r;
  };

  fresh=function(){
    oldFresh533();
    if(S){S.version=RUNTIME}
    apply533(document.querySelector('.card:not(.hidden)')?.id||'');
    draw();
  };

  if(S){S.version=RUNTIME}
  apply533(document.querySelector('.card:not(.hidden)')?.id||'');
  document.documentElement.classList.add('v533ready');
  window.__UNFINISHED_RUNTIME__=RUNTIME;
  if($('debug'))$('debug').textContent='v5.3.3';
  draw();
})();