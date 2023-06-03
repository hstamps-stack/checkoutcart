const shop = document.getElementById("shop");
console.log(shop);

let basket = []

//generate shop

    let shopItemsData = 
    [
        {
            id: "kjv895948594",
            name: "Casual Shirt",
            price: 45,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore officia, iusto",
            img:"images/pexels-evg-kowalievska-1126993.jpg"
        },
        {
            id: "xj498549859",
            name: "dress",
            price: 45,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore officia, iusto",
            img:"images/pexels-evg-kowalievska-1126993.jpg"

        },
        {
            id: "f458989458948",
            name: "pants",
            price: 45,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore officia, iusto",
            img:"/images/pexels-godisable-jacob-859199.jpg"

        },
        {
            id: "kfk458489489",
            name: "tie",
            price: 45,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore officia, iusto",
            img:"images/pexels-evg-kowalievska-1126993.jpg"
        }
];
let generateShop = () => {
    return (shop.innerHTML = shopItemsData
      .map((x) => {
        let { id, name, price, desc, img } = x;

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
    

    //console.log(basket)
    updateBtn(selectedItem.id)
}
let decrement = (id) =>{
    console.log('hi')
    let selectedItem = id
    let search = basket.find((item) => item.id === selectedItem.id)
    if(search.item === 0) return

    else{
        search.item--
    }
    
   // console.log(basket)

    updateBtn(selectedItem.id)
}
let updateBtn = (id) =>{
    let search = basket.find((x) => x.id === id)
    console.log(search)
    document.getElementById(id).innerHTML = search.item
    calculation()
}

let calculation = () =>{
    let cardIcon = document.getElementById("cartAmount")
    cardIcon.innerHTML = basket.map((x) => x.item).reduce((x,y)=>x+y,0)
}

