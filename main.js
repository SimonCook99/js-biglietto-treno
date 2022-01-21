let eta = parseInt(prompt("Inserisci la tua età:"));

/* controllo la validità dell'età inserita*/
while(isNaN(eta)){
    eta = parseInt(prompt("numero non valido, inserisci la tua età"));
}

let chilometri = parseInt(prompt("Inserisci i chilometri che vuoi percorrere"));

/* controllo la validità dei chilometri inseriti*/
while(isNaN(chilometri)){
    chilometri = parseInt(prompt("numero non valido, inserisci i chilometri che vuoi percorrere"));
}


let prezzoPieno = 0.21 * chilometri;

/* console.log(prezzoPieno); */

if(eta < 18){
    let prezzoSconto20 = prezzoPieno - (prezzoPieno / 100 * 20);

    document.getElementById("sconto").innerHTML = "Congratulazioni, hai uno sconto del 20% sul prezzo finale";
    document.getElementById("prezzo").innerHTML = "Il prezzo da pagare è: " + prezzoSconto20.toFixed(2) + "€";
    /* console.log(prezzoSconto20.toFixed(2)); */

}else if(eta >65){
    let prezzoSconto40 = prezzoPieno - (prezzoPieno / 100 * 40);

    document.getElementById("sconto").innerHTML = "Congratulazioni, hai uno sconto del 40% sul prezzo finale";
    document.getElementById("prezzo").innerHTML = "Il prezzo da pagare è: " + prezzoSconto40.toFixed(2) + "€";

    /* console.log(prezzoSconto40.toFixed(2)); */
}else{
    document.getElementById("prezzo").innerHTML = "Il prezzo da pagare è: " + prezzoPieno.toFixed(2) + "€";

}