 /* OPERADORES DE ATRIBUICAO
  */

 var x = 5;
 var y = 10;

 x += y // x = x + y (15)
 x -= y // x = x - x (-5)
 x *= y // x = x * y (50)
 x /= y // x = x / y (0.5)
 x %= y // x = x % y (0)
 x **= y // x = x ** y (9765625)

 var numero = 20;
 numero += 10; // 30

 /* OPERADOR TERNÁRIO

 abreviacao de condicionais com if e else
  */

 var idade = 19;
 var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
 console.log(podeBeber) // Pode beber

// condicao ? true : false
// geralmente utilizado quando precisamos atribuir um valor para uma variável, dependendo de uma condicao


var idade2 = 18;
var naoPossuiDiabetes = false;
var podeBeber2;
podeBeber2 = (idade2 >= 18 && naoPossuiDiabetes) ? 'Pode beber' : 'Nao pode beber';

console.log(podeBeber2)
// nao faz sentido retornar valores booleanos num operador ternario. pois o resultado da condicao sempre sera true or false

/*
IF ABREVIADO

nao é neccessário abrir e fechar as chaves quando retornamos apenas uma linha de código
*/

var possuiFaculdade = true;
if(possuiFaculdade) console.log('Possui faculdade');
else console.log('Nao possui faculdade');

// ou

if(possuiFaculdade)
 console.log('Possui faculdade');
else
 console.log('Nao possui faculdade');

 // a segunda parece ser melhor, mais organizada