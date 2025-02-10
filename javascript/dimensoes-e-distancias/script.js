const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const primeiroH2 = document.querySelector('h2');
const h2Left = primeiroH2.offsetLeft;
console.log(h2Left);

const rect = primeiroH2.getBoundingClientRect();
console.log(rect.top); // quase como coordenadas. por ser objeto, posso acessar dentro

if(rect.top < 0) {
  console.log('Passou do elemento')
}

console.log(
  window.innerWidth, 
  window.innerHeight,
  window.outerWidth,
  window.outerHeight,
  window.pageYOffset
)

const small = window.matchMedia('(max-width: 600px)').matches; // essa variavel é true or false. embaixo o if checa se o small rola/é verdadeiro.

if(small) {
  console.log('Usuário mobile');
} else {
  console.log('Usuário desktop')
}