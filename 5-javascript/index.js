// SOMA COM JAVASCRIPT

function soma(numA, numB) {
    return numA + numB
}

function multiplica(numA, numB) {
    return numA * numB
}

function subtrai(numA, numB) {
    return numA - numB
}

function divide(numA, numB) {
    return numA - numB
}

document.getElementById("btn-calcular").addEventListener("click", function() {
    const inputNumA = document.getElementById("numA").value
    const inputNumB = document.getElementById("numB").value

    const resultadoSoma = soma(Number(inputNumA), Number(inputNumB))
    const resultadoSub = subtrai(Number(inputNumA), Number(inputNumB))
    const resultadoMulti = multiplica(Number(inputNumA), Number(inputNumB))
    const resultadoDiv = divide(Number(inputNumA), Number(inputNumB))

    document.getElementById("resultado").innerHTML = 
        "O resultado da soma é: " + resultadoSoma + "</br>" +
        "O resultado da subtração é: " + resultadoSub + "</br>" +
        "O resultado da multiplicação é: " + resultadoMulti + "</br>" +
        "O resultado da divisão é: " + resultadoDiv
})