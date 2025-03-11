// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLinks(event) {
    event.preventDefault();
    linksInternos.forEach(link => {
        link.classList.remove('ativo');
    })
    event.currentTarget.classList.add('ativo');
}

linksInternos.forEach (link => {
    link.addEventListener('click', handleLinks)
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

// const body = document.querySelector('body');
// const allElementsBody = body.querySelectorAll('*');

// function handleAllElements(event) {
//     console.log(event.target);
// };

// allElementsBody.forEach(element => {
//     element.addEventListener('click', handleAllElements);
// });

const todosElementos = document.querySelectorAll('body *');

function handleElement(event) {
    console.log(event.target)
}

todosElementos.forEach(element => {
    element.addEventListener('click', handleElement)
})


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// function removeElements(event) {
//     event.target.remove()
// }

// body.addEventListener('click', removeElements);

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function handleText(event) {
    if(event.key === 't') {
        document.documentElement.classList.toggle('bigger');
    }
}

window.addEventListener('keydown', handleText)