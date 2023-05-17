// as pessoas devem poder alterar
window.onload = () => {
  //cor da tela de fundo
  const setBackgroundColor = (color) => { //cria uma arrow function com o parametro
    let content = document.querySelector('.content'); //chama onde está a estrutura no HTML
    content.style.backgroundColor = color; //define o que quer mudar
    localStorage.setItem('background', color); //insere o localStorage
}

//cor do texto
const setFontColor = (color) => {
  let paragraph = document.querySelectorAll('.paragraph');
  for (let index = 0; index < paragraph.length; index += 1) {
    paragraph[index].style.color = color;
  }
  localStorage.setItem('fontColor', color);
}

// tamanho de fonte
const setFontSize = (size) => {
  const fontSize = document.querySelectorAll('.paragraph');
  for (let index = 0; index < fontSize.length; index += 1) {
    fontSize[index].style.fontSize = size;
}
localStorage.setItem('fontSize', size);
}

//espaçamento entre as linhas
const setLineHeight = (height) => {
  const lineHeight = document.querySelectorAll('.paragraph');
  for (let index = 0; index < lineHeight.length; index += 1) {
    lineHeight[index].style.lineHeight = height;
}
localStorage.setItem('lineHeight', height);
}

//mudar p tipo da fonte
const setFontFamily = (family) => {
  const fontFamily = document.querySelectorAll('.paragraph');
  for (let index = 0; index < fontFamily.length; index += 1) {
    fontFamily[index].style.fontFamily = family;
}
localStorage.setItem('fontFamily', family);
}

//-------------------------CAPTURANDO-------------------------------------
//Aqui se define por onde será feita a mudança(botão), já acima, é aonde queremos que ocorra mudança(texto)

//cor da tela de fundo
let backgroundColorBtn = document.querySelectorAll('#background-color>button'); //chama onde está o botão no documento HTML
for (let index = 0; index < backgroundColorBtn.length; index += 1) { //como são varios buttons, temos que fazer uma estrutura de repetição
  backgroundColorBtn[index].addEventListener('click', (event) => { //adicionamos o evento na variavel, nesse caso, evento de click
    setBackgroundColor(event.target.innerHTML); //chamamos a arrow function original para direcionarmos as nossas mudanças, target mandamos para o alvo, e innerHTML pois queremos ir no texto contido nos elementos
  });
}

//cor do texto
let fontColorBtn = document.querySelectorAll('#font-color>button');
for(let index = 0; index < fontColorBtn.length; index += 1) {
  fontColorBtn[index].addEventListener('click', (event) => {
    setFontColor(event.target.innerHTML);
  });
}

// tamanho de fonte
let fontSizeBtn = document.querySelectorAll('#font-size>button');
for (let index = 0; index < fontSizeBtn.length; index += 1) {
  fontSizeBtn[index].addEventListener('click', (event) => {
    setFontSize(event.target.innerHTML);
  });
}

//espaçamento entre as linhas
let lineHeightBtn = document.querySelectorAll('#line-height>button');
for (let index = 0; index < lineHeightBtn.length; index += 1) {
  lineHeightBtn[index].addEventListener('click', (event) => {
    setLineHeight(event.target.innerHTML);
  });
}

//mudar tipo da fonte
let fontFamilyBtn = document.querySelectorAll('#font-family>button');
for (let index = 0; index < fontFamilyBtn.length; index += 1) {
  fontFamilyBtn[index].addEventListener('click', (event) => {
    setFontFamily(event.target.innerHTML);
  });
}

const initialize  = () => {
  let backgroundColor = localStorage.getItem('background');
   setBackgroundColor(backgroundColor);
  let fontColor = localStorage.getItem('fontColor');
  setFontColor(fontColor);
  let fontSize = localStorage.getItem('fontSize');
  setFontSize(fontSize);
  let lineHeight = localStorage.getItem('lineHeight');
  setLineHeight(lineHeight);
  let fontFamily = localStorage.getItem('fontFamily');
  setFontFamily(fon);
}

initialize();

}