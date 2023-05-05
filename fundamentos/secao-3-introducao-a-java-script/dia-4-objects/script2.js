// Exercício 1 do dia
// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };
// console.log(' Bem-vinda, ' + info.personagem);

// Exercício 2
// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };
// info['recorrente'] = 'Sim';

// console.log(info);

// Exercício 3
// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };
// info['recorrente'] = 'Sim';

// for (let index in info) {
//   console.log(index);
// }

// Exercício 4
// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };
//   info['recorrente'] = 'Sim';

//   for (let index in info) {
//     console.log(info[index]);
//   }

// Exercício 5
// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };
//   info['recorrente'] = 'Sim';

//   let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dells Four Color Comics',
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim'
//   }

//   for (let index in info) {
//     if (index === 'recorrente' && info[index] === 'Sim' && info2[index] === 'Sim') {
//       console.log('Ambos recorrentes');
//     } else {
//       console.log(info[index] + ' e ' + info2[index]);
//     }
//   }

// Exercício 6
// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',//esse é o índice 0
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };

// console.log(' O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '"');

// Exercício 7
// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };

// leitor.livrosFavoritos.push(
//   {
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
//   },
// );

// EXercício 8
// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };

// leitor.livrosFavoritos.push(
//   {
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
//   },
// );

// console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos ');

// Exercicio 9 pedido dos clientes
// let order = {
//   name: 'Rafael Andrade',
//   phoneNumber: '11-98763-1416',
//   address: {
//     street: 'Rua das Flores',
//     number: '389',
//     apartment: '701',
//   },
//   order: {
//     pizza: {
//       marguerita: {
//         amount: 1,
//         price: 25,
//       },
//       pepperoni: {
//         amount: 1,
//         price: 20,
//       },
//     },
//     drinks: {
//       coke: {
//         type: 'Coca-Cola Zero',
//         price: 10,
//         amount: 1,
//       },
//     },
//     delivery: {
//       deliveryPerson: 'Ana Silveira',
//       price: 5,
//     },
//   },
//   payment: {
//     total: 60,
//   },
// };

// //'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'

// function customerInfo(order) {
//   let deliveryPerson = order.order.delivery.deliveryPerson;
//   let deliveryTo = order.name;
//   let phoneNumber = order.phoneNumber;
//   let street = order.address.street;
//   let houseNumber = order.address.number;
//   let apNumber = order.address.apartment;

//   console.log('Olá, ' + deliveryPerson + ', entrega para: ' + deliveryTo + ', Telefone: ' + phoneNumber + ', R. ' + street + ', N: ' + houseNumber + ', AP: ' + apNumber);
// }

// customerInfo(order);
// //'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.
// function orderModifier(order) {
//   let newBuyer = order.name = 'Luiz Silva';
//   let newPayment = order.payment.total = 50;
//   let pizzas = Object.keys(order.order.pizza);
//   let drinks = order.order.drinks.coke.type;

//   console.log('Olá, ' + newBuyer + ', o valor total de seu pedido de ' + pizzas[0] + ', ' + pizzas[1] + ' e ' + drinks + ' é R$ ' + newPayment + ',00.');
// }

// orderModifier(order);