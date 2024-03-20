// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal

//creo l'array di oggetti inserendo le propietà richieste
const bikes = [
    {
        name: 'Sava 700',
        weight: 9.6,
    },
    {
        name: 'Bianchi Oltre XR4',
        weight: 7.1,
    },
    {
        name: 'Cannondale SuperSix Evo',
        weight: 7.3,
    },
    {
        name: 'Pinarello Angliru',
        weight: 7.4,
    },
];  //array <object>

console.log(bikes)

// dichiaro una variabile peso più basso inizializzata a 100 che mi servirà a trovare la bici più leggera
let lowestWeightBike = bikes[0]; //number

//confronto per ogni elemento dell'array se il peso è il più leggero  
bikes.forEach((bike) => {
    if(bike.weight < lowestWeightBike.weight){
        // se è il più leggero lo aassegno alla variabile lowest weight
        lowestWeightBike = bike;   //number
    }
})
console.log(lowestWeightBike);

// stampo a console la bici che pesa meno con destructuring e template literal
const {name, weight} = lowestWeightBike;

console.log(`La bici che pesa mento è la ${name}`);
console.log(`con un peso di ${weight} kg.`)