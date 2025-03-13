// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');
const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);


// Selecione o primeiro DT da dl de Faq

const faq = document.querySelector('.faq');
// const faqDl = faq.querySelector('dl')

// const primeiroDt = faqDl.children[0];

// console.log(primeiroDt);

// ou

const primeiroDt = faq.querySelector('dt');


// Selecione o DD referente ao primeiro DT

console.log(primeiroDt.nextElementSibling);


// Substitua o conteúdo html de .faq pelo de .animais

// const body = document.querySelector('body')
// const animais = document.querySelector('.animais');

// const animaisHTML = animais.innerHTML;
// const faqHTML = faq.innerHTML

// // faq.innerHTML.replaceWith(animais.innerHTML);

// body.replaceChild(animais, faq);

// ou

const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML;



