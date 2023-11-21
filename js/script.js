//Selezioniamo il bottone che invia i dati al form
let invia = document.getElementById('invia');
//Al click del bottone svolgiamo le "operazioni"
invia.addEventListener('click', function ( ){
    //siamo qui perchè abbiamo cliccato invia
    let km = document.getElementById('km').value;
    let eta = document.getElementById('eta').value;

    //calcoliamo il prezzo
    let prezzo = km * 0.21;

    //eseguiamo il controllo dell'età
    if(eta < 18){
        //l'utente è minorenne e va applicato lo sconto del 20%
        prezzo = prezzo * 0.8; 
    }else if (eta > 65) {
        //l'utente ha più di 65 anni e va applicato lo sconto del 40%
        prezzo = prezzo * 0.6;
    }
    console.log(prezzo.toFixed(2));
})