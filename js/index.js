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
let paragNaDivCheckOut = document.createElement('p');
paragNaDivCheckOut.setAttribute('class', 'paragNaDivCheckOut');

paragAtualizavel = document.createElement('p');
paragAtualizavel.setAttribute('class', 'paragAtualizavel');

let divCheckOutBtn = document.createElement('button');
divCheckOutBtn.setAttribute('class', 'divCheckOutBtn');
divCheckOutBtn.setAttribute('id', 'idBtnCheckOut');
divCheckOutBtn.innerText = 'Check Out';

let divPrincipalCarrinho = document.createElement('div');
divPrincipalCarrinho.setAttribute('class', 'divPrincipalCarrinho');

let count = 0;
//console.log(count);

//criaProdutosCarrinho(kits)

function constroiCardsProdutos(lista) {
    for (let i = 0; i < lista.length; i++){
        let produto = lista[i];

        // Cria a Section De Cada Seção
        let divDasSecoesProdutos = document.createElement('div');
        divDasSecoesProdutos.setAttribute('class', 'containerPrincipalDosProdutos');
        divDasSecoesProdutos.id = 'div'+produto.id;
        //console.log(divDasSecoesProdutos);

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

        let nomeDoProduto = document.createElement('h4');
        nomeDoProduto.setAttribute('class', 'nomeDoProduto');
        nomeDoProduto.innerText = produto.nameItem;
        
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
        containerDosProdutos.appendChild(nomeDoProduto);
        containerDosProdutos.appendChild(categoria);
        containerDosProdutos.appendChild(descricao);
        containerDosProdutos.appendChild(preco);
        containerDosProdutos.appendChild(botaoAdicionar);
        divTituloCarrinhoCompras.appendChild(tituloCarrinhoCompras);
        divCheckOut.appendChild(paragNaDivCheckOut);
        divCheckOut.appendChild(paragAtualizavel);
        section.appendChild(divProdutosEscolhidos);
        section.appendChild(divCheckOut);
        section.appendChild(divCheckOutBtn);
        divPrincipalCarrinho.appendChild(divTituloCarrinhoCompras);
        divPrincipalCarrinho.appendChild(section);
        main.appendChild(sectionPai);
        main.appendChild(divPrincipalCarrinho);
        body.appendChild(main);
    }

}
      
constroiCardsProdutos(kits);
constroiCardsProdutos(acessorios)
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
    botaoRemover.id = 'r'+lista.id;
    //console.log(botaoRemover);
    botaoRemover.innerText = 'Remover Item';

    container.appendChild(imgCarrinho);
    container.appendChild(precoNoCarrinho);
    container.appendChild(botaoRemover);
    divProdutosEscolhidos.appendChild(container);
    

    botaoRemover.addEventListener('click', function(e) {
        let id = e.target.id;
        //console.log(id);
        if(id == 'r20') {
            count -= data[19].value;
            
            paragNaDivCheckOut.innerText = `R$ ${count},00`;
            let divASerTirada = document.getElementById('c20');
            divASerTirada.remove();
          
        } else if(id == 'r19') {

            count -= data[18].value;
            paragNaDivCheckOut.innerText = `R$ ${count},00`;

            let divASerTirada = document.getElementById('c19');
            divASerTirada.remove();
            
        } else if(id == 'r18') {

            count -= data[17].value;
            paragNaDivCheckOut.innerText = `R$ ${count},00`;

            let divASerTirada = document.getElementById('c18');
            divASerTirada.remove();
            
        } else if(id == 'r17') {
           
            count -= data[16].value;
            paragNaDivCheckOut.innerText = `R$ ${count},00`;

            let divASerTirada = document.getElementById('c17');
            divASerTirada.remove();
            
        } else if(id == 'r16') {
           
            count -= data[15].value;
            paragNaDivCheckOut.innerText = `R$ ${count},00`;

            let divASerTirada = document.getElementById('c16');
            divASerTirada.remove();
        
        } else if(id == 'r15') {
            
            count -= data[14].value;
            paragNaDivCheckOut.innerText = `R$ ${count},00`;

            let divASerTirada = document.getElementById('c15');
            divASerTirada.remove();
        
        } else if(id == 'r14') {
            
            count -= data[13].value;
            paragNaDivCheckOut.innerText = `R$ ${count},00`;

            let divASerTirada = document.getElementById('c14');
            divASerTirada.remove();
        
        } else if (id == 'r13') {
            
            count -= data[12].value;
            paragNaDivCheckOut.innerText = `R$ ${count},00`;

            let divASerTirada = document.getElementById('c13');
            divASerTirada.remove();
        
        } else if(id == 'r12') {

            count -= data[11].value;
            paragNaDivCheckOut.innerText = `R$ ${count},00`;

            let divASerTirada = document.getElementById('c12');
            divASerTirada.remove();
        
        } else if(id == 'r11') {
           
            count -= data[10].value;
            paragNaDivCheckOut.innerText = `R$ ${count},00`;

            let divASerTirada = document.getElementById('c11');
            divASerTirada.remove();
        
        } else if(id == 'r10') {
            
            count -= data[9].value;
            paragNaDivCheckOut.innerText = `R$ ${count},00`;

            let divASerTirada = document.getElementById('c10');
            divASerTirada.remove();
        
        } else if(id == 'r9') {
            
            count -= data[8].value;
            paragNaDivCheckOut.innerText = `R$ ${count},00`;

            let divASerTirada = document.getElementById('c9');
            divASerTirada.remove();
            
        } else if(id == 'r8') {
            
            count -= data[7].value;
            paragNaDivCheckOut.innerText = `R$ ${count},00`;

            let divASerTirada = document.getElementById('c8');
            divASerTirada.remove();

        } else if(id == 'r7') {
            
            count -= data[6].value;
            paragNaDivCheckOut.innerText = `R$ ${count},00`;

            let divASerTirada = document.getElementById('c7');
            divASerTirada.remove();

        } else if(id == 'r6') {
            
            count -= data[5].value;
            paragNaDivCheckOut.innerText = `R$ ${count},00`;

            let divASerTirada = document.getElementById('c6');
            divASerTirada.remove();

        } else if(id == 'r5') {
            
            count -= data[4].value;
            paragNaDivCheckOut.innerText = `R$ ${count},00`;

            let divASerTirada = document.getElementById('c5');
            divASerTirada.remove();

        } else if(id == 'r4') {
            
            count -= data[3].value;
            paragNaDivCheckOut.innerText = `R$ ${count},00`;

            let divASerTirada = document.getElementById('c4');
            divASerTirada.remove();

        } else if(id == 'r3') {
            
            count -= data[2].value;
            paragNaDivCheckOut.innerText = `R$ ${count},00`;

            let divASerTirada = document.getElementById('c3');
            divASerTirada.remove();

        } else if(id == 'r2') {
            
            count -= data[1].value;
            paragNaDivCheckOut.innerText = `R$ ${count},00`;

            let divASerTirada = document.getElementById('c2');
            divASerTirada.remove();

        } else if(id == 'r1') {
            
            count -= data[0].value;
            paragNaDivCheckOut.innerText = `R$ ${count},00`;

            let divASerTirada = document.getElementById('c1');
            divASerTirada.remove();
        }
        //console.log(count);
    });
}

// Percorre os Botões Criados

let botoes =  document.querySelectorAll('.botaoAdicionar');
//console.log(botoes);

for(let i = 0; i < botoes.length; i++) {
        let botao = botoes[i];

        botao.addEventListener('click', function(e){
            let idElemento = e.target.id;
            let id = parseInt(idElemento.substring(4));
            //console.log(id);
            
            let carrinho = procuraProduto(id);
            //console.log(carrinho);

            let cardNoCarrinho = criaProdutosCarrinho(carrinho);
            //console.log(cardNoCarrinho);
            
            if(id == 1) {
               
                count += data[0].value;
                paragNaDivCheckOut.innerText = `R$ ${count},00`;
                
            } else if(id == 2) {
                
                count += data[1].value;
                paragNaDivCheckOut.innerText = `R$ ${count},00`;
                
            } else if(id == 3) {
                
                count += data[2].value;
                paragNaDivCheckOut.innerText = `R$ ${count},00`;
                
            } else if(id == 4) {
                
                count += data[3].value;
                paragNaDivCheckOut.innerText = `R$ ${count},00`;
                
            } else if(id == 5) {
                
                count += data[4].value;
                paragNaDivCheckOut.innerText = `R$ ${count},00`;
            
            } else if(id == 6) {
                
                count += data[5].value;
                paragNaDivCheckOut.innerText = `R$ ${count},00`;
            
            } else if(id == 7) {
                
                count += data[6].value;
                paragNaDivCheckOut.innerText = `R$ ${count},00`;
            
            } else if (id == 8) {
                
                count += data[7].value;
                paragNaDivCheckOut.innerText = `R$ ${count},00`;
            
            } else if(id == 9) {
                
                count += data[8].value;
                paragNaDivCheckOut.innerText = `R$ ${count},00`;
            
            } else if(id == 10) {
                
                count += data[9].value;
                paragNaDivCheckOut.innerText = `R$ ${count},00`;
            
            } else if(id == 11) {
                
                count += data[10].value;
                paragNaDivCheckOut.innerText = `R$ ${count},00`;
            
            } else if(id == 12) {
                
                count += data[11].value;
                paragNaDivCheckOut.innerText = `R$ ${count},00`;
                
            } else if(id == 13) {
                
                count += data[12].value;
                paragNaDivCheckOut.innerText = `R$ ${count},00`;

            } else if(id == 14) {
                
                count += data[13].value;
                paragNaDivCheckOut.innerText = `R$ ${count},00`;

            } else if(id == 15) {
               
                count += data[14].value;
                paragNaDivCheckOut.innerText = `R$ ${count},00`;

            } else if(id == 16) {
                
                count += data[15].value;
                paragNaDivCheckOut.innerText = `R$ ${count},00`;

            } else if(id == 17) {
                
                count += data[16].value;
                paragNaDivCheckOut.innerText = `R$ ${count},00`;

            } else if(id == 18) {
                
                count += data[17].value;
                paragNaDivCheckOut.innerText = `R$ ${count},00`;

            } else if(id == 19){
                
                count += data[18].value;
                paragNaDivCheckOut.innerText = `R$ ${count},00`;

            } else if(id == 20) {
                
                count += data[19].value;
                paragNaDivCheckOut.innerText = `R$ ${count},00`;
            }
            return count;
       });
   
}

// Event Listener do Botão de Checkout

divCheckOutBtn.addEventListener("click", function(e){
    let divCheckOutComTexto = document.querySelector('.divCheckOut');

    paragNaDivCheckOut.innerText = `R$ ${count},00`
    
});

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

// Obtém os IDs dos Elementos HTML
let kitsId = document.getElementById('kits');
let placasId = document.getElementById('placas');
let acessoriosId = document.getElementById('acessorios');
let todoId = document.getElementById('todos');

// Filtra os elementos a serem apresentados

let filtroAcessorio = data.filter(function (obj) {return obj.tag == 'Acessorios'});
let filtroPlaca = data.filter(function (obj) {return obj.tag == "Placas"});


kitsId.addEventListener('click', function(){
    //console.log('clicou');
    let section = document.querySelector('.containerPrincipal');
    section.innerHTML = "";
    //console.log(div);
    const arrayKits = [];


    for(let i = 0; i < data.length; i++) {
        let elementoData = data[i];
        //console.log(elementoData);

        if(elementoData.tag[0] == 'Kits'){
            console.log(elementoData);
            arrayKits.push(elementoData);
            
        }

    }
    //console.log(arrayKits);
    constroiCardsProdutos(arrayKits);
   
    
});

placasId.addEventListener('click', function(){
  //console.log('clicou');
  let section = document.querySelector('.containerPrincipal');
    section.innerHTML = "";
    //console.log(div);
    const arrayPlacas = new Array();


    for(let i = 0; i < data.length; i++) {
        let elementoData = data[i];
        //console.log(elementoData);

        if(elementoData.tag[0] == 'Placas'){
            console.log(elementoData);
            arrayPlacas.push(elementoData);
            
        }

    }
    //console.log(arrayKits);
    constroiCardsProdutos(arrayPlacas);
});

acessoriosId.addEventListener('click', function(){
  //console.log('clicou');
  let section = document.querySelector('.containerPrincipal');
    section.innerHTML = "";
    //console.log(div);
    const arrayAcessorios = new Array();

    for(let i = 0; i < data.length; i++) {
        let elementoData = data[i];
        //console.log(elementoData);

        if(elementoData.tag[0] == 'Acessórios'){
            console.log(elementoData);
            arrayAcessorios.push(elementoData);
            
        }

    }
    //console.log(arrayKits);
    constroiCardsProdutos(arrayAcessorios);
});

todoId.addEventListener('click', function(){
  //console.log('clicou');
  let section = document.querySelector('.containerPrincipal');
  section.innerHTML = "";

  constroiCardsProdutos(data);


});

//console.log(count);






