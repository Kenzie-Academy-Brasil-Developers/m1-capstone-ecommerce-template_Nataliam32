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

// Constrói o Título do Carrinho de Compras

let divTituloCarrinhoCompras = document.createElement('div');
divTituloCarrinhoCompras.setAttribute('class', 'tituloCarrinhoCommpras');

let tituloCarrinhoCompras = document.createElement('h4');
tituloCarrinhoCompras.setAttribute('class', 'tituloCarrinhoCompras');
tituloCarrinhoCompras.innerText = 'Carrinho de Compras';

// Constroi o Carrinho de Compras

let section = document.createElement('section');
section.setAttribute('class', 'containerSection');

let divProdutosEscolhidos = document.createElement('div');
divProdutosEscolhidos.setAttribute('class', 'divProdutosEscolhids');

let divCheckOut = document.createElement('div');
divCheckOut.setAttribute('class', 'divCheckOut');
let divCheckOutBtn = document.createElement('button');
divCheckOutBtn.setAttribute('class', 'divCheckOutBtn');
divCheckOutBtn.setAttribute('id', 'idBtnCheckOut');
divCheckOutBtn.innerText = 'Check Out';

let divPrincipalCarrinho = document.createElement('div');
divPrincipalCarrinho.setAttribute('class', 'divPrincipalCarrinho');


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

//criaProdutosCarrinho(kits)

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
        botaoAdicionar.setAttribute('id', 'btn_'+produto.id);
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
        divTituloCarrinhoCompras.appendChild(tituloCarrinhoCompras);
        section.appendChild(divProdutosEscolhidos);
        section.appendChild(divCheckOutBtn);
        section.appendChild(divCheckOut);
        divPrincipalCarrinho.appendChild(divTituloCarrinhoCompras);
        divPrincipalCarrinho.appendChild(section);
        main.appendChild(sectionPai);
        main.appendChild(divPrincipalCarrinho);
        body.appendChild(main);
    }

}


       
constroiCardsProdutos(kits);
constroiCardsProdutos(acessorios);
constroiCardsProdutos(placas);

// Cria os Produtos no Carrinho de Compras

function criaProdutosCarrinho(lista) {

        // Cria a Section De Cada Seção
    let container = document.createElement("div");
    container.setAttribute("class", "containerNoCarrinho");
    container.id = 'c'+lista.id;

    let imgCarrinho = document.createElement('img');
    imgCarrinho.setAttribute('class', 'imgProdutoCarrinho');
    imgCarrinho.src = lista.img;

    let precoNoCarrinho = document.createElement('p');
    precoNoCarrinho.setAttribute('class', 'precoProdutoCarrinho');
    precoNoCarrinho.innerText = `R$ ${lista.value}`;

    let botaoRemover = document.createElement('button');
    botaoRemover.setAttribute('class', 'botaoRemoverProdutoCarrinho');
    botaoRemover.id = 'r'+lista.id
    botaoRemover.innerText = 'Remover Item';

    container.appendChild(imgCarrinho);
    container.appendChild(precoNoCarrinho);
    container.appendChild(botaoRemover);
    divProdutosEscolhidos.appendChild(container);       
}

// Percorre os Botões Criados

let botoes =  document.querySelectorAll('.botaoAdicionar');
//console.log(botoes);

let total = new Array();

for(let i = 0; i < botoes.length; i++) {
    let botao = botoes[i];
    
    botao.addEventListener('click', function(e) {
        let idElemento = e.target.id;
        let id = parseInt(idElemento.substring(4));
        //console.log(id);
        
        let carrinho = procuraProduto(id);
        //console.log(carrinho);

        let cardNoCarrinho = criaProdutosCarrinho(carrinho);
        //console.log(cardNoCarrinho);

        if(id == 1) {
            total.push(arrayPrecos[0]);
            
        } else if(id == 2) {
            total.push(arrayPrecos[1]);
            
        } else if(id == 3) {
            total.push(arrayPrecos[2]);
            
        } else if(id == 4) {
            total.push(arrayPrecos[3]);
            
        } else if(id == 5) {
            total.push(arrayPrecos[4]);
           
        } else if(id == 6) {
            total.push(arrayPrecos[5]);
           
        } else if(id == 7) {
            total.push(arrayPrecos[6]);
           
        } else if (id == 8) {
            total.push(arrayPrecos[7]);
           
        } else if(id == 9) {
            total.push(arrayPrecos[8]);
           
        } else if(id == 10) {
            total.push(arrayPrecos[9]);
           
        } else if(id == 11) {
            total.push(arrayPrecos[10]);
           
        } else if(id == 12) {
            total.push(arrayPrecos[11]);
            
        } else if(id == 13) {
            total.push(arrayPrecos[12]);
        } else if(id == 14) {
            total.push(arrayPrecos[13]);
        } else if(id == 15) {
            total.push(arrayPrecos[14]);
        } else if(id == 16) {
            total.push(arrayPrecos[15]);
        } else if(id == 17) {
            total.push(arrayPrecos[16]);
        } else if(id == 18) {
            total.push(arrayPrecos[17]);
        } else if(id == 19){
            total.push(arrayPrecos[18]);
        } else if(id == 20) {
            total.push(arrayPrecos[19]);
        }
        console.log(total);

        // let sectionDoCarrinho = document.querySelector('.containerSection');  
    });
}


function procuraProduto(id) {
   
    for(let i = 0; i < data.length; i++){
        let elementoData = data[i];
        //console.log(elementoData);

        if(elementoData.id == id){
            return elementoData;
        }
    }
   
    return 'Erro';
}








