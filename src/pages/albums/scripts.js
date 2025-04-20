import { fetchAlbums } from "../../../fetchApi/fetchAlbums.js";
import { fetchApiUsers } from "../../../fetchApi/fetchUsers.js";

const inputNome = document.getElementById('input-nome');
const buscarNome = document.getElementById('btn-buscar');
const postsUsuarios = document.getElementById('posts-usuarios');

let albums = [];
let users = [];

window.addEventListener('DOMContentLoaded', async() => {
    albums = await fetchAlbums();
    users = await fetchApiUsers();
    console.log(users)

    albums.forEach((albumsId, indexAlbums) => {
        const albumsFind = users.find((user, indexUsers) => albumsId.userId == user.id).name
        albumsId.nameUser = albumsFind
    })
    console.log(albums)

    albums.forEach((e, i) => {
       postsUsuarios.innerHTML += `
        <tr>
            <td>${e.title}</td>
            <td>${e.nameUser}</td>
        </tr>
    ` 
    })
    
    buscarNome.addEventListener('click', async() => {
        const nomePesquisado = inputNome.value
        if(nomePesquisado === "") {
            return alert("Digite um nome de usuário válido para pesquisar!");
        }

        const nomeSearch = albums.filter(usuario => usuario.nameUser === nomePesquisado);
        if(nomeSearch.length === 0) {
            return alert("Não foi possível encontrar esse usuário!");
        }

        postsUsuarios.innerHTML = " ";
        nomeSearch.forEach((e, i) => {
            postsUsuarios.innerHTML += `
                <tr>
                    <td>${e.title}</td>
                    <td>${e.nameUser}</td>
                </tr>
            `
        })

    })

})