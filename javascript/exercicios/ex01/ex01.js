// MINHA SOLUCAO
// function livro(nome, ano, autor) {
//   livroFrase: {
//   nome.toUpperCase();
//   console.log(2050 - ano);
//   let nomeAutor = nome + ' por' + autor;
//   }
//   return livroFrase
// }

// let retorno = livro('O senhor dos Anéis', 1954, 'J. R. R. Tolkien');
// console.log(retorno);


// SOLUCAO DO PROF 1:
// function livro(nome, ano, autor) {
//   const nomeMaior = nome.toUpperCase();
//   const totalAnos = 2050 - ano;
//   const frase = nome + ' por ' + autor;
//   const objeto = {
//     nome: nomeMaior,
//     totalAnos: totalAnos,
//     frase: frase,
//   };
//   return objeto;
// }

// const livroRetorno = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");

// console.log(livroRetorno.frase);


// SE NAO FOR REUTILIZAR, NAO TEM POR QUE DECLARAR!

// SOLUCAO 2:
// function livro(nome, ano, autor) {
//   const objeto = {
//     nome: nome.toUpperCase(),
//     totalAnos: 2050 - ano,
//     frase: nome + " por " + autor,
//   };
//   return objeto;
// }

// nao preciso declarar um objeto para retornar ele :)
function livro(nome, ano, autor) {
  return {
    nome: nome.toUpperCase(),
    totalAnos: 2050 - ano,
    frase: nome + " por " + autor,
  };
}

const livroRetorno = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");
console.log(livroRetorno.frase);