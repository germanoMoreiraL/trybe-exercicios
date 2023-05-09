// Exercício pratica 1
// function imprimeIdade() {
//   for (let idade = 30; idade <= 40; idade += 1) {
//     console.log('Idade dentro do for:', idade)
//   }
 
// }
// imprimeIdade()

// Exercício 2
// const pessoa = {
//   nome: 'Henri',
//   idade: 20
// }

// pessoa.nome = 'Luna'
// pessoa.idade = 19

// console.log('Nome:', pessoa.nome);
// console.log('Idade:', pessoa.idade);

// Exercício 3
// let favoriteFood = 'Lasanha';
// favoriteFood = 'Hambúrguer';
// console.log(favoriteFood);

// Exercício 4
// const name = 'Adriana';
// const lastName = 'Soares';
// console.log(`Olá, ${name} ${lastName}!`); //'Olá' + ',' + name + ' ' + lastName + '!')
// function soma(a,b) {
//   let resultado = a + b;
//   return resultado;
// }
// let a = 3;
// let b = 5;
// console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a,b)}`);//'O resultado da soma de ' + a + ' + ' + b + ' é: ' + soma(a,b)

// Exercício 5
// const numeroAleatorio = () => Math.random() //aqui seria o return, porém não precisa.

// console.log(numeroAleatorio());

// Exercício 6
// const hello = (nome) => `Olá, ${nome}`
  
// let nome = 'Ivan'; //aqui está sendo declarado o nome, já que não foi antes.
// console.log(hello(nome));

// Exercício 7
// const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`

// let nome = 'Ivan';
// let sobrenome = 'Pires';

// console.log(nomeCompleto(nome, sobrenome));

// Exercício 8
// let speed = 90;
// const speedCar = (speed) => (
//   speed >= 120 ? 'Você ultrapassou o limite de velocidade' : `Você está na velocidade permitida`
// ); 

// console.log(speedCar(speed));

// Exercicios  - mais pratica, 1
// 1 – Crie uma função que ligue e desligue o motor de um carro
// const engineOnAndOf = (status) => {
//   if (status === 'Desligado') {
//     status = 'Ligado';
//   } else {
//     status = 'Desligado';
//   }
//   console.log(`O motor está ${status}`);
//   return status;
// };
// engineOnAndOf('Ligado');

//outro jeito

// const ligarDesligar = (status) => {
//   status = status === 'desligado' ? 'ligado' : 'desligado';
//   console.log(`O motor está ${status}`);
//   return status;
// };
// ligarDesligar('Desligado');

// 2 – Crie uma função que calcule a área de um círculo
// const circleArea = (radius) => {
//   const PI = 3.14;

// if (typeof radius !== 'number') {
//   return 'O paramentro deve ser um número';
// }

//   let area = PI * (radius ** 2);
//   return `Esta é a área do círculo: ${area}`;
// };
// console.log(circleArea(5));

//3 – Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase
// const longestWord = (text) => {
//   const wordArray = text.split(' ');

//   let maxLength = 0;
//   let biggestWord = '';

//   for (const word of wordArray) {
//     if (word.length > maxLength) {
//       maxLength = word.length;
//       biggestWord = word;
//     }
//   }
    
//   return biggestWord;


// };

// console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));