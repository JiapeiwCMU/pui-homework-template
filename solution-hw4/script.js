const rollsData = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

let glazingOptions = [
    {label:"Keep original", add:0},
    {label:"Sugar milk", add:0},
    {label:"Vanilla milk", add:0.5},
    {label:"Double Chocolate", add:1.5},
]

let sizeOptions = [
    {label:"1",size:1},
    {label:"3",size:3},
    {label:"6",size:5},
    {label:"12",size:10},
]






function displayPrice(glazingToDisplay, sizeToDisplay){
    // get the option and pack size
    // calculate the final price based on them
    // display total price
    let glazingPrice = glazingToDisplay.add
    let packSize = sizeToDisplay.size

    let individualPrice = basePrice+glazingPrice
    let finalPrice = individualPrice*packSize

    let totalPrice = document.querySelector(".price")
    totalPrice.innerText="$"+finalPrice.toFixed(2)

}

function priceChange() {
    // get value of selected glazing option
    // get the index from original selection
    // find corresponding option from list above

    let glazing = document.querySelector("#selection-glazing")
    let size = document.querySelector("#selection-packsize")
    
    let glazingIndex = parseInt(glazing.value)

    let sizeIndex = parseInt(size.value)

    let glazingToDisplay = glazingOptions[glazingIndex]
    let sizeToDisplay = sizeOptions[sizeIndex]

    displayPrice(glazingToDisplay,sizeToDisplay)
  }

// extracting current roll
const queryString = window.location.search;
const params = new URLSearchParams(queryString)
const chosenRoll = params.get('roll')

// update header
let pageHeader = document.querySelector(".introduction")
pageHeader.innerText = chosenRoll + " Cinnamon Roll"

// update product image
let pageImg = document.querySelector('.page-image')
let imgPath = "assets/products/"+rollsData[chosenRoll].imageFile
pageImg.src=imgPath

// update Price
let priceShown=document.querySelector('.price')
let basePrice = rollsData[chosenRoll].basePrice
priceShown.innerText="$"+basePrice

const cart=[]


function addCart(){
    let glazingSelect = document.querySelector("#selection-glazing")
    let sizeSelect = document.querySelector("#selection-packsize")

    let selectedGlazing = glazingOptions[glazingSelect.selectedIndex].label
    let selectedPackSize = sizeOptions[sizeSelect.selectedIndex].label
    
    // let selectedGlazing = glazingSelect.value
    // let selectedPackSize = sizeSelect.value

    const newRoll = new Roll(chosenRoll,selectedGlazing,selectedPackSize,basePrice)

    cart.push(newRoll)

    console.log("cart:",cart)
}






