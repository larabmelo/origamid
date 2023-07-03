// LOGICA SEMELHANTE PARA LIMITE DE CARRINHO E ESTOQUE

const botao = document.querySelector("button");
// console.log(Boolean(botao)); > PARA CHECAR

function somar() {
const div = document.querySelector("div");
// console.log(div); > PARA CHECAR
const total = Number(div.innerText) + 1;
// div.innerText = total //para poder adicionar ao 1 novamente
// console.log(total);
if (total < 10) {
  div.innerText = total;
} else {
  console.log("Não é possível adicionar mais")
}
}

if (botao) {
botao.addEventListener("click", somar);
}

