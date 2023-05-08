// Exercicio pratica 1
// let saldo = 300;

// function addValue(valor) {
//   return valor + saldo;
// };

// function deductValue(valor) {
//   return saldo - valor;
// };

// function multValue(valor) {
//   return valor * saldo;
// };

// function divideValue(valor) { 
//   return saldo / valor;
// };

// console.log(addValue(150));
// console.log(deductValue(75));
// console.log(multValue(3));
// console.log(divideValue(2));

// Exercício pratica 2
// let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// function addClients(cliente) {
//   if (typeof cliente === 'string') {
//     clientesTrybeBank.push(cliente)
//     return 'cliente adicionado com sucesso'
//   } else {
//     return 'o tipo de parâmetro deve ser uma string.'
//   }
// }

// console.log(addClients(true));
// console.log(addClients('Germano'));
// console.log(clientesTrybeBank);

// Exercício 3 pratica
// let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// function removeClient(client) {
//   if (typeof client === 'string') {
//     clientesTrybeBank.pop(client)
//     return 'cliente retirado com sucesso'
//   } else {
//     return 'o parâmetro passado deve ser uma string'
//   }
// }

// console.log(removeClient(true));
// console.log(removeClient('Gus'));
// console.log(clientesTrybeBank);

// let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// function removeClient(client) {
//   if (typeof client === 'string') {
//   let clientFounded = false;
//     for (let index = 0; index < clientesTrybeBank.length; index += 1) {
//       if (client === clientesTrybeBank[index]) {
//         clientesTrybeBank.splice(index, 1);
//         clientFounded = true;
//         return 'cliente retirado com sucesso'
//       }
//     }

//     if (clientFounded === false) {
//       return 'cliente não encontrado'
//     }
//   } else {
//     return 'o parâmetro passado deve ser uma string'
//   }
// }

// console.log(removeClient(false));
// console.log(removeClient('arthur'));
// console.log(removeClient('Gus'));
// console.log(clientesTrybeBank);