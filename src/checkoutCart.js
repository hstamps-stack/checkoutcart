let basket = JSON.parse(localStorage.getItem("data")) || [];
let checkoutItems = document.getElementById("list-checkout-items")
let quantity = document.getElementById("confirmation-text")
console.log(checkoutItems)


let showCheckedOutItems = () =>{
    if(basket.length){
        return (checkoutItems.innerHTML = basket.map((cartItem) =>{
            let chosenItems = shopItemsData.find((selectedItem) => selectedItem.id === cartItem.id) || []
            const {img,name, price,desc} = chosenItems
            return `
            <div class="chosenItems-card">
                <img class="item" width=200 src="${img}" />
                <div class="checkout-item-desc">
                    <h4>${name}</h4>
                    <span>$${price}</span>
                    <p>${desc}</p>
                </div>
            </div>
        `
        })
        .join(""))
    }

    else{
        quantity.removeChild()
        return
    }
   
    

}

showCheckedOutItems()
