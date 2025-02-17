//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigos à lista
function adicionarAmigo() {
    // Obtém o valor inserido no campo de texto
    const inputAmigo = document.getElementById("amigo");
    const nomeAmigo = inputAmigo.value.trim();

        // Verifica se o campo não está vazio
        if (nomeAmigo === "") {
            alert("Por favor, digite um nome do amigo!");
            return;
        }


    // Adiciona o nome à lista de amigos
    amigos.push(nomeAmigo);

    // Atualiza a exibição da lista de amigos
    exibirListaAmigos();

    // Limpa o campo de texto
    inputAmigo.value = "";
}

// Função para exibir a lista de amigos
function exibirListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    
    // Limpa a lista antes de atualizá-la
    listaAmigos.innerHTML = "";

    // Adiciona cada amigo na lista
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    //A lista deverá ter pelo menos um amigo
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }


    // Sorteia um nome aleatório da lista
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibe o resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto é: ${amigoSorteado}</li>`;
}