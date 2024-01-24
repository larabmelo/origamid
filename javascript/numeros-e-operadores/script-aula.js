// precisao de até 15 digitos. depois é arredondado

let pi = 3.14 // ponto pra decimal, nao virgula

let idade = 2e1; //20 (exponencial, nao expoente, a quantidade de 0)
console.log(idade);

let expoente = 2 ** 4;
console.log(expoente);

let modulo = 14 % 5; // restante da divisao
console.log(modulo);

let total1 = 10 + 5 + 10;
console.log(total1)

let divisao = 200 / 5;
console.log(divisao)

//lembrando que soma + em strings serve pra concatenar

//  ------ OPERADORES COM STRING ------

 let soma = '100' + 50; // retorna string pois concatena
 let subtracao = '100' - 50; // tenta converter, entao da 50 no final
 let multiplicacao = '100' * 2; // retorna 200
 let divisao1 = 'Comprei 10' / 2; // NaN (Not a Number), nao consegue converter pra dividir

 // é possível verificar se uma variável é Nan ou nao com a funcao isNan()

let testeNaN = 'Isso é 100' / 2;
console.log(isNaN(testeNaN));

// se somar numero com unidade, o resultado vai ser uma string, e fazer operacoes que nao podem ser convertidas misturando numero e letra na string, vai retornar NaN


// OPERADORES UNÁRIOS (feito com 1 valor, binarios sao feitos com dois valores pra acontecer)

let incremento = 5;
console.log(incremento++); //aqui retorna so no proximo console. e nao pode ser uma constante, pois nao pode ser modificada. igual a incremento = incremento + 1
console.log(incremento);

let incremento2 = 5;
console.log(++incremento2); //na frente ja retorna a soma
console.log(incremento2);

// + e - TRANSFORMA EM numero, quando sao numeros dentro da string

let frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

let numero = '28';
+numero; // 28 (retorna numero) e ignora espacos, mas nao letras!!! ai retornaria NaN
-numero; // -28 (retorna numero)
console.log(+numero + 5); // 33

//tb posso usar operador unario direto na variavel pra transformar em numero, NAO INCREMENTO
let operadorUnario = +'28';
console.log(operadorUnario)

let possuiFaculdade = true;
console.log(+possuiFaculdade); // 1, tambem transforma boolean em numero..