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