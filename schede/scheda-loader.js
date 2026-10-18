/* Pagina con titolo e anteprima specifici per il monumento.
   Carica il solo modello comune scheda.html senza duplicarne la struttura. */
(async function () {
  'use strict';
  const id = document.documentElement.dataset.monumentId;
  const percorso = document.documentElement.dataset.defaultItinerary || 'simboli';
  if (!id) return;

  // Manteniamo l'URL leggibile: antonini.html, bonfatti-casini.html.
  // Impostiamo l'ID nell'URL, senza reindirizzare verso la scheda generica.
  const url = new URL(window.location.href);
  url.searchParams.set('id', id);
  if (!url.searchParams.has('percorso')) url.searchParams.set('percorso', percorso);
  if (url.href !== location.href) {
    history.replaceState(history.state, '', url.pathname + url.search + url.hash);
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = () => reject(new Error('Non è stato possibile caricare '+src));
      document.body.appendChild(script);
    });
  }
  try {
    const response = await fetch('scheda.html', {cache:'no-cache'});
    if (!response.ok) throw new Error('Scheda HTML non disponibile ('+response.status+')');
    const doc = new DOMParser().parseFromString(await response.text(), 'text/html');
    // I due script di scheda.html verranno caricati esplicitamente in ordine.
    doc.body.querySelectorAll('script').forEach(script => script.remove());
    document.body.innerHTML = doc.body.innerHTML;
    if (!document.getElementById('sheet') || !document.getElementById('mobile-sheet')) {
      throw new Error('La struttura della scheda non è stata trovata');
    }
    await loadScript('monumenti.js');
    await loadScript('scheda.js');
  } catch (err) {
    document.body.innerHTML = '';
    const main = document.createElement('main');
    main.style.cssText = 'max-width:700px;margin:10vh auto;padding:24px;font:20px Georgia,serif;color:#575756';
    const p = document.createElement('p');
    p.textContent = 'Non è stato possibile caricare la scheda. Riprova oppure apri il collegamento alternativo.';
    const a = document.createElement('a');
    a.href = 'scheda.html?id='+encodeURIComponent(id)+'&percorso='+encodeURIComponent(percorso);
    a.textContent = 'Apri la scheda documentaria';
    main.append(p, a);
    document.body.appendChild(main);
    console.error('Memory Twin · caricamento scheda:', err);
  }
})();
