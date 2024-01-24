/* ----- OBJETOS -----
- conjunto de variaveis e funcoes, que sao chamadsa de propriedades e métodos

let pessoa = {
  nome: 'Lara', // chamada de propriedade, abrindo com virgula
  idade: 23,
  profissao: desenvolvedora,
  possuiFaculdade: true,
}

pessoa.nome; // 'Lara'
pessoa.possuiFaculdade; // true
 
o que está dentro dessa chave é o objeto

- serve pra organizar os códigos em pequenas partes reutilizáveis.


---- MÉTODOS ----
- é uma propriedade que possui uma funcao no local do seu valor

- this faz referencia ao objeto 'isso' com suas propriedades e metodos
 */

let quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado; // lados do this(objeto quadrado)
  },
}

quadrado.lados;
quadrado.area(5);
quadrado.perimetro(5);

/* ---- ABREVIACAO DE METODOS ----
area: function() {} OU area() {}
 */

let quadrado1 = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
  cinco() {
    return 5;
  },
}

Math.PI; // 3.14
Math.random(); // número aleatório

let pi = Math.PI;
console.log(pi);

// Math é um objeto nativo de JS. console é um objeto e log() um método.


/* Um objeto é criado utilizando as chaves {}

DOT NOTATION GET: 
acesse propriedades de um objeto utilizando o ponto. e o set é quando vc atribui um valor.

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E'
}

var bg = menu.backgroundColor; // eu também posso atribuir propriedades dentro do meu objeto a uma variavel

ADICIONAR PROPRIEDADES E MÉTODOS:
basta adicionar um novo nome com o dot notation e definir o valor.

var menu = {
  width: 800,
}

menu.height: 50;
menu.position = 'fixed'; se a propriedade já existir, ele vai substituir a anterior


PALAVRA CHAVE THIS:
this irá fazer referencia ao proprio objeto e retornara ele

var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
    }
  }

  menu.metadeHeight(); // 25, sem o this, seria 60 pois o height nao seria mais uma propriedade do objeto objeto.height, e sim a variavel de cima!!!!!!!!!!!


  PROTÓTIPO E HERANCA:
  o objeto herda propriedades e métodos do objeto que foi utilizado pra criar o mesmo

  var menu = {
    width: 800,
  }

  menu.hasOwnProperty('width) // true
  menu.hasOwnProperty('height) // false

  hasOwnProperty é um método de Object que verifica se eu tenho uma propriedade tal dentro desse objeto que eu criei!!!. esse objeto que eu criei herda propriedades do Object, entao vai ter uma lista de propriedades e métodos a serem utilizados

  Outro exemplo: até mesmo uma string tem propriedades e métodos de heranca, se eu uso
  'Lara'.length 
*/