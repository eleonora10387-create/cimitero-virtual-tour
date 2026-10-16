/*
 * ARCHIVIO MONUMENTI – Memory Twin del Cimitero Monumentale di Perugia
 * Versione di prova, 16 ottobre 2026.
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
      { src: "immagini/DEMO-BC/disegno_storico.jpg", titolo: "Disegno di progetto: prospetti e pianta", didascalia: "Elaborato storico con prospetti e pianta dell’edicola; data e provenienza da verificare." },
      { src: "immagini/DEMO-BC/vista_generale.jpg", titolo: "Edicola Bonfatti–Casini", didascalia: "Vista generale attuale dell’edicola e del suo coronamento neogotico." },
      { src: "immagini/DEMO-BC/rosa_smargiassi.jpg", titolo: "Statua commemorativa", didascalia: "Particolare della figura commemorativa appoggiata alla colonna spezzata." },
      { src: "immagini/DEMO-BC/colonna_spezzata.jpg", titolo: "La colonna spezzata e la ghirlanda", didascalia: "Dettaglio della colonna spezzata e degli elementi floreali." },
      { src: "immagini/DEMO-BC/cripta.jpg", titolo: "Accesso alla cripta", didascalia: "Veduta dell’ambiente di accesso alla cripta familiare." },
      { src: "immagini/DEMO-BC/prospetto_nord.jpg", titolo: "Rilievo: prospetto nord", didascalia: "Prospetto nord dell’edicola, come indicato sulla tavola." },
      { src: "immagini/DEMO-BC/prospetto_ovest.jpg", titolo: "Rilievo: prospetto ovest", didascalia: "Prospetto ovest dell’edicola, come indicato sulla tavola." },
      { src: "immagini/DEMO-BC/sezione.jpg", titolo: "Rilievo: sezione", didascalia: "Sezione architettonica del monumento e della parte sotterranea." },
      { src: "immagini/DEMO-BC/pianta.jpg", titolo: "Rilievo: pianta", didascalia: "Pianta dell’edicola, come indicato sulla tavola." },
      { src: "immagini/DEMO-BC/fotografia_storica.jpg", titolo: "Fotografia storica", didascalia: "Immagine storica presente nella documentazione raccolta; soggetto, data e provenienza da verificare." }
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
    modello3dUrl: "" // L'azione 3D nativa di 3DVista si integra in una fase successiva
  },
  "DEMO-RUS": {
    id: "DEMO-RUS",
    nome: "Cappella Ruspoli",
    cronologia: "",
    autore: "",
    itinerari: [],
    fotografie: [],
    descrizione: [], // Nessun testo scientifico fornito: non inventare informazioni
    simboli: [],
    audio: { src: "" },
    bibliografia: [],
    dati: [],
    modello3dUrl: ""
  }
};
