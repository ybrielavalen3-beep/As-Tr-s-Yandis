// ===================================

const heroPhoto = document.querySelector(".hero-photo img");

function aplicarParallax() {

    if (!heroPhoto) return;

    const posicao = heroPhoto.parentElement.getBoundingClientRect();

    const movimento = (posicao.top - window.innerHeight / 2) * -0.12;

    const limite = Math.max(-35, Math.min(35, movimento));

    heroPhoto.style.transform = `translateY(${limite}px) scale(1.12)`;
}

window.addEventListener("scroll", aplicarParallax);
window.addEventListener("resize", aplicarParallax);

aplicarParallax();

// ===================================
// GALERIA DE BOLSAS
// ===================================

const linkBolsas = document.querySelector("#bolsas");
const produtosDestaque = document.querySelector("#produtos");
const galeriaBolsas = document.querySelector("#galeria-bolsas");
const voltarDestaques = document.querySelector("#voltar-destaques");

// Abrir a galeria de bolsas
if (linkBolsas && produtosDestaque && galeriaBolsas) {

    linkBolsas.addEventListener("click", function(event) {
        event.preventDefault();

        produtosDestaque.hidden = true;
        galeriaBolsas.hidden = false;

        galeriaBolsas.scrollIntoView({
            behavior: "smooth"
        });
    });
}

// Voltar aos produtos em destaque
if (voltarDestaques && produtosDestaque && galeriaBolsas) {

    voltarDestaques.addEventListener("click", function(event) {
        event.preventDefault();

        galeriaBolsas.hidden = true;
        produtosDestaque.hidden = false;

        produtosDestaque.scrollIntoView({
            behavior: "smooth"
        });
    });
}

// ===================================
// GALERIA DE TAPETES
// ===================================

const linkTapetes = document.querySelector("#tapetes");
const galeriaTapetes = document.querySelector("#galeria-tapetes");
const voltarTapetes = document.querySelector("#voltar-tapetes");

// Abrir a galeria de tapetes
if (linkTapetes && produtosDestaque && galeriaTapetes) {

    linkTapetes.addEventListener("click", function(event) {
        event.preventDefault();

        produtosDestaque.hidden = true;
        galeriaBolsas.hidden = true;
        galeriaTapetes.hidden = false;

        galeriaTapetes.scrollIntoView({
            behavior: "smooth"
        });
    });
}

// Voltar aos produtos em destaque
if (voltarTapetes && produtosDestaque && galeriaTapetes) {

    voltarTapetes.addEventListener("click", function(event) {
        event.preventDefault();

        galeriaTapetes.hidden = true;
        produtosDestaque.hidden = false;

        produtosDestaque.scrollIntoView({
            behavior: "smooth"
        });
    });
}


// ===================================
// GALERIA DE ACESSÓRIOS
// ===================================

const linkAcessorios = document.querySelector("#acessorios");
const galeriaAcessorios = document.querySelector("#galeria-acessorios");
const voltarAcessorios = document.querySelector("#voltar-acessorios");

// Abrir a galeria de acessórios
if (linkAcessorios && produtosDestaque && galeriaAcessorios) {

    linkAcessorios.addEventListener("click", function(event) {
        event.preventDefault();

        produtosDestaque.hidden = true;
        galeriaBolsas.hidden = true;
        galeriaTapetes.hidden = true;
        galeriaAcessorios.hidden = false;

        galeriaAcessorios.scrollIntoView({
            behavior: "smooth"
        });
    });
}

// Voltar aos produtos em destaque
if (voltarAcessorios && produtosDestaque && galeriaAcessorios) {

    voltarAcessorios.addEventListener("click", function(event) {
        event.preventDefault();

        galeriaAcessorios.hidden = true;
        produtosDestaque.hidden = false;

        produtosDestaque.scrollIntoView({
            behavior: "smooth"
        });
    });
}


