// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// dichiaro l'array di squadre di calcio con le proprietà richieste
let teams = [
    {
        name: 'inter',
        points: 0,
        fouls: 0
    },
    {
        name: 'milan',
        points: 0,
        fouls: 0
    },
    {
        name: 'roma',
        points: 0,
        fouls: 0
    },
    {
        name: 'napoli',
        points: 0,
        fouls: 0
    },
    {
        name: 'catania',
        points: 0,
        fouls: 0
    },
]; 

//genero random punti fatti e falli subiti per ogni squadra presente nell'array
teams.forEach((team) => {  
    team.points = randomNumberMinMax(0, 100);
    team.fouls = randomNumberMinMax (0, 20);
});

const teamsNameAndFouls = teams.map((team) => {
    const teamFauls = {
    name: team.name,
    fouls: team.fouls,
    }
    return teamFauls;
})

console.log (teams);
console.log (teamsNameAndFouls);

teamsNameAndFouls.forEach(({name, fouls}) => {  
    console.log(`la squadra ${name} ha subito ${fouls} falli durante il campionato`)
})

// funzione che genera numeri random da un minimo ad un massimo
function randomNumberMinMax(min, max){
    const minCeiled = Math.ceil(min); //number
    const maxFlored = Math.floor(max); //number
    const randomNumber = Math.floor(Math.random() *(maxFlored-minCeiled + 1) + minCeiled);
    return randomNumber; //number
}
// {points, fouls}