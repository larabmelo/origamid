// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
  console.log(cor, marca, portas);
}


// retorna erro por que a variavel let esta sendo declarada dentro de um escopo de bloco. const tambem. e ta escrito var ao inves do nome da variavel cor

// Como corrigir o erro abaixo?

const dois = 2;

function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// podemos corrigir o operador aritmetico e mudando a const dois pra cima da funcao pro escopo pai, pro const poder ser utilizado dentro das funcoes

// O que fazer para total retornar 500?
let numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);


// podemos mudar pra let, pro var nao ser sobrescrito e pro let da funcao permanecer o mesmo.

