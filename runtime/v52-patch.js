/* UNFINISHED V5.2 — targeted perceptual interaction patch.
   Loaded after the V5.1 causal core so the validated state engine remains intact. */
let cameraV52={x:0,y:0,targetX:0,targetY:0};
const freshV51=fresh, acceptAvatarPointV51=acceptAvatarPoint, collectDebriefV51=collectDebrief, makeReturnReceiptV51=makeReturnReceipt;
function ensureV52(){
  if(!S||S.authorMode)return;
  S.version='5.2';
  S.metrics=S.metrics||{};
  if(S.metrics.junctionsCrossed==null)S.metrics.junctionsCrossed=0;
  if(S.metrics.cameraTravel==null)S.metrics.cameraTravel=0;
  if(S.metrics.pressureFeedbackSeen==null)S.metrics.pressureFeedbackSeen=false;
  if($('debug'))$('debug').textContent='v5.2';
}
fresh=function(){freshV51();cameraV52={x:0,y:0,targetX:0,targetY:0};ensureV52();draw()};
start=function(){
  ensureV52();S.metrics.pageToStart=Math.round(now()-S.t0);S.t0=now();S.events=[];
  log('START',{source:S.mode,stateId:S.stateId,pairId:S.pairId,inherited:{anchor:S.anchor,vector:S.vector,reach:S.reach,pressure:S.pressure,tension:S.tension,engineBias:S.engineBias},runLabel:S.runLabel});
  setPhase('02 / 04');show('complete');beginPhase('complete');draw();setTimeout(()=>badge('STARTING CONDITION'),500)
};
$('start').onclick=start;
const chooseCompleteV51=chooseComplete;
chooseComplete=function(v,source='button'){chooseCompleteV51(v,source);ensureV52();if(S.metrics)S.metrics.pressureFeedbackSeen=true};
document.querySelectorAll('[data-complete]').forEach(b=>b.onclick=()=>chooseComplete(b.dataset.complete,'button'));
acceptAvatarPoint=function(nx,ny,source){
  if(!S.complete||S.used||S.skipped)return;
  const before=S.routeProgress||0,ok=acceptAvatarPointV51(nx,ny,source);if(!ok)return ok;
  ensureV52();cameraV52.targetX=clamp((S.avatar.x-.5)*-28,-16,16);cameraV52.targetY=clamp((S.avatar.y-.52)*-14,-8,8);
  S.metrics.cameraTravel=Math.max(S.metrics.cameraTravel||0,Math.round(Math.hypot(cameraV52.targetX,cameraV52.targetY)));
  const a=Math.floor(before*4),b=Math.floor((S.routeProgress||0)*4);if(b>a){S.metrics.junctionsCrossed+=(b-a);haptic(14);log('JUNCTION_CROSSED',{junction:b,progress:+S.routeProgress.toFixed(3)})}
  return ok;
};
collectDebrief=function(){
  collectDebriefV51();ensureV52();S.causalProof.engine.policy='deterministic-causal-v3-embodied';
  S.interactionProof={surface:'2.5D tactile structural canvas',spatialAuthoring:'drag gesture',routeUse:'direct avatar drag + accessible D-pad',platformTraversal:true,pressureEmbodied:true,provenanceCue:S.mode==='HUMAN'?'human-mark':'system-mark',cameraFollow:true,offRouteAttempts:S.offRouteAttempts,routeProgress:S.routeProgress,metrics:S.metrics};
};
makeReturnReceipt=function(){
  const old=makeReturnReceiptV51();try{const u=new URL(old),r=decodePayload(u.searchParams.get('receipt')||'');if(r){r.v='5.2';u.searchParams.set('receipt',encodePayload(r));return u.toString()}}catch{}return old
};
submitDebrief=function(){collectDebrief();$('nextLink').textContent=nextVisitorURL();$('afterText').textContent=S.complete==='CONNECT'?'You closed the gap. The structure you left now asks the next visitor to deal with height.':'You gained height. The structure you left now asks the next visitor to deal with distance.';show('postReport');setPhase('HANDOFF');summary();draw()};
$('submitDebrief').onclick=submitDebrief;
function drawBackground(){
  const horizon=H*.74,px=(parallax.x-.5)*10+cameraV52.x*.18,py=(parallax.y-.5)*5+cameraV52.y*.10,g=x.createLinearGradient(0,0,0,H);
  g.addColorStop(0,'#eee7d8');g.addColorStop(.72,'#faf7ee');g.addColorStop(.735,'#d8cfbd');g.addColorStop(1,'#c9bea9');x.fillStyle=g;x.fillRect(0,0,W,H);
  x.save();x.translate(cameraV52.x*.08,cameraV52.y*.04);x.fillStyle='rgba(23,23,23,.035)';
  [[.04,.10,.08],[.17,.065,.055],[.29,.13,.075],[.71,.09,.06],[.82,.14,.09],[.93,.07,.05]].forEach(([xx,hh,ww])=>x.fillRect(W*xx+px*.15,horizon-H*hh,W*ww,H*hh));
  x.strokeStyle='rgba(23,23,23,.055)';x.lineWidth=1;for(let i=-3;i<=9;i++){const bx=W*(i/6)+px*.22;x.beginPath();x.moveTo(W*.5+px*.06,horizon);x.lineTo(bx,H);x.stroke()}
  for(let k=1;k<6;k++){const yy=horizon+(H-horizon)*(1-Math.pow(.64,k));x.beginPath();x.moveTo(0,yy);x.lineTo(W,yy);x.stroke()}
  const vg=x.createLinearGradient(0,horizon*.94,0,H*.92);vg.addColorStop(0,'rgba(34,31,27,.03)');vg.addColorStop(1,'rgba(34,31,27,.12)');x.fillStyle=vg;x.beginPath();x.ellipse(W*.52+px*.08,H*.79+py*.1,W*.34,H*.10,0,0,Math.PI*2);x.fill();x.restore();
}
pt=function(p,depth=0){const px=(parallax.x-.5)*10*depth+cameraV52.x*(.45+.25*depth),py=(parallax.y-.5)*5*depth+cameraV52.y*(.42+.20*depth);return[p[0]*W+px,p[1]*H+py]};
function beamSegmentV52(a,b,{top='#24211d',side='#8f8678',edge='rgba(23,23,23,.35)',shadow='rgba(0,0,0,.13)',width=18,depth=11,alpha=1}={}){
  const A=pt(a,.23),B=pt(b,.23),dx=B[0]-A[0],dy=B[1]-A[1],len=Math.hypot(dx,dy)||1,nx=-dy/len*width/2,ny=dx/len*width/2;
  const p1=[A[0]+nx,A[1]+ny],p2=[B[0]+nx,B[1]+ny],p3=[B[0]-nx,B[1]-ny],p4=[A[0]-nx,A[1]-ny];x.save();x.globalAlpha=alpha;
  x.fillStyle=shadow;x.beginPath();[p1,p2,p3,p4].forEach((p,i)=>i?x.lineTo(p[0]+5,p[1]+depth+7):x.moveTo(p[0]+5,p[1]+depth+7));x.closePath();x.fill();
  x.fillStyle=side;x.beginPath();x.moveTo(p4[0],p4[1]);x.lineTo(p3[0],p3[1]);x.lineTo(p3[0],p3[1]+depth);x.lineTo(p4[0],p4[1]+depth);x.closePath();x.fill();
  x.fillStyle=top;x.beginPath();x.moveTo(p1[0],p1[1]);x.lineTo(p2[0],p2[1]);x.lineTo(p3[0],p3[1]);x.lineTo(p4[0],p4[1]);x.closePath();x.fill();x.strokeStyle=edge;x.lineWidth=1;x.stroke();x.restore();
}
function drawPlatformV52(points,opts={}){if(points.length<2)return;for(let i=0;i<points.length-1;i++)beamSegmentV52(points[i],points[i+1],opts);if(opts.joints!==false){x.save();x.globalAlpha=opts.alpha??1;points.slice(1,-1).forEach(p=>{const q=pt(p,.24);x.fillStyle=opts.joint||'#d7cfbf';x.strokeStyle='rgba(23,23,23,.34)';x.lineWidth=1.3;x.beginPath();x.arc(q[0],q[1],Math.max(4,(opts.width||18)*.31),0,Math.PI*2);x.fill();x.stroke()});x.restore()}}
function drawSupportsV52(points,alpha=1){x.save();x.globalAlpha=alpha;points.slice(1).forEach((p,i)=>{if(i%2)return;const q=pt(p,.2),ground=H*.765+cameraV52.y*.08;x.strokeStyle='rgba(72,66,57,.28)';x.lineWidth=5;x.beginPath();x.moveTo(q[0],q[1]+8);x.lineTo(q[0],ground);x.stroke();x.strokeStyle='rgba(255,255,255,.22)';x.lineWidth=1;x.beginPath();x.moveTo(q[0]-1,q[1]+8);x.lineTo(q[0]-1,ground);x.stroke()});x.restore()}
drawCreatorMark=function(){
  const y=anchorY(S.anchor),p=pt([.105,y],.36);x.save();x.shadowColor='rgba(0,0,0,.14)';x.shadowBlur=12;x.shadowOffsetY=6;
  if(S.mode==='HUMAN'){x.fillStyle='#e8dfcf';x.strokeStyle='rgba(23,23,23,.35)';x.lineWidth=1.5;x.beginPath();x.arc(p[0],p[1],16,0,Math.PI*2);x.fill();x.stroke();x.shadowColor='transparent';x.fillStyle='#171717';x.font='950 10px system-ui';x.textAlign='center';x.textBaseline='middle';x.fillText((S.name[0]||'H').toUpperCase(),p[0],p[1]);x.strokeStyle='rgba(23,23,23,.28)';x.lineWidth=1;[9,12].forEach(r=>{x.beginPath();x.arc(p[0],p[1]+1,r,-2.55,-.65);x.stroke()})}
  else{x.fillStyle='#d7d3ca';x.strokeStyle='rgba(23,23,23,.35)';x.lineWidth=1.5;x.beginPath();for(let i=0;i<6;i++){const a=-Math.PI/2+i*Math.PI/3,r=16,xx=p[0]+Math.cos(a)*r,yy=p[1]+Math.sin(a)*r;i?x.lineTo(xx,yy):x.moveTo(xx,yy)}x.closePath();x.fill();x.stroke();x.shadowColor='transparent';x.strokeStyle='#171717';x.lineWidth=1.5;x.beginPath();x.moveTo(p[0]-6,p[1]);x.lineTo(p[0]+6,p[1]);x.moveTo(p[0],p[1]-6);x.lineTo(p[0],p[1]+6);x.stroke()}x.restore();
};
function stressShapeV52(points){const out=points.map(p=>[p[0],p[1]]),t=clamp(Number(S.tension)||1,0,3);if(S.pressure==='SPAN'&&out.length>2)for(let i=1;i<out.length-1;i++)out[i][1]+=Math.sin(Math.PI*i/(out.length-1))*(.008+.009*t);if(S.pressure==='HEIGHT'&&out.length>2)for(let i=1;i<out.length;i++)out[i][1]-=(i/(out.length-1))*(.004+.006*t);return out}
function drawPressureV52(points){const t=clamp(Number(S.tension)||1,0,3),end=pt(points[points.length-1],.30),mid=pt(points[Math.floor(points.length/2)],.25);x.save();if(S.pressure==='SPAN'){x.strokeStyle='rgba(23,23,23,.36)';x.lineWidth=1.5;x.beginPath();x.moveTo(mid[0],mid[1]+10);x.lineTo(mid[0],mid[1]+27+6*t);x.stroke();x.fillStyle='rgba(70,64,56,.68)';x.beginPath();x.roundRect(mid[0]-7,mid[1]+27+6*t,14,10,3);x.fill()}else if(S.pressure==='HEIGHT'){for(let i=0;i<1+t;i++){x.strokeStyle=`rgba(23,23,23,${.20+i*.05})`;x.lineWidth=2;x.beginPath();x.arc(end[0]+14,end[1]+18+i*9,8,Math.PI,0);x.stroke()}}else{x.strokeStyle='rgba(23,23,23,.22)';x.lineWidth=1.5;x.beginPath();x.arc(end[0]+13,end[1]+13,8+t*2,0,Math.PI*2);x.stroke()}x.restore()}
drawAvatar=function(){const p=pt([S.avatar.x,S.avatar.y-.035],.55);x.save();x.fillStyle='rgba(0,0,0,.14)';x.beginPath();x.ellipse(p[0]+5,p[1]+22,13,5,0,0,Math.PI*2);x.fill();x.fillStyle='#4e4a43';x.beginPath();x.arc(p[0],p[1]-9,7.5,0,Math.PI*2);x.fill();x.beginPath();x.roundRect(p[0]-6,p[1],12,20,5);x.fill();x.strokeStyle='#4e4a43';x.lineWidth=3;x.beginPath();x.moveTo(p[0]-3,p[1]+19);x.lineTo(p[0]-6,p[1]+27);x.moveTo(p[0]+3,p[1]+19);x.lineTo(p[0]+6,p[1]+27);x.stroke();x.restore()};
function partialPathV52(points,progress){if(progress<=0)return[points[0]];if(progress>=1)return points.map(p=>[...p]);let total=0,lens=[];for(let i=0;i<points.length-1;i++){const l=Math.hypot(points[i+1][0]-points[i][0],points[i+1][1]-points[i][1]);lens.push(l);total+=l}const target=total*progress,out=[points[0]];let acc=0;for(let i=0;i<lens.length;i++){if(acc+lens[i]<=target){out.push(points[i+1]);acc+=lens[i];continue}const q=(target-acc)/lens[i];out.push([lerp(points[i][0],points[i+1][0],q),lerp(points[i][1],points[i+1][1],q)]);break}return out}
function drawProgressV52(path){if(!S.complete||S.routeProgress<=0)return;const pp=partialPathV52(path,S.routeProgress);drawPlatformV52(pp,{top:'#d9cfbc',side:'#8f8575',edge:'rgba(23,23,23,.22)',shadow:'rgba(0,0,0,.04)',width:7,depth:5,alpha:.82,joints:false})}
drawChoices=function(){['CONNECT','RISE'].forEach((v,i)=>{const p=stressShapeV52(pathFor(S.anchor,S.vector,S.reach,v,S.pressure,S.tension)),ext=p.slice(2);x.save();x.setLineDash([10,9]);const q=ext.map(k=>pt(k,.22));x.strokeStyle=i?'rgba(101,116,96,.72)':'rgba(157,136,100,.78)';x.lineWidth=8;x.lineCap='round';x.beginPath();q.forEach((a,j)=>j?x.lineTo(...a):x.moveTo(...a));x.stroke();x.restore();const t=pt(p[p.length-1],.28);x.save();x.fillStyle='rgba(255,255,255,.94)';x.strokeStyle='rgba(23,23,23,.25)';x.lineWidth=1.5;x.beginPath();x.arc(t[0],t[1],19,0,Math.PI*2);x.fill();x.stroke();x.fillStyle='#171717';x.font='950 13px system-ui';x.textAlign='center';x.textBaseline='middle';x.fillText(v==='CONNECT'?'↔':'↥',t[0],t[1]+.5);x.restore()})};
drawDraft=function(d,z){if(!d.anchor){['LOW','MID','HIGH'].forEach(a=>{const p=pt([z.x0,anchorY(a)],.33);x.save();x.shadowColor='rgba(0,0,0,.11)';x.shadowBlur=9;x.shadowOffsetY=5;x.fillStyle='#f1eadc';x.strokeStyle='rgba(23,23,23,.38)';x.lineWidth=2;x.beginPath();x.arc(p[0],p[1],14,0,Math.PI*2);x.fill();x.stroke();x.restore()});return}const y=anchorY(d.anchor),end=d.end||[z.x0+.08,y],points=[[z.x0,y],end];drawPlatformV52(points,{top:'#312e29',side:'#887e70',edge:'rgba(23,23,23,.35)',width:16,depth:10});if(d.end){const p=pt(end,.3);x.fillStyle='#171717';x.beginPath();x.arc(p[0],p[1],7,0,Math.PI*2);x.fill()}};
drawMain=function(){const raw=pathFor(S.anchor,S.vector,S.reach,S.complete,S.pressure,S.tension),p=stressShapeV52(raw),inherited=p.slice(0,3),leaveAlpha=visible('leave')?.50:1;drawSupportsV52(inherited,.48*leaveAlpha);drawPlatformV52(inherited,{top:S.mode==='HUMAN'?'#332f29':'#4d4b46',side:S.mode==='HUMAN'?'#9b8d79':'#8a8984',edge:'rgba(23,23,23,.38)',shadow:'rgba(0,0,0,.15)',width:22,depth:13,alpha:leaveAlpha});drawCreatorMark();drawPressureV52(inherited);if(visible('complete')&&!S.complete)drawChoices();if(S.complete){const extension=p.slice(2),count=Math.max(2,Math.ceil(extension.length*S.morph)),built=extension.slice(0,count);drawSupportsV52(built,.30*(visible('leave')?.45:1));drawPlatformV52(built,{top:'#70685d',side:'#aaa090',edge:'rgba(23,23,23,.28)',shadow:'rgba(0,0,0,.10)',width:17,depth:11,alpha:visible('leave')?.38:1});drawProgressV52(p);if(S.morph>=1)drawGoal(p[p.length-1]);drawAvatar()}if(visible('leave'))drawDraft(leaveDraft,{x0:.60})};
drawHandoffPreview=function(){drawBackground();const t=clamp(S.handoffPreview||0,0,1),fade=1-t;x.save();x.globalAlpha=.35*fade;drawMain();x.restore();if(S.next){const y=anchorY(S.next.anchor),shift=lerp(.52,.18,t),points=[[shift,y],[shift+reachDx(S.next.reach),clamp(y+(S.next.vector==='UP'?-.16:0),.14,.80)]];drawPlatformV52(points,{top:'#2e2b27',side:'#8d8272',edge:'rgba(23,23,23,.32)',shadow:'rgba(0,0,0,.12)',width:19,depth:12,alpha:t});const p=pt(points[1],.3);x.save();x.globalAlpha=t;x.fillStyle='#171717';x.beginPath();x.arc(p[0],p[1],7,0,Math.PI*2);x.fill();x.restore()}};
startAmbient=function(){stopAmbient();if(reduceMotion)return;const loop=()=>{if(!visible('play'))return;cameraV52.x+=((cameraV52.targetX||0)-cameraV52.x)*.08;cameraV52.y+=((cameraV52.targetY||0)-cameraV52.y)*.08;draw();ambientRAF=requestAnimationFrame(loop)};ambientRAF=requestAnimationFrame(loop)};
ensureV52();document.title='UNFINISHED — Intelligent Causal Loop V5.2';if($('debug'))$('debug').textContent='v5.2';if($('play')){$('play').querySelector('.prompt').textContent='Cross what you changed';const micro=$('play').querySelector('.micro');if(micro)micro.textContent='Drag the figure along the structure, or use the controls.'}draw();
