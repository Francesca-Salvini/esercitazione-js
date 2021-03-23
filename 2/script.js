//Crea un array vuoto. 
//Chiedi per 6 volte all’utente di inserire un numero, 
//se è dispari inseriscilo nell’array.

var numeriDispari = [];

for( var i = 0 ; i < 6 ; i++) {
    // console.log(i);
    var numeroUtente = parseInt( prompt ('Dimmi un numero') ); 
    // console.log(numeroUtente);

    if(numeroUtente % 2 != 0 ){
        numeriDispari.push(numeroUtente);
        // console.log(numeriDispari);
    }
}

console.log(numeriDispari);