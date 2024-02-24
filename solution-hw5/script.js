let glazing = document.querySelector("#selection-glazing")
let size = document.querySelector("#selection-packsize")

// extracting current roll
const queryString = window.location.search;
const params = new URLSearchParams(queryString)
const chosenRoll = params.get('roll')

rollType = params.get('roll')
rollPrice = rolls[rollType].basePrice
imagePath = rolls[rollType].imageFile



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

const cart=[]


class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

let glazingOptions = [
    {flavor:"Keep original", price:0},
    {flavor:"Sugar milk", price:0},
    {flavor:"Vanilla milk", price:0.5},
    {flavor:"Double Chocolate", price:1.5},
]

let sizeOptions = [
    {quantity:1, adaption:1},
    {quantity:3, adaption:3},
    {quantity:6, adaption:5},
    {quantity:12, adaption:10},
]

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

    const newRoll = new Roll(chosenRoll,selectedGlazing,selectedPackSize,basePrice)

    cart.push(newRoll)

    console.log("cart:",cart)
}






