// Exercício pratica 1
// let player = {
//   name: 'Marta',
//   lastName: 'Silva',
//   age: 34,
//   medals: {
//     golden: 2,
//     silver: 3
//   }
// };

// console.log(' A jogadora ' +  player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade ');

// Exercício 2
// let player = {
//   name: 'Marta',
//   lastName: 'Silva',
//   age: 34,
//   medals: {
//     golden: 2,
//     silver: 3
//   }
// };
// player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

// console.log(' A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes ');

// Exercício 3
// let player = {
//   name: 'Marta',
//   lastName: 'Silva',
//   age: 34,
//   medals: {
//     golden: 2,
//     silver: 3
//   }
// };
// player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

// console.log(' A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata ');

// Exercício 4
// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge',
// };

// for (let printName in names) {
//   console.log(' Olá, ' + names[printName]); // printName percorre o names, por isso mostra todos os nomes.
// }

// Exercício 5
// let car = {
//   model: 'A3 Sedan',
//   manufacturer: 'Audi',
//   year: 2020
// };
// for (let key in car) {
//   console.log(key + ': ' + car[key]);
// }

// Exercicio 6
// student = {
  
// }

// function addProperty(student, key, value) {
//   student[key] = value;
// }

// addProperty(student, 'nome', 'Germano Moreira');
// addProperty(student, 'email', 'ge260203@gmail.com');
// addProperty(student, 'telefone', '51-995912003');
// addProperty(student, 'linkedin', 'https://www.linkedin.com/feed/');

// Exercício 7
// let student1 = {
//   html: 'Muito Bom',
//   css: 'Bom',
//   javascript: 'Ótimo',
//   softskills: 'Ótimo',
// };

// let student2 = {
//   html: 'Bom',
//   css: 'Ótimo',
//   javascript: 'Ruim',
//   softskills: 'Ótimo',
//   git: 'Bom', // chave adicionada
// };

// function listSkills(student) {
//   let arrayOfSkills = Object.keys(student);
//   for (let index in arrayOfSkills) {
//     console.log(arrayOfSkills[index] + ', Nível: ' + student[arrayOfSkills[index]]);
//   }
// };

// console.log('Estudante 1');
// listSkills(student1);

// console.log('Estudante 2');
// listSkills(student2);
