// Retorne no console todas as imagens do site

const todasImg = document.querySelectorAll('img');

todasImg.forEach(function(img, index) {
  console.log(img)
})

// Retorne no console apenas as imagens que começaram com a palavra imagem

const apenasImg = document.querySelectorAll('img[src^="img/imagem"]');

apenasImg.forEach(function(img, index) {
  console.log(img)
})

// Selecione todos os links internos (onde o href começa com #)

const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao

const primeiroTitulo = document.querySelectorAll('.animais-descricao h2');
console.log(primeiroTitulo[0].innerText);

// Selecione o último p do site

const paragrafos = document.querySelectorAll('p');
const ultimoParagrafo = paragrafos[paragrafos.length - 1];
console.log(ultimoParagrafo.innerText);