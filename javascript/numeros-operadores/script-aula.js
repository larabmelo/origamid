let idade = 2e1; //20 (exponencial, nao expoente)
console.log(idade);

let expoente = 2 ** 4;
console.log(expoente);

let modulo = 14 % 5; // restante da divisao
console.log(modulo);

let total1 = 10 + 5 + 10;
console.log(total1)

let divisao = 200 / 5;
console.log(divisao)

//  ------ OPERADORES COM STRING ------

 let soma = '100' + 50; // retorna string
 let subtracao = '100' - 50;
 let multiplicacao = '100' * 2;
 let divisao1 = 'Comprei 10' / 2; // NaN (Not a Number)

 // é possível verificar se uma variável é Nan ou nao com a funcao isNan()

let testeNaN = 'Isso é 100' / 2;
console.log(isNaN(testeNaN));

// se somar numero com unidade, o resultado vai ser uma string, e fazer operacoes misturando, vai retornar NaN


// OPERADORES UNÁRIOS (feito com 1 valor)

let incremento = 5;
console.log(incremento++); //aqui retorna so no proximo console. e nao pode ser uma constante. igual a incremento = incremento + 1
console.log(incremento);

let incremento2 = 5;
console.log(++incremento2); //na frente ja retorna a soma
console.log(incremento2);

// + e - TRANSFORMA EM NUMERO

let frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

let numero = '28';
+numero; // 28 (retorna numero) e ignora espacos, mas nao letras!!!
-numero; // -28 (retorna numero)
console.log(+numero + 5); // 33

let possuiFaculdade = true;
console.log(+possuiFaculdade); // 1, tambem transforma boolean em numero..