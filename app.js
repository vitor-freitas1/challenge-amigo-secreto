//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.querySelector('input').value;
    if (inputAmigo == ''){
        alert('Por favor, insira um nome.');
    }
    else {
        inputAmigo.push(amigos)
        limparCampo();
    }
}

adicionarAmigo();


function limparCampo(){
   let inputAmigo = document.querySelector('input');
   inputAmigo.value = '';
}

