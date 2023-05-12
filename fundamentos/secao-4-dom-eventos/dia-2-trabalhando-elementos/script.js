// // Exercicio 1
// const whereAreYou = document.querySelector('#where-are-you');
// //a primeira variavel foi definida igual a tag where-are-you, então, posso usa-la para acessar seu elemento pai apenas chamando tal variavel dentro da nova variavel referente ao elemento pai.
// const parent = whereAreYou.parentElement;
// parent.style.color = 'red';

// const firstChildOfChild = whereAreYou.firstElementChild;
// firstChildOfChild.innerText = 'texto aleatorio para teste';

// const firstChild = parent.firstElementChild;

// const firstChildBrother = whereAreYou.previousElementSibling;

// const atention = whereAreYou.nextSibling;

// const thirdChild = whereAreYou.nextElementSibling;

// const thirdChild2 = parent.lastElementChild.previousElementSibling;

// Exercicio 2
// const pai = document.querySelector('#pai');
// let ondeVoceEstaIrmao = document.createElement('section');
// ondeVoceEstaIrmao.innerText = 'irmao';
// pai.appendChild(ondeVoceEstaIrmao);

// const ondeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
// let filhoOndeVoceEsta = document.createElement('section');
// filhoOndeVoceEsta.innerText = 'filho';
// ondeVoceEsta.appendChild(filhoOndeVoceEsta);

// const primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
// let filhoPrimeiroFilhoDoFilho = document.createElement('section');
// filhoPrimeiroFilhoDoFilho.innerText = 'filho do primeiro filho';
// primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

// const terceiroFilho = filhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;

// Exercicio 3
const whereAreYou = document.querySelector('#where-are-you');
whereAreYou.removeChild(whereAreYou.firstElementChild);