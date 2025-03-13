// const h1 = document.querySelector('h1');
// const animaisDescricao = document.querySelector('.animais-descricao'); // aqui retorna uma lista

// console.log(h1.innerHTML)
// console.log(h1.outerHTML)

// // h1.outerHTML = '<p>Novo Título</p>';

// // console.log(animaisDescricao.innerHTML)

// const lista = document.querySelector('.animais-lista');

// console.log(lista.children[--lista.children.length]);
// console.log(lista.querySelector('li:last-child'));

// console.log(lista.previousSibling);

// const animais = document.querySelector('.animais');
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');
// const mapa = document.querySelector('.mapa');

// // lista.appendChild(titulo); //coloca titulo como último filho da const lista

// contato.replaceChild(mapa, titulo);

// // contato.insertBefore(animais, mapa);

// const novoh1 = document.createElement('h1');

// novoh1.innerText = 'Novo Título';
// novoh1.classList.add('titulo');

// mapa.appendChild(novoh1);

// console.log(novoh1)


const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneh1 = h1.cloneNode(true);

cloneh1.classList.add('azul');

faq.appendChild(cloneh1);