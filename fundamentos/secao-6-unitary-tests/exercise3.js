// const studentRegister = (name, age) => {
//   try {
//     if (!name || !age) {
//       throw new Error('Todas as informações são necessárias');
//     }
//     if (age < 18) {
//       throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
//     }
//     if (age >= 18) {
//       return `${name}, seja bem-vindo(a) à AuTrybe!`;
//     }
//   } catch (error) {
//     return error.message;
//   }
// }
// console.log(studentRegister('Ana', 28));

// outra forma
const validateInfos = (name, age) => {
  if (!name || !age) {
    throw new Error('Todas as informações são necessárias');
  }
}

const validAge = (age) => {
  if (age < 18) {
    throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
  }
}

const studentRegister = (name, age) => {
  try {
    validateInfos(name, age);
    validAge(age);
    return `${name}, seja bem-vindo(a) à AuTrybe!`;
  } catch (error) {
    return error.message;
  }
}
console.log(studentRegister('Ana', 28));