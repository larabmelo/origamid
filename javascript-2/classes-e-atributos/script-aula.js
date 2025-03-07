const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste', 'azul');
menu.classList.remove('azul');

if(menu.classList.contains('azul')) {
    menu.classList.add('possui-azul');
} else {
    menu.classList.add('nao-possui-azul');
}



// menu.className = menu.className + ' vermelho';

menu.className += ' vermelho';

// console.log(menu.className);

const animais = document.querySelector('.animais');
console.log(animais.attributes['data-texto']);

const img = document.querySelector('img'); // aqui puxo a 1a img

const srcImg = img.getAttribute('alt');

img.setAttribute('alt', 'É uma raposa');

const possuiAlt = img.hasAttribute('alt');

console.log(possuiAlt);


const carro = {
    portas: 4,
    andar: function(km) {
        console.log(`Andou ${km}`);
    }
}

