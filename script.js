let energia = 0;
let clique = 1;

const energiaTexto = document.getElementById("energia");
const cliqueInfo = document.getElementById("cliqueInfo");

const planeta = document.getElementById("planeta");

const nave = document.getElementById("nave");
const estacao = document.getElementById("estacao");
const colonia = document.getElementById("colonia");

function atualizar() {

    energiaTexto.textContent = "Energia: " + energia;
    cliqueInfo.textContent = "Energia por clique: " + clique;

}

function salvar() {

    localStorage.setItem("energia", energia);
    localStorage.setItem("clique", clique);

}

function carregar() {

    let energiaSalva = localStorage.getItem("energia");
    let cliqueSalvo = localStorage.getItem("clique");

    if (energiaSalva !== null) {
        energia = Number(energiaSalva);
    }

    if (cliqueSalvo !== null) {
        clique = Number(cliqueSalvo);
    }

}

planeta.addEventListener("click", () => {

    energia += clique;

    atualizar();
    salvar();

});

nave.addEventListener("click", () => {

    if (energia >= 10) {

        energia -= 10;
        clique += 1;

        atualizar();
        salvar();

    }

});

estacao.addEventListener("click", () => {

    if (energia >= 100) {

        energia -= 100;
        clique += 5;

        atualizar();
        salvar();

    }

});

colonia.addEventListener("click", () => {

    if (energia >= 1000) {

        energia -= 1000;
        clique += 20;

        atualizar();
        salvar();

    }

});

carregar();
atualizar();