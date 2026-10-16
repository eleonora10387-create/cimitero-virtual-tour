(() => {
  'use strict';
  const records = window.MONUMENTI || {};
  const ids = Object.keys(records);
  const params = new URLSearchParams(location.search);
  if (params.get('embed') === '1') document.body.classList.add('embedded');
  const $ = id => document.getElementById(id);
  const option = $('monument-select');
  let currentId = params.get('id') || ids[0];
  let photoIndex = 0;
  if (!records[currentId]) currentId = ids[0];
  const current = () => records[currentId];
  const pageTitle = 'Cimitero Monumentale di Perugia';
  function makeEl(tag, className, text) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text != null) el.textContent = text;
    return el;
  }
  ids.forEach(id => {
    const item = makeEl('option', '', `${records[id].nome} (${id})`);
    item.value = id; option.appendChild(item);
  });
  if (!ids.length) {
    $('sheet').replaceChildren(makeEl('p','missing','Nessun monumento disponibile.'));
    return;
  }
  option.value = currentId;
  option.addEventListener('change', () => {
    currentId = option.value; photoIndex = 0;
    const u = new URL(location.href);
    u.searchParams.set('id', currentId);
    try { history.replaceState(null, '', u); } catch(_) { }
    render();
  });
  function renderGallery() {
    const photos = current().fotografie || [];
    const view = $('gallery-view'); view.replaceChildren();
    const p = photos[photoIndex];
    if (p?.src) {
      const img = makeEl('img');
      img.src = p.src; img.alt = p.titolo || current().nome;
      img.loading = 'lazy';
      img.addEventListener('error', () => {
        if (img.isConnected) view.replaceChildren(galleryPlaceholder());
      });
      view.appendChild(img);
    } else view.appendChild(galleryPlaceholder());
    $('photo-prev').disabled = photos.length < 2;
    $('photo-next').disabled = photos.length < 2;
    $('gallery-caption').textContent = p?.didascalia || '';
  }
  function galleryPlaceholder() {
    const holder = makeEl('div', 'gallery-empty');
    holder.innerHTML = `<svg viewBox="0 0 50 50" fill="none" aria-hidden="true"><rect x="5" y="9" width="40" height="32" stroke-width="2"/><circle cx="17" cy="20" r="4" stroke-width="2"/><path d="M8 37L21 25L29 30L34 24L43 37" stroke-width="2"/></svg>`;
    holder.appendChild(makeEl('span','','In attesa delle immagini originali'));
    holder.appendChild(makeEl('em','','Disegni storici, fotografie e rilievi saranno collegati qui.'));
    return holder;
  }
  function renderSymbols() {
    const wrap = $('symbol-list'); wrap.replaceChildren();
    (current().simboli || []).forEach(symbol => {
      const row = makeEl('article', 'symbol-item');
      const img = makeEl('img', 'symbol-icon');
      img.src = symbol.icona; img.alt = symbol.nome;
      row.appendChild(img);
      const text = makeEl('div','symbol-text');
      (symbol.testo || []).forEach(paragraph => {
        const p = makeEl('p'); p.innerHTML = paragraph; text.appendChild(p);
      });
      row.appendChild(text); wrap.appendChild(row);
    });
  }
  function renderDescription() {
    const wrap = $('description'); wrap.replaceChildren();
    if (!(current().descrizione || []).length) {
      wrap.appendChild(makeEl('p','missing','Testo scientifico non ancora inserito.'));
      return;
    }
    current().descrizione.forEach(paragraph => {
      const p = makeEl('p'); p.innerHTML = paragraph; wrap.appendChild(p);
    });
  }
  function renderAudio() {
    const area = $('audio-area'), audio = $('audio-element');
    audio.pause(); audio.removeAttribute('src'); audio.load();
    const src = current().audio?.src;
    const disabled = !src;
    area.classList.toggle('is-inactive', disabled);
    $('audio-toggle').disabled = disabled;
    $('audio-back').disabled = disabled;
    $('audio-progress').disabled = disabled;
    $('audio-current').textContent = '0:00';
    $('audio-duration').textContent = '—:——';
    $('audio-progress').value = 0;
    $('audio-toggle').classList.remove('is-playing');
    $('audio-toggle').setAttribute('aria-pressed','false');
    $('audio-toggle').setAttribute('aria-label','Avvia narrazione');
    if (src) { audio.src = src; audio.load(); }
  }
  function render() {
    const m = current();
    document.title = `${m.nome} · ${pageTitle}`;
    $('title').textContent = m.nome;
    $('chronology').textContent = m.cronologia || '';
    $('author').textContent = m.autore || '';
    $('author').hidden = !m.autore;
    $('chronology').hidden = !m.cronologia;
    renderGallery(); renderSymbols(); renderDescription(); renderAudio();
    $('tool-3d').disabled = false; // È un pulsante vero; se manca l'URL informa che il collegamento 3DVista è da definire.
  }
  $('photo-prev').addEventListener('click', () => {
    const n = (current().fotografie || []).length;
    if (n) { photoIndex = (photoIndex + n - 1)%n; renderGallery(); }
  });
  $('photo-next').addEventListener('click', () => {
    const n = (current().fotografie || []).length;
    if (n) { photoIndex = (photoIndex + 1)%n; renderGallery(); }
  });
  function showDetails(name) {
    const dialog = $('details-dialog');
    const target = $('details-body'); target.replaceChildren();
    if (name === 'bibliografia') {
      $('details-title').textContent = 'Bibliografia';
      const refs = current().bibliografia || [];
      if (refs.length) {
        const ul = makeEl('ul'); refs.forEach(ref => ul.appendChild(makeEl('li','',ref))); target.appendChild(ul);
      } else target.appendChild(makeEl('p','missing','I riferimenti bibliografici saranno collegati alla scheda.'));
    } else {
      $('details-title').textContent = 'Dati e documentazione';
      const data = current().dati || [];
      if (data.length) {
        const dl = makeEl('dl');
        data.forEach(x => { dl.appendChild(makeEl('dt','',x.etichetta)); dl.appendChild(makeEl('dd','',x.valore)); });
        target.appendChild(dl);
      } else target.appendChild(makeEl('p','missing','I dati scientifici e documentari saranno collegati alla scheda.'));
    }
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open','');
  }
  $('tool-biblio').addEventListener('click', () => showDetails('bibliografia'));
  $('tool-data').addEventListener('click', () => showDetails('dati'));
  $('tool-3d').addEventListener('click', () => {
    const url = current().modello3dUrl;
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
      return;
    }
    // In attesa del collegamento con il visualizzatore 3D nativo di 3DVista:
    // il pulsante risponde al clic e spiega cosa manca, senza simulare l'apertura del modello.
    $('details-title').textContent = 'Modello 3D';
    $('details-body').replaceChildren(makeEl('p', 'missing',
      'Il pulsante è pronto. Il collegamento al modello 3D all’interno di 3DVista deve ancora essere configurato.'));
    const dialog = $('details-dialog');
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
  });
  $('dialog-close').addEventListener('click', () => $('details-dialog').close());
  $('details-dialog').addEventListener('click', event => {
    if (event.target === $('details-dialog')) $('details-dialog').close();
  });
  const audio = $('audio-element');
  const formatTime = seconds => Number.isFinite(seconds) ? `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2,'0')}` : '—:——';
  $('audio-toggle').addEventListener('click', async () => {
    if (audio.paused) { try { await audio.play(); } catch(_) { /* playback may require user action or online hosting */ } }
    else audio.pause();
  });
  $('audio-back').addEventListener('click', () => { if (Number.isFinite(audio.currentTime)) audio.currentTime = Math.max(0, audio.currentTime - 10); });
  audio.addEventListener('play', () => { $('audio-toggle').classList.add('is-playing'); $('audio-toggle').setAttribute('aria-label','Metti in pausa'); $('audio-toggle').setAttribute('aria-pressed','true'); });
  audio.addEventListener('pause', () => { $('audio-toggle').classList.remove('is-playing'); $('audio-toggle').setAttribute('aria-label','Avvia narrazione'); $('audio-toggle').setAttribute('aria-pressed','false'); });
  audio.addEventListener('loadedmetadata', () => { $('audio-duration').textContent = formatTime(audio.duration); });
  audio.addEventListener('timeupdate', () => {
    $('audio-current').textContent = formatTime(audio.currentTime);
    $('audio-progress').value = audio.duration ? Math.round(audio.currentTime/audio.duration*1000) : 0;
  });
  $('audio-progress').addEventListener('input', event => {
    if (audio.duration) audio.currentTime = event.target.value / 1000 * audio.duration;
  });
  render();
})();
