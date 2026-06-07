let energia = 0;
let clique = 1;
let energiaPorSegundo = 0;

let precoNave = 10;
let precoEstacao = 100;
let precoColonia = 1000;
let precoAsteroide = 5000;

let cliquesTotais = 0;

let navesCompradas = 0;
let estacoesCompradas = 0;
let coloniasCompradas = 0;
let asteroidesComprados = 0;

const energiaTexto = document.getElementById("energia");
const cliqueInfo = document.getElementById("cliqueInfo");
const conquista = document.getElementById("conquista");

const cliquesTotaisTexto =
document.getElementById("cliquesTotais");

const navesCompradasTexto =
document.getElementById("navesCompradas");

const estacoesCompradasTexto =
document.getElementById("estacoesCompradas");

const coloniasCompradasTexto =
document.getElementById("coloniasCompradas");

const asteroidesCompradosTexto =
document.getElementById("asteroidesComprados");

const planeta = document.getElementById("planeta");

const nave = document.getElementById("nave");
const estacao = document.getElementById("estacao");
const colonia = document.getElementById("colonia");
const asteroide = document.getElementById("asteroide");

function atualizar() {

    energiaTexto.textContent =
        "Energia: " + Math.floor(energia);

    cliqueInfo.textContent =
        "Energia por clique: " + clique +
        " | Energia/s: " + energiaPorSegundo;

    nave.textContent =
        "🚀 Nave (+1 Clique, +1/s) - " +
        precoNave + " Energia";

    estacao.textContent =
        "🛰️ Estação (+5 Clique, +5/s) - " +
        precoEstacao + " Energia";

    colonia.textContent =
        "🌎 Colônia (+20 Clique, +20/s) - " +
        precoColonia + " Energia";

    asteroide.textContent =
        "☄️ Asteroide (+100 Clique, +100/s) - " +
        precoAsteroide + " Energia";

    cliquesTotaisTexto.textContent =
        "Cliques Totais: " + cliquesTotais;

    navesCompradasTexto.textContent =
        "Naves: " + navesCompradas;

    estacoesCompradasTexto.textContent =
        "Estações: " + estacoesCompradas;

    coloniasCompradasTexto.textContent =
        "Colônias: " + coloniasCompradas;

    asteroidesCompradosTexto.textContent =
        "Asteroides: " + asteroidesComprados;

    if (cliquesTotais >= 100) {
        conquista.textContent =
        "🏆 Conquista: 100 Cliques!";
    }

    if (energia >= 10000) {
        conquista.textContent =
        "🏆 Conquista: 10.000 Energia!";
    }

    if (energia >= 100000) {
        conquista.textContent =
        "🏆 Conquista: 100.000 Energia!";
    }
}

function salvar() {

    localStorage.setItem("energia", energia);
    localStorage.setItem("clique", clique);
    localStorage.setItem("energiaPorSegundo", energiaPorSegundo);

    localStorage.setItem("precoNave", precoNave);
    localStorage.setItem("precoEstacao", precoEstacao);
    localStorage.setItem("precoColonia", precoColonia);
    localStorage.setItem("precoAsteroide", precoAsteroide);

    localStorage.setItem("cliquesTotais", cliquesTotais);

    localStorage.setItem("navesCompradas", navesCompradas);
    localStorage.setItem("estacoesCompradas", estacoesCompradas);
    localStorage.setItem("coloniasCompradas", coloniasCompradas);
    localStorage.setItem("asteroidesComprados", asteroidesComprados);
}

function carregar() {

    energia = Number(localStorage.getItem("energia")) || 0;
    clique = Number(localStorage.getItem("clique")) || 1;
    energiaPorSegundo =
    Number(localStorage.getItem("energiaPorSegundo")) || 0;

    precoNave =
    Number(localStorage.getItem("precoNave")) || 10;

    precoEstacao =
    Number(localStorage.getItem("precoEstacao")) || 100;

    precoColonia =
    Number(localStorage.getItem("precoColonia")) || 1000;

    precoAsteroide =
    Number(localStorage.getItem("precoAsteroide")) || 5000;

    cliquesTotais =
    Number(localStorage.getItem("cliquesTotais")) || 0;

    navesCompradas =
    Number(localStorage.getItem("navesCompradas")) || 0;

    estacoesCompradas =
    Number(localStorage.getItem("estacoesCompradas")) || 0;

    coloniasCompradas =
    Number(localStorage.getItem("coloniasCompradas")) || 0;

    asteroidesComprados =
    Number(localStorage.getItem("asteroidesComprados")) || 0;
}

function textoFlutuante(valor) {

    const texto =
    document.createElement("div");

    texto.className = "floatText";

    texto.textContent = "+" + valor;

    const rect =
    planeta.getBoundingClientRect();

    texto.style.left =
    rect.left + rect.width / 2 + "px";

    texto.style.top =
    rect.top + "px";

    document.body.appendChild(texto);

    setTimeout(() => {
        texto.remove();
    }, 1000);
}

planeta.addEventListener("click", () => {

    energia += clique;

    cliquesTotais++;

    textoFlutuante(clique);

    atualizar();
    salvar();
});

nave.addEventListener("click", () => {

    if (energia >= precoNave) {

        energia -= precoNave;

        clique += 1;
        energiaPorSegundo += 1;

        navesCompradas++;

        precoNave =
        Math.floor(precoNave * 1.5);

        atualizar();
        salvar();
    }
});

estacao.addEventListener("click", () => {

    if (energia >= precoEstacao) {

        energia -= precoEstacao;

        clique += 5;
        energiaPorSegundo += 5;

        estacoesCompradas++;

        precoEstacao =
        Math.floor(precoEstacao * 1.5);

        atualizar();
        salvar();
    }
});

colonia.addEventListener("click", () => {

    if (energia >= precoColonia) {

        energia -= precoColonia;

        clique += 20;
        energiaPorSegundo += 20;

        coloniasCompradas++;

        precoColonia =
        Math.floor(precoColonia * 1.5);

        atualizar();
        salvar();
    }
});

asteroide.addEventListener("click", () => {

    if (energia >= precoAsteroide) {

        energia -= precoAsteroide;

        clique += 100;
        energiaPorSegundo += 100;

        asteroidesComprados++;

        precoAsteroide =
        Math.floor(precoAsteroide * 1.6);

        atualizar();
        salvar();
    }
});

setInterval(() => {

    energia += energiaPorSegundo;

    atualizar();
    salvar();

}, 1000);

carregar();
atualizar();
