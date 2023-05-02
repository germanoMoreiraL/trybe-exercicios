// Exercício 1
/*let a = 15;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);*/

// Exercício 2
/*let number1 = 20;
let number2 = 30;

    if (number1 > number2) {
        console.log('Número 1 é maior que número 2');
    } else {
        console.log('Número 2 é maior que número 1');
    }*/

// Exercício 3
/*let numberOne = 5;
let numberTwo = 10;
let numberThree = 15;

    if (numberOne > numberTwo && numberOne > numberThree) {
        console.log('numberOne é maior que numberTwo e numberThree');
    } else if (numberTwo > numberOne && numberTwo > numberThree) {
        console.log('numberTwo é maior que numberOne e numberThree');
    } else {
        console.log('numberThree é maior que numberOne e numberTwo');
    }*/

// Exercício 4
/*let whatIs = 50;

    if (whatIs > 0) {
        console.log('positive');
    } else if (whatIs < 0) {
        console.log('negative');
    } else {
        console.log('zero')
    }*/

// Exercício 5
/*let angle1 = 60;
let angle2 = 60;
let angle3 = 60;

let sumOfAngles = angle1 + angle2 + angle3;

let allAnglesArePositive = angle1 > 0 && angle2 > 0 && angle3 > 0;

    if (allAnglesArePositive) {
        if (sumOfAngles === 180) {
            console.log(true);
        } else {
            console.log(false);
        }
    } else {
        console.log('Erro: ângulo inválido');
    }*/

// Exercício 6
/*let chessPiece = 'queen';

switch (chessPiece.toLowerCase()) {
    case 'queen':
        console.log('queen -> qualquer direção');
        break;

    case 'bishop':
        console.log('bishop -> diagonal');
        break;

    case 'king':
        console.log('king -> diagonal, horizontal, vertical');
        break;

    case 'knight':
        console.log('knight -> diagonal');
        break;

    case 'rook':
        console.log('rook -> horizontal');
        break;

    case 'pawn':
        console.log('pawn -> vertical');
        break;
    default:
        console.log('Erro, peça inválida!');
};*/

//Exercício 7
/*let grade = 90;

    if (grade < 0 || grade > 100) {
        console.log('Erro, nota incorreta.');
    } else if (grade >= 90) {
        console.log('A');
    } else if (grade >= 80) {
        console.log('B');
    } else if (grade >=70) {
        console.log('C');
    } else if (grade >=60) {
        console.log('D');
    } else if (grade >= 50) {
        console.log('E');
    } else {
        console.log('F');
    }*/

// Exercício 8
let num1 = 5;
let num2 = 10;
let num3 = 15;

    if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
    