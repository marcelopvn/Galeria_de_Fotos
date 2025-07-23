const body = document.body; // Adicionando a constante body para manipular o elemento body do HTML
const claro = document.getElementById("botao-claro"); // Criando a constante para o botão claro
const escuro = document.getElementById("botao-escuro"); // Criando a constante para o botão escuro
const carouselInner = document.querySelector('.carousel-inner'); // Seleciona o container do carrossel
const filtroDropdown = document.getElementById("filtroDropdown");
let carouselInstance; // variável global para controlar a instância do carrossel



claro.addEventListener("click", ()=> {
    body.classList.remove("escuro"); // Removendo a classe escuro do body
    claro.classList.add("active");
    escuro.classList.remove("active");
})

escuro.addEventListener("click", ()=> {
    body.classList.add("escuro"); // Adicionando a classe escuro ao body
    claro.classList.remove("active");
    escuro.classList.add("active");
})

function carregarImagens(imagens) {
  carouselInner.innerHTML = '';
  const indicatorsContainer = document.querySelector('.carousel-indicators');
  indicatorsContainer.innerHTML = '';

  imagens.forEach((src, i) => {
    const item = document.createElement("div");
    item.className = "carousel-item" + (i === 0 ? " active" : "");
    item.innerHTML = `<img src="${src}" alt="Imagem do filtro">`;
    carouselInner.appendChild(item);

    const indicator = document.createElement("button");
    indicator.type = "button";
    indicator.setAttribute("data-bs-target", "#meuCarousel");
    indicator.setAttribute("data-bs-slide-to", i);
    if (i === 0) indicator.classList.add("active");
    indicator.setAttribute("aria-label", `Slide ${i + 1}`);
    indicatorsContainer.appendChild(indicator);
  });

  if (carouselInstance) {
    carouselInstance.dispose(); // destrói a instância anterior
  }

  carouselInstance = new bootstrap.Carousel(document.querySelector('.carousel'), {
    interval: 7000,
    ride: 'carousel',
    touch: true,
    pause: 'hover'
  });

  carouselInstance.to(0); // garante que comece do início
}

document.getElementById("todos").addEventListener("click", e => {
  e.preventDefault();
  filtroDropdown.textContent = "Todos"; // Atualiza o texto do botão de filtro
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

document.getElementById("natureza").addEventListener("click", e => {
  e.preventDefault();
  filtroDropdown.textContent = "Natureza"; // Atualiza o texto do botão de filtro
  carregarImagens([
    "./fotos/Natureza/foto_natureza_1.jpeg",
    "./fotos/Natureza/foto_natureza_2.jpg",
    "./fotos/Natureza/foto_natureza_3.jpg"
  ]);
});

document.getElementById("cidades").addEventListener("click", e => {
  e.preventDefault();
  filtroDropdown.textContent = "Cidades"; // Atualiza o texto do botão de filtro
  carregarImagens([
    "./fotos/Cidades/foto_cidade_1.webp",
    "./fotos/Cidades/foto_cidade_2.webp",
    "./fotos/Cidades/foto_cidade_3.jpg"
  ]);
});

document.getElementById("pessoas").addEventListener("click", e => {
  e.preventDefault();
  filtroDropdown.textContent = "Pessoas"; // Atualiza o texto do botão de filtro
  carregarImagens([
    "./fotos/Pessoas/foto_pessoa_1.avif",
    "./fotos/Pessoas/foto_pessoa_2.avif",
    "./fotos/Pessoas/foto_pessoa_3.jpg"
  ]);
});

carregarImagens([ // Carrega as imagens iniciais do carrossel com o filtro "Todos" aplicado
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
