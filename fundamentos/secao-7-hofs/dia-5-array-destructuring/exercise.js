// 1.
// const myList = [5, 2, 3];
// const [firstNumber, secondNumber, thirthNumber] = myList;

// const swap = (newArray) => [thirthNumber, secondNumber, firstNumber];

// console.log(swap(myList));

// 2.
// const palio = ['Palio', 'Fiat', 2019];
// const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
// const chiron = ['Chiron', 'Bugatti', 2016];

// const toObject = ([name, brand, year]) => ({name, brand, year});

// console.log(toObject(palio));
// console.log(toObject(shelbyCobra));
// console.log(toObject(chiron));

// 3.
// const greet = (name, message = 'Hi') => `${message} ${name}`;

// // Retornos esperados:
// console.log(greet('John')); // 'Hi John'
// console.log(greet('John', 'Good morning')); // 'Good morning John'
// console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'

// 4.
// const student1 = {
//   name: `Claudia`,
//   lastName: `Farias`,
//   age: 23,
// }

// const student2 = {
//   name: `Vitor`,
//   age: 20,
// }

// const getLastName = (studentsInfos) => {
//   const { lastName = 'lastName não preenchido' } = studentsInfos;
//   return lastName;
// }

// console.log(getLastName(student1));
// console.log(getLastName(student2));

// 5.
// const moreStudents = [
//   'Chris', 
//   ['Ahmad', 'Antigoni'], 
//   ['Toby', 'Sam']
// ];

// // Escreva seu código aqui
// const [student1, [student2, student3], [student4, student5]] = moreStudents;

// console.log(student1, student2, student3, student4, student5);
