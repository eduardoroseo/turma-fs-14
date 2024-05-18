
document.getElementById("btn-calcular").addEventListener("click", function() {
    let distaciaTotalInput = document.getElementById("distancia-total")
    let totalCombustivelInput = document.getElementById("total-combustivel")

    let distanciaTotal = distaciaTotalInput.value
    let totalCombustivel = totalCombustivelInput.value

    if (distanciaTotal == '' || distanciaTotal <= 0) {
        alert("Distância total inválida")
        return
    }

    if (!totalCombustivel || totalCombustivel <= 0) {
        alert("Total do combustível inválido")
        return
    }

    let resultado = distanciaTotal / totalCombustivel

    document.getElementById("resultado").innerHTML = 
        `<strong>O "consumo médio" do veículo é: ${resultado} </strong>`

    distaciaTotalInput.value = ''
    totalCombustivelInput.value = ''
})