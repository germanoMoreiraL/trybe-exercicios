// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['Banana', 'Morango', 'Uva'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['Nutella', 'Sorvete', 'Leite condensado'];

// const fruitSalad = (fruit, additional) => {
//   const makeFruitSalad = [...fruit, ...additional];
//   return makeFruitSalad;
// };

// console.log(fruitSalad(specialFruit, additionalItens));

// 2

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const returnObj = {
  ...user, ...jobInfos
};

const {name, age, nationality, profession, squad, squadInitials} = returnObj;

console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);
// console.log(returnObj);