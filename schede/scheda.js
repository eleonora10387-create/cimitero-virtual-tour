(() => {
  'use strict';
  const records = window.MONUMENTI || {};
  const ids = Object.keys(records);
  const params = new URLSearchParams(location.search);
  if (params.get('embed') === '1') document.body.classList.add('embedded');
  if (params.get('debug') === '1') document.body.classList.add('debug-mode');
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
  function resolveItinerary() {
    const list = current().itinerari || [];
    const requested = params.get('percorso');
    if (requested) return list.find(x => x.id === requested) || null;
    if (list.length === 1) return list[0];
    return null;
  }

  function renderMobile() {
    const m = current();
    $('mobile-title').textContent = m.nome;
    $('mobile-chronology').textContent = m.cronologia || '';
    $('mobile-chronology').hidden = !m.cronologia;
    $('mobile-author').textContent = m.autore || '';
    $('mobile-author').hidden = !m.autore;
    const itineraryData = resolveItinerary();
    const itinerary = $('mobile-itinerary');
    if (itineraryData) {
      itinerary.textContent = itineraryData.etichetta || itineraryData.label || itineraryData.id;
      itinerary.hidden = false;
      itinerary.classList.add('itinerary-badge');
      if (itineraryData.colore) itinerary.style.setProperty('--wine', itineraryData.colore);
    } else {
      itinerary.hidden = true; itinerary.textContent = '';
      itinerary.classList.remove('itinerary-badge');
      itinerary.style.removeProperty('--wine');
    }

    const photos = m.fotografie || [];
    const cover = m.copertina || photos[0];
    const hero = $('mobile-cover'); hero.replaceChildren();
    if (cover && (typeof cover === 'string' || cover.src)) {
      const src = typeof cover === 'string' ? cover : cover.src;
      const img = makeEl('img'); img.src = src; img.alt =
        (typeof cover === 'string' ? m.nome : cover.titolo || m.nome);
      img.addEventListener('error', () => { if (img.isConnected) hero.replaceChildren(galleryPlaceholder()); });
      hero.appendChild(img);
      $('mobile-cover-caption').textContent = typeof cover === 'string' ? '' : cover.didascalia || '';
    } else {
      hero.appendChild(galleryPlaceholder()); $('mobile-cover-caption').textContent = '';
    }

    // Stessi testi della versione desktop. Nessuna duplicazione dei dati.
    $('mobile-description').innerHTML = $('description').innerHTML;
    // Il titolo della sezione resta neutro. Solo i simboli effettivamente
    // documentati compaiono NEL pannello, ognuno con la propria icona e il
    // proprio nome; lo stesso monumento puo' averne piu' di uno.
    const symbolList = $('mobile-symbol-list');
    symbolList.replaceChildren();
    if ((m.simboli || []).length) {
      m.simboli.forEach(symbol => {
        const entry = makeEl('article', 'mobile-symbol-entry');
        const heading = makeEl('div', 'mobile-symbol-heading');
        if (symbol.icona) {
          const image = makeEl('img', 'mobile-entry-icon');
          image.src = symbol.icona;
          image.alt = '';
          heading.appendChild(image);
        }
        heading.appendChild(makeEl('h3', '', symbol.nome));
        entry.appendChild(heading);
        const text = makeEl('div', 'mobile-symbol-copy');
        (symbol.testo || []).forEach(paragraph => {
          const p = makeEl('p'); p.innerHTML = paragraph; text.appendChild(p);
        });
        entry.appendChild(text);
        symbolList.appendChild(entry);
      });
    } else symbolList.appendChild(makeEl('p', 'missing', 'L’apparato simbolico è in preparazione.'));

    const bib = $('mobile-bibliography-content'); bib.replaceChildren();
    if ((m.bibliografia || []).length) {
      const ul = makeEl('ul');
      m.bibliografia.forEach(ref => ul.appendChild(makeEl('li', '', ref)));
      bib.appendChild(ul);
    } else bib.appendChild(makeEl('p', 'missing', 'Riferimenti bibliografici in preparazione.'));

    const dat = $('mobile-data-content'); dat.replaceChildren();
    if ((m.dati || []).length) {
      const dl = makeEl('dl');
      m.dati.forEach(x => {
        dl.appendChild(makeEl('dt', '', x.etichetta));
        dl.appendChild(makeEl('dd', '', x.valore));
      });
      dat.appendChild(dl);
    } else dat.appendChild(makeEl('p', 'missing', 'Dati documentari e crediti in preparazione.'));

    // Un cambio di monumento richiude gli approfondimenti precedenti.
    document.querySelectorAll('.mobile-disclosure').forEach(d => { d.open = false; });
  }

  function placeAudio() {
    // L'audio è un solo elemento DOM: lo spostamento conserva i controlli,
    // gli event listener e l'eventuale progresso della riproduzione.
    const dst = window.matchMedia('(max-width:940px)').matches
      ? $('mobile-audio-slot') : document.querySelector('.right-panel');
    if (dst && $('audio-area').parentElement !== dst) dst.appendChild($('audio-area'));
  }
  const responsiveQuery = window.matchMedia('(max-width:940px)');
  if (responsiveQuery.addEventListener) responsiveQuery.addEventListener('change', placeAudio);
  else if (responsiveQuery.addListener) responsiveQuery.addListener(placeAudio);
  placeAudio();

  function renderMobileGallery() {
    const photos = current().fotografie || [];
    const view = $('mobile-gallery-view'); view.replaceChildren();
    const p = photos[photoIndex];
    if (p?.src) {
      const img = makeEl('img'); img.src = p.src;
      img.alt = p.titolo || current().nome; img.loading='lazy';
      img.addEventListener('error', () => {
        if (img.isConnected) view.replaceChildren(galleryPlaceholder());
      });
      view.appendChild(img);
    } else view.appendChild(galleryPlaceholder());
    $('mobile-photo-prev').disabled = photos.length < 2;
    $('mobile-photo-next').disabled = photos.length < 2;
    $('mobile-gallery-caption').textContent = p?.didascalia || '';
  }

  function render() {
    const m = current();
    document.title = `${m.nome} · ${pageTitle}`;
    $('title').textContent = m.nome;
    $('chronology').textContent = m.cronologia || '';
    $('author').textContent = m.autore || '';
    $('author').hidden = !m.autore;
    $('chronology').hidden = !m.cronologia;
    const itineraryData = resolveItinerary();
    const desktopItinerary = $('desktop-itinerary');
    if (desktopItinerary) {
      if (itineraryData) {
        desktopItinerary.textContent = itineraryData.etichetta || itineraryData.label || itineraryData.id;
        desktopItinerary.hidden = false;
        desktopItinerary.classList.add('itinerary-badge');
      } else {
        desktopItinerary.hidden = true;
        desktopItinerary.textContent = '';
        desktopItinerary.classList.remove('itinerary-badge');
      }
    }
    renderGallery(); renderSymbols(); renderDescription(); renderAudio();
    renderMobile(); renderMobileGallery(); placeAudio();
    $('tool-3d').disabled = false; // È un pulsante vero; se manca l'URL informa che il collegamento 3DVista è da definire.
  }
  $('photo-prev').addEventListener('click', () => {
    const n = (current().fotografie || []).length;
    if (n) { photoIndex = (photoIndex + n - 1)%n; renderGallery(); renderMobileGallery(); }
  });
  $('photo-next').addEventListener('click', () => {
    const n = (current().fotografie || []).length;
    if (n) { photoIndex = (photoIndex + 1)%n; renderGallery(); renderMobileGallery(); }
  });
  $('mobile-photo-prev').addEventListener('click', () => {
    const n=(current().fotografie||[]).length;
    if (n) { photoIndex=(photoIndex+n-1)%n; renderGallery(); renderMobileGallery(); }
  });
  $('mobile-photo-next').addEventListener('click', () => {
    const n=(current().fotografie||[]).length;
    if (n) { photoIndex=(photoIndex+1)%n; renderGallery(); renderMobileGallery(); }
  });
  $('mobile-tool-3d').addEventListener('click', () => $('tool-3d').click());
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
  // Il visualizzatore Google <model-viewer> viene caricato SOLO al primo clic.
  // La libreria è referenziata con una versione fissata per evitare cambi imprevisti.
  let viewerLibraryPromise = null;
  function ensureModelViewerLibrary() {
    if (customElements.get('model-viewer')) return Promise.resolve();
    if (!viewerLibraryPromise) {
      viewerLibraryPromise = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://ajax.googleapis.com/ajax/libs/model-viewer/4.1.0/model-viewer.min.js';
        script.onload = () => customElements.whenDefined('model-viewer').then(resolve);
        script.onerror = () => reject(new Error('Libreria 3D non disponibile. Verifica la connessione Internet.'));
        document.head.appendChild(script);
      }).catch(error => { viewerLibraryPromise = null; throw error; });
    }
    return viewerLibraryPromise;
  }
  function showDialog(dialog) {
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
  }
  let modelGeneration = 0;
  async function openModelViewer() {
    const url = current().modello3dUrl;
    if (!url) {
      $('details-title').textContent = 'Modello 3D';
      $('details-body').replaceChildren(makeEl('p', 'missing',
        'Il modello 3D non è ancora disponibile per questo monumento.'));
      showDialog($('details-dialog'));
      return;
    }
    const dialog = $('model-dialog');
    const viewport = $('model-viewport');
    const status = $('model-status');
    const generation = ++modelGeneration;
    viewport.querySelectorAll('model-viewer').forEach(el => el.remove());
    $('model-dialog-title').textContent = 'Modello 3D';
    $('model-dialog-subtitle').textContent = current().nome;
    status.hidden = false;
    status.textContent = 'Caricamento del visualizzatore…';
    showDialog(dialog);
    try {
      await ensureModelViewerLibrary();
      if (generation !== modelGeneration || !dialog.open) return;
      const model = document.createElement('model-viewer');
      model.setAttribute('src', url);
      model.setAttribute('alt', `Modello tridimensionale di ${current().nome}`);
      model.setAttribute('camera-controls', '');
      model.setAttribute('touch-action', 'pan-y');
      model.setAttribute('loading', 'eager');
      model.setAttribute('interaction-prompt', 'auto');
      model.setAttribute('shadow-intensity', '0.3');
      model.addEventListener('load', () => {
        if (generation === modelGeneration) status.hidden = true;
      });
      model.addEventListener('error', () => {
        if (generation === modelGeneration) {
          status.hidden = false;
          status.textContent = 'Il modello non si è caricato. Verifica che il file GLB sia pubblicato nella cartella modelli.';
        }
      });
      viewport.appendChild(model);
      status.textContent = 'Caricamento del modello…';
    } catch (error) {
      if (generation === modelGeneration) {
        status.hidden = false;
        status.textContent = error.message || 'Impossibile caricare il visualizzatore 3D.';
      }
    }
  }
  $('tool-3d').addEventListener('click', openModelViewer);
  $('model-dialog-close').addEventListener('click', () => $('model-dialog').close());
  $('model-dialog').addEventListener('click', event => {
    if (event.target === $('model-dialog')) $('model-dialog').close();
  });
  $('model-dialog').addEventListener('close', () => {
    // La rimozione del componente interrompe la visualizzazione 3D e libera le risorse.
    modelGeneration++;
    $('model-viewport').querySelectorAll('model-viewer').forEach(el => el.remove());
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
