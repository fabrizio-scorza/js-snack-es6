// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal

//creo l'array di oggetti inserendo le propietà richieste
const bikes = [
    {
        name: `Sava 700`,
        weight: 9.6,
    },
    {
        name: `Bianchi Oltre XR4`,
        weight: 7.1,
    },
    {
        name: `Cannondale SuperSix Evo`,
        weight: 7.3,
    },
    {
        name: `Pinarello Angliru`,
        weight: 7.4,
    },
];  //array <object>

console.log(bikes)

// dichiaro una variabile peso più basso inizializzata a 100 che mi servirà a trovare la bici più leggera
let lowestWeight = 100; //number

//confronto per ogni elemento dell'array se il peso è il più leggero  
bikes.forEach(({weight}) => {
    if(weight < lowestWeight){
        // se è il più leggero lo aassegno alla variabile lowest weight
        lowestWeight = weight;   //number
    }
    return lowestWeight;
})
console.log(lowestWeight);

// cerco l'oggetto corrispondente al peso più basso senza destrutturazione 
let lowestWeightBike = bikes.find((bike) => bike.weight = lowestWeight);
console.log(lowestWeightBike);

//cewrco l'oggetto con destrutturazione 
lowestWeight = bikes.find(({name, weight}) => weight = lowestWeight);
console.log(lowestWeightBike);