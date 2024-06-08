async function carregarUsuarios() {
    const requestOptions = {
        method: "GET"
    };

    document.getElementById('conteudo').innerHTML = `
        <tr class="text-center">
            <td colspan="4">Carregando ....</td>
        </tr>
    `
      
    const response = await fetch("http://localhost:3000/usuarios", requestOptions)
    const usuarios = await response.json();

    alimentaTabela(usuarios);
}

function alimentaTabela(usuarios) {
    const htmlUsuarios = usuarios.map(usuario => {
        return `
            <tr>
                <td>${usuario.id}</td>
                <td>${usuario.nome}</td>
                <td>${usuario.email}</td>
                <td>${usuario.telefone}</td>
            </tr>
        `
    })

    const htmlConteudo = htmlUsuarios.join("");
    document.getElementById('conteudo').innerHTML = htmlConteudo
}

document.addEventListener('DOMContentLoaded', carregarUsuarios)