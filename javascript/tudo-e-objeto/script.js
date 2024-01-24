// nomeie 3 propriedades ou métodos de strings

// .length
// charAt()
// toLowerCase

// nomeie 5 propriedades ou métodos de elementos do DOM

// addEventListener
// document.getElementById
// firstElementChild
// lastElementChild
// document.querySelector

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

//  Usando Clipboard API

navigator.clipboard.writeText("Texto pra copiar")
.then(() => {
  console.log('Texto copiado com sucesso!');
})
.catch(err => {
  console.error('Erro ao copiar texto: ', err);
});
