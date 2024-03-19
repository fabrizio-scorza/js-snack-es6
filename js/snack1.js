// Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// Ci ha lasciato il nome del tavolo (“Tavolo Vip”) e la lista degli invitati in ordine di posto:
// [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
// Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
// nome del tavolo,
// nome dell’ospite,
// posto occupato.
// Generiamo e stampiamo in console la lista per i segnaposto.

// inizializzazione dell'array tavolo vip 
const tavoloVip = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney','Amal Clooney','Maneskin' ];  //array<string>

//inizializzo un array di oggetti vuoto dove inserirò i segnaposto
const placeholders = [];    //array <empty>

//inizializzo una variabile segnaposto
let spotCounter = 1;

// ciclo che mi genera il segnaposto per ogni elemento dell'array
tavoloVip.forEach((element) => {
    const tableName ='Tavolo Vip';  //string

    //controllo se nella lista è scritto maneskin per considerarli come più elementi
    if (element !== 'Maneskin') {
        placeholders.push(generatePlaceholders(tableName, element, spotCounter));
        spotCounter++;
    } else {
        for(i = 0; i < 4; i++){
            placeholders.push(generatePlaceholders(tableName, element, spotCounter));
            spotCounter++;
        }
    }
})

console.log(placeholders);

// funzione che genera il segnaposto
function generatePlaceholders(thisTable, thisName, thisSpot){
    const placeholder = {
        table: thisTable,
        name: thisName,
        spot: thisSpot
    }   //object
    return placeholder;
}


// VERSIONE CON MAP 
// inizializzazione dell'array tavolo vip 
const tavoloVip2ThVersion = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney','Amal Clooney','Maneskin' ];  //array<string>

//utilizzo il metodo map sull'array per rimapparlo
const placeholdersMapped = tavoloVip2ThVersion.map((element,i) =>{
    // dichiaro una variabile segnaposto
    const placeholder = {
        tableName: 'Tavolo Vip',
        name: element,
        spot: i+1     
    }
    return placeholder
})
console.log(placeholdersMapped);