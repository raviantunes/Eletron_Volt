const data = [
    {
    "id": 1,
    "label": "Motores Elétricos",
    "img_src": "./images/antiexplosivo.jpg",
    "name": "Motor Elétrico à Prova de Explosão W22Xdb IE2 5.5 kW 2P 50Hz",
    "description": "Representa o que há de mais moderno para o acionamento de equipamentos em ambientes de atmosferas explosivas. Assegura altos níveis de rendimento, baixa manutenção e segurança.",
    "value": "R$2300.00"
    },

    {
    "id": 2,
    "label": "Motores Elétricos",
    "img_src": "./images/bombamonobloco.jpg",
    "name":"W22 Bomba Monobloco JM IR3 Premium 60cv 60Hz",
    "description": "Os motores W22 Bomba Monobloco JM possuem curta extensão do eixo, o que limita a vibração e o movimento radial, e, portanto, proporciona maior vida útil da vedação.",
    "value": "R$1900.00"
    },

    {
    "id": 3,
    "label": "Motores Elétricos",
    "img_src": "./images/MKT_WMO_EU_IMAGE_3PHASE_W22_RAL5009_143_B35T_NEMAPREMIUM_1200Wx1200H.jpg",
    "name": "W22 NEMA Premium Efficiency 1 HP 4P 60Hz Com Pés",
    "description": "Carcaça de ferro fundido, flexibilidade de forma construtiva, pés maciços e inteiriços e níveis de ruído e temperatura de operação reduzidos.",
    "value": "R$1200.00"
    },

    {
    "id": 4,
    "label": "Disjuntores",
    "img_src": "./images/WDC_Disjuntor_ACW101_1200Wx1200H.jpg",
    "name": "Disjuntor ACW101H-ETS40-3",
    "description": "Os disjuntores em caixa moldada da linha ACW são equipamentos para proteção de circuitos elétricos, manobra e proteção de motores.",
    "value": "R$135.00"
    },

    {
    "id": 5,
    "label": "Home",
    "img_src": "./images/camerainterna.jpg",
    "name": "Câmera Interna Wi-fi WHOME",
    "description": "Monitore o que acontece dentro dos espaços internos e proteja o seu patrimônio e quem você ama. Com campo de visão panorâmica de 355° e visão angular de 100°.",
    "value": "R$240.00"
},

{
    "id": 6,
    "label": "Home",
    "img_src": "./images/interruptorrefinatto.webp",
    "name": "Interruptor Refinatto LED Dourado",
    "description": "A Refinatto é uma linha modular feita para inspirar a sua natureza, com a funcionalidade e exclusividade que você precisa e merece.",
    "value": "R$70.00"
}
]

const arrayImgs = ["./images/carouselImages/img1.jpg", "./images/carouselImages/img2.jpg", "./images/carouselImages/img3.jpg", "./images/carouselImages/img4.jpg", "./images/carouselImages/img5.webp", "./images/carouselImages/img6.webp", "./images/carouselImages/img7.jpg"];
const carouselImg = document.querySelector(".carousel>img");
const divCards = document.getElementById("divCards");
const shopCartUl = document.getElementById("prodList");

function carousel(arrayImgs, carouselImg, time){
    let count = 0
    setInterval(() => {
        if(count<arrayImgs.length){
            carouselImg.src = arrayImgs[count];
            count++
        }else{
            count = 0;
        }
    }, time)
}

carousel(arrayImgs, carouselImg, 2500);


function createProductCard(data){
    
    for(let i=0; i<data.length; i++){
        
        const prodCard = document.createElement("div");
        prodCard.classList.add("cardProd");
        prodCard.id = data[i].id;
        divCards.appendChild(prodCard);
        
        const labelHolderDiv = document.createElement("div");
        labelHolderDiv.classList.add("labelDiv");
        prodCard.appendChild(labelHolderDiv);
        
        const prodLabel = document.createElement("label");
        prodLabel.classList.add("classTag");
        prodLabel.innerText = data[i].label;
        labelHolderDiv.appendChild(prodLabel);
        
        const prodFigure = document.createElement("figure");
        prodCard.appendChild(prodFigure);
        
        const prodImg = document.createElement("img");
        prodImg.classList.add("productImg");
        prodImg.src = data[i].img_src;
        prodFigure.appendChild(prodImg);
        
        const prodTitle = document.createElement("h3");
        prodTitle.classList.add("prodName");
        prodTitle.innerText = data[i].name;
        prodCard.appendChild(prodTitle);
        
        const descrip = document.createElement("p");
        descrip.classList.add("prodDescr");
        descrip.innerText = data[i].description;
        prodCard.appendChild(descrip);
        
        const priceSpan = document.createElement("span");
        priceSpan.classList.add("price");
        priceSpan.innerText = data[i].value;
        prodCard.appendChild(priceSpan);
        
        const addToCartButton = document.createElement("button");
        addToCartButton.type = "button";
        addToCartButton.classList.add("addToCart");
        addToCartButton.innerText = "Adicionar ao carrinho";
        addToCartButton.addEventListener("click", function(event){
            let id = event.target.parentNode;
            createShopCartItem(id.id);
        });
        prodCard.appendChild(addToCartButton);
        
        const vitrine = document.querySelector(".mainSection");
        vitrine.appendChild(divCards);
    }
}

createProductCard(data);


function createShopCartItem(product){
    
    const emptyCart = document.querySelector("#emptyCart")
    const addItems = document.querySelector("#adicioneItens")
    emptyCart.style.display = "none";
    addItems.style.display = "none";
    
    const prodLi = document.createElement("li");
    prodLi.id = `${product}x`;
    shopCartUl.appendChild(prodLi);
    
    const shopCartElemDiv = document.createElement("div");
    shopCartElemDiv.classList.add("cartProducts")
    prodLi.appendChild(shopCartElemDiv);
    
    const prodImg = document.createElement("img");
    prodImg.src = data[parseInt(product-1)].img_src;
    shopCartElemDiv.appendChild(prodImg);
    
    const prodTitle = document.createElement("h3");
    prodTitle.innerText = data[parseInt(product-1)].name;
    shopCartElemDiv.appendChild(prodTitle);
    
    const price = document.createElement("span");
    price.innerText = data[parseInt(product-1)].value;
    shopCartElemDiv.appendChild(price);
    
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.classList.add("removeFromCart");
    removeButton.innerText = "Remover";
    removeButton.addEventListener("click", (event) => {
        let product = event.target.parentNode.parentNode;
        removeFromCart(product.id);
        cartSub()
        cartRmAllVerifier()
    });
    shopCartElemDiv.appendChild(removeButton);    
    
    
    addToCartVerifier()
    cartAdd()
}

function addToCartVerifier(){
    if(!document.querySelector(".cartBottomDiv")){
        const cartBottomDiv = document.createElement("div")
        cartBottomDiv.classList.add("cartBottomDiv")
        
        const remAllButton = document.createElement("button");
        remAllButton.type = "button";
        remAllButton.classList.add("removeAll");
        remAllButton.innerText = "Limpar carrinho";
        remAllButton.style.display = "inline";
        remAllButton.addEventListener("click", () => {
            
            list = document.querySelectorAll(".cartProducts")
            
            for(let i=0; i<list.length; i++){
                shopCartUl.removeChild(list[i].parentNode)
            }

            const cartCounter = document.querySelector(".cartCounter")
            cartCounter.value = 0

            cartRmAllVerifier()
        })
        
        const counterDiv = document.createElement("div")
        counterDiv.classList.add("counterDiv")
        
        const prodsQt = document.createElement("span")
        prodsQt.innerText = "Qtd. produtos: "
        const cartCounter = document.createElement("span")
        cartCounter.classList.add("cartCounter")
        cartCounter.value = 0
        cartCounter.innerText = `${cartCounter.value}`
        counterDiv.appendChild(prodsQt)
        counterDiv.appendChild(cartCounter)
        
        cartBottomDiv.appendChild(remAllButton)
        cartBottomDiv.appendChild(counterDiv)
        shopCartUl.appendChild(cartBottomDiv)
        
    }else{

        const emptyCart = document.querySelector("#emptyCart")
        const addItems = document.querySelector("#adicioneItens")
        const remAllButton = document.querySelector(".removeAll")
        const counterDiv = document.querySelector(".counterDiv")

        emptyCart.style.display = "none";
        addItems.style.display = "none";
        remAllButton.style.display = "inline";
        counterDiv.style.display = "inline"
    }
}

function cartRmAllVerifier(){
    const cartBottomDiv = document.querySelector(".cartBottomDiv");
    const remAllButton = document.querySelector(".removeAll")
    const counterDiv = document.querySelector(".counterDiv")
    const cartCounter = document.querySelector(".cartCounter")
    const emptyCart = document.querySelector("#emptyCart")
    const addItems = document.querySelector("#adicioneItens")
    
    if(cartCounter.value >= 1){
        emptyCart.style.display = "none";
        addItems.style.display = "none";
        remAllButton.style.display = "inline";
        counterDiv.style.display = "inline";
        
    }else{
        emptyCart.style.display = "inline";
        addItems.style.display = "inline";
        remAllButton.style.display = "none";
        counterDiv.style.display = "none";
    }
}

function cartAdd(){
    const cartCounter = document.querySelector(".cartCounter")
    cartCounter.value += 1
    cartCounter.innerText = `${cartCounter.value}`
}

 function cartSub(){
    const cartCounter = document.querySelector(".cartCounter")
    cartCounter.value -= 1
    cartCounter.innerText = `${cartCounter.value}`
 }

function removeFromCart(event){
    let removable = document.getElementById(`${event}`);
    let mainDiv = document.getElementById("prodList");
    mainDiv.removeChild(removable);
    cartRmAllVerifier()
}


function filteredProds(){
    const search = document.querySelector(".searchTxt")
    
    search.addEventListener("keyup", () => {
        const filteredData = data.filter((product) => 
        product.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()) 
        || product.label.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())
        )
        divCards.innerHTML = "" 
        createProductCard(filteredData)

        if(filteredData.length === 0){
            const noProdsFilter = document.createElement("h3")
            noProdsFilter.innerText = "Nenhum produto foi encontrado"
            noProdsFilter.classList.add("noProdsFilter")
            divCards.appendChild(noProdsFilter)
        }

        if(search.value === ""){
            divCards.innerHTML = "" 
            createProductCard(data)
        }
    })
    
}

filteredProds()