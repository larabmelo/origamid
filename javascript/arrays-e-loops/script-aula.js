 /*
ARRAY é um grupo de valores geralmente relacionados. Servem pra guardarmos diferentes valores em uma única variável.
 */

var videoGames = ['Switch', 'PS4', 'XBOX'];

videoGames[0]; // Switch
videoGames[2] // XBOX
// indice comeca com 0 pra acessar elemento na array


/*
MÉTODOS e PROPRIEDADES de uma ARRAY
*/

videoGames.pop(); // remove o último item e retorna ele

videoGames.push('3DS'); // adiciona esse elemento ao final da array

videoGames.length; // 3

// existem diversos outros métodos como: map, reduce, forEach 


/* 
FOR LOOP

fazem algo repetidamente até que uma condicao seja atingida

consistem em inicio dado por variavel, condicao e incremento. o incremento pode ser de outro valor tb, tipo 5
 */

for (var numero = 0; numero <=10; numero++) { // qual condicao eu quero que ocorra, pra que isso continue acontecendo? pra ser true?
  console.log(numero);
}

// imagina que eu nao coloquei o incremento, ele entra num loop infinito e vai quebrar o browser

/*

WHILE LOOP
*/

// var i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }
//retorna de 0 a 9 no console



var videoGames2 = ['Switch', 'PS4', 'XBOX', '3DS'];

for(var item = 0; item < videoGames2.length; item++) {
  console.log(videoGames2[item]);
  if(videoGames[item] === 'PS4') {
    break
  }
}

/*
BREAK

o loop irá parar caso encontro a palavra break
*/

/*
forEach

forEach é um método que executa uma funcao para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)
*/

var videoGames3 = ['Switch', 'PS4', 'XBOX', '3DS'];
videoGames3.forEach(function(item, index, array) {
  console.log('Index:', index, 'Item:', item, 'Array:', array)
});

// o argumento item será atribuido dinamicamente
// podemos passar os seguintes parametros: item, index e array
// essa é uma callback function: uma funcao que é passada como argumento em uma outra funcao (methodo forEach)
// essa funcao é utilizada pra cada item da array 

//Callback Function: The function you provide as an argument.
// Higher-Order Function: The function that takes a callback function as an argument.

var frutas = ['Banana', 'Pera', 'Maca', 'Abacaxi', 'Uva'];

frutas.forEach(function(fruta, index, array) {
  console.log(fruta, index, array)
});

// nao se confundir com a sintaxe abaixo

var numero = 0;
var maximo = 50;
for(;numero < maximo;) {

  numero++;
}

console.log(numero);
