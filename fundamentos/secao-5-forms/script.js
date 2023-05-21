// SELETORES
const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");

//Exercicio 1
const setClickHref = () => {
  hrefLink.addEventListener('click', (event) => {
    event.preventDefault();
  })
};

//Exercicio 2
const setClickCheckbox = () => {
  inputCheckbox.addEventListener('click', (event) => {
    event.preventDefault();
  })
};

//Exercicio 3
const setKeypress = () => {
  inputText.addEventListener('keypress', (event) => {
    const letter = event.key;
    if (letter !== 'a') {
      event.preventDefault();
    }
  })
};


setClickHref();
setClickCheckbox();
setKeypress();