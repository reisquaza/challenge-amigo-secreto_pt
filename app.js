const amigos = [];
const inputAmigo = document.getElementById("amigo");

function adicionarAmigo() {
    const inputValue = inputAmigo.value;
    if (inputValue === "") {
        alert("Por favor, insira um nome.")
    };
    amigos.push(inputValue);
    inputAmigo.value = "";
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i];
        const elemento = document.createElement("li")
        elemento.innerText = amigo;
        lista.appendChild(elemento);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vázia.");
        return;
    }
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    const indiceAleatorio = Math.floor(Math.random() * amigos.length) 
    console.log("first", indiceAleatorio);
    const amigoSorteado = amigos[indiceAleatorio];
    const elemento = document.createElement("li");
    elemento.innerText = `O amigo sorteado foi: ${amigoSorteado}`;
    resultado.appendChild(elemento);
}