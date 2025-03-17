const amigos = [];
const inputAmigo = document.getElementById("amigo")

function adicionarAmigo() {
    console.log("inputamigo", inputAmigo.value);
    const inputValue = inputAmigo.value;
    if (inputValue === "") {
        alert("Por favor, insira um nome.")
    }
    amigos.push(inputValue);
    inputAmigo.value = "";
}