//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.querySelector('input').value;
    if (inputAmigo == ''){
        alert('Por favor, insira um nome.');
    }
    else if (amigos.includes(inputAmigo)) {
        alert('Esse nome já foi adicionado.');
    }
    else
    {
        amigos.push(inputAmigo)
        limparCampo();
        exibirAmigos();
    }
}

function limparCampo(){
   let inputAmigo = document.querySelector('input');
   inputAmigo.value = '';
}

function exibirAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++){
        let elementosDaLista = document.createElement('li');
        elementosDaLista.textContent = amigos[i];
        lista.appendChild(elementosDaLista);
    }
}