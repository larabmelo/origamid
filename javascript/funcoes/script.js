// Crie uma função para verificar se um valor é Truthy

function verificarValor(dado) {
 return !!dado; //essa expressao retorna valores booleanos (true or false), um ! torna o oposto, dois !! da exatamente o que é
}

console.log(verificarValor(5))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQ(lado) {
  return lado * 4;
}
  
console.log(perimetroQ(23))


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto('Lara', 'Melo'))

// Crie uma função que verifica se um número é par

function numeroPar(numero) {
  if(numero % 2 == 0) { // resto de numero dividido por 2 == 0
    return 'É par'
  } else {
    return 'Nao é par'
  }
}

console.log(numeroPar())

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDado(dado) {
  return typeof dado
}

console.log(tipoDado('Oi'))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

function nomeCompleto(nome, sobrenome) {
  console.log(`${nome} ${sobrenome}`);
}

addEventListener('scroll', function () { // scroll é o evento, nativo do JS
  nomeCompleto('Lara', 'Melo');
});


// Corrija o erro abaixo

var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
