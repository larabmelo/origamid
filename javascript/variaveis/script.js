let nome = 'Lara';
let idade = 23;
const possuiFaculdade = true;

// --- DRY: dont repeat yourself ---

let preco = 25;
let totalComprado = 5;
let totalPreco = totalComprado * preco;

let sobrenome = 'borba', 
    cidade = 'munique';

let semDefinir;
//o valor nao foi definido ainda


/* ---- COMO ESCREVER VARIAVEIS ---

1. podem iniciar com $ _ ou letras
2. podem conter numeros, mas apenas dentro e nao no inicio
3. sao case sensitive, o maiusculo faz diferenca
4. existem varias palavras reservadas que nao podem ser usado como variavel :)
5. camel case = palavra tipo camelo, a segunda palavra sempre com letra maiuscula :)

*/

//variavel sempre tem que ser declarada!

/* 
------ HOISTING -------

- quando criamos variavies, elas sempre vao pra cima do código, porém o valor dessa variavel nao é movido


----- MUDAR VALOR ATRIBUIDO -----

- var e let pode-se mudar o valor atribuido
- const é uma constante

*/

let time = 'vasco';
time = 'flamengo';
//const time = 'flamengo'; 

// console.log(time);

let name = 'Lara',
    age = 23,
    food;

    // eu nao consigo redeclarar, so atribuir o valor direto!!!!!!!!!!

food = 'lasanha';

let city, country, music, passport, animal;