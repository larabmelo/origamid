/* ---- BOOLEAN----
 true or false


 ---- CONDICIONAIS IF E ELSE

let possuiGraduacao = true

if(possuiGraduacao) {
  console.log('Possui graduacao');
} else {
  console.log('Nao possui graduacao');
}

o valor dentro dos parenteses sempre sera avaliado em true or false
 */

let possuiGraduacao = true;

if(possuiGraduacao) {
  console.log('É verdadeiro.');
  console.log('sim');
  let x = 10; //a atribuicao da variavel x so acontece, se ele for verdadeiro. no let so cria quando for verdadeiro, diferente do var, entao causa erro. o var mostra como undefined o x, por causa do hoisting.
  console.log(x*200);
} else {
  console.log('É falso.');
}

// console.log(x);

/* 
---- ELSE IF ----
se a primeira condicao for verdadeira, executa normalmente e naada abaixo. se for falsa, passa pra proxima.
*/

var possuiGraduacao1 = true;
var possuiDoutorado = false;

if(possuiDoutorado) {
  console.log('Possui graduação e doutorado');
} else if(possuiGraduacao1) {
  console.log('Possui graduação, mas não possui doutorado');
} else {
  console.log('Não possui graduação');
}
// retorna Possui Graduação, mas não possui doutorado

/*
TRUTHY, FALSY

- existem valores que retornam true e outros que retornam false quando verificados em uma expressao boleana
*/

//Falsy
// if(false)
// if(0) //ou -0
// if(NaN)
// if(null)
// if(undefined)
//if('') // ou "" ou aspas craseadas

//todo o resto é truthy! valor negativo também, chaves dentro da funcao (objeto dentro da funcao), tb eh verdadeiro, espaco dentro da string também é verdadeiro

let nome = ''; //uma empty string é falso!!!!, entao retorna else

if(nome) { //se nome existe, passe no console.log
  console.log(nome);
} else {
  console.log('Nome nao existe');
}

/* truthy
if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if(!!'') // false
 */

/*
Com o switch você pode verificar se uma variável é igual à diferentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.

var corFavorita = 'Azul';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
  default:
    console.log('Feche os olhos');
}
 */

//UMA FORMA DE SABER SE A EXPRESSAO É TRUTHY OU FALSY, COLOCAMOS !! NA FRENTE


/*
OPERADORES DE COMPARAÇÃO
Vão sempre retornar um valor booleano

10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false


OPERADORES DE COMPARAÇÃO
O == faz uma comparação não tão estrita, de assimilacao e o === faz uma comparação estrita, ou seja, o TIPO DE DADO E O VALOR deve ser o mesmo quando usamos ===

10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true


OPERADORES LÓGICOS &&
&& Compara se uma expressão e a outra é verdadeira

true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true

Se ambos os valores forem true ele irá retornar o último valor verificado Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos

OPERADORES LÓGICOS ||
|| Compara se uma expressão ou outra é verdadeira

true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true

Retorna o primeiro valor true que encontrar
*/
