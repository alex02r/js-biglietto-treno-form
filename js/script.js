//Selezioniamo il bottone che invia i dati al form
let invia = document.getElementById('invia');
//Al click del bottone svolgiamo le "operazioni"
invia.addEventListener('click', function ( ){
    //siamo qui perchè abbiamo cliccato invia
    let km = document.getElementById('km').value;
    let eta = document.getElementById('eta').value;

    //calcoliamo il prezzo
    let prezzo = km * 0.21;
    
})