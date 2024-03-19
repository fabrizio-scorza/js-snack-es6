// Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
// 1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
// ES (Marco della Rovere => MARCO DELLA ROVERE);
// 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
// 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

// inizzializzazione dell'array di oggetti
const students = [
    {
        id: 213,
        name: 'Marco della Rovere',
        grades: 78
    },
    {
        id: 110,
        name: 'Paola Cortellessa',
        grades: 96
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        grades: 48
    },
    {
        id: 145,
        name: 'Gaia Borromini',
        grades: 74
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        grades: 68
    },
    {
        id: 102,
        name: 'Piero della Francesca',
        grades: 50
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grades: 84
    },
]
console.log(students);


// creare un array di oggetti con i nomi in maiuscolo
const studentsUpperCased = students.map((element) =>{
    const student = {
    id: element.id,
    name: element.name.toUpperCase(),
    grades: element.grades
    }
    return student;
})

console.log(studentsUpperCased);

//creare una lista di tutti gli studenti con voti superiori a 70
const studentsGradeMoreThan70 = students.filter((element) => element.grades > 70);

//versione con if esteso 
// let studentGradeMoreThan70 = student.filter((element) =>{
//     if(element.grades > 70){
//         return true;
//     } else {
//         return false;
//     }
// })

console.log(studentsGradeMoreThan70);

//creare una lista di tutti gli studenti con voti superiori a 70 e id superiore a 120

let studentsGradeMoreThan70AndIdMoreThan120 = studentsGradeMoreThan70.filter((element) => element.id > 120);

console.log(studentsGradeMoreThan70AndIdMoreThan120);

//versione a partire dall'array students

studentsGradeMoreThan70AndIdMoreThan120 = students.filter((element) => element.id > 120 && element.grades > 70);

console.log(studentsGradeMoreThan70AndIdMoreThan120);