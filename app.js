//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() 
{
    let campoNomes = document.getElementById("amigo");
    let nome = campoNomes.value.trim();

    if (nome === "") {
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

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let nome of amigos) {
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    }
}

function sortearAmigo(){
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para realizar o sorteio.");
        return;
    }


let sorteio = [...amigos];
sorteio.sort(() => Math.random() - 0.5);

while (!verificarSorteio(sorteio)) {
    sorteio.sort(() => Math.random() - 0.5);
}

mostrarResultado(sorteio);
}

function verificarSorteio(sorteio) {
    for (let i = 0; i < amigos.length; i++) {
        if (amigos[i] === sorteio[i]){
            return false;
        }
    }
    return true;
}

function mostrarResultado(sorteio) {
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = `${amigos[i]} - > ${sorteio[i]}`;
        listaResultado.appendChild(item);
    }
}