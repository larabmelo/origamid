// ATIVAR LINKS DO MENU

// entao primeiro, vamos pegar os elementos: os links da pagina dentro da lista de links (por isso All)
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
  const url = location.href; //url da pagina
  const href = link.href //info do link(a) pelo href

  if (url.includes(href)) {
    // quando enviamos um formulario ou pesquisa, adiciona-se parametros de busca na url, o que nao faz ficar mais igual! entao vamos verificar com outra forma (include!) nao mais (url === href)
    link.classList.add('ativo')
  }
}

//agora quero ativar essa funcao para cada um desses links
links.forEach(ativarLink);



// ATIVAR ITENS DO ORCAMENTO (DEPOIS DE ADICIONAR PARAMETROS NO HMTL)

const parametros = new URLSearchParams(location.search);
//isso aqui retorna pra gente uma array com os parametros de busca

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);



//ABRIR E FECHAR PERGUNTAS FREQUENTES

const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute('aria-controls');
  const resposta = document.getElementById(controls);

  resposta.classList.toggle('ativa');
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute('aria-expanded", ativa');
  
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// GALERIA DE BICICLETAS

const galeria = document.querySelectorAll('.bicicleta-imagens img');// se colocasse so query selector selecionaria o primeiro item da lista apenas, mas queremos todos
const galeriaContainer = document.querySelector('.bicicleta-imagens');

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia('(min-width: 1000px)').matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener('click', trocarImagem);
//o evento acontece na img dentro da galeria
}

galeria.forEach(eventosGaleria);


// ANIMATION
if(window.SimpleAnime) {
  new window.SimpleAnime();
}
