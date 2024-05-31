function buscaCep() {
    const cep = document.getElementById("cep").value.trim()

    if (!cep) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Cep informado está inválido",
        })
        return
    }

    document.getElementById("resultado").innerHTML = "CARREGANDO ..."
    fetch(`https://viacep.com.br/ws/${cep}/json`)
        .then(function (response) {
            console.log("PRIMEIRA RESPOSTA")
            console.log(response)

            return response.json()
        })
        .then(function(resposta) {
            console.log("SEGUNDA RESPOSTA")
            console.log(resposta)


            document.getElementById("resultado").innerHTML = 
                `O nome da rua é ${resposta.logradouro} no bairro ${resposta.bairro} na cidade de ${resposta.localidade} do estado do ${resposta.uf}.`
        })
}

document.getElementById('btn-busca-cep').addEventListener('click', buscaCep)