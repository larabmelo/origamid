// STRINGS E OBJETOS

var nome = 'André';
// quando eu preciso ativar, é um método. se sai direto, é uma propriedade, também é objeto pois após o ponto existem várias opcoes

var nomeMinusculo = nome.toLowerCase();

// NÚMEROS E OBJETOS

var altura = 1.8;
altura.toString();
altura.toFixed(); // vai arredondar o valor
// por um breve momento, o número é envolvido em um Objeto (coercao), tendo acesso assim a suas propriedades e métodos
// ex.: 11.2.toFixed() // 11

// métodos nao comecam com número, por isso pode juntar vários pontos assim em caso de número

// MESMO COM ISSO, O TYPEOF VAI ME DAR NÚMERO E NAO OBJETO, É UM ENVOLVIMENTO NUM OBJETO PRA TER ACESSO AOS SEUS MÉTODOS E PROPRIEDADES, E  DEPOIS SOME.

// FUNCOES E OBJETOS

function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString();
//"function areaQuadrado(lado) {
// return lado * lado;
// }"

areaQuadrado.length;


// Elementos do DOM

var btn = document.querySelector('.btn'); // pegando o elemento do dom html e trazendo pro js pra podermos brincar com ele

btn.classList.add('azul') // adiciona a classe azul
btn.innerText; // mostra pra gente 'Clique'
btn.addEventListener('click', function() {
  console.log('Clicou')
})

// praticamente todos os efeitos com JS sao feitos utilizando propriedades e métodos de objetos do DOM

// OBJETOS REVOLUCIONARAM A PROGRAMACAO

// WEB APIs sao métodos e propriedades que permitem a interacao JS e Browser, exemplo addEventListener, querySelector