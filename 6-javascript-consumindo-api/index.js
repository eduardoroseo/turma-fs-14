async function carregarUsuarios() {
    const requestOptions = {
        method: "GET"
    };

    document.getElementById('conteudo').innerHTML = `
        <tr class="text-center">
            <td colspan="4">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden"></span>
                </div>
            </td>
        </tr>
    `
      
    const response = await fetch("http://localhost:3000/usuarios", requestOptions)
    const usuarios = await response.json();

    alimentaTabela(usuarios);
}

function alimentaTabela(usuarios) {
    const htmlUsuarios = usuarios.map(usuario => `
            <tr>
                <td>
                    <img src="${usuario.image}" alt="sem imagem" class="img-thumbnail" style="width: 100px; height: 100px;">
                </td>
                <td>${usuario.id}</td>
                <td>${usuario.nome}</td>
                <td>${usuario.email}</td>
                <td>${usuario.telefone}</td>
            </tr>
        `
    )

    const htmlConteudo = htmlUsuarios.join("");
    document.getElementById('conteudo').innerHTML = htmlConteudo
}

async function salvarUsuario() {
    const nome = document.getElementById("nome").value
    const telefone = document.getElementById("telefone").value
    const email = document.getElementById("email").value
    const image = document.getElementById("image").files[0]

    if (!nome) {
        Swal.fire({
            title: `O campo nome esta vazio`,
            icon: "error"
        })
        return;
    }
    if (!email) {
        Swal.fire({
            title: `O campo email esta inválido`,
            icon: "error"
        })
        return;
    }
    if (!telefone) {
        Swal.fire({
            title: `O campo telefone esta inválido`,
            icon: "error"
        })
        return;
    }

    let reader = new FileReader()
    reader.onload = async function() {
        const imageBase64 = reader.result

        const payload = {
            nome: nome,
            telefone: telefone,
            email: email,
            image: imageBase64
        }
    
        const requestOptions = {
            method: "POST",
            body: JSON.stringify(payload)
        };
    
        await fetch("http://localhost:3000/usuarios", requestOptions)
        
        const modalElement = document.getElementById("modal-usuario");
        bootstrap.Modal.getInstance(modalElement).hide()
    
        carregarUsuarios()

    }

    reader.readAsDataURL(image)
}

document.addEventListener('DOMContentLoaded', carregarUsuarios)
document.getElementById("btn-salvar-usuario").addEventListener('click', salvarUsuario)