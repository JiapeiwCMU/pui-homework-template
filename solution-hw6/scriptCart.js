const shoppingCart=new Set()


class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        this.rollTotalPrice = this.calculateTotalPrice()
    }
    calculateTotalPrice(){
        const glazingPrice = parseFloat(allGlazings[this.glazing])
        const rollPackSize = allSizes[this.size]
        let rollTotalPrice = (this.basePrice + glazingPrice)*rollPackSize
        return rollTotalPrice
    }
}

// all glazings as a dictionary 
const allGlazings = 
{
    'Keep Original':0,
    'Sugar Milk':0,
    "Vanilla Milk":0.5,
    'Double Chocolate':1.5
}

// all sizes as a dictionary
const allSizes = 
{
    '1':1,
    '3':3,
    '6':5,
    '12':10
}

// // create 4 new rolls
// newRoll1 = createNewRoll("Original","Sugar Milk",1,2.49)
// newRoll2 = createNewRoll("Walnut","Vanilla Milk",12,3.49)
// newRoll3 = createNewRoll("Raisin","Sugar Milk",3,2.99)
// newRoll4 = createNewRoll("Apple","Original",3,3.49)

// HW 5
function createNewRoll(rollType, rollGlazing, packSize, basePrice){
    const newRoll = new Roll(rollType, rollGlazing, packSize, basePrice)
    shoppingCart.add(newRoll)
    createElement(newRoll)
    console.log(newRoll)
    return newRoll
}


function createElement(newRoll){
    const template = document.querySelector('#cart-template')
    const clone = template.content.cloneNode(true)
    newRoll.element = clone.querySelector('.cart-item')

    let removeButton = newRoll.element.querySelector("#cartRemove")

    removeButton.addEventListener('click',()=>{deleteRoll(newRoll);})


    const shoppingCartList = document.querySelector('.shoppingCartSummary')
    shoppingCartList.prepend(newRoll.element)
    updateElement(newRoll)



}

function updateElement(newRoll){
    let rollImg = newRoll.element.querySelector('.shoppingCartImg img')
    let rollTitle = newRoll.element.querySelector('.cartItemTitle')
    let rollGlazing = newRoll.element.querySelector('.cartItemGlazing')
    let rollSize = newRoll.element.querySelector('.cartItemSize')
    let rollPrice = newRoll.element.querySelector('.cartItemPrice')
    let cartTotalPrice = document.querySelector('.cart-total-price')
    let totalPrice = getTotalCartPrice()

    rollImg.src = "assets/products/" + newRoll.type.toLowerCase() + "-cinnamon-roll.jpg";
    rollTitle.innerHTML = newRoll.type + " Cinnamon Roll";
    rollGlazing.innerHTML = newRoll.glazing;
    rollSize.innerHTML = "Pack Size: " + newRoll.size;
    rollPrice.innerHTML = '$ ' + newRoll.rollTotalPrice.toFixed(2);
    cartTotalPrice.innerHTML = totalPrice;
}


function deleteRoll(newRoll){
    newRoll.element.remove()
    shoppingCart.delete(newRoll)
    updateElement(newRoll)

    const updatedCartArray = Array.from(shoppingCart)
    localStorage.setItem('cart',JSON.stringify(updatedCartArray))
    displayCartBadge()

}


function getTotalCartPrice(){
    let totalCartPrice = 0
    for (let item of shoppingCart){
        totalCartPrice += item.rollTotalPrice
    }
    return "$"+totalCartPrice.toFixed(2)
}


function retrieveFromLocalStorage(){
    const cartString = localStorage.getItem('cart')
    const storedCart = JSON.parse(cartString)
    shoppingCart.clear()

    for(let i=0; i<storedCart.length;i++){
        const rollItem = storedCart[i]
        createNewRoll(rollItem.type, rollItem.glazing, rollItem.size, rollItem.basePrice)
    }
}


retrieveFromLocalStorage()

function displayCartBadge(){
    const existingCart = JSON.parse(localStorage.getItem('cart'))||[]
    let cartBadge = document.getElementById('cart-badge')
    cartBadge.textContent = existingCart.length || 0
}

displayCartBadge()

