import { fetchApiUsers } from "./fetchApi/fetchUsers.js";
import { fetchApiPosts } from "./fetchApi/fetchPosts.js";

const inputNome = document.getElementById("input-nome");
const btnBuscar = document.getElementById("btn-buscar");
const inputCidade = document.getElementById("input-cidade");
const btnCidade = document.getElementById("btn-cidade");
const usuarios = document.getElementById("usuarios");

let data = null;

window.addEventListener('DOMContentLoaded', async() => {
    console.log(await fetchApiUsers());
    data = await fetchApiUsers();

     data.forEach((e, i) => {
         usuarios.innerHTML += `
            <tr>
                <td>${e.name}</td>
                <td>${e.email}</td>
                <td>${e.address.city}</td>
                <td>${e.phone}</td>
            </tr>
         `;
     });
});

btnBuscar.addEventListener('click', async () => {
    const nome = inputNome.value;
    if(nome === "") {
        return alert("Digite algum nome para pesquisar!");
    }

    const nomePesquisado = data.filter(user => user.name === nome);
    console.log(nomePesquisado);
    if(nomePesquisado.length === 0) {
        return alert("Não foi possível encontrar esse usuário!");
    }

    usuarios.innerHTML = " ";
    usuarios.innerHTML += `
        <tr>
            <td>${nomePesquisado[0].name}</td>
            <td>${nomePesquisado[0].email}</td>
            <td>${nomePesquisado[0].address.city}</td>
            <td>${nomePesquisado[0].phone}</td>
        </tr>
    `;
})

btnCidade.addEventListener('click', async () => {
    const nomeCidade = inputCidade.value;
    if(nomeCidade === "") {
        return alert("Digite algum nome de cidade para pesquisar!");
    }

    const cidadeFiltrada = data.filter(cidade => cidade.address.city === nomeCidade);
    
    if(cidadeFiltrada.length === 0) {
        return alert("Não foi possível encontrar essa cidade!")
    }

    usuarios.innerHTML += `
        <tr>
            <td>${cidadeFiltrada[0].name}</td>
            <td>${cidadeFiltrada[0].email}</td>
            <td>${cidadeFiltrada[0].address.city}</td>
            <td>${cidadeFiltrada[0].phone}</td>
        </tr>
    `;
})