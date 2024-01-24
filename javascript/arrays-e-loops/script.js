 // Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002


var brasilCampeao = [1959, 1962, 1970, 1994, 2002]; //

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

//utilizando ForLoop

for(var ano = 0; ano < brasilCampeao.length; ano++) {

  console.log(`O brasil ganhou a copa de ${brasilCampeao[ano]}`)
}

//utilizando forEach
// brasilCampeao.forEach(function(ano) {
//   console.log(`O Brasil ganhou a copa de ${ano}.`)
// }
// )


// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

for(var i = 0; i <= frutas.length; i++) {
  console.log(frutas[i]) // se eu coloco antes eu incluo pera
  if(frutas[i] === 'Pera') {
    break
  }
  // console.log(frutas[i]) se eu coloco depois eu excluo pera
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var frutas1 = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

var ultimaFruta = frutas1.slice(-1)[0];
console.log(ultimaFruta);
console.log(frutas1);

/*
OU

var ultimaFruta = frutas[frutas.length -1];
console.log(ultimaFruta);
console.log(frutas1);
*/