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
      { src: "immagini/DEMO-RUS/foto_06.jpg", titolo: "Il prospetto principale", didascalia: "Il prospetto principale. Elaborazione: Nicolò Cecchini, Valentina Gaggiotti, Michelle Pucci." },
      { src: "immagini/DEMO-RUS/foto_07.jpg", titolo: "Sezione", didascalia: "Sezione. Elaborazione: Nicolò Cecchini, Valentina Gaggiotti, Michelle Pucci." },
      { src: "immagini/DEMO-RUS/foto_08.jpg", titolo: "Disegni della grata decorata e del soffitto cassettonato", didascalia: "Disegni della grata decorata e del soffitto cassettonato. Elaborazione: Nicolò Cecchini, Valentina Gaggiotti, Michelle Pucci." },
      { src: "immagini/DEMO-RUS/foto_09.jpg", titolo: "I sarcofagi di Emanuele e Camillo Ruspoli", didascalia: "I sarcofagi di Emanuele e Camillo Ruspoli. Elaborazione: Nicolò Cecchini, Valentina Gaggiotti, Michelle Pucci." },
      { src: "immagini/DEMO-RUS/foto_10.jpg", titolo: "Lo stemma della famiglia Ruspoli", didascalia: "Lo stemma della famiglia Ruspoli. Elaborazione: Nicolò Cecchini, Valentina Gaggiotti, Michelle Pucci." }
    ],
    copertina: "immagini/DEMO-RUS/foto_01.jpg",
    descrizione: [
      `La cappella dei principi Ruspoli di Candriano sorge lungo il viale principale del Cimitero Monumentale di Perugia. La sua costruzione è legata alla morte di Emanuele, figlio di Camillo Ruspoli e Margherita Blanc, scomparso nell’agosto 1929 a ventitré anni. Nel settembre successivo Camillo avviò le pratiche per un sepolcreto privato nella proprietà di Santa Petronilla. Nonostante le autorizzazioni ottenute, la scelta ricadde poi sul cimitero civico, per ragioni ancora non chiarite.`,
      `Il progetto per la nuova sede fu presentato dall’<strong>architetto Francesco Cirone</strong>. Nel gennaio <strong>1930</strong> il Comune incaricò l’architetto Pietro Angelini e il pittore Alberto Iraci di un sopralluogo per valutarne l’inserimento tra i monumenti circostanti. Le difficoltà nella sistemazione del terreno e le trattative sui costi della concessione portarono la questione all’attenzione del Ministero dell’Interno; in febbraio il prefetto sollecitò il Comune a risolvere gli ostacoli. Il 26 febbraio 1930 la Commissione edilizia approvò progetto e collocazione, chiedendo di valutare una riduzione delle dimensioni e una maggiore armonia tra la parte superiore e quella inferiore dell’edificio.`,
      `Nel settembre 1931 fu autorizzata una fascia di terreno attorno alla cappella, destinata ai fiori: un dettaglio della cura riservata allo spazio del ricordo. Restano ignoti gli autori delle decorazioni e degli arredi. Un inventario del 1965 ricorda candelabri in ferro battuto e legno scolpito, lanternoni, un inginocchiatoio, immagini sacre e un dipinto dello <em>Sposalizio della Madonna</em>, e ci restituisce l’immagine di un ambiente dedicato alla preghiera e alle celebrazioni familiari.`,
      `<strong>La famiglia Ruspoli</strong>`,
      `Di origine fiorentina, documentata già nel Duecento, la famiglia Ruspoli trasferì nel Cinquecento un proprio ramo a Roma, consolidandovi la sua posizione attraverso attività economiche, incarichi e alleanze matrimoniali. L’unione con i Marescotti ne legò le vicende al castello di Vignanello. Nel 1709 Clemente XI conferì a Francesco Maria Marescotti Ruspoli il titolo di principe di Cerveteri, riconoscendone il prestigio nell’aristocrazia pontificia.`,
      `Nell’Ottocento, parte della famiglia aderì alla causa nazionale. Bartolomeo Ruspoli lasciò il servizio militare pontificio per combattere nella prima guerra d’indipendenza assieme all’esercito piemontese. Suo figlio Emanuele (1837–1899), principe di Poggio Suasa dal 1886 e legato anche all’Umbria attraverso l’elezione nel collegio di Foligno, proseguì questo impegno: deputato, senatore e per due mandati sindaco di Roma, partecipò alla trasformazione della città nella capitale italiana.`,
      `Dal matrimonio con Laura Caracciolo nacque Camillo (1882–1949), principe di Candriano e committente della cappella. Sposato con Margherita Blanc e proprietario della villa di Santa Petronilla, scelse Perugia come luogo della memoria familiare. Trascorse parte della propria vita a Cuba, dove era giunto nel 1920 per una missione commerciale del governo italiano e aveva acquistato alcune proprietà agricole. Morì all’Avana nel 1949 e, nel 1955, sua moglie Margherita curò le pratiche per riportarne la salma a Perugia e tumularla accanto al figlio Emanuele.`,
      `<strong>L’architettura e le decorazioni</strong>`,
      `La cappella si distingue per l’imponenza dei volumi, l’equilibrio della composizione e il sobrio ed elegante apparato decorativo. Il linguaggio eclettico rielabora il modello delle chiese rinascimentali a pianta centrale: al corpo inferiore, con quattro prospetti dal profilo a capanna, si sovrappone un tamburo ottagonale in cui si aprono quattro oculi. La copertura a padiglione, rivestita di metallo verde, culmina in un vaso fiammeggiante.`,
      `Il caldo colore del laterizio contrasta con la pietra chiara del basamento, delle cornici e delle colonnine agli spigoli della facciata. Una breve scalinata, affiancata da due vasi decorati, conduce al portale a tutto sesto, incorniciato da un archivolto scolpito. Sopra l’ingresso risalta lo stemma policromo dei Ruspoli, coronato e circondato da una ghirlanda di frutti e nastri. Il piccolo campanile, con tre arcate sostenute da colonnine, altrettante campane e una croce latina sommitale, accentua il richiamo all’architettura di una chiesa.`,
      `Il laterizio caratterizza anche lo spazio interno, accompagnato da un rivestimento marmoreo che definisce la parte inferiore delle pareti. La luce degli oculi e della grande finestra semicircolare opposta all’ingresso illumina il marmo chiaro dei monumenti funerari. Al centro si trova il sarcofago rettangolare di Emanuele, ornato da cornici finemente scolpite, medaglioni e intrecci vegetali: sul fronte compare una croce latina, sui lati lo stemma familiare. Lungo la parete sinistra è collocato il sepolcro di Camillo: un’urna dal profilo curvo, sostenuta da un piedistallo e ornata da volute, motivi vegetali e una croce a otto punte.`,
      `Alzando lo sguardo, si osserva il ricercato lavoro del laterizio: negli angoli, sequenze di archi progressivamente arretrati raccordano il corpo inferiore al tamburo ottagonale. Il soffitto ligneo conclude lo spazio con una composizione geometrica nella quale motivi a croce si dispongono a raggiera intorno al centro.`,
      `Ai lati del sarcofago centrale, due grate metalliche nel pavimento, ciascuna divisa in tre riquadri, intrecciano rosoni, losanghe e motivi vegetali in una trama simile a un merletto.`
    ],
    simboli: [
      {
        id: "SIM_VITE",
        nome: "La vite",
        icona: "assets/vite.png",
        testo: [
          `Nella tradizione cristiana, la vite richiama Cristo, che nel Vangelo si definisce «vera vite», e il legame spirituale che unisce a lui i fedeli. I tralci e i grappoli rimandano al vino eucaristico e al sangue del sacrificio di Cristo, evocando la promessa di salvezza e di vita eterna. Nell’arte funeraria, la vite assume anche significati legati alla vitalità, alla rinascita e alla continuità degli affetti. I tralci che si intrecciano possono così richiamare la persistenza dei legami umani oltre la morte, esprimendo, accanto alla speranza cristiana della resurrezione, la fedeltà del ricordo. Nella Cappella Ruspoli, il motivo della vite assume inoltre una valenza identitaria: presente nell'inferriata della lunetta d'ingresso, richiama anche l'emblema araldico della famiglia, caratterizzato da tralci intrecciati e grappoli d'uva. Al significato cristiano della pianta si affianca così il riferimento alla memoria e all'appartenenza familiare.`
        ]
      }
    ],
    audio: { src: "audio/Ruspoli_audio.mp3" },
    bibliografia: [],
    dati: [],
    modello3dUrl: "modelli/ruspoli-web.glb"
  }

};
