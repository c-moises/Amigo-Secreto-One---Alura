//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];
const inputAmigo = document.getElementById('amigo');
const ulListaAmigos = document.getElementById('listaAmigos');
const ulResultado = document.getElementById('resultado');

function adicionarAmigo() {
    if (!inputAmigo.value) {
        alert('Digite o nome do amigo')
    }
  listaAmigos.push(inputAmigo.value);
  //ulListaAmigos.innerHTML = ulListaAmigos.innerHTML + inputAmigo.value; pode ser como abaixo
  ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
}

function sortearAmigo() {
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>O amigo secreto é: ${amigoSecreto}</li>`;
}