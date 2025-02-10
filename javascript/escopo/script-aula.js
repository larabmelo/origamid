 /*
 ESCOPO DA FUNCAO

 variáveis declaradas dentro de funcoes nao sao acessadas fora das mesmas
 */

 'use strict' // da erro caso eu use variavel global

 function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro);
 }

 mostrarCarro(); // fusca no console
 //console.log(carro) // erro, carro is not defined

 // escopo serve pra evitar o conflito entre nomes de variáveis!

 /* VARIÁVEL GLOBAL (ERRO)
 
carro = 'fusca'.

 declarar variáveis sem a palavra chave var, const ou let, cria uma variável que pode se acessar em qualquer escopo (global). isso é um erro!

 'use strict' impede isso
 */


 // ESCOPO DE FUNCAO (PAI)
 //variaveis declaradas no escopo pai da funcao conseguem ser acessadas pelas funcoes

 var carro2 = 'Fusca';

 function mostrarCarro2() {
  var frase = `Meu carro é um ${carro2}`;
  console.log(frase);
 }

 mostrarCarro2(); // Meu carro é um fusca
 console.log(carro2);


 // ESCOPO DE BLOCO
 // variaveis criadas com var, vazam o bloco. por isso com a introducao do ES6  amelhor forma de declararmos uma variavel é utilizando const e let, pois respeitam o escopo de bloco


 //exemplo de bloco sem ser function
 if(true) {
  var carro3 = 'Fusca';
  //aqui nao funcionaria com let pois nao vaza bloco!
  console.log(carro3);
 }
 console.log(carro3); // Fusca


 // var VAZA O BLOCO
 // mesmo com a condicao falsa, a variavel ainda sera declarada utilizando hoisting e o valor ficara como undefined