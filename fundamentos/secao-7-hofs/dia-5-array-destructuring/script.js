// para fixar
// const primeNumbers = [17, 23, 37]
// const [firstNumber, secondNumber, thirthNumber] = primeNumbers;

// const sum = (a, b) => {
//   console.log(a + b);
// }

// sum(firstNumber, thirthNumber) // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring

// 2.
// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// [comida, animal, bebida] = [bebida, comida, animal];

// console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

// 3.
// let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// [,,, ...numerosPares] = numerosPares;

// console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log acima

// 4.
// const getNationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;

// const person = {
//   firstName: 'João',
//   lastName: 'Jr II',
// };

// const otherPerson = {
//   firstName: 'Ivan',
//   lastName: 'Ivanovich',
//   nationality: 'Russian',
// };

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));

// 5.
// const getPosition = (latitude, longitude) => ({
//   latitude,
//   longitude,
// });

// console.log(getPosition(-19.8157, -43.9542));

// 6.
// const multiply = (number, value = 1) => number * value;

// console.log(multiply(8));