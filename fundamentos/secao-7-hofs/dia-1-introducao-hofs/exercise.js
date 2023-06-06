// Exercicio 1
// const newEmployees = (emailGenerator) => {
//   const employees = {
//     id1: emailGenerator('Pedro Guerra'),
//     id2: emailGenerator('Luiza Drumond'), 
//     id3: emailGenerator('Carla Paiva'), 
//   }
//   return employees;
// };

// const emailGenerator = (fullName) => {
//   const email = fullName.toLowerCase().replace(' ', '_');
//   return { fullName, email: `${email}@trybe.com`}
// }

// console.log(newEmployees(emailGenerator));

// // Exercicio 2
// const checkNumber = (myNumber, number) => myNumber === number;

// const lotteryResult = (myNumber, getNumber) => {
//   const number = Math.floor((Math.random() * 5) + 1)

//   return getNumber(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
// }
// console.log(lotteryResult(2, checkNumber));

// Exercicio 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5
}

const countPoints = (rightAnswer, studentAnswer, action) => {
  let counter = 0;
  for (let index = 0; index < rightAnswer.length; index += 1) {
    const actionReturn = action(rightAnswer[index], studentAnswer[index]);
    counter += actionReturn;
  }
  return `Resultado final: ${counter} pontos`;
}

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));