/* ----- FUNCOES ----- 

- funcoes sao blocos de codigo que podem ser executados e reutilizados. valores sao passados pela funcao e ela retorna outro valor

- dentro do parenteses pode ter ou nao argumentos/parametro

- posso passar qualquer codigo dentro da funcao, para quando for ativada

- eu ativo ela repetindo o seu nome e o parenteses


function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado(4) // 16
areQuadrado(5) // 25
*/

function areaQuadrado(lado) {
  return lado * lado; // isso eh o que a funcao vai fazer quando eu ativar ela!
}

console.log(areaQuadrado(10));
// a gente coloca console.log pra explicitar a funcao no console

function pi() {
  return 3.14;
}

let total = 5 * pi(); // o pi eh ja o 3.14 porque a funcao retorna esse valor, e eu sempre preciso executar a funcao!!! com os parenteses. sem os parenteses, eh apenas uma variavel ou uma funcao sem executar.


//se o console retornar a estrutura da funcao e nao o resultado dela, vc provavelmente esqueceu de ativa-la
console.log(total);

/* 
---- PARAMETROS E ARGUMENTOS ----

1. ao CRIAR uma funcao, vc define o parametro
2. ao EXECUTAR uma funcao, vc pode passar os argumentos

// peso e altura sao os parametros

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}

imc(80, 1.80) // 80 e 1.80 sao os argumentos
imc(60, 1.70) // 60 e 1.70 sao os argumentos

*/

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}

console.log(imc(53, 1.55));

/* ---- PARENTESES EXECUTA A FUNCAO ----

function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Voce gosta do céu';
  } else if(cor === 'verde') {
    return 'Voce gosta de mato';
  } else {
    return 'Voce nao gosta de nada'
  }
}

corFavorita();

// mesmo que ela tenha um parametro, ela nao precisa ter um argumento

*/


function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Voce gosta do céu';
  } else if(cor === 'verde') {
    return 'Voce gosta de mato';
  } else {
    return 'Voce nao gosta de nada';
  }

}

/* 
---- VARIAS COISAS PODEM SER ARGUMENTOS, COMO OUTRAS FUNCOES ----

- chamadas de CALLBACK, ocorrem apos algum evento

addEventListener('click', function() {
  console.log('Clicou');
})
// a funcao possui dois argumentos
// primeiro é a string click (stroll, touch, etc)
// segundo eh uma funcao anonima 
// a funcao eh passada de forma direta

* funcoes anonimas sao aquelas que o nome da funcao nao é definido, escrita como function() {} ou () => {}

*/

addEventListener('click', function() {
  console.log('Clicouuuuu');
}) // esse click é realmente uma acao de click, nao eh variavel ou string

/* --- FUNCAO PODE OU NAO RETORNAR UM VALOR ---

- quando nao definimos return,  ela retorna undefined, mas o codigo interno é executado

- nao pode ter o mesmo nome

*/

function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc); // dentro da funcao, ja retorna no console direto quando eu a executo
}

imc2(80, 1.55); // retorna undefined pq nao estabeleci return

/* --- VALORES RETORNADOS ---

- uma funcao pode retornar qualquer tipo de dado e até outras funcoes

function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Informe a sua idade!';
  } else if(idade >= 60) {
    return true; 
  } else {
    return false;
  }
}

- nao é uma boa ideia uma funcao retornar diferentes tipos de dados como booleano e string. melhor manter um dado especifico.
*/


function terceiraIdade(idade) {
  console.log(typeof idade);
   if(typeof idade !== 'number') {
    return 'Por favor, preencha um número'
     } else if(idade >= 60) {
    return true;
  } else {
    return false;
   }
} // quando bate no return, ignora tudo de baixo

 console.log(terceiraIdade(60))



/* ---- ESCOPO -----
- variaveis e funcoes definidas dentro de um bloco {}, nao sao visiveis fora dele

 */
 let totalPaises = 193;
function faltaVisitar(paisesVisitados) {
  return `Faltam visitar ${totalPaises - paisesVisitados} países.`;
}

console.log(totalPaises); // da erro porque esta dentro do escopo!, por isso declaramos  as variavies antes

/*
---- HOISTING ----
- antes de declarar uma funcao, o JS move todas as funcoes declarada para a memoria. pois o js le todo o documento inteiro c variaveis e funcoes e manda pra cima, so assim ele executa.

MESMO que eu chame a function antes da escrita dela, vai funcionar pq o JS move todas as variaveis e funcoes declaradas para a memoria lendo o doc inteiro
*/