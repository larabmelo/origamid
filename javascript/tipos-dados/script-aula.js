/* ----- 7 TIPOS DE DADOS -----

todos os dados sao primitivos (imutaveis)
exceto objetos

string: let nome = 'lara';
number: let idade = 23;
boolean: let possuiFaculdade = true;
undefined: let time;
null: let comida = null;
symbol: let simbolo = Symbol()
object: let novoObjeto = {}

*/

let nome = 'Lara';
let idade = 23;
let time = null;
let simbolo = Symbol();
console.log(typeof idade);

// isso ajuda a verificar o tipo do dado

/* ----- STRING ----- 

voce pode somar uma string e concatenar as palavras

let nome = 'Lara';
let sobrenome = 'Teufel';
let nomeCompleto = nome + ' ' + sobrenome;

*/

let sobrenome = 'Teufel';
let nomeCompleto = nome + ' ' + sobrenome;
// essa string do meio dá espaco

console.log(nomeCompleto)

let gols = 1000;
let frase = 'Romário fez ' + gols + ' gols';
console.log(frase)

// uso de aspas. nao se usa a mesma em uma frase string. posso usar barra invertida pra impedir a funcao

let frase1 = 'Esse é o "melhor" jogo'


// ---- TEMPLATE STRING ----

let frase2 = `Romário fez ${gols} gols`
console.log(frase2)
