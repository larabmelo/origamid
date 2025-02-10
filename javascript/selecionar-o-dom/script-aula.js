const animais = document.getElementById('animais');
console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[1]);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl)

const primeiraLi = document.querySelector('li');
console.log(primeiraLi)

const linkInterno = document.querySelector('[href^="#"]')
console.log(linkInterno);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg[1]) // retorna NodeList, similar a uma array. 
//diferente do getbyclass ou bytag, se eu adicionar uma img ali, ele NAO vai atualizar

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

// se eu na primeira UL adiciono uma classe, so atualiza no getElementByClassName que é uma HTMLCollection

primeiraUl.classList.add('grid-section');

console.log(gridSectionHTML);
console.log(gridSectionNode);

//array-likes parecem arrays, mas nao sao. método de array forEach so tem no nodelist.

gridSectionNode.forEach(function(item, index) {
  console.log(index);
})

const arrayGrid = Array.from(gridSectionHTML); // transforma o array-like em array (objeto com mtos metodos)
arrayGrid.pop(); //remove o ultimo e retorna
console.log(arrayGrid)