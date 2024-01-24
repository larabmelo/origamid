// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total)

// Crie duas expressões que retornem NaN

let nome = 'Lara';
let numeroFavorito = 13;

let testeNaN = nome * numeroFavorito;
console.log(testeNaN)

let testeNaN2 = nome / 2;
console.log(testeNaN2)

/* OU
let expressao1 = 'Teste' / 2;
let expressao2 = 'Teste' - 2:

soma sempre concatena!
*/

// Somar a string '200' com o número 50 e retornar 250

let somaString = +'200' + 50;
console.log(somaString)

// Incremente o número 5 e retorne o seu valor incrementado

let incremento = 5;
console.log(++incremento);

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

let pesoPorDois1 = numero / 2;
console.log(pesoPorDois1)

// OU let numero = +'80' / 2;

// let numero = +'80' / 2;
// let unidade = 'kg';
// let peso = numero + unidade;
// console.log(peso):