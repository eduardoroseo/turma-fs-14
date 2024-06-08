function carregarUsuarios() {
    // CONSUMINDO API USANDO - FETCH
    const requestOptions = {
        method: "GET"
    };
      
    const promise1 = fetch("http://localhost:3000/usuarios", requestOptions)
    
    const promise2 = promise1.then((response) => {
        console.log("PASSO 1")
        return response.json()
    })

}

document.addEventListener('DOMContentLoaded', carregarUsuarios)