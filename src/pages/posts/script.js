import { fetchApiPosts } from "../../../fetchApi/fetchPosts.js";
import { fetchApiUsers } from "../../../fetchApi/fetchUsers.js";

const inputNome = document.getElementById("input-nome");
const buscarNome = document.getElementById("btn-buscar");
const tdTable = document.getElementById("post-tabela");
const postsUsuarios = document.getElementById("posts-usuarios");

let posts = [];
let users = [];

window.addEventListener('DOMContentLoaded', async() => {
    posts = await fetchApiPosts();
    users = await fetchApiUsers();
    
    // console.log(users);

    posts.forEach((postId, indexPost) => {
        const usersFind = users.find((user, indexUser) => postId.userId == user.id).name
        postId.nameUser = usersFind
    })
    
    // console.log(posts);

    posts.forEach((e, i) => {
        postsUsuarios.innerHTML += `
            <tr>
                <td><a href="../comments/index.html?id=${e.id}">${e.title}</a></td>
                <td>${e.body}</td>
                <td>${e.nameUser}</td>
            </tr>
    `
    });

});

buscarNome.addEventListener("click", async () => {
    const nomePesquisado = inputNome.value;
    
    if(nomePesquisado === "") {
        return alert("Digite um nome de usuário válido para pesquisar!");
    }

    const nomeSearch = posts.filter(usuario => usuario.nameUser === nomePesquisado);
    console.log(nomeSearch)

    if(nomeSearch.length === 0) {
        return alert("Não foi possível encontrar esse usuário!")
    }

    postsUsuarios.innerHTML = "";
    nomeSearch.forEach((e, i) => {
        postsUsuarios.innerHTML += `
            <tr>
                <td>${e.title}</td>
                <td>${e.body}</td>
                <td>${e.nameUser}</td>
            </tr>
    `
    });

})