// create Roll class
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
    
}

// initialize glazing and size
let glazing = document.querySelector("#selection-glazing")
let size = document.querySelector("#selection-packsize")
let addButton = document.querySelector('.yellow-button')

// extracting current roll
const queryString = window.location.search;
const params = new URLSearchParams(queryString)
const chosenRoll = params.get('roll')

addButton.addEventListener('click',addCart)
addButton.addEventListener('click',displayCartBadge)


// Glazing Options to Select
for (let i = 0; i<glazingOptions.length; i++){
    var option = document.createElement('option')
    option.text = glazingOptions[i].flavor
    option.value = glazingOptions[i].price
    glazing.add(option)
}

// Pack Size Options to select
for (let i = 0; i<sizeOptions.length; i++){
    var option = document.createElement('option')
    option.text = sizeOptions[i].quantity
    option.value = sizeOptions[i].adaption
    size.add(option)
}

// update header
let pageHeader = document.querySelector(".introduction")
pageHeader.innerText = chosenRoll + " Cinnamon Roll"

// update product image
let pageImg = document.querySelector('.page-image')
let imgPath = "assets/products/"+rolls[chosenRoll].imageFile
pageImg.src=imgPath

// update Price
let priceShown=document.querySelector('.price')
let basePrice = rolls[chosenRoll].basePrice

priceShown.innerText="$"+basePrice

function displayPrice(glazingToDisplay, sizeToDisplay){
    // get the option and pack size
    // calculate the final price based on them
    // display total price

    let individualPrice = basePrice+glazingToDisplay
    let finalPrice = individualPrice*sizeToDisplay

    let totalPrice = document.querySelector(".price")
    totalPrice.innerText="$"+finalPrice.toFixed(2)
}

function priceChange() {
    // get value of selected glazing option
    // get the index from original selection
    // find corresponding option from list above

    let glazingSelected = document.querySelector("#selection-glazing")
    let sizeSelected = document.querySelector("#selection-packsize")

    let glazingToDisplay = parseFloat(glazingSelected.value)

    let sizeToDisplay = parseFloat(sizeSelected.value)

    displayPrice(glazingToDisplay,sizeToDisplay)
  }

function addCart(){
    
    let glazingSelect = document.querySelector("#selection-glazing")
    let sizeSelect = document.querySelector("#selection-packsize")

    let selectedGlazing = glazingOptions[glazingSelect.selectedIndex].flavor
    let selectedPackSize = sizeOptions[sizeSelect.selectedIndex].quantity


    const existingCart = JSON.parse(localStorage.getItem('cart'))||[]
    const newRoll = new Roll(chosenRoll,selectedGlazing,selectedPackSize,basePrice)

    existingCart.push(newRoll)

    console.log("cart:",existingCart)
    localStorage.setItem('cart',JSON.stringify(existingCart))
}

function displayCartBadge(){
    const existingCart = JSON.parse(localStorage.getItem('cart'))||[]
    let cartBadge = document.getElementById('cart-badge')
    cartBadge.textContent = existingCart.length || 0
}

displayCartBadge()











