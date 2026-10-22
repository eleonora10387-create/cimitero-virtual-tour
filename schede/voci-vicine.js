(() => {
  'use strict';
  const id = document.documentElement.dataset.voiceId;
  const voice = window.VOCI_VICINE?.[id];
  if (!voice) return;
  const $ = name => document.getElementById(name);
  const photos = voice.fotografie || [];
  let photoIndex = 0;
  document.title = `${voice.nome} · Voci Vicine · Cimitero Monumentale di Perugia`;
  $('vv-title').textContent = $('vv-mobile-title').textContent = voice.nome;
  $('vv-chronology').textContent = $('vv-mobile-chronology').textContent = voice.cronologia || '';
  $('vv-poem').textContent = $('vv-mobile-poem').textContent = voice.poesia || '';
  $('vv-source').textContent = 'Fonte: ' + (voice.fonte || '');
  $('vv-mobile-source').textContent = 'Fonte: ' + (voice.fonte || '');

  function photoEl(photo) {
    const img = document.createElement('img');
    img.src = photo.src;
    img.alt = photo.titolo || voice.nome;
    img.loading = 'lazy';
    return img;
  }
  function setPhoto(target, photo) {
    target.replaceChildren();
    if (photo?.src) target.appendChild(photoEl(photo));
  }
  function renderPhotos() {
    const photo = photos[photoIndex];
    setPhoto($('vv-photo'), photo);
    setPhoto($('vv-mobile-cover'), photo);
    $('vv-caption').textContent = $('vv-mobile-cover-caption').textContent = photo?.didascalia || '';
    $('vv-photo-credit').textContent = $('vv-mobile-photo-credit').textContent = voice.creditiFotografici || '';
    const hasMany = photos.length > 1;
    ['vv-prev', 'vv-next', 'vv-mobile-prev', 'vv-mobile-next'].forEach(name => { $(name).hidden = !hasMany; });
  }
  function stepPhoto(delta) { if (!photos.length) return;
    photoIndex = (photoIndex + delta + photos.length) % photos.length;
    renderPhotos();
  }
  ['vv-prev','vv-mobile-prev'].forEach(name => $(name).addEventListener('click', () => stepPhoto(-1)));
  ['vv-next','vv-mobile-next'].forEach(name => $(name).addEventListener('click', () => stepPhoto(1)));
  renderPhotos();

  // Un solo lettore audio spostato tra desktop e mobile: come scheda.js originale.
  const responsive = window.matchMedia('(max-width:940px)');
  function placeAudio() {
    const target = $(responsive.matches ? 'vv-audio-slot-mobile' : 'vv-audio-slot-desktop');
    const player = $('audio-area');
    if (target && player.parentElement !== target) target.appendChild(player);
  }
  if (responsive.addEventListener) responsive.addEventListener('change', placeAudio);
  else responsive.addListener(placeAudio);
  placeAudio();
  if (new URLSearchParams(location.search).get('embed') === '1') document.body.classList.add('embedded');

  const audio = $('audio-element');
  const play = $('audio-toggle');
  const seek = $('audio-progress');
  const current = $('audio-current');
  const duration = $('audio-duration');
  const fmt = seconds => Number.isFinite(seconds) ?
    `${Math.floor(seconds/60)}:${String(Math.floor(seconds%60)).padStart(2,'0')}` : '—:——';
  const src = voice.audio?.src;
  if (src) { audio.src = src; audio.load(); }
  else { play.disabled = true; $('audio-back').disabled = true; seek.disabled = true; }
  play.addEventListener('click', async () => {
    if (audio.paused) { try { await audio.play(); } catch (_) {} }
    else audio.pause();
  });
  $('audio-back').addEventListener('click', () => {
    if (Number.isFinite(audio.currentTime)) audio.currentTime = Math.max(0, audio.currentTime - 10);
  });
  audio.addEventListener('play', () => {
    play.classList.add('is-playing'); play.setAttribute('aria-pressed','true');
    play.setAttribute('aria-label','Metti in pausa');
  });
  audio.addEventListener('pause', () => {
    play.classList.remove('is-playing'); play.setAttribute('aria-pressed','false');
    play.setAttribute('aria-label','Avvia narrazione');
  });
  audio.addEventListener('loadedmetadata', () => {duration.textContent = fmt(audio.duration);});
  audio.addEventListener('timeupdate', () => {
    current.textContent = fmt(audio.currentTime);
    seek.value = audio.duration ? Math.round(audio.currentTime/audio.duration*1000) : 0;
  });
  seek.addEventListener('input', () => {
    if (audio.duration) audio.currentTime = Number(seek.value)/1000*audio.duration;
  });
})();
