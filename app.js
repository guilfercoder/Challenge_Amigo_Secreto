//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigos(){
    let campoNomes = document.getElementById("nomeAmigos");
    let nome = campoNomes.ariaValueMax.trim();

    if (nome === ""){
        alert("Digite um nome válido.");
        return;
    }

    if (!amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista();
        campoNomes.value = "";
    }
    else {
        alert("Esse amigo já foi adicionado.");
    }
}

function atualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let nome of amigos) {
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    }
}

function sorteio(){
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para realizar o sortetio.");
        return;
    }
}

let sorteio = [...amigos];
sorteio.sort(() => Math.random() - 0.5);

while (!VerificaSorteio(sorteio)) {
    sorteio.sort(() => Math.random() - 0.5);
}

mostrarResultado(sorteio);

