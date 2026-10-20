/*
 * ARCHIVIO MONUMENTI – Memory Twin del Cimitero Monumentale di Perugia
 * Archivio aggiornato con galleria Antonini, 18 ottobre 2026.
 * Gli ID DEMO-... sono PROVVISORI: da sostituire con l'ID del database.
 * Mantenere gli stessi campi per ogni nuovo monumento.
 * Per le immagini, usare percorsi relativi: "immagini/nome-file.jpg".
 * La descrizione e il testo del simbolo possono contenere <strong> ed <em>.
 */
window.MONUMENTI = {
  "DEMO-BC": {
    id: "DEMO-BC",
    nome: "Edicola Bonfatti–Casini",
    cronologia: "1894; 1916",
    autore: "Giuseppe Moroni", // Come visualizzato nella scheda 3DVista inviata; da confermare nel database
    itinerari: [
      { id: "simboli", etichetta: "Itinerario dei simboli", colore: "#8e284b" }
    ],
    fotografie: [
      { src: "immagini/DEMO-BC/vista_generale.jpg", titolo: "Vista generale dell’Edicola Bonfatti–Casini", didascalia: "Vista generale dell’Edicola Bonfatti–Casini. Fotografia: Eleonora Dottorini." },
      { src: "immagini/DEMO-BC/rosa_smargiassi.jpg", titolo: "Monumento a Rosa Smargiassi", didascalia: "Dettaglio del monumento a Rosa Smargiassi. Fotografia: Eleonora Dottorini." },
      { src: "immagini/DEMO-BC/colonna_spezzata.jpg", titolo: "Colonna spezzata ed elementi floreali", didascalia: "Dettaglio della colonna spezzata e degli elementi floreali. Fotografia: Eleonora Dottorini." },
      { src: "immagini/DEMO-BC/cripta.jpg", titolo: "Cripta sotterranea", didascalia: "Veduta della cripta sotterranea. Fotografia: Sara Abbati, Ginevra Pauselli, Gabriel Tili." },
      { src: "immagini/DEMO-BC/prospetto_nord.jpg", titolo: "Prospetto nord", didascalia: "Prospetto nord. Sara Abbati, Ginevra Pauselli, Gabriel Tili." },
      { src: "immagini/DEMO-BC/prospetto_ovest.jpg", titolo: "Prospetto ovest", didascalia: "Prospetto ovest. Sara Abbati, Ginevra Pauselli, Gabriel Tili." },
      { src: "immagini/DEMO-BC/sezione.jpg", titolo: "Sezione del monumento", didascalia: "Sezione del monumento. Sara Abbati, Ginevra Pauselli, Gabriel Tili." },
      { src: "immagini/DEMO-BC/pianta.jpg", titolo: "Pianta dell’edicola", didascalia: "Pianta dell’edicola. Sara Abbati, Ginevra Pauselli, Gabriel Tili." },
      { src: "immagini/DEMO-BC/fotografia_storica.jpg", titolo: "Villino Casini in Monteluce, 1897", didascalia: "Villino Casini in Monteluce, 1897. Autore anonimo." },
      { src: "immagini/DEMO-BC/disegno_storico.jpg", titolo: "Progetto per l’ampliamento dell’Edicola Bonfatti–Casini", didascalia: "Progetto per l’ampliamento dell’Edicola Bonfatti–Casini. Architetto Giuseppe Moroni, dicembre 1916." }
    ],
    copertina: "immagini/DEMO-BC/vista_generale.jpg",
    descrizione: [
      `L’edicola fu commissionata da <strong>Menotti Casini</strong>, originario di Castiglione del Lago e protagonista di una significativa ascesa sociale: cresciuto in condizioni modeste e formatosi come ciabattino, si trasferì a Perugia, dove avviò una fortunata attività commerciale in via Mazzini e successivamente investì nel settore immobiliare. Nel <strong>1894</strong> ottenne dal Comune l’autorizzazione per la costruzione del monumento funerario; il complesso comprende anche una cripta sotterranea, documentata alla fine dell’Ottocento. Nel 1916 fu proposta una variante in forme neogotiche, comprendente anche un ampliamento laterale della cripta, mai realizzato.`,
      `Dopo la morte della moglie <strong>Rosa Smargiassi</strong>, nel 1922, al centro dell’edicola venne collocata la sua statua commemorativa, trasformando il monumento in un vero memoriale familiare. Il legame con i <strong>Bonfatti</strong> deriva dal matrimonio della figlia Elena Casini con Nazzareno Bonfatti; il doppio cognome fu inciso sul monumento soltanto nel <strong>2003</strong>, durante il restauro seguito ai danni provocati dal terremoto del 1997.`,
      `L’edicola presenta un elegante linguaggio <strong>eclettico di impronta neogotica</strong>. Quattro colonne tortili con capitelli decorati sostengono archi a sesto acuto e un alto coronamento cuspidato, arricchito da pinnacoli e motivi floreali. La slanciata copertura piramidale accentua il verticalismo della struttura, evocando simbolicamente l’<strong>elevazione dell’anima verso il cielo</strong>. All’interno della copertura, un fondo azzurro disseminato di <strong>stelle dorate</strong> richiama il Paradiso: il blu allude alla dimensione divina e l’oro alla luce della Resurrezione.`,
      `Fulcro del monumento è la figura di <strong>Rosa Smargiassi</strong>, rappresentata in atteggiamento dolente mentre si appoggia a una <strong>colonna spezzata</strong>, tradizionale simbolo funerario della vita interrotta dalla morte. Una ghirlanda di fiori completa la composizione: l’<strong>acanto</strong> richiama immortalità e resurrezione, il <strong>giglio</strong> purezza, il <strong>narciso</strong> il passaggio dalla morte alla rinascita, la <strong>rosa</strong> l’amore eterno e la fugacità della vita, mentre il <strong>papavero</strong> rappresenta il sonno eterno e la consolazione.`,
      `Sotto il monumento si trova la <strong>cripta familiare</strong>, accessibile attraverso un piccolo ingresso neogotico ad arco polilobato, chiuso da ante decorate in ferro battuto e vetro ambrato.`
    ],
    simboli: [
      {
        id: "SIM_COLONNA_SPEZZATA", // futuro collegamento al catalogo simboli condiviso
        nome: "Colonna spezzata",
        icona: "assets/colonna_spezzata.png",
        testo: [
          `La colonna, elemento architettonico verticale con funzione strutturale, richiama simbolicamente la stabilità, la solidità e il movimento ascensionale. Fin dall’antichità assume anche un valore celebrativo e votivo: nella cultura romana è impiegata per commemorare vittorie e trionfi, mentre il suo sviluppo verticale evoca il collegamento tra terra e cielo e, più in generale, tra dimensione umana e divina. Le colonne possono inoltre segnare un limite, come nel mito delle colonne d’Ercole, poste ai confini del mondo conosciuto. Nella tradizione cristiana la colonna diviene simbolo di fermezza spirituale: nell’Apocalisse (3,12) il vincitore delle battaglie dello spirito è paragonato a una colonna.`,
          `In ambito funerario, infine, la <strong>colonna spezzata</strong> allude alla morte che interrompe prematuramente il corso della vita.`
        ]
      }
    ],
    audio: {
      src: "https://eleonora10387-create.github.io/cimitero-virtual-tour/audio.mp3",
      nota: "Indirizzo predisposto in base ai file visibili nel repository; verificare la riproduzione online."
    },
    bibliografia: [], // Da riempire senza inventare citazioni
    dati: [], // Collegamento alla struttura scientifica in fase successiva
    modello3dUrl: "modelli/bonfatti-casini-web.glb" // Copia web ottimizzata; originale conservato separatamente
  },
  "DEMO-ANT": {
    id: "DEMO-ANT", // ID provvisorio: da sostituire con quello del database monumenti
    nome: "Cappella Antonini",
    cronologia: "1862–1908 (fasi documentate)",
    autore: "Francesco Antonini (attribuito), Romano Mignini, Rosa e Cecilia Moretti Caselli",
    itinerari: [
      { id: "simboli", etichetta: "Itinerario dei simboli", colore: "#8e284b" }
    ],
    fotografie: [
      { src: "immagini/DEMO-ANT/foto_01.jpg", titolo: "La Cappella Antonini nel viale laterale destro", didascalia: "La Cappella Antonini nel viale laterale destro. Fotografia: Eleonora Dottorini." },
      { src: "immagini/DEMO-ANT/foto_02.jpg", titolo: "Vista aerea del nucleo antico del cimitero", didascalia: "Vista aerea del nucleo antico del cimitero con la Cappella Antonini. Fotografia: Gabriele Cavalletti, Elena Fiavoni, Maria Giulia Mollari." },
      { src: "immagini/DEMO-ANT/foto_03.jpg", titolo: "Dettaglio del cancello", didascalia: "Dettaglio del cancello. Fotografia: Eleonora Dottorini." },
      { src: "immagini/DEMO-ANT/foto_04.jpg", titolo: "Dettaglio di uno dei quattro bracieri", didascalia: "Dettaglio di uno dei quattro bracieri. Fotografia: Eleonora Dottorini." },
      { src: "immagini/DEMO-ANT/foto_05.jpg", titolo: "Piante della Cappella Antonini", didascalia: "Piante della Cappella Antonini. Gabriele Cavalletti, Elena Fiavoni, Maria Giulia Mollari." },
      { src: "immagini/DEMO-ANT/foto_06.jpg", titolo: "Prospetto sud", didascalia: "Prospetto sud. Gabriele Cavalletti, Elena Fiavoni, Maria Giulia Mollari." },
      { src: "immagini/DEMO-ANT/foto_07.jpg", titolo: "Prospetto nord", didascalia: "Prospetto nord. Gabriele Cavalletti, Elena Fiavoni, Maria Giulia Mollari." },
      { src: "immagini/DEMO-ANT/foto_08.jpg", titolo: "Prospetto est", didascalia: "Prospetto est. Gabriele Cavalletti, Elena Fiavoni, Maria Giulia Mollari." },
      { src: "immagini/DEMO-ANT/foto_09.jpg", titolo: "Sezioni", didascalia: "Sezioni. Gabriele Cavalletti, Elena Fiavoni, Maria Giulia Mollari." },
      { src: "immagini/DEMO-ANT/foto_10.jpg", titolo: "Sezioni", didascalia: "Sezioni. Gabriele Cavalletti, Elena Fiavoni, Maria Giulia Mollari." },
      { src: "immagini/DEMO-ANT/foto_11.jpg", titolo: "La vetrata dello studio Moretti Caselli", didascalia: "La vetrata dello studio Moretti Caselli. Elaborazione: Gabriele Cavalletti, Elena Fiavoni, Maria Giulia Mollari." },
      { src: "immagini/DEMO-ANT/foto_12.jpg", titolo: "Disegni preparatori della vetrata", didascalia: "I disegni preparatori della vetrata della Cappella Antonini dello studio Moretti Caselli. Fotografie: Gabriele Cavalletti, Elena Fiavoni, Maria Giulia Mollari." },
      { src: "immagini/DEMO-ANT/foto_14.jpg", titolo: "Disegno e fotografie di alcune sepolture", didascalia: "Disegno e fotografie di alcune sepolture della Cappella Antonini. Gabriele Cavalletti, Elena Fiavoni, Maria Giulia Mollari." },
      { src: "immagini/DEMO-ANT/foto_15.jpg", titolo: "Disegno del soffitto cassettonato", didascalia: "Disegno del soffitto cassettonato, decorato con conchiglie e rosette. Gabriele Cavalletti, Elena Fiavoni, Maria Giulia Mollari." }
    ],
    copertina: "immagini/DEMO-ANT/foto_01.jpg",
    descrizione: [
      `La Cappella Antonini si trova nel nucleo più antico del Cimitero Monumentale di Perugia, lungo il vialetto di destra, e custodisce la memoria di più generazioni della stessa famiglia. Vi riposano infatti Giuseppe Antonini, Teresa Belli e i loro discendenti, riuniti in un monumento ricco di arte. Un documento dell’Archivio del Cimitero del 1862 ricorda il trasferimento delle spoglie di Teresa e della piccola Irene Antonini, morta in tenerissima età, all’interno della sepoltura familiare. I documenti che attestano gli acquisti di terreno, gli ampliamenti e successive sistemazioni testimoniano quanta cura i familiari abbiano riservato nel tempo a questo luogo, del quale fu a lungo protagonista l’ingegner Francesco Antonini.`,
      `A Francesco, membro della famiglia, è attribuito anche il progetto della cappella. L’edificio interpreta il gusto eclettico dell’Ottocento attraverso diversi richiami all’architettura romanica e bizantina, riconoscibili negli archi, nella compattezza dei volumi, nella ricchezza dell’ornato. La pietra chiara e la rigorosa simmetria conferiscono al prospetto un carattere solenne. Il portale ad arco è incorniciato da fasce concentriche scolpite con sculture floreali e tralci vegetali; il cancello metallico e la grata della lunetta, composti da un fitto disegno, sono un’articolata opera di artigianato. In alto, la scritta ‘Antonini’, racchiusa da un motivo a treccia, afferma l’identità familiare. Sui fianchi, ampie croci in rilievo occupano gli archi ciechi, mentre nastri, ghirlande ed emblemi decorano la parte soprastante. All’esterno, quattro bracieri ornamentali accompagnano la cappella sui quattro lati del marciapiede che circonda il monumento. Ciascuno presenta un corpo a vaso, arricchito da decorazioni a rilievo e sormontato da una fiamma scolpita. La loro presenza introduce il tema della luce, che ritorna all’interno dello spazio interno nella lampada sostenuta dall’angelo della vetrata.`,
      `Il raccolto ambiente interno è rivestito di marmo bianco; le pareti laterali accolgono le sepolture della famiglia che, assieme alle iscrizioni, sono accompagnate da ritratti finemente scolpiti che emergono da fondi lasciati più scabri. Tra questi, posto su un piedistallo in pietra scura, spicca il busto firmato da <strong>Romano Mignini e datato 1893</strong>, probabilmente raffigurante Giacomo Antonini, scomparso l’anno precedente. Sopra questo insieme si distende un soffitto ligneo a cassettoni, ornato da conchiglie e rosette, dal quale pende un lampadario in ferro battuto di gusto neogotico.`,
      `La luce filtra nella cappella grazie a una bifora, impreziosita da una sottile colonna marmorea con capitello a foglie d’acanto. Qui si trova la vetrata realizzata nel <strong>1934 da Rosa e Cecilia Moretti-Caselli</strong>, protagoniste della tradizione perugina della pittura a fuoco su vetro. Due angeli occupano le aperture: quello di sinistra, raffigurato di profilo, sostiene una lampada accesa; quello di destra, rivolto verso l’osservatore, regge un cartiglio con un’iscrizione latina. Vesti aranciate e verdi, ali purpuree e rosse, motivi geometrici e fogliami compongono una trama luminosa, completata da piccoli volti alati nella parte superiore e dagli emblemi familiari, posti alla base. I vetri colorati creano sulle pareti di marmo bianco dei suggestivi giochi di luce variopinta.`,
      `I simboli cristiani accompagnano lo sguardo fin dall’ingresso. <strong>Alfa e Omega</strong>, prima e ultima lettera dell’alfabeto greco, richiamano Dio come principio e compimento di ogni cosa. Il <strong>monogramma di Cristo</strong>, posto sopra il portale, intreccia invece le lettere greche <em>chi</em> e <em>rho</em>, iniziali del suo nome. Insieme alle croci dei prospetti, questi segni esprimono la fede nella salvezza e nella resurrezione. Anche le <strong>conchiglie</strong> del soffitto appartengono a un repertorio che, nella tradizione cristiana e funeraria, evoca la rinascita e la resurrezione.`,
      `Un ulteriore richiamo all’identità della famiglia è affidato all’emblema ripetuto sui fianchi e nelle vetrate, nel quale compaiono una <strong>barca</strong> sul mare, una fascia dorata e una <strong>stella</strong>. La barca e l’astro si prestano anche a una lettura legata al viaggio dell’esistenza e alla ricerca di una guida. È un’interpretazione evocativa, da distinguere dall’origine araldica dello stemma, che, ad oggi, rimane da chiarire.`
    ],
    simboli: [
      {
        id: "SIM_BRACIERE_FIAMMA",
        nome: "Il braciere e la fiamma",
        icona: "assets/braciere.png",
        testo: [
          `Nei bracieri della Cappella Antonini, la <strong>fiamma</strong> si innalza dal recipiente con un movimento che la scultura rende permanente. Nel linguaggio funerario, il fuoco raccoglie significati legati alla vita e alla purificazione; nella tradizione cristiana può richiamare anche la presenza dello Spirito Santo. Nel contesto della cappella, questa fiamma che continua idealmente ad ardere può essere letta come un’immagine della speranza nella vita eterna e della continuità del ricordo. La lucerna, raffigurata nella vetrata, richiama l’illuminazione divina e il legame fra la dimensione terrena e l’aldilà. Fra esterno e interno, la luce assume così forme diverse e accompagna il passaggio dalla memoria dei defunti alla speranza cristiana della resurrezione.`
        ]
      }
    ],
    audio: { src: "audio/Antonini_audio.mp3" }, // Narrazione Cappella Antonini; file nel repository schede/audio/
    bibliografia: [],
    dati: [],
    modello3dUrl: "modelli/antonini-web.glb"
  },
  "DEMO-RUS": {
    id: "DEMO-RUS", // Da collegare all'ID definitivo del database
    nome: "Cappella Ruspoli",
    cronologia: "1930",
    autore: "Francesco Cirone",
    itinerari: [
      { id: "simboli", etichetta: "Itinerario dei simboli", colore: "#8e284b" }
    ],
    fotografie: [
      { src: "immagini/DEMO-RUS/foto_01.jpg", titolo: "Vista generale della Cappella Ruspoli", didascalia: "Vista generale della Cappella Ruspoli. Fotografia: Eleonora Dottorini." },
      { src: "immagini/DEMO-RUS/foto_02.jpg", titolo: "Dettaglio del pianerottolo di ingresso della cappella", didascalia: "Dettaglio del pianerottolo di ingresso della cappella. Fotografia: Eleonora Dottorini." },
      { src: "immagini/DEMO-RUS/foto_03.jpg", titolo: "Dettaglio dello stemma della famiglia Ruspoli", didascalia: "Dettaglio dello stemma della famiglia Ruspoli. Fotografia: Eleonora Dottorini." },
      { src: "immagini/DEMO-RUS/foto_04.jpg", titolo: "Dettaglio dell’inferriata lavorata a forma di vite e grappoli", didascalia: "Dettaglio dell’inferriata lavorata a forma di vite e grappoli." },
      { src: "immagini/DEMO-RUS/foto_05.jpg", titolo: "Piante della Cappella Ruspoli", didascalia: "Piante della Cappella Ruspoli. Elaborazione: Nicolò Cecchini, Valentina Gaggiotti, Michelle Pucci." },
      { src: "immagini/DEMO-RUS/foto_06.jpg", titolo: "Prospetto Nord", didascalia: "Prospetto Nord. Elaborazione: Nicolò Cecchini, Valentina Gaggiotti, Michelle Pucci." },
      { src: "immagini/DEMO-RUS/foto_07.jpg", titolo: "Sezione", didascalia: "Sezione. Elaborazione: Nicolò Cecchini, Valentina Gaggiotti, Michelle Pucci." },
      { src: "immagini/DEMO-RUS/foto_08.jpg", titolo: "Disegni della grata decorata e del soffitto cassettonato", didascalia: "Disegni della grata decorata e del soffitto cassettonato. Elaborazione: Nicolò Cecchini, Valentina Gaggiotti, Michelle Pucci." },
      { src: "immagini/DEMO-RUS/foto_09.jpg", titolo: "I sarcofagi di Emanuele e Camillo Ruspoli", didascalia: "I sarcofagi di Emanuele e Camillo Ruspoli. Elaborazione: Nicolò Cecchini, Valentina Gaggiotti, Michelle Pucci." },
      { src: "immagini/DEMO-RUS/foto_10.jpg", titolo: "Lo stemma della famiglia Ruspoli", didascalia: "Lo stemma della famiglia Ruspoli. Elaborazione: Nicolò Cecchini, Valentina Gaggiotti, Michelle Pucci." }
    ],
    copertina: "immagini/DEMO-RUS/foto_01.jpg",

    descrizione: [
      `La famiglia Ruspoli è una delle più antiche e nobili casate italiane d’origine fiorentina, documentata fin dal Duecento. Il ramo principale discende da Francesco Maria Marescotti Ruspoli (1672–1731), al quale nel 1709 Clemente XI conferì il titolo di principe di Cerveteri e conte di Vignanello, riconoscendone il prestigio nell’aristocrazia pontificia.`,
      `Nel 1721 papa Benedetto XIII confermò a Francesco Ruspoli (1752–1829), nipote di Francesco Maria Marescotti Ruspoli, il titolo di Principe Romano di Cerveteri, trasmissibile ai suoi discendenti in perpetuo. Questo riconoscimento segnò l’ingresso ufficiale della famiglia Ruspoli nell’alta aristocrazia pontificia. Parallelamente si sviluppò il ramo dei principi di Poggio Suasa, fondato da Bartolomeo Ruspoli (1796/1800–1872), figura di rilievo del Risorgimento e colonnello dell’esercito piemontese.`,
      `Il figlio di Bartolomeo, Emanuele Francesco Maria Ruspoli (1837–1899), ingegnere, principe di Poggio Suasa dal 1886 e legato anche all’Umbria attraverso l’elezione nel collegio di Foligno, proseguì l’impegno politico paterno: fu deputato, senatore e per due mandati sindaco di Roma, partecipando attivamente alla trasformazione della città nella capitale italiana. Dal suo matrimonio con Laura Caracciolo nacque nel 1882 Camillo Ruspoli, principe di Candriano, committente della cappella.`,
      `Nel settembre del 1929, a seguito della prematura scomparsa del figlio Emanuele, morto solo un mese prima all’età di ventitré anni, Camillo Ruspoli avviò le pratiche per costruire un sepolcreto privato nella proprietà di Santa Petronilla; nonostante le autorizzazioni ottenute, la scelta ricadde poi sul cimitero civico. Il progetto per la cappella, presentato dall’<strong>architetto Francesco Cirone</strong>, fu approvato il <strong>26 febbraio 1930</strong>.`,
      `<strong>L’architettura e le decorazioni</strong>`,
      `La cappella si distingue per l’imponenza dei volumi, l’equilibrio della composizione e il sobrio ed elegante apparato decorativo. Il linguaggio eclettico rielabora il modello delle chiese rinascimentali a pianta centrale: al corpo inferiore, con quattro prospetti dal profilo a capanna, si sovrappone un tamburo ottagonale in cui si aprono quattro oculi. La copertura a padiglione, rivestita di metallo verde, culmina in un vaso fiammeggiante.`,
      `Il caldo colore del laterizio contrasta con la pietra chiara del basamento, delle cornici e delle colonnine agli spigoli della facciata. Una breve scalinata, affiancata da due vasi decorati, conduce al portale a tutto sesto, incorniciato da un archivolto scolpito. Sopra l’ingresso risalta lo stemma policromo dei Ruspoli, coronato e circondato da una ghirlanda di frutti e nastri. Il piccolo campanile, con tre arcate sostenute da colonnine, altrettante campane e una croce latina sommitale, accentua il richiamo all’architettura di una chiesa.`,
      `Il laterizio caratterizza anche lo spazio interno, accompagnato da un rivestimento marmoreo che definisce la parte inferiore delle pareti. La luce degli oculi e della grande finestra semicircolare opposta all’ingresso illumina il marmo chiaro dei monumenti funerari. Al centro si trova il sarcofago rettangolare di Emanuele, ornato da cornici finemente scolpite, medaglioni e intrecci vegetali: sul fronte compare una croce latina, sui lati lo stemma familiare. Lungo la parete sinistra è collocato il sepolcro di Camillo: un’urna dal profilo curvo, sostenuta da un piedistallo e ornata da volute, motivi vegetali e una croce a otto punte.`,
      `Alzando lo sguardo, si osserva il ricercato lavoro del laterizio: negli angoli, sequenze di archi progressivamente arretrati raccordano il corpo inferiore al tamburo ottagonale. Il soffitto ligneo conclude lo spazio con una composizione geometrica nella quale motivi a croce si dispongono a raggiera intorno al centro. Ai lati del sarcofago centrale, due grate metalliche nel pavimento, ciascuna divisa in tre riquadri, intrecciano rosoni, losanghe e motivi vegetali in una trama simile a un merletto.`
    ],
    simboli: [
      {
        id: "SIM_VITE",
        nome: "La vite",
        icona: "assets/vite.png",
        testo: [
          `La vite è uno dei motivi dominanti della facciata principale: tralci intrecciati e grappoli d’uva ricorrono nello stemma di famiglia e nell’inferriata della lunetta d’ingresso. Il motivo vegetale unisce così il richiamo all’identità e alla memoria familiare ai significati cristiani e funerari della pianta.`,
          `Nella tradizione cristiana, la vite richiama Cristo, che è la «vera vite», il legame spirituale che unisce a lui i fedeli, che sono i tralci, nonché il vino eucaristico, evocando così la promessa di salvezza e di vita eterna.`,
          `Nell’arte funeraria, la vite assume anche significati legati alla vitalità, alla rinascita e alla continuità degli affetti. I tralci che si intrecciano possono così richiamare la persistenza dei legami umani oltre la morte, esprimendo, accanto alla speranza cristiana della resurrezione, la fedeltà del ricordo.`
        ]
      }
    ],
    audio: { src: "audio/Ruspoli_audio.mp3" },
    bibliografia: [],
    dati: [],
    modello3dUrl: "modelli/ruspoli-web.glb"
  },
  "DEMO-FP": {
    id: "DEMO-FP",
    nome: "Edicola Fiorini–Pacioselli",
    cronologia: "1908",
    autore: "Romano e Venusto Mignini",
    itinerari: [{ id: "simboli", etichetta: "Itinerario dei simboli", colore: "#8e284b" }],
    fotografie: [
      {src: "immagini/DEMO-FP/foto_01.jpg", titolo: "Vista generale dell’Edicola Fiorini–Pacioselli", didascalia: "Vista generale dell’Edicola Fiorini–Pacioselli. Fotografia: Eleonora Dottorini."},
      {src: "immagini/DEMO-FP/foto_02.jpg", titolo: "Dettaglio di uno dei due leoni", didascalia: "Dettaglio di uno dei due leoni. Fotografia: Eleonora Dottorini."},
      {src: "immagini/DEMO-FP/foto_03.jpg", titolo: "Dettaglio del capitello", didascalia: "Dettaglio del capitello. Fotografia: Eleonora Dottorini."},
      {src: "immagini/DEMO-FP/foto_04.jpg", titolo: "Dettaglio della fascia decorativa del portale", didascalia: "Dettaglio della fascia decorativa del portale. Fotografia: Eleonora Dottorini."},
      {src: "immagini/DEMO-FP/foto_05.jpg", titolo: "Modello in creta dell’Edicola Fiorini–Pacioselli", didascalia: "Modello in creta dell’Edicola Fiorini–Pacioselli firmato dall’autore Romano Mignini. Archivio di Stato di Perugia."},
      {src: "immagini/DEMO-FP/foto_06.jpg", titolo: "Pianta dell’Edicola Fiorini–Pacioselli", didascalia: "Pianta dell’Edicola Fiorini–Pacioselli. Elaborazione: Niccolò Carotenuto, Andrea Massarelli, Alessio Rosini."},
      {src: "immagini/DEMO-FP/foto_07.jpg", titolo: "Prospetto dell’Edicola Fiorini–Pacioselli", didascalia: "Prospetto dell’Edicola Fiorini–Pacioselli. Elaborazione: Niccolò Carotenuto, Andrea Massarelli, Alessio Rosini."},
      {src: "immagini/DEMO-FP/foto_08.jpg", titolo: "Sezione dell’Edicola Fiorini–Pacioselli", didascalia: "Sezione dell’Edicola Fiorini–Pacioselli. Elaborazione: Niccolò Carotenuto, Andrea Massarelli, Alessio Rosini."}
    ],
    copertina: "immagini/DEMO-FP/foto_01.jpg",
    descrizione: [
      "Realizzata nel 1908, su progetto dei noti scultori perugini <strong>Romano e Venusto Mignini</strong> su commissione di <strong>Giuseppe Conestabile della Staffa</strong>, nel gennaio 1955 l’edicola viene ceduta ai Signori Fiorini Natale e Pacioselli Vincenzo.",
      "Di impronta neogotica, l’edicola si sviluppa all’interno di una delle arcate a sesto acuto della galleria monumentale sinistra, con un ricco apparato architettonico e scultoreo impostato su due fasce basamentali sovrapposte. In primo piano, sopra un imponente basamento ornato da modanature e motivi floreali, sono disposti due grandi <strong>leoni in pietra bianca</strong>, raffigurati distesi, con la bocca semiaperta e lo sguardo rivolto verso la scala centrale. Alle loro spalle si innalzano due colonne in marmo bianco e rossastro, coronate da capitelli con foglie in altorilievo e da abachi modanati, ornati da dentelli di derivazione classica.",
      "Sul fondo dell’arcata, al termine della scalinata, si apre il portale di accesso alla cappella, chiuso da un cancello in ferro battuto con decorazioni geometriche. Ai lati si dispongono due semicolonne ornate da motivi a rombo e due ordini di paraste, dei quali quello più interno e arretrato presenta decorazioni con <strong>tralci di vite e grappoli d’uva</strong>.",
      "Il fregio superiore riprende lateralmente i motivi vegetali dei capitelli, mentre al centro, sopra il portale, uno spazio privo di decorazioni accoglie l’epigrafe con i nomi delle due famiglie intestatarie dell’edicola.",
      "La composizione culmina in un pregevole <strong>altorilievo raffigurante la Madonna con il Bambino</strong>, collocato al centro dell’arcata e incorniciato da motivi a rombo e da una fascia esterna decorata con tralci di vite e grappoli d’uva, in continuità con l’ornato delle paraste sottostanti."
    ],
    simboli: [{
      id: "SIM_LEONE",
      nome: "Il leone",
      icona: "assets/leone.png",
      testo: ["Presente nell’arte funeraria fin dall’antichità, il leone è simbolo di forza, vigilanza e protezione. Spesso raffigurato in coppia presso ingressi e sepolture, assume il ruolo di custode del riposo dei defunti. Nella tradizione cristiana richiama inoltre Cristo e la resurrezione: secondo un’antica credenza tramandata dai bestiari medievali, i cuccioli nascevano privi di vita e venivano risvegliati al terzo giorno dal soffio del padre, evocando la resurrezione di Cristo. Gli stessi bestiari attribuivano al leone la capacità di dormire con gli occhi aperti, facendone un emblema di vigilanza incessante. Nell’Edicola Fiorini–Pacioselli, i due leoni distesi ai lati della scalinata richiamano così la custodia e la protezione simbolica della sepoltura."]
    }],
    audio: { src: "audio/Fiorini-Pacioselli_Audio.mp3" },
    bibliografia: [],
    dati: [],
    modello3dUrl: "modelli/fiorini-pacioselli-web.glb"
  },
  "DEMO-PAG": {
    id: "DEMO-PAG", // ID provvisorio: da sostituire con l'identificativo del database
    nome: "Cappella Pagnotta",
    cronologia: "1915",
    autore: "Giuseppe Frenguelli, Bruto Mosci",
    itinerari: [{ id: "simboli", etichetta: "Itinerario dei simboli", colore: "#8e284b" }],
    fotografie: [
      { src: "immagini/DEMO-PAG/foto_01.jpg", titolo: "Veduta generale della Cappella Pagnotta", didascalia: "Veduta generale della Cappella Pagnotta. Fotografia: Eleonora Dottorini." },
      { src: "immagini/DEMO-PAG/foto_02.jpg", titolo: "Lunetta con figura femminile sopra l’ingresso", didascalia: "La lunetta con il volto femminile sopra all’ingresso. Fotografia: Eleonora Dottorini." },
      { src: "immagini/DEMO-PAG/foto_03.jpg", titolo: "Sculture di Giulio Augusto e Aida", didascalia: "Le statue dei bambini Giulio Augusto e Aida. Fotografia: Eleonora Dottorini." },
      { src: "immagini/DEMO-PAG/foto_04.jpg", titolo: "Bassorilievo della superficie inferiore della pensilina", didascalia: "Il bassorilievo che decora la superficie inferiore della pensilina. Fotografia: Eleonora Dottorini." },
      { src: "immagini/DEMO-PAG/foto_05.jpg", titolo: "Decorazione con papaveri della pensilina", didascalia: "La decorazione con papaveri della pensilina. Fotografia: Eleonora Dottorini." },
      { src: "immagini/DEMO-PAG/foto_06.jpg", titolo: "Progetto della Cappella Pagnotta", didascalia: "Progetto della cappella di Giuseppe Frenguelli. Archivio del Cimitero." },
      { src: "immagini/DEMO-PAG/foto_07.jpg", titolo: "Piante della Cappella Pagnotta", didascalia: "Piante della Cappella Pagnotta. Elaborazione: Niccolò Carotenuto, Andrea Massarelli, Alessio Rosini." },
      { src: "immagini/DEMO-PAG/foto_08.jpg", titolo: "Prospetto principale", didascalia: "Il prospetto principale. Elaborazione: Niccolò Carotenuto, Andrea Massarelli, Alessio Rosini." },
      { src: "immagini/DEMO-PAG/foto_09.jpg", titolo: "Prospetti nord ed est", didascalia: "I prospetti nord ed est. Elaborazione: Niccolò Carotenuto, Andrea Massarelli, Alessio Rosini." },
      { src: "immagini/DEMO-PAG/foto_10.jpg", titolo: "Prospetto ovest e sezione", didascalia: "Il prospetto ovest e la sezione. Elaborazione: Niccolò Carotenuto, Andrea Massarelli, Alessio Rosini." }
    ],
    copertina: "immagini/DEMO-PAG/foto_01.jpg",
    descrizione: [
      `La cappella, situata lungo il viale principale, sul lato sinistro, fu costruita nel <strong>1915</strong> su commissione di <strong>Armando Piergiovanni</strong> (1872-1952), che ne affidò la progettazione all’artista <strong>Giuseppe Frenguelli</strong>. Nel 1941 la proprietà venne ceduta alla famiglia Pagnotta, che nel 1946 e nel 1947 eseguì lavori di manutenzione straordinaria e realizzò una cordonatura in travertino lungo il perimetro del lotto.`,
      `Di dimensioni contenute e dalle forme sobrie, la cappella presenta una pianta rettangolare, con l’ingresso sul lato lungo rivolto a sud. È realizzata in travertino, la cui superficie è movimentata, in corrispondenza dei quattro spigoli, dalla lavorazione dei blocchi a bocciarda e a scalpello.`,
      `La facciata è scandita in tre fasce verticali e protetta da una pensilina sostenuta da quattro peducci. Al centro, la porta in ferro è sormontata da una lunetta semicircolare con il rilievo di una figura femminile dallo sguardo rivolto al cielo; due anfore scolpite ornano le fasce laterali. Tra i motivi decorativi compare il volto di Medusa, ricorrente anche in altre cappelle disegnate da Frenguelli. La pensilina riserva un ulteriore dettaglio da scoprire: osservandola dal basso, si distinguono i delicati bassorilievi che ne decorano la superficie inferiore.`,
      `A richiamare l’attenzione sono soprattutto le due sculture di bambini davanti all’ingresso, che danno al monumento il suo carattere più riconoscibile. Le figure, raccolte in un atteggiamento assorto, raffigurano i figli di Armando Piergiovanni: Giulio Augusto, morto di difterite nel 1915, scolpito da Giuseppe Frenguelli, e Aida, opera dell’artista perugino <strong>Bruto Mosci</strong>. La grazia delle pose conferisce alle due presenze una delicata intimità, invitando a soffermarsi sulla memoria familiare custodita dalla cappella.`,
      `L’interno è raccolto e semplice. Il pavimento è formato da due lastre di pietra bianca, mentre la controfacciata è intonacata e tinteggiata di bianco. Sulle altre tre pareti, lastre di marmo grigio chiaro inquadrano i cinque ordini di colombari laterali e i cinque loculi della parete di fondo, chiusi da lastre di marmo bianco con venature grigie. Una volta a botte copre l’ambiente; lungo il suo attacco alle pareti corre una cornice in stucco bianco, ornata da motivi floreali.`
    ],
    simboli: [{
      id: "SIM_PAPAVERO",
      nome: "Il papavero",
      icona: "assets/papavero.png",
      testo: [
      `Nella scultura funeraria, il papavero è un simbolo del sonno eterno. Questo significato affonda le radici nell’antichità ed è legato alle proprietà soporifere del papavero da oppio, associato a Ipno, dio del sonno, e a Morfeo, dio dei sogni.`,
      `Sui monumenti sepolcrali la pianta compare sia in fiore sia attraverso le sue capsule, i frutti tondeggianti che racchiudono i semi. La sua presenza può assumere un valore consolatorio: la morte è evocata come un dolce abbandono al sonno, un riposo che libera dagli affanni della vita.`,
      `Nella cappella Pagnotta, il motivo floreale è raccolto entro un medaglione circolare: corolle e foglie stilizzate si alternano in una composizione a raggiera, trasformando le forme della pianta in un delicato ornamento geometrico.`
      ]
    }],
    audio: { src: "audio/Pagnotta_Audio.mp3" },
    bibliografia: [],
    dati: [],
    modello3dUrl: "modelli/pagnotta-web.glb"
  }

};