// Verifique a distância da primeira imagem em relação ao topo da página

const primeiraImagem = document.querySelector('img');

console.log(primeiraImagem.offsetTop)

// Retorne a soma da largura de todas as imagens

function somaImagens () {
    const todasImagens = document.querySelectorAll('img');
    let soma = 0;
    todasImagens.forEach((img) => {
        soma = soma + img.offsetWidth;
    });
    console.log(soma)
}

window.onload = function() {
    somaImagens()
}

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');
console.log(links);

links.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;
    if(linkWidth >= 48 && linkHeight >= 48) {
        console.log(link, 'Possui boa acessibilidade')
    } else {
        console.log(link, 'Nao possui boa acessibilidade')
    }
})

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches; // ate 720 vai dar verdadeiro

if (browserSmall) {
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
}