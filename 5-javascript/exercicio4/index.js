function calcularConsumoMedio () {
    let distaciaTotalInput = document.getElementById("distancia-total")
    let totalCombustivelInput = document.getElementById("total-combustivel")

    let distanciaTotal = distaciaTotalInput.value
    let totalCombustivel = totalCombustivelInput.value

    if (distanciaTotal == '' || distanciaTotal <= 0) {
        let config = {
            icon: "error",
            title: "Oops...",
            text: "Distância total inválida!",
        }

        Swal.fire(config);
        return
    }

    if (!totalCombustivel || totalCombustivel <= 0) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Total do combustível inválido!",
        });
        return
    }

    let resultado = distanciaTotal / totalCombustivel

    document.getElementById("resultado").innerHTML = 
        `<strong>O "consumo médio" do veículo é: ${resultado} </strong>`

    distaciaTotalInput.value = ''
    totalCombustivelInput.value = ''
}

document.addEventListener('keypress', function(ev) {
    if (ev.key == "Enter") {
        calcularConsumoMedio()
    }
});

document.getElementById("btn-calcular").addEventListener("click", calcularConsumoMedio)