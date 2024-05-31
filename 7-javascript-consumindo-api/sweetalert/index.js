function buscaCep() {
    Swal.fire({
        title: "Insira o CEP para consultar",
        input: "text",
        showCancelButton: true,
        confirmButtonText: "Buscar",
        showLoaderOnConfirm: true,
        preConfirm: async (cep) => {
          try {
            const viaCepURL = `
              https://viacep.com.br/ws/${cep}/json
            `;
            const response = await fetch(viaCepURL);
            if (!response.ok) {
              return Swal.showValidationMessage(`
                ${JSON.stringify(await response.json())}
              `);
            }
            return response.json();
          } catch (error) {
            Swal.showValidationMessage(`
              A requisição falhou: ${error}
            `);
          }
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          const endereco = result.value
          Swal.fire({
            title: `O nome da rua é ${endereco.logradouro} no bairro ${endereco.bairro} na cidade de ${endereco.localidade} do estado do ${endereco.uf}.`
          });
        }
      });
}

document.getElementById('btn-busca-cep').addEventListener('click', buscaCep)