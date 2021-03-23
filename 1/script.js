// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

var somma = 0; 


for( var i = 0 ; i < 10 ; i++) {
    // console.log(i);
    var numeroUtente = parseInt( prompt ('Dimmi un numero') ); 
    // console.log(numeroUtente); 

    somma = somma + numeroUtente; 
    console.log(somma);
}

alert('la somma dei numeri inseriti è: ' + somma);