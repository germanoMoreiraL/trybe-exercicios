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
// const whereAreYou = document.querySelector('#where-are-you');
// whereAreYou.removeChild(whereAreYou.firstElementChild);

// Exercício do dia, 1
const h1 = document.createElement('h1');
h1.innerText = 'TrybeTrip - Agência de Viagens';
h1.className = 'title';
document.body.appendChild(h1);

const main = document.createElement('main');
main.className = 'main-content';
document.body.appendChild(main);

const sectionContent = document.createElement('section');
sectionContent.className = 'center-content';
main.appendChild(sectionContent);

const paragraph = document.createElement('p');
paragraph.innerText = 'algum texto';
sectionContent.appendChild(paragraph);

const sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';
main.appendChild(sectionLeft);

const sectionRight = document.createElement('section');
sectionRight.className = 'right-content';
main.appendChild(sectionRight);

const img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.className = 'small-image';
sectionLeft.appendChild(img);

const ul = document.createElement('ul');
const numbers = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for (let index = 0; index < numbers.length; index += 1) {
  const li = document.createElement('li');
  li.innerText = numbers[index];
  ul.appendChild(li);
}
sectionRight.appendChild(ul);


for (let index = 0; index < 3; index += 1) {
  const h3 = document.createElement('h3');
  h3.innerText = 'testando h3';
  h3.className = 'description';
  main.appendChild(h3);
}

main.removeChild(sectionLeft);

const centralizeSection = document.querySelector('.right-content');
centralizeSection.style.marginRight = 'auto';

const sectionCenterContent = document.querySelector('.center-content');
sectionCenterContent.parentNode.style.backgroundColor = 'green';

ul.lastChild.remove();
ul.lastChild.remove();