// SOMA COM JAVASCRIPT

function soma(numA, numB) {
    return numA + numB
}

document.getElementById("btn-soma").addEventListener("click", function() {
    const inputNumA = document.getElementById("numA").value
    const inputNumB = document.getElementById("numB").value

    const resultado = soma(Number(inputNumA), Number(inputNumB))

    document.getElementById("resultado").innerText = "O resultado da soma é: " + resultado
})