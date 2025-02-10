const menu = document.querySelector(".menu");

menu.classList.add('ativo');
menu.classList.toggle('azul'); // remove e adiciona dependendo se tem ou nao

if(menu.classList.contains('azul')) {
  menu.classList.add("possui-azul");
} else {
  menu.classList.add('nao-possui-azul');
}

menu.className += ' vermelho';

const animais = document.querySelector('.animais');
console.log(animais.attributes["data-texto"]); // por padrao, nao pode receber hifen

const img = document.querySelector('img'); // puxando a 1a imagem pois queryselector

const srcImg = img.getAttribute('alt');
console.log(srcImg);

img.setAttribute('alt', "Fox") // eu posso passar até um atributo q nao existe
const possuiAlt = img.hasAttribute('alt');
console.log(possuiAlt);

const carro = {
  portas: 4,
  andar: function(km) {
    console.log(`Andou ${km}`)
  }
}