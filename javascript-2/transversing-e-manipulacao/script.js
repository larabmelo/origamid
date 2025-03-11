const h1 = document.querySelector('h1');
const animaisDescricao = document.querySelector('.animais-descricao'); // aqui retorna uma lista

console.log(h1.innerHTML)
console.log(h1.outerHTML)

// h1.outerHTML = '<p>Novo Título</p>';

// console.log(animaisDescricao.innerHTML)

const lista = document.querySelector('.animais-lista');

console.log(lista.children[--lista.children.length]);
console.log(lista.querySelector('li:last-child'));

console.log(lista.previousSibling);

const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

lista.appendChild(titulo);