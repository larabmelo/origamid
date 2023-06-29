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

function livro(nome, ano, autor) {
  const nomeMaior = nome.toUpperCase();
  const totalAnos = 2050 - ano;
  const frase = nome + ' por ' + autor;
  const objeto = {
    nome: nomeMaior,
    totalAnos: totalAnos,
    frase: frase,
  };
  return objeto;
}

const livroRetorno = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");

console.log(livroRetorno);
