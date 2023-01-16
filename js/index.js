// console.log(kits);
// console.log(acessorios);
// console.log(placas);

// Obtem o body
let body = document.body;

// Cria o Main
let main = document.createElement('main');

// Cria a Section Principal
let sectionPai = document.createElement('section');
sectionPai.setAttribute('class', 'containerPrincipal');

// Constroi o Carrinho de Compras

let section = document.createElement('section');
section.setAttribute('class', 'containerSection');

let tituloCarrinhoCompras = document.createElement('h4');
tituloCarrinhoCompras.setAttribute('class', 'tituloCarrinhoCompras');
tituloCarrinhoCompras.innerText = 'Carrinho de Compras';

let divProdutosEscolhidos = document.createElement('div');
divProdutosEscolhidos.setAttribute('class', 'divProdutosEscolhids');

let divCheckOut = document.createElement('div');
divCheckOut.setAttribute('class', 'divCheckOut');


// Funções de Soma e Subtração

let soma = 0;

function sum(lista) {
    for(let i = 0; i < lista.length; i++) {
        soma += lista[i];
    }
    return soma;
}

function subtraction(lista) {
    for(let i = 0; i < lista.length; i++) {
        soma -= lista[i];
    }
    return soma;
}

// Cria os Produtos no Carrinho de Compras

function criaProdutosCarrinho(lista) {
    for (let i = 0; i < lista.length; i++){
        let produtoNoCarrinho = lista[i];

        let container = document.createElement("div");
        container.setAttribute('class', 'containerNoCarrinho');

        let img = document.createElement('img');
        img.setAttribute('class', 'imgProdutoCarrinho');
        img.src = produtoNoCarrinho.img;

        let precoNoCarrinho = document.createElement('p');
        precoNoCarrinho.setAttribute('class', 'precoProdutoCarrinho');
        precoNoCarrinho.innerText = `R$ ${produtoNoCarrinho.value}`;

        let botaoRemover = document.createElement('button');
        botaoRemover.setAttribute('class', 'botaoRemoverProdutoCarrinho');
        botaoRemover.innerText = 'Remover Ítem';

    }
}

console.log(criaProdutosCarrinho(kits));

function constroiCardsProdutos(lista) {
    for (let i = 0; i < lista.length; i++){
        let produto = lista[i];

        // Cria a Section De Cada Seção
        let divDasSecoesProdutos = document.createElement('div');
        divDasSecoesProdutos.setAttribute('class', 'containerPrincipalDosProdutos');

        // Cria os Cards de Cada Produto
        let containerDosProdutos = document.createElement('section');
        containerDosProdutos.setAttribute('class', 'containerDosProdutos');
        
        // Cria a Figure e a IMG
        let figureDoProduto = document.createElement('figure');
        figureDoProduto.setAttribute('class', 'figureProduto');
        let imgDoProduto = document.createElement('img');
        imgDoProduto.setAttribute('class', 'imgProduto');
        imgDoProduto.src = produto.img;

        // Cria Categoria do Produto
        
        let categoria = document.createElement('p');
        categoria.setAttribute('class', 'categoria');
        categoria.innerText = produto.tag;

        // Cria a Div para a Descrição do Produto
        let descricao = document.createElement('p');
        descricao.setAttribute('class', 'descricao');
        descricao.innerText = produto.description;

        // Cria a Div para o Preço do Produto

        let preco = document.createElement('p');
        preco.setAttribute('class', 'preco');
        preco.innerText = `R$ ${produto.value}`;

        // Cria um Botão de Adicionar ao Carrinho
        let botaoAdicionar = document.createElement('button');
        botaoAdicionar.setAttribute('class', 'botaoAdicionar');
        botaoAdicionar.setAttribute('id', produto.id);
        botaoAdicionar.textContent = 'Adicionar ao Carrinho';
        //console.log(botaoAdicionar);

        // Append
        sectionPai.appendChild(divDasSecoesProdutos);
        sectionPai.appendChild(containerDosProdutos);
        containerDosProdutos.appendChild(figureDoProduto);
        figureDoProduto.appendChild(imgDoProduto);
        containerDosProdutos.appendChild(categoria);
        containerDosProdutos.appendChild(descricao);
        containerDosProdutos.appendChild(preco);
        containerDosProdutos.appendChild(botaoAdicionar);
        section.appendChild(tituloCarrinhoCompras);
        section.appendChild(divProdutosEscolhidos);
        section.appendChild(divCheckOut);
        main.appendChild(sectionPai);
        main.appendChild(section);
        body.appendChild(main);
    }

}
       
constroiCardsProdutos(kits);
constroiCardsProdutos(acessorios);
constroiCardsProdutos(placas);

console.log(arrayPrecos);





