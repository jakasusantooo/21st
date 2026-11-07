var NAME="Sayang"; /* ganti dengan nama ceweknya */
var $=function(i){return document.getElementById(i)};
/* judul huruf goyang */
function wave(t,d){var k=0;return t.split(' ').map(function(w){return '<b class="w">'+w.split('').map(function(c){return '<span style="animation-delay:'+(d+(k++)*.1)+'s">'+c+'</span>'}).join('')+'</b>'}).join(' ')}
$('ttl').innerHTML=wave('Happy Birthday,',0)+'<br>'+wave(NAME+'!',1.6);
/* bendera */
var fc=['#ff9ec4','#ffe08a','#9fd8ff','#c9b6ff','#a8e6cf'],fl=$('flags');
for(var i=0;i<24;i++){var f=document.createElement('i');f.style.borderTopColor=fc[i%5];f.style.animationDelay=i*.1+'s';fl.appendChild(f)}
/* emoji melayang */
var E=['💗','🎀','🎈','🌸','⭐','🍰','🧸','🐰','✨','🍓'];
setInterval(function(){var s=document.createElement('div');s.className='float';s.textContent=E[Math.random()*E.length|0];
s.style.left=Math.random()*100+'vw';s.style.fontSize=16+Math.random()*22+'px';s.style.animationDuration=7+Math.random()*7+'s';
document.body.appendChild(s);setTimeout(function(){s.remove()},14500)},600);
/* confetti */
function confetti(n){var C=['🎉','🎊','💖','✨','🌸','🎀','⭐','🍭'];for(var i=0;i<(n||40);i++){(function(){var c=document.createElement('div');c.className='conf';c.textContent=C[Math.random()*C.length|0];
c.style.left=Math.random()*100+'vw';c.style.animationDuration=2+Math.random()*2.5+'s';c.style.animationDelay=Math.random()*.8+'s';
document.body.appendChild(c);setTimeout(function(){c.remove()},5500)})()}}
/* hati muncul di mana pun diketuk */
function hearts(x,y,n){var H=['💖','💕','✨','🌸','💗'];for(var i=0;i<(n||3);i++){var h=document.createElement('div');h.className='heart';h.textContent=H[Math.random()*H.length|0];
h.style.left=x+'px';h.style.top=y+'px';h.style.setProperty('--x',(Math.random()*80-40)+'px');document.body.appendChild(h);(function(h){setTimeout(function(){h.remove()},1000)})(h)}}
document.addEventListener('pointerdown',function(e){if(e.target.tagName!=='INPUT')hearts(e.clientX,e.clientY,3)});
/* maskot */
var M=['Happy birthday cantikku! 🎂','Kamu paling imut sedunia 🐰','Peluk virtual dulu yaa 🤗','21 tahun, makin lucu aja 🍓','Aku sayang kamu banyak-banyak 💗','Hari ini kamu ratunya 👑','Jangan lupa mam yaaa'],mi=0;
$('mascot').onclick=function(e){$('say').textContent=M[mi++%M.length];hearts(e.clientX,e.clientY,6)};
/* kue */
var cake=$('cake'),cans=[];
[-36,0,36].forEach(function(x){var c=document.createElement('div');c.className='can';c.style.left='calc(50% + '+(x-6)+'px)';c.innerHTML='<div class="flame"></div>';
c.onclick=function(e){e.stopPropagation();c.classList.add('off');check()};cake.appendChild(c);cans.push(c)});
function check(){var left=cans.filter(function(c){return !c.classList.contains('off')}).length;
if(!left){$('wish').textContent='Semoga semua wishmu terkabul! 🌟';confetti(60)}else $('wish').textContent='Tinggal '+left+' lilin lagi...'}
cake.onclick=function(){cans.forEach(function(c){c.classList.add('off')});check()};
$('relight').onclick=function(){cans.forEach(function(c){c.classList.remove('off')});$('wish').textContent=''};
/* balon harapan */
$('send').onclick=function(){var v=$('wishin').value.trim();if(!v)return;var b=document.createElement('div');b.className='balloon';b.textContent='🎈 '+v;
b.style.left=10+Math.random()*60+'vw';document.body.appendChild(b);setTimeout(function(){b.remove()},6200);$('wishin').value='';confetti(20)};
/* kartu, kado, pesta */
document.querySelectorAll('.flip').forEach(function(f){f.onclick=function(){f.classList.toggle('on')}});
var LT="Halo, Sayang 🌷\n\nHari ini umurmu resmi 21 tahun, dan aku mau bilang makasih ya sudah lahir ke dunia ini. Dunia, dan terutama aku, jadi tempat yang jauh lebih hangat sejak ada kamu.\n\nAku suka caramu ketawa sampai matamu menyipit, suka caramu peduli sama hal-hal kecil, dan suka banget jadi orang pertama yang kamu cari, entah lagi senang atau lagi sedih. Buatku, kamu itu rumah.\n\nDi umur yang baru ini, semoga kamu makin berani sama mimpi-mimpimu, makin sayang sama dirimu sendiri, dan selalu dikelilingi hal-hal baik. Kalau ada hari yang berat, ingat ya, aku selalu di sini, siap jadi tempat bersandarmu.\n\nSelamat ulang tahun, cintaku. Aku sayang kamu, hari ini, besok, dan seterusnya. 🫶";
$('gift').onclick=function(){$('letter').classList.add('show');this.style.display='none';confetti(60);var t=$('tw'),i=0;(function n(){t.textContent=LT.slice(0,++i);if(i<LT.length)setTimeout(n,35);else{t.classList.add('done');$('sign').style.display='block'}})()};
$('party').onclick=function(){confetti(90)};
setTimeout(function(){confetti(30)},400);

/* amplop pembuka */
$('env').onclick=function(){this.classList.add('open');setTimeout(function(){$('intro').classList.add('gone');confetti(70);play()},1400)};
/* scroll reveal */
var io=window.IntersectionObserver?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15}):null;
document.querySelectorAll('.rv').forEach(function(el){io?io.observe(el):el.classList.add('in')});
/* musik happy birthday (WebAudio) */
var ac,on=false,timer;
var ML=[[392,.75],[392,.25],[440,1],[392,1],[523,1],[494,2],[392,.75],[392,.25],[440,1],[392,1],[587,1],[523,2],[392,.75],[392,.25],[784,1],[659,1],[523,1],[494,1],[440,2],[698,.75],[698,.25],[659,1],[523,1],[587,1],[523,2]];
function tune(){if(!on)return;var t=ac.currentTime+.05,b=.42;ML.forEach(function(n){var o=ac.createOscillator(),g=ac.createGain();o.type='triangle';o.frequency.value=n[0];
g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.18,t+.03);g.gain.exponentialRampToValueAtTime(.001,t+n[1]*b);o.connect(g);g.connect(ac.destination);o.start(t);o.stop(t+n[1]*b);t+=n[1]*b});
timer=setTimeout(tune,(t-ac.currentTime+1.2)*1000)}
var song=new Audio(encodeURI('Maudy Ayunda - Perahu Kertas Lirik Lagu.mp3')),fileOk=true;song.loop=true;song.volume=.7;
song.onerror=function(){fileOk=false};
function play(){on=true;$('mus').textContent='🔊';
var p=song.play();if(p&&p.catch)p.catch(function(){fileOk=false;fallback()});
setTimeout(function(){if(!fileOk)fallback()},400)}
function fallback(){if(!on)return;try{ac=ac||new (window.AudioContext||window.webkitAudioContext)();ac.resume();clearTimeout(timer);tune()}catch(e){}}
$('mus').onclick=function(){if(on){on=false;clearTimeout(timer);song.pause();this.textContent='🔇'}else play()};
/* tiup pakai mikrofon */
$('mic').onclick=function(){var w=$('wish');navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia({audio:true}).then(function(s){
var a=new (window.AudioContext||window.webkitAudioContext)(),an=a.createAnalyser(),d=new Uint8Array(an.fftSize);a.createMediaStreamSource(s).connect(an);w.textContent='Tiup ke mic sekarang! 💨';
(function l(){an.getByteTimeDomainData(d);var m=0;for(var i=0;i<d.length;i++)m=Math.max(m,Math.abs(d[i]-128));
if(m>60){cans.forEach(function(c){c.classList.add('off')});s.getTracks().forEach(function(t){t.stop()});check()}else requestAnimationFrame(l)})()}).catch(function(){w.textContent='Mic tidak bisa diakses, ketuk lilinnya aja ya 🥺'}):w.textContent='Ketuk lilinnya aja ya 🥺'};
/* polaroid: pasang foto */
document.querySelectorAll('.pol').forEach(function(p){var inp=p.querySelector('input');p.onclick=function(){inp.click()};
inp.onclick=function(e){e.stopPropagation()};inp.onchange=function(){var f=inp.files[0];if(!f)return;var r=new FileReader();r.onload=function(){var ph=p.querySelector('.ph');ph.style.backgroundImage='url('+r.result+')';ph.textContent='';confetti(15)};r.readAsDataURL(f)}});

/* pojok keluh kesah */
var BALAS=[
"Makasih ya sudah cerita ke aku 🌷 Apa pun yang bikin kamu kesel hari ini, ingat satu hal: kamu nggak harus kuat sendirian. Ada aku, dan pelukanku selalu siap kapan pun kamu mau.",
"Keluhanmu sudah aku terima dengan sepenuh hati 💗 Capek boleh, kesel boleh, tapi jangan lupa kamu itu orang yang paling aku banggain. Habis ini istirahat dulu ya, cintaku.",
"Hmm, siapa yang berani bikin pacarku kesel? 😤 Sini cerita pelan-pelan, aku dengerin sampai habis. Habis itu aku traktir yang manis-manis supaya senyummu balik lagi.",
"Sayang, hari yang berat itu cuma mampir sebentar, tapi aku di sini selamanya 🫶 Tarik napas dulu, minum air putih, lalu bayangin aku lagi peluk kamu erat-erat.",
"Kamu boleh ngomel sepuasnya, aku nggak akan bosan 🥰 Soalnya bahkan waktu kamu lagi kesel pun, kamu masih jadi hal paling lucu yang pernah aku lihat.",
"Kalau dunia lagi nggak adil sama kamu, kasih tahu aku ya 🌙 Aku mungkin nggak bisa ubah semuanya, tapi aku bisa jadi tempat pulang yang paling nyaman buat kamu.",
"Keluhanmu sudah terbang jauh bersama balon itu 🎈 Yang tersisa di sini cuma kamu, aku, dan rasa sayangku yang nggak ada habisnya.",
"Buatku, kamu nggak pernah merepotkan. Kamu itu rumah 🏡 Jadi cerita aja, keluhin aja, aku selalu ada buat kamu, hari ini, besok, dan seterusnya."
],bi=0;
if($('kirimKeluh'))$('kirimKeluh').onclick=function(){
  var v=$('keluh').value.trim(),r=$('balasan');
  r.style.display='inline-block';
  if(!v){r.textContent='Kosong? Berarti lagi bahagia dong 🥰';return}
  var b=document.createElement('div');b.className='balloon';b.textContent='😤 '+v;
  b.style.left=10+Math.random()*50+'vw';document.body.appendChild(b);
  setTimeout(function(){b.remove()},6200);
  r.textContent=BALAS[bi++%BALAS.length];
  $('keluh').value='';confetti(15);
};

/* kilauan di sekitar angka 21 */
(function(){var hero=$('hero');if(!hero)return;for(var i=0;i<9;i++){var s=document.createElement('span');s.className='sp';s.textContent=i%2?'✦':'✨';
s.style.left=(Math.random()*90+2)+'%';s.style.top=(Math.random()*85)+'%';s.style.animationDelay=(Math.random()*1.8)+'s';hero.appendChild(s)}})();
