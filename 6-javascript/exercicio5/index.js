const vendedores = []

function calcularSalarioTotal () {
    const nomeVendedorInput = document.getElementById("nome-vendedor")
    const salarioFixoInput = document.getElementById("salario-fixo")
    const totalEmVendasInput = document.getElementById("total-em-vendas")

    let salarioFixo = salarioFixoInput.value
    const totalEmVendas = totalEmVendasInput.value

    if (!nomeVendedorInput.value) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Insira o nome do vendedor!",
        });
        return
    }

    if (!salarioFixo || salarioFixo <= 0) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Salário fixo está inválido!",
        });
        return
    }

    if (!totalEmVendas || totalEmVendas <= 0) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "O total em vendas está inválido!",
        });
        return
    }

    const resultado = Number(salarioFixo) + Number(totalEmVendas) * 0.15

    const vendedor = {
        nome: nomeVendedorInput.value,
        salarioFixo: salarioFixo,
        totalEmVendas: totalEmVendas,
        salarioTotal: resultado
    }

    vendedores.push(vendedor)

    nomeVendedorInput.value = ''
    salarioFixoInput.value = ''
    totalEmVendasInput.value = ''

    montaTabela()
}

function montaTabela() {
    const tabelaVendedores = document.getElementById("tabela-vendedores")

    const htmlDeVendedores = vendedores.map(function (vendedor) {
        return `
            <tr>
                <td>${vendedor.nome}</td>
                <td>${vendedor.salarioFixo}</td>
                <td>${vendedor.totalEmVendas}</td>
                <td>${vendedor.salarioTotal}</td>
            </tr>
        `
    })

    const htmlDoTBody = htmlDeVendedores.join("")

    tabelaVendedores.innerHTML = htmlDoTBody
}

document.addEventListener('keypress', function(ev) {
    if (ev.key == "Enter") {
        calcularSalarioTotal()
    }
});

document.getElementById("btn-calcular").addEventListener("click", calcularSalarioTotal)