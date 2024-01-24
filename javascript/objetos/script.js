// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome

let dados = {
  nome: 'Lara',
  sobrenome: 'Borba Melo',
  idade: 23,
  nomeCompleto() {
    return this.nome + " " + this.sobrenome;
  }
} //usando this aqui pro js n ter que procurar variables com esses nomes  e nao dar erro no codigo


// Crie um método no objeto anterior, que mostre o seu nome completo

// dados.nomeCompleto = function() {
//  return `${this.nome} ${this.sobrenome}`;
//}

console.log(dados.nomeCompleto()) // here i have to call the object and its method together


// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

console.log(carro.preco) // dois pontos é usado pra inicializar o valor de uma propriedade, pra modificar uso o igual

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

let cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  reacao(genero) {
    if (genero === 'homem') {
      return "O cachorro latiu"
    } else {
      return "O cachorro ficou bonzinho"
    }
  }, 
  }

console.log(cachorro.reacao('homem'))