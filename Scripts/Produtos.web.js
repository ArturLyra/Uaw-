const Github_LinkImageLoader = "https://raw.githubusercontent.com/AldresLuiz/UAW-ASSETS/master/imagens/";

function abrirDetalhes() {
    alert('Não sei, tentei');
}

function rateStarCounter(Produto){
    let output = "";
    for (let i = 0; i < Produto.rate; i++) {
        output += "&#9733;";
    }
    for (let i = Produto.rate; i < 5; i++) {
        output += "&#9734;";
    }
    return output;
}

export function AdicionarProdutos(ProductsParent, ProductList){
    for (let x = 0; x < ProductList.length; x++) {
        const produto_div = document.createElement("div");
        const produto_img = document.createElement("img");
        const produto_name = document.createElement("p");
        const produto_rate = document.createElement("p");
        const produto_price = document.createElement("p");

        produto_div.className = "product";

        produto_img.src = Github_LinkImageLoader + ProductList[x].image;

        produto_name.textContent = ProductList[x].name;
        produto_name.className = "product-name";

        produto_rate.innerHTML = rateStarCounter(ProductList[x]);
        produto_rate.className = "rate";

        produto_price.innerHTML = `<span>R$</span>${ProductList[x].price.toFixed(2).replace(".", ",")}`;
        produto_price.className = "product-price";

        produto_div.append(produto_img, produto_name, produto_rate, produto_price);
        ProductsParent.append(produto_div);
    }
}
