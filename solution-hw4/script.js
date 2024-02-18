let glazingOptions = [
    {add:0},
    {add:0},
    {add:0.5},
    {add:1.5},
]

let priceOptions = [
    {size:1},
    {size:3},
    {size:5},
    {size:10},
]


let basePrice = 2.49
let glazingSelect = document.querySelector("#selection-glazing")
console.log(glazingSelect)
let sizeSelect = document.querySelector("#selection-packsize")
console.log(sizeSelect)



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
    let sizeToDisplay = priceOptions[sizeIndex]

    console.log(glazingToDisplay)
    console.log(sizeToDisplay)

    displayPrice(glazingToDisplay,sizeToDisplay)
    

  }



