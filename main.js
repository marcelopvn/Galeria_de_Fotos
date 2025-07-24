const body = document.body;                                           // Adicionando a constante body para manipular o elemento body do HTML
const claro = document.getElementById("botao-claro");                 // Criando a constante para o botão claro
const escuro = document.getElementById("botao-escuro");               // Criando a constante para o botão escuro
const filtroDropdown = document.getElementById("filtroDropdown");     // Criando a constante para o filtro
const carouselInner = document.querySelector('.carousel-inner');      // Seleciona o container do carrossel
let carouselInstance;                                                 // variável global para controlar a instância do carrossel


// Criando o modo Claro
claro.addEventListener("click", ()=> { 
    body.classList.remove("escuro");          // Removendo a classe escuro do body
    claro.classList.add("active");            // Adicionando o modo claro como ativo
    escuro.classList.remove("active");        // Removendo a classe escuro do ativo
})

// Criando o modo Escuro
escuro.addEventListener("click", ()=> {
    body.classList.add("escuro");             // Adicionando a classe escuro ao body
    claro.classList.remove("active");         // Removendo a classe claro do ativo
    escuro.classList.add("active");           // Adicionando o modo escuro como ativo
})


//Funcao para Carregar as imagens
function carregarImagens(imagens) {
  carouselInner.innerHTML = '';               // Limpa o conteúdo anterior do carrossel (imagens)
  const indicatorsContainer = document.querySelector('.carousel-indicators');
  indicatorsContainer.innerHTML = '';         // Limpa os indicadores anteriores

  imagens.forEach((src, i) => {               // Para cada imagem no array 'imagens'
    const item = document.createElement("div");                          // Cria um novo item do carrossel (div com a classe 'carousel-item')
    item.className = "carousel-item" + (i === 0 ? " active" : "");       // Se for o primeiro item, adiciona também a classe 'active' para exibir inicialmente
    item.innerHTML = `<img src="${src}" alt="Imagem do filtro">`;        // Define o conteúdo HTML do item: uma imagem com o caminho 'src'
    carouselInner.appendChild(item);          // Adiciona esse item ao carrossel (dentro do .carousel-inner)

    const indicator = document.createElement("button");                  // Cria um botão indicador (os pontinhos que indicam a posição dos slides)
    indicator.type = "button";
    indicator.setAttribute("data-bs-target", "#meuCarousel");            // Define qual carrossel ele controla (pelo ID)
    indicator.setAttribute("data-bs-slide-to", i);                       // Define o slide que esse botão indica (posição i)
    if (i === 0) indicator.classList.add("active");                      // Se for o primeiro slide, marca o botão como ativo
    indicator.setAttribute("aria-label", `Slide ${i + 1}`);              // Acessibilidade: descreve qual slide esse botão representa
    indicatorsContainer.appendChild(indicator);                          // Adiciona o botão ao container de indicadores
  });

  if (carouselInstance) {
    carouselInstance.dispose();                // destrói a instância anterior
  }

  carouselInstance = new bootstrap.Carousel(document.querySelector('.carousel'), {
    ride: 'carousel',                          // Define que o carrossel deve começar automaticamente ao ser carregado
    touch: true,                               // Habilita o controle por toque (swipe) em dispositivos móveis
    pause: 'hover'                             // Faz o carrossel pausar quando o usuário passa o mouse sobre ele (hover)
  });

  carouselInstance.to(0);                      // garante que comece do início
}


// Controlando oque deve acontecer no filtro de TODOS
document.getElementById("todos").addEventListener("click", e => {
  e.preventDefault();                         // Evita o Carregamento automatico da pagina
  filtroDropdown.textContent = "Todos";       // Atualiza o texto do botão de filtro
  carregarImagens([
    "./fotos/Todos/foto_natureza_1.jpeg",
    "./fotos/Todos/foto_natureza_2.jpg",
    "./fotos/Todos/foto_natureza_3.jpg",
    "./fotos/Todos/foto_cidade_1.webp",
    "./fotos/Todos/foto_cidade_2.webp",
    "./fotos/Todos/foto_cidade_3.jpg",
    "./fotos/Todos/foto_pessoa_1.avif",
    "./fotos/Todos/foto_pessoa_2.avif",
    "./fotos/Todos/foto_pessoa_3.jpg"
  ]);
});


// Controlando oque deve acontecer no filtro de NATUREZA
document.getElementById("natureza").addEventListener("click", e => {
  e.preventDefault();                         // Evita o Carregamento automatico da pagina
  filtroDropdown.textContent = "Natureza";    // Atualiza o texto do botão de filtro
  carregarImagens([
    "./fotos/Natureza/foto_natureza_1.jpeg",
    "./fotos/Natureza/foto_natureza_2.jpg",
    "./fotos/Natureza/foto_natureza_3.jpg"
  ]);
});


// Controlando oque deve acontecer no filtro de CIDADES
document.getElementById("cidades").addEventListener("click", e => {
  e.preventDefault();                         // Evita o Carregamento automatico da pagina
  filtroDropdown.textContent = "Cidades";     // Atualiza o texto do botão de filtro
  carregarImagens([
    "./fotos/Cidades/foto_cidade_1.webp",
    "./fotos/Cidades/foto_cidade_2.webp",
    "./fotos/Cidades/foto_cidade_3.jpg"
  ]);
});


// Controlando oque deve acontecer no filtro de PESSOAS
document.getElementById("pessoas").addEventListener("click", e => {
  e.preventDefault();                         // Evita o Carregamento automatico da pagina
  filtroDropdown.textContent = "Pessoas";     // Atualiza o texto do botão de filtro
  carregarImagens([
    "./fotos/Pessoas/foto_pessoa_1.avif",
    "./fotos/Pessoas/foto_pessoa_2.avif",
    "./fotos/Pessoas/foto_pessoa_3.jpg"
  ]);
});


// Carrega as imagens iniciais do carrossel com o filtro "Todos" aplicado assim que o site e aberto
carregarImagens([ 
  "./fotos/Todos/foto_natureza_1.jpeg",
  "./fotos/Todos/foto_natureza_2.jpg",
  "./fotos/Todos/foto_natureza_3.jpg",
  "./fotos/Todos/foto_cidade_1.webp",
  "./fotos/Todos/foto_cidade_2.webp",
  "./fotos/Todos/foto_cidade_3.jpg",
  "./fotos/Todos/foto_pessoa_1.avif",
  "./fotos/Todos/foto_pessoa_2.avif",
  "./fotos/Todos/foto_pessoa_3.jpg"
]);
