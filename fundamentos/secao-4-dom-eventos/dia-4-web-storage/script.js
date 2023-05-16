// as pessoas devem poder alterar
window.onload = () => {
  //cor da tela de fundo
  const colorPage = (color) => {
    let content = document.querySelector('.content');
    content.style.backgroundColor = color;
}

//cor do texto
const fontColor = (color) => {
  let paragraph = document.querySelectorAll('.paragraph');
  for (let index = 0; index < paragraph.length; index += 1) {
    paragraph[index].style.color = color;
  }
}

// tamanho de fonte
const changeFontSize = (size) => {
  const fontSize = document.querySelectorAll('.paragraph');
  for (let index = 0; index < fontSize.length; index += 1) {
    fontSize[index].style.fontSize = size;
}
}

//espaçamento entre as linhas
const setLineHeight = (height) => {
  const lineHeight = document.querySelectorAll('.paragraph');
  for (let index = 0; index < lineHeight.length; index += 1) {
    lineHeight[index].style.lineHeight = height;
}
}

//mudar p tipo da fonte
const setFontFamily = (family) => {
  const fontFamily = document.querySelectorAll('.paragraph');
  for (let index = 0; index < fontFamily.length; index += 1) {
    fontFamily[index].style.fontFamily = family;
}
}

//-------------------------CAPTURANDO-------------------------------------

//cor da tela de fundo
let backgroundColorBtn = document.querySelectorAll('#background-color>button');
for (let index = 0; index < backgroundColorBtn.length; index += 1) {
  backgroundColorBtn[index].addEventListener('click', (event) => {
    colorPage(event.target.innerHTML);
  });
}

//cor do texto
let fontColorBtn = document.querySelectorAll('#font-color>button');
for(let index = 0; index < fontColorBtn.length; index += 1) {
  fontColorBtn[index].addEventListener('click', (event) => {
    fontColor(event.target.innerHTML);
  });
}

// tamanho de fonte
let fontSizeBtn = document.querySelectorAll('#font-size>button');
for (let index = 0; index < fontSizeBtn.length; index += 1) {
  fontSizeBtn[index].addEventListener('click', (event) => {
    changeFontSize(event.target.innerHTML);
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




// colorPage('red');
// fontColor('green');
// changeFontSize('30px');
// setLineHeight('2');
// setFontFamily('sans');
}



// const fontColor = document.querySelector('#font-color');
// const fontSize = document.querySelector('#font-size');
// const lineHeight = document.querySelector('#line-height');
// const fontFamily = document.querySelector('#font-family');










//   const changeColor = '';
  
//   backColor.addEventListener('click', () => {
//     for (let index = 0; index < backColor.length; index += 1) {
//       if (backColor[index] === 'white') {
//         changeColor.body.style.backgroundColor = 'white';
//       }
//       if (backColor[index] === 'black') {
//         changeColor.body.style.backgroundColor = 'black';
//       }
//       if (backColor[index] === 'green') {
//         changeColor.body.style.backgroundColor = 'green';
//       }
//       if (backColor[index] === 'blue') {
//         changeColor.body.style.backgroundColor = 'blue';
//       }
//       if (backColor[index] === 'yellow') {
//         changeColor.body.style.backgroundColor = 'yellow';
//       }
//     }
//   });
// }