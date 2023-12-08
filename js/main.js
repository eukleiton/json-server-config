document.addEventListener('DOMContentLoaded',() => {
    const dataContainer = 
        document.getElementById('data-container');

    // funcao para tratar erros 
    const handlerErrors = (response) => {
        if(!response.ok){
            throw Error(response.statusText);
        }
        return response;
    }

    // funcao para buscar e exibir dados da API 
    const fetchData = async () => {
        try {
            // fazendo uma requisicao GET para obter produtos da API
            const response = await fetch('http://localhost:3000/produtos');
            console.log('kkkkkkkkkkk')
            // lidando com erros na resposta 
            handlerErrors(response);

            // convertendo a resposta para JSON
            const data = await response.json();

            // exibindo os dados na pagina 
            data.forEach(produto => {
                const produtoElemento = 
                    document.createElement('div');
                    produtoElemento.innerHTML = `<strong> ${produto.nome} </strong> <p> ${produto.preco} </p>`


            dataContainer.appendChild(produtoElemento);
            });

        } catch (error) {
           console.log('erro ao buscar: ',error);
        }
    };

    // chamendo a funcao para carregar os dados na tela
    fetchData();

});