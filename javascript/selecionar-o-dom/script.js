const siteImgs = document.querySelectorAll('img');
console.log(siteImgs);

const animaisImgs = document.querySelectorAll('[src^="img/imagem"]');
console.log(animaisImgs);

const linksInternos = document.querySelectorAll('[href^="#"]')
console.log(linksInternos)

const primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(primeiroH2)

const siteP = document.getElementsByTagName('p')
const lastP = siteP[siteP.length - 1];

//OR

// const lastP = document.querySelector('p:last-child');

console.log(lastP) 
