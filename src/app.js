const shop = document.getElementById("shop");
console.log(shop);

let basket = JSON.parse(localStorage.getItem("data")) || [];

//generate shop

   
let generateShop = () => {
    return (shop.innerHTML = shopItemsData
      .map((x) => {
        let { id, name, price, desc, img } = x;
        let search = basket.find((x) => x.id === id) || []
        return `
      <div id=product-id-${id} class="item">
          <img width="220" src=${img} alt="">
          <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
              <h2>$ ${price} </h2>
              <div class="buttons">
                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                <div id=${id} class="quantity">
                    ${search.item === undefined? 0: search.item}
                </div>
                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
              </div>
            </div>
          </div>
        </div>
      `;
      })
      .join(""));
  };
   




generateShop();

let increment = (id) =>{
    let selectedItem = id
    let search = basket.find((item) => item.id === selectedItem.id)
    if(search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1
        })
    }
    else{
        search.item++
    }
    
    // localStorage

    localStorage.setItem("data", JSON.stringify(basket))

    //console.log(basket)
    updateBtn(selectedItem.id)
}
let decrement = (id) =>{
    let selectedItem = id
    let search = basket.find((item) => item.id === selectedItem.id)
    
    if(search === undefined) return

     else if(search.item === 0) return

     else {
        search.item--
     }
    

    updateBtn(selectedItem.id)
   
    basket = basket.filter((cartItem) => cartItem.item !== 0)
    
    localStorage.setItem("data", JSON.stringify(basket))
}
let updateBtn = (id) =>{
    let search = basket.find((x) => x.id === id)
    document.getElementById(id).innerHTML = search.item
    calculation()
}

let calculation = () =>{
    let cardIcon = document.getElementById("cartAmount")
    cardIcon.innerHTML = basket.map((x) => x.item).reduce((x,y)=>x+y,0)
}

calculation();

