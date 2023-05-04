// Exercício 1
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index]);
// }

// Exercício 2
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   sum += numbers[index];
// }
// console.log(sum);

// Exercício 3
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     sum += numbers[index];
// }

// let average = sum / numbers.length;
// console.log(average);

// Exercício 4
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     sum += numbers[index];
// }

// let average = sum / numbers.length;

//   if (average > 20) {
//     console.log('O valor da média aritmética é maior que 20');
//   } else {
//     console.log('O valor da média aritmética é menor ou igual a 20');
//   }

// Exercício 5
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let highNumber = numbers[0]; //0 é referente ao primeiro item do array, o 5, que no começo, é o maior numero, até começar a ser comparado com outro. E por isso, aqui no for, é index = 1, pois queremos começar a comparar outros com ele.

// for (let index = 1; index < numbers.length; index += 1) {
//     if (numbers[index] > highNumber) { //se o primeiro numero depois de 5, for maior que ele, então o highNumber vai ser substituido por esse número.
//       highNumber = numbers[index];
//     }
// }

// console.log(highNumber);

// Exercício 6
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let result = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] % 2 !== 0) {
//         result +=1 //se o número for ímpar, adicione +1 ao result
//     } 
// }

// if (result === 0) {
//   console.log('nenhum valor ímpar encontrado');
// } else {
//   console.log(result);
// }

// Exercício 7
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let shortNumber = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//     if (numbers[index] < shortNumber) {
//         shortNumber = numbers[index];
//     }
// }
// console.log(shortNumber);

// Exercício 8
// let numbers = [];

// for (let index = 1; index < 25; index += 1) {
//     numbers.push(index);
// }
// console.log(numbers);

// Exercício 9
// let numbers = [];

// for (let index = 1; index < 25; index += 1) {
//     numbers.push(index);
// }

// for (let index = 0; index < numbers.length; index += 1) {
//       console.log(numbers[index] / 2);
//   }

// Exercício 10
// let fatorial = 1;

// for (let index = 10; index > 0; index -= 1) {
//   fatorial*= index;
// }
// console.log(fatorial);

// Exercicio 11
// let word = 'tryber';
// let reverseWord = '';

// for (let index = 0; index < word.length; index += 1) {
//     reverseWord += word[word.length - 1 - index];
// }

// console.log(reverseWord);

// Exercício 12
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let bigWord =  array[0]; //maior e menor palavra é java(que está no index 0) pois ela é a primeira do array, então até set comparada, ela é ambos.
// let smallWord = array[0];

// for (let index = 1; index < array.length; index += 1) {
//     if (array[index].length > bigWord.length) {//. length vem no array pois é o index que percorre as outras palavras.
//         bigWord = array[index];
//     }
// }

// for (let index = 1; index < array.length; index += 1) {
//     if (array[index].length < smallWord.length) {
//         smallWord = array[index];
//     }
// }

// console.log(bigWord);
// console.log(smallWord);

// Exercício 13
// let bigNumber = 0;

// for (let number = 2; number < 50; number += 1) {
//    let isPrime = true;
//    for (let divisor = 2; divisor < number; divisor += 1) {
//     if (number % divisor === 0) {
//         isPrime = false
//     }
//    }
//    if (isPrime) {
//     bigNumber = number
//    }
// }
// console.log(bigNumber);

//Forma otimizada exercicio 13
// let biggestPrimeNumber = 0;

// for (let currentNumber = 50; currentNumber >= 2; currentNumber -= 1) {
//   let isPrime = true;
//   for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
//     if (currentNumber % currentDivisor === 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     biggestPrimeNumber = currentNumber;
//     break; // O break finaliza a execução do laço For
//   }
// }

// console.log(biggestPrimeNumber);