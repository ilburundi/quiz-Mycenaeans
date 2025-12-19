const bancaDomande = [
    // --- FACILE ---
    { testo: "In quale nazione moderna si trova la città di Micene?", risposte: ["Italia", "Grecia", "Spagna", "Egitto"], corretta: 1, diff: "facile" },
    { testo: "Chi era il re di Micene a capo degli Achei?", risposte: ["Ulisse", "Priamo", "Agamennone", "Achille"], corretta: 2, diff: "facile" },
    { testo: "Quale animale protegge l'ingresso della città?", risposte: ["Tigre", "Leone", "Aquila", "Serpente"], corretta: 1, diff: "facile" },
    { testo: "Quale città fu assediata dai Micenei per 10 anni?", risposte: ["Roma", "Troia", "Atene", "Cnosso"], corretta: 1, diff: "facile" },
    { testo: "Come venivano chiamati i Micenei nei poemi di Omero?", risposte: ["Achei", "Romani", "Persiani", "Etruschi"], corretta: 0, diff: "facile" },
    { testo: "Cosa costruivano i Micenei per difendere le loro città?", risposte: ["Fossati", "Mura altissime", "Torri di legno", "Tunnel"], corretta: 1, diff: "facile" },
    { testo: "I Micenei erano famosi per essere abili...", risposte: ["Contadini", "Guerrieri e navigatori", "Scrittori", "Astronomi"], corretta: 1, diff: "facile" },
    { testo: "Quale metallo dà il nome all'epoca dei Micenei?", risposte: ["Oro", "Ferro", "Bronzo", "Rame"], corretta: 2, diff: "facile" },
    { testo: "La città di Micene sorgeva su...", risposte: ["Un'isola", "Una collina", "Una spiaggia", "Una foresta"], corretta: 1, diff: "facile" },
    { testo: "Di quale materiale era fatta la maschera di Agamennone?", risposte: ["Bronzo", "Argento", "Oro", "Pietra"], corretta: 2, diff: "facile" },

    // --- MEDIO ---
    { testo: "Come si chiama la scrittura micenea?", risposte: ["Lineare A", "Geroglifico", "Lineare B", "Cuneiforme"], corretta: 2, diff: "medio" },
    { testo: "Le mura di Micene sono chiamate:", risposte: ["Ercolane", "Ciclopiche", "Giannizzere", "Titane"], corretta: 1, diff: "medio" },
    { testo: "Quale civiltà precedente influenzò molto i Micenei?", risposte: ["Egizia", "Minoica", "Ittita", "Babilonese"], corretta: 1, diff: "medio" },
    { testo: "In quale parte della Grecia si trova Micene?", risposte: ["Attica", "Peloponneso", "Tessaglia", "Creta"], corretta: 1, diff: "medio" },
    { testo: "Cosa significa il termine 'Wanax'?", risposte: ["Sacerdote", "Re/Sovrano", "Guerriero", "Schiavo"], corretta: 1, diff: "medio" },
    { testo: "Il Tesoro di Atreo è in realtà...", risposte: ["Un deposito d'oro", "Una tomba a Tholos", "Un tempio", "Un mercato"], corretta: 1, diff: "medio" },
    { testo: "In quale secolo crollò improvvisamente la civiltà micenea?", risposte: ["X a.C.", "XII a.C.", "XV a.C.", "VIII a.C."], corretta: 1, diff: "medio" },
    { testo: "Quale isola conquistarono i Micenei dopo il declino dei Minoici?", risposte: ["Cipro", "Creta", "Sicilia", "Rodi"], corretta: 1, diff: "medio" },
    { testo: "Che forma ha la pianta di una tomba a Tholos?", risposte: ["Quadrata", "Circolare", "Triangolare", "Rettangolare"], corretta: 1, diff: "medio" },
    { testo: "Di cosa si occupavano principalmente i documenti in Lineare B?", risposte: ["Poesie", "Leggi", "Inventari e amministrazione", "Preghiere"], corretta: 2, diff: "medio" },

    // --- DIFFICILE ---
    { testo: "Chi decifrò la scrittura Lineare B nel 1952?", risposte: ["Arthur Evans", "Michael Ventris", "Heinrich Schliemann", "Jean Champollion"], corretta: 1, diff: "difficile" },
    { testo: "Quale popolo migrante è spesso associato alla fine dei Micenei?", risposte: ["Dori", "Ioni", "Eoli", "Macedoni"], corretta: 0, diff: "difficile" },
    { testo: "Cos'è il 'Megaron' nel palazzo miceneo?", risposte: ["La dispensa", "La sala del trono", "La stalla", "Il corpo di guardia"], corretta: 1, diff: "difficile" },
    { testo: "Quale archeologo tedesco scoprì il sito di Micene?", risposte: ["Carter", "Schliemann", "Pigorini", "Blegen"], corretta: 1, diff: "difficile" },
    { testo: "Il termine 'Lawagetas' indicava:", risposte: ["Il capo dell'esercito", "Il gran sacerdote", "L'artigiano", "Il mercante"], corretta: 0, diff: "difficile" },
    { testo: "In quale anno furono scoperti i primi reperti importanti a Micene?", risposte: ["1900", "1876", "1922", "1850"], corretta: 1, diff: "difficile" },
    { testo: "I Micenei esportavano principalmente:", risposte: ["Papiro e sale", "Olio, vino e ceramiche", "Sete e spezie", "Marmo e stagno"], corretta: 1, diff: "difficile" },
    { testo: "Come si chiama la tecnica decorativa dell'oro usata dai Micenei?", risposte: ["Sbalzo", "Affresco", "Mosaico", "Incastro"], corretta: 0, diff: "difficile" },
    { testo: "Quale di questi NON era un centro miceneo?", risposte: ["Tirinto", "Pilo", "Gortina", "Tebe"], corretta: 2, diff: "difficile" },
    { testo: "A cosa servivano le 'tavolette' di argilla?", risposte: ["Per scrivere lettere", "Per registrare tasse e scorte", "Come monete", "Come mattoni"], corretta: 1, diff: "difficile" }
];

let listaDomande = [];
let indice = 0;
let punteggio = 0;
let tempo = 30;
let timer;
let erroriUtente = [];

function mescola(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function iniziaQuiz(livelloScelto) {
    listaDomande = bancaDomande.filter(d => d.diff === livelloScelto);
    mescola(listaDomande);
    indice = 0;
    punteggio = 0;
    erroriUtente = [];
    document.getElementById('menu-livelli').classList.add('nascosto');
    document.getElementById('area-gioco').classList.remove('nascosto');
    mostraDomanda();
}

function mostraDomanda() {
    if (indice >= listaDomande.length) return termina();
    const d = listaDomande[indice];
    document.getElementById('testo-domanda').textContent = d.testo;
    document.getElementById('numero-domanda').textContent = `Domanda ${indice + 1} / ${listaDomande.length}`;
    const area = document.getElementById('opzioni-risposta');
    area.innerHTML = "";
    d.risposte.forEach((r, i) => {
        const b = document.createElement('button');
        b.className = 'pulsante-risposta';
        b.textContent = r;
        b.onclick = () => verifica(i, b);
        area.appendChild(b);
    });
    resetTimer();
}

function verifica(scelta, bottone) {
    clearInterval(timer);
    const corretta = listaDomande[indice].corretta;
    const bottoni = document.querySelectorAll('.pulsante-risposta');
    bottoni.forEach(btn => btn.style.pointerEvents = 'none');
    if (scelta === corretta) {
        punteggio++;
        bottone.classList.add('correct');
        bottone.innerHTML += " ✔";
    } else {
        bottone.classList.add('wrong');
        bottone.innerHTML += " ✖";
        bottoni[corretta].classList.add('correct'); 
        erroriUtente.push({
            domanda: listaDomande[indice].testo,
            tua: listaDomande[indice].risposte[scelta] || "Tempo scaduto",
            giusta: listaDomande[indice].risposte[corretta]
        });
    }
    setTimeout(() => {
        indice++;
        mostraDomanda();
    }, 1500);
}

function resetTimer() {
    tempo = 30;
    document.getElementById('timer-bar').style.width = "100%";
    clearInterval(timer);
    timer = setInterval(() => {
        tempo--;
        document.getElementById('tempo-rimanente').textContent = `Tempo: ${tempo}s`;
        document.getElementById('timer-bar').style.width = (tempo / 30 * 100) + "%";
        if (tempo <= 0) {
            clearInterval(timer);
            erroriUtente.push({ domanda: listaDomande[indice].testo, tua: "Tempo scaduto", giusta: listaDomande[indice].risposte[listaDomande[indice].corretta] });
            indice++;
            mostraDomanda();
        }
    }, 1000);
}

function termina() {
    document.getElementById('area-gioco').classList.add('nascosto');
    document.getElementById('schermata-finale').classList.remove('nascosto');
    document.getElementById('punteggio-testo').textContent = `${punteggio} / ${listaDomande.length}`;
    if (erroriUtente.length > 0) {
        document.getElementById('sezione-correzioni').classList.remove('nascosto');
        const lista = document.getElementById('lista-errori');
        lista.innerHTML = "";
        erroriUtente.forEach(e => {
            lista.innerHTML += `<div class="item-errore"><strong>${e.domanda}</strong><br>❌ Tua: ${e.tua} | ✅ Giusta: ${e.giusta}</div>`;
        });
    }
}