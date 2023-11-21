//Selezioniamo il bottone che invia i dati al form
let invia = document.getElementById('invia');
//Al click del bottone svolgiamo le "operazioni"
invia.addEventListener('click', function ( ){
    //siamo qui perchè abbiamo cliccato invia
    let km = document.getElementById('km').value;
    let eta = document.getElementById('eta').value;

    //dati da inserire nel bliglietto 
    let name = document.getElementById('name').value;

    //calcoliamo il prezzo
    let prezzo = km * 0.21;

    //calcoliamo il numero del treno (random)
    let cifra1 = Math.floor(Math.random() * 10);
    let cifra2 = Math.floor(Math.random() * 10);
    let cifra3 = Math.floor(Math.random() * 10);
    let cifra4 = Math.floor(Math.random() * 10);
    let train = `${cifra1}${cifra2}${cifra3}${cifra4}`;

    //variabile per scrivere sul biglietto che tipo di offerta abbiamo
    let offerta = "Standard";

    //ciao
    
    //eseguiamo il controllo dell'età
    if(eta < 18){
        //l'utente è minorenne e va applicato lo sconto del 20%
        prezzo = prezzo * 0.8; 

        //cambiamo il tipo di offerta il tipo di offerta
        offerta = "Under 18 -20%";
    }else if (eta > 65) {
        //l'utente ha più di 65 anni e va applicato lo sconto del 40%
        prezzo = prezzo * 0.6;
        //cambiamo il tipo di offerta il tipo di offerta
        offerta = "Over 65 -40%";
    }
    console.log(offerta);
    console.log(train);
    console.log(prezzo.toFixed(2));
})