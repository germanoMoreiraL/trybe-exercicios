// Exercicios pratica do dia 1
// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// const verifyEmail = (email) => console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
// emailListInData.forEach((item) => {
//   verifyEmail(item);
// })

// Exercicio 2
// const numbers = [19, 21, 30, 3, 45, 22, 15];

// numbers.find((number, position) => {
//   console.log(number % 3 === 0 && number % 5 === 0);
//   console.log(`Sua posição no array é: ${position}`);
// })

// Exercicio 3
// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// names.find((name) => {
//   console.log(name.length === 5);
// })

// Exercicio 4
// const musicas = [
//   { id: '31031685', title: 'Partita in C moll BWV 997' },
//   { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ];

// const findMusicById = (music) => music.id === '31031685';
// musicas.find((item) => {
//   console.log(findMusicById(item));
// });

// Exercicio 5
// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//   return arr.some((nameToBeChecked) => nameToBeChecked === name)
// };

// console.log(hasName(names, 'Ana'));
// console.log(hasName(names, 'Pedro'));

// Exercicio 6
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minAge) => {
  return arr.every((person) => person.age >= minAge);
}

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));