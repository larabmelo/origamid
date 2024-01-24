 // Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;

scroll += 500;
console.log(scroll)

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = false;
var darCredito;

//var darCredito = (possuiCarro && possuiCasa);
//console.log(darCredito)
// POIS NAO FAZ SENTIDO RETORNAR BOOLEANOS, PODEMOS FAZER ASSIM OU COLOCAR NUMEROS OU STRINGS NO RETORNO

//ou

if(possuiCarro && possuiCasa) 
  console.log(darCredito)
else
 console.log('Nao foi possivel dar crédito')


 // LEMBRANDO QUE A ATRIBUICAO É UMA FORMA DE SOMAR OU REALIZAR ALGUMA OPERACAO COM UMA VARIAVEL E ESSA VARIAVEL SE TORNA ESSA ATRIBUICAO. NAO É APENAS UMA OPERACAO ARITMETICA.