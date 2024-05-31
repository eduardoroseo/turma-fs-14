const nomes = [
    "eduardo",
    "joaquim",
    "iam",
    "emerson"
]

function capitalizar(nome) {
    return nome[0].toUpperCase() + nome.substring(1).toLowerCase()
}

// FORMATO 1
// let listaDeNomes = ""
// for(let i = 0; i < nomes.length; i++) {
//     nomes[i] = capitalizar(nomes[i])
//     if (i == 0) {
//         listaDeNomes = nomes[i]
//         continue
//     }
//     listaDeNomes += ", " + nomes[i]
// }

// FORMATO 2
// nomes.forEach(function(nome) {
//     document.getElementById("tabela-vendedores").innerHTML += 
//         `
//             <tr>
//                 <td>${capitalizar(nome)}</td>
//             </tr>
//         `
// })

// FORMATO 3
const nomesCapitalizados = nomes.map(function(nome) {
    return `
        <tr>
            <td>${capitalizar(nome)}</td>
        </tr>
    `
})

document.getElementById("tabela-vendedores").innerHTML = nomesCapitalizados.sort().join("")