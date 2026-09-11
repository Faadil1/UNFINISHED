/* UNFINISHED V5.3.1 — final demo polish.
   Final visual/world pass + judge-safe demo flow. The causal engine is untouched. */
(() => {
  const PATCH = '5.3.1-final-demo';
  const oldShow531 = show;
  const oldBeginDebrief531 = beginDebrief;
  const oldChooseComplete531 = chooseComplete;
  const oldFresh531 = fresh;

  function setModeClasses(){
    document.body.classList.toggle('demo-mode', !!S?.demo);
    document.body.classList.toggle('cold-test-mode', !!S?.testMode);
    document.body.classList.toggle('operator-mode', !!S?.authorMode);
  }

  function sceneOverlay(text, sub=''){
    document.querySelector('.v531-reveal')?.remove();
    const el=document.createElement('div');el.className='v531-reveal';
    el.innerHTML=`<span>${sub}</span><strong>${text}</strong>`;
    document.querySelector('.scene')?.appendChild(el);
    requestAnimationFrame(()=>el.classList.add('show'));
    setTimeout(()=>{el.classList.remove('show');setTimeout(()=>el.remove(),420)},1450);
  }

  function drawStoneIsland(cx,cy,rx,ry,depth=22,alpha=.85){
    x.save();x.globalAlpha=alpha;
    const g=x.createLinearGradient(0,cy-ry,0,cy+depth+ry);
    g.addColorStop(0,'#5b405b');g.addColorStop(.45,'#35283d');g.addColorStop(1,'#1b1521');
    x.fillStyle=g;x.beginPath();x.ellipse(cx,cy,rx,ry,0,0,Math.PI*2);x.fill();
    x.fillStyle='rgba(17,12,22,.58)';x.beginPath();x.moveTo(cx-rx*.82,cy+ry*.25);x.lineTo(cx-rx*.48,cy+depth+ry*.7);x.lineTo(cx+rx*.35,cy+depth+ry*.62);x.lineTo(cx+rx*.82,cy+ry*.18);x.closePath();x.fill();
    x.strokeStyle='rgba(255,184,169,.12)';x.lineWidth=1.2;x.beginPath();x.ellipse(cx,cy,rx,ry,0,Math.PI,Math.PI*2);x.stroke();
    x.restore();
  }

  function drawArch(cx,base,scale=.7,alpha=.38){
    x.save();x.globalAlpha=alpha;x.strokeStyle='#b0939d';x.lineWidth=Math.max(3,9*scale);x.lineCap='butt';
    const w=52*scale,h=90*scale;
    x.beginPath();x.moveTo(cx-w/2,base);x.lineTo(cx-w/2,base-h*.55);x.arc(cx,base-h*.55,w/2,Math.PI,0);x.lineTo(cx+w/2,base);x.stroke();
    x.strokeStyle='rgba(255,194,177,.16)';x.lineWidth=Math.max(1,2*scale);x.beginPath();x.moveTo(cx-w*.35,base);x.lineTo(cx-w*.35,base-h*.48);x.arc(cx,base-h*.48,w*.35,Math.PI,0);x.lineTo(cx+w*.35,base);x.stroke();
    x.restore();
  }

  function drawTower(cx,base,w,h,alpha=.42){
    x.save();x.globalAlpha=alpha;
    const g=x.createLinearGradient(cx,base-h,cx+w,base);g.addColorStop(0,'#75536d');g.addColorStop(1,'#2a1f31');x.fillStyle=g;
    x.fillRect(cx-w/2,base-h,w,h);
    x.fillStyle='rgba(12,9,17,.48)';
    for(let yy=base-h+14;yy<base-8;yy+=18) for(let xx=cx-w/2+8;xx<cx+w/2-5;xx+=18){x.fillRect(xx,yy,7,4)}
    x.fillStyle='rgba(255,194,177,.12)';x.fillRect(cx-w/2,base-h,w,2);
    x.restore();
  }

  // Replace abstract disks with a lightweight architectural world. No external assets, no heavy 3D dependency.
  drawBackground = function(){
    const px=(parallax.x-.5)*16+(typeof cameraV52!=='undefined'?cameraV52.x*.10:0);
    const py=(parallax.y-.5)*8+(typeof cameraV52!=='undefined'?cameraV52.y*.06:0);
    const horizon=H*.70;
    const sky=x.createLinearGradient(0,0,0,H);
    sky.addColorStop(0,'#1c1024');sky.addColorStop(.38,'#4b2348');sky.addColorStop(.68,'#ba6676');sky.addColorStop(.705,'#f0a187');sky.addColorStop(.72,'#2b172d');sky.addColorStop(1,'#160f1d');
    x.fillStyle=sky;x.fillRect(0,0,W,H);

    // soft sun + haze
    const sunX=W*.76+px*.22,sunY=horizon-H*.085+py*.12;
    const rg=x.createRadialGradient(sunX,sunY,2,sunX,sunY,H*.20);rg.addColorStop(0,'rgba(255,225,173,.92)');rg.addColorStop(.14,'rgba(255,186,145,.38)');rg.addColorStop(1,'rgba(255,150,166,0)');x.fillStyle=rg;x.fillRect(0,0,W,H);
    x.fillStyle='rgba(255,218,213,.10)';x.fillRect(0,horizon-H*.055,W,H*.08);

    // stars / drifting dust
    x.save();for(let i=0;i<34;i++){const xx=((i*137.7)%W+px*.35+W)%W, yy=22+((i*73.1)%(H*.43));const a=.10+((i%5)*.035);x.fillStyle=`rgba(255,235,239,${a})`;x.beginPath();x.arc(xx,yy,(i%3===0?1.5:.8),0,Math.PI*2);x.fill()}x.restore();

    // back layer ruins
    x.save();x.translate(px*.18,py*.10);
    drawIslandSet(.14,.53,.10,.035,.34);drawIslandSet(.37,.43,.065,.025,.30);drawIslandSet(.66,.48,.075,.03,.32);drawIslandSet(.88,.40,.065,.024,.27);
    drawArch(W*.18,horizon-H*.09,.55,.22);drawArch(W*.70,horizon-H*.055,.42,.18);drawTower(W*.42,horizon-H*.06,W*.028,H*.12,.20);drawTower(W*.91,horizon-H*.04,W*.022,H*.09,.16);
    x.restore();

    // mid islands that the causal structure can visually bridge
    x.save();x.translate(px*.40,py*.22);
    drawStoneIsland(W*.14,H*.51,W*.115,H*.032,24,.82);
    drawStoneIsland(W*.39,H*.47,W*.075,H*.025,18,.68);
    drawStoneIsland(W*.63,H*.53,W*.12,H*.034,25,.80);
    drawStoneIsland(W*.86,H*.46,W*.09,H*.028,19,.70);
    drawTower(W*.13,H*.495,W*.035,H*.10,.44);drawArch(W*.64,H*.515,.70,.36);drawTower(W*.86,H*.445,W*.028,H*.082,.33);
    x.restore();

    // foreground void / vignette
    const vg=x.createLinearGradient(0,horizon,0,H);vg.addColorStop(0,'rgba(15,8,18,.10)');vg.addColorStop(1,'rgba(10,7,14,.70)');x.fillStyle=vg;x.fillRect(0,horizon,W,H-horizon);
    const edge=x.createRadialGradient(W*.5,H*.47,H*.16,W*.5,H*.47,W*.68);edge.addColorStop(.48,'rgba(0,0,0,0)');edge.addColorStop(1,'rgba(7,4,10,.42)');x.fillStyle=edge;x.fillRect(0,0,W,H);
  };

  function drawIslandSet(nx,ny,nrx,nry,alpha){drawStoneIsland(W*nx,H*ny,W*nrx,H*nry,13,alpha)}

  // Give route beams a stone/resin texture and a readable active edge.
  if(typeof beamSegmentV52==='function'){
    beamSegmentV52 = function(a,b,{top='#766f62',side='#33283a',edge='rgba(255,190,178,.38)',shadow='rgba(0,0,0,.24)',width=18,depth=11,alpha=1}={}){
      const A=pt(a,.23),B=pt(b,.23),dx=B[0]-A[0],dy=B[1]-A[1],len=Math.hypot(dx,dy)||1,nx=-dy/len*width/2,ny=dx/len*width/2;
      const p1=[A[0]+nx,A[1]+ny],p2=[B[0]+nx,B[1]+ny],p3=[B[0]-nx,B[1]-ny],p4=[A[0]-nx,A[1]-ny];x.save();x.globalAlpha=alpha;
      x.shadowColor=shadow;x.shadowBlur=10;x.shadowOffsetY=7;x.fillStyle=side;x.beginPath();x.moveTo(p4[0],p4[1]);x.lineTo(p3[0],p3[1]);x.lineTo(p3[0],p3[1]+depth);x.lineTo(p4[0],p4[1]+depth);x.closePath();x.fill();x.shadowColor='transparent';
      const tg=x.createLinearGradient(A[0],A[1],B[0],B[1]);tg.addColorStop(0,top);tg.addColorStop(.5,'#95877e');tg.addColorStop(1,top);x.fillStyle=tg;x.beginPath();x.moveTo(p1[0],p1[1]);x.lineTo(p2[0],p2[1]);x.lineTo(p3[0],p3[1]);x.lineTo(p4[0],p4[1]);x.closePath();x.fill();x.strokeStyle=edge;x.lineWidth=1.2;x.stroke();
      // masonry seams
      x.strokeStyle='rgba(28,20,31,.20)';x.lineWidth=1;for(let t=.18;t<.95;t+=.20){const xx=A[0]+dx*t,yy=A[1]+dy*t;x.beginPath();x.moveTo(xx+nx*.82,yy+ny*.82);x.lineTo(xx-nx*.82,yy-ny*.82);x.stroke()}
      x.restore();
    };
  }

  function decorateDemoReceipt(){
    const card=$('postReport');if(!card||!S?.demo)return;
    card.querySelector('.v531-demo-receipt')?.remove();
    const el=document.createElement('div');el.className='v531-demo-receipt';
    const next=S.next?`${S.next.pressure} · tension ${S.next.tension}`:'next condition';
    el.innerHTML=`<div class="receipt-kicker">CREATION RECEIPT</div><div class="receipt-row"><span>Inherited from</span><b>${cleanName(S.name||'MAYA')}</b></div><div class="receipt-row"><span>Your completion</span><b>${S.complete==='CONNECT'?'BRIDGE':'STAIR'}</b></div><div class="receipt-row"><span>Outcome</span><b>${S.complete==='CONNECT'?'TRAVERSABLE CROSSING':'ASCENT ROUTE'}</b></div><div class="receipt-row"><span>Next visitor inherits</span><b>${next}</b></div>`;
    const title=card.querySelector('.v53-title');(title||card.firstChild)?.after?.(el);
    // Demo is for judges, not research operators.
    card.querySelectorAll('.actions').forEach(a=>a.classList.add('v531-technical-actions'));
    if(!card.querySelector('.v531-demo-actions')){
      const actions=document.createElement('div');actions.className='v531-demo-actions';
      const again=document.createElement('button');again.className='secondary';again.textContent='REPLAY';again.onclick=()=>{history.replaceState(null,'',location.pathname);location.reload()};
      const nextBtn=document.createElement('button');nextBtn.className='primary';nextBtn.textContent='FOLLOW THE NEXT CONDITION →';nextBtn.onclick=()=>{const u=nextVisitorURL();if(u)location.href=u};
      actions.append(again,nextBtn);card.appendChild(actions);
    }
  }

  // Judge demo skips the research survey; cold tests keep the full debrief unchanged.
  beginDebrief = function(){
    if(!S?.demo) return oldBeginDebrief531();
    $('nextLink').textContent=nextVisitorURL();
    $('afterText').textContent=S.complete==='CONNECT'?'You solved the span. The next visitor now inherits the height pressure you created.':'You gained height. The next visitor now inherits the distance pressure you created.';
    setPhase('HANDOFF');oldShow531('postReport');setModeClasses();decorateDemoReceipt();draw();
    log('DEMO_HANDOFF_SHOWN',{next:S.next?.pressure,completion:S.complete});
  };

  chooseComplete = function(v,source='button'){
    oldChooseComplete531(v,source);
    if(S?.demo){setTimeout(()=>sceneOverlay('A new route is born.',`${cleanName(S.name||'MAYA')} + YOU`),100)}
  };
  document.querySelectorAll('[data-complete]').forEach(b=>{if(b.dataset.v53Hold!=='1')return;/* v53 hold handlers call global chooseComplete */});

  show = function(id){oldShow531(id);setModeClasses();if(id==='postReport')decorateDemoReceipt()};
  fresh = function(){oldFresh531();setModeClasses();if(S?.authorMode){const note=$('author')?.querySelector('.warn');if(note)note.textContent='Your name signs the condition. The causal state is carried separately.'}draw()};

  // Apply immediately to the already-bootstrapped V5.3 runtime.
  setModeClasses();
  if(S?.authorMode){const note=$('author')?.querySelector('.warn');if(note)note.textContent='Your name signs the condition. The causal state is carried separately.'}
  document.documentElement.classList.add('v531ready');
  window.__UNFINISHED_RUNTIME__=PATCH;
  if($('debug'))$('debug').textContent='v5.3.1';
  draw();
})();