const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


//2. e 2.1
const techClick = (event) => {
  const techElement = document.querySelector('.tech');
  techElement.classList.remove('tech');
  event.target.classList('tech');
  input.value = '';
}

firstLi.addEventListener('click', techClick);
secondLi.addEventListener('click', techClick);
thirdLi.addEventListener('click', techClick);

//3.
input.addEventListener('input', (event) =>  {
  const techElement = document.querySelector('.tech');
  techElement.innerText = event.target.value;
})

//4 e 4.1
myWebpage.addEventListener('dblclick', () => {
  window.location.replace('https://blog.betrybe.com/');
});

//5.
myWebpage.addEventListener('mouseover', (event) => {
  event.target.style.color = 'red';
});

myWebpage.addEventListener('mouseout', (event) => {
  event.target.style.color = 'unset';
});

const resetText = (event) => {
  // O event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na função retornará o objeto 'firstLi'.