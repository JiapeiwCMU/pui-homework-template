let glazingOptions = [
    {"Keep original":0},
    {"Sugar milk":0},
    {"Vanilla milk":0.5},
    {"Double chocolate":1.5}
]

let priceOptions = [
    {"1":1},
    {"3":3},
    {"6":5},
    {"12":10}
]

let originalPrice = document.querySelector(".price")


// let glazingValue = glazingDropdown.value
// let packValue = packDropdown.value


// let glazingPrice = glazinOptions.glazingValue
// let packSize = priceOptions.packValue

// console.log("total:",(originalPrice+glazingPrice)*packSize)

// function displayPrice(price){

// }
function displayPrice(glazing,size){
    // Display the price after calculation
    // querySelector to retrieve the price
    let finalPrice = (originalPrice+glazingOptions.glazing)*priceOptions.size


}

function onSelectValueChange(){
    // get the current information from selection
    // call displayPrice with the index

    let selectionIndex = parseInt(this.value)
    console.log("selection Index=", celectionIndex)
}

let selectElement = document.querySelector(".selection-glazing")

selectElement.addEventListener('change',onSelectValueChange)

