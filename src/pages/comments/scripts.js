import { fetchApiComments } from "../../../fetchApi/fetchComments.js";
import { fetchApiUsers } from "../../../fetchApi/fetchUsers.js";


const inputNome = document.getElementById('input-nome');
const buscarNome = document.getElementById('btn-buscar');
const postsUsuarios = document.getElementById('posts-usuarios');

let comments = [];
let users = [];

window.addEventListener('DOMContentLoaded', async() => {

    const params = new URLSearchParams(window.location.search);     //Capturando o parâmetro da url;
    const id = params.get("id");        //Pegando o valor do id de params;

    comments = await fetchApiComments();
    console.log(id)
    console.log(comments)

    const filterComments = comments.filter((e, i) => e.postId == id);
    console.log(filterComments)

    filterComments.forEach((e, id) => {
        postsUsuarios.innerHTML += `
            <tr>
                <td>${e.email}</td>
                <td>${e.body}</td>
            </tr>
        `
    })
        

})