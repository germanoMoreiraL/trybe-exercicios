
const whereAreYou = document.querySelector('#where-are-you');
//a primeira variavel foi definida igual a tag where-are-you, então, posso usa-la para acessar seu elemento pai apenas chamando tal variavel dentro da nova variavel referente ao elemento pai.
const parent = whereAreYou.parentElement;
parent.style.color = 'red';

const firstChildOfChild = whereAreYou.firstElementChild;
firstChildOfChild.innerText = 'texto aleatorio para teste';

const firstChild = parent.firstElementChild;

const firstChildBrother = whereAreYou.previousElementSibling;

const atention = whereAreYou.nextSibling;

const thirdChild = whereAreYou.nextElementSibling;

const thirdChild2 = parent.lastElementChild.previousElementSibling;