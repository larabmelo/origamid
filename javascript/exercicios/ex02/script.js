// MINHA SOLUCAO
// const circulo = document.querySelector(".circulo");

// function mover() {
//   circulo.style.top = "100px"
//   circulo.style.left = "100px"
// }

// window.addEventListener("mousemove", mover)

// SOLUCAO DO PROF: toda vez que essa funcao é ativada, o codigo inteiro corre
// function seguirMouse(event) {
//   const x = event.x;
//   const y = event.y;
//   // console.log(x, y); isso é pra checar se ta rolando no console
//   const circulo = document.querySelector(".circulo");
//   // console.log(circulo);
//   circulo.style.top = y + "px";
//   circulo.style.left = x + "px";
// }

// window.addEventListener("mousemove", seguirMouse);


// SOLUCAO 2: nao preciso criar variavel, pra coisas que so vou usar uma vez

const circulo = document.querySelector(".circulo");
function seguirMouse(event) {
  circulo.style.top = event.y + "px";
  circulo.style.left = event.x + "px";
}

window.addEventListener("mousemove", seguirMouse);