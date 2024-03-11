function displayCartBadge(){
    const existingCart = JSON.parse(localStorage.getItem('cart'))||[]
    let cartBadge = document.getElementById('cart-badge')
    cartBadge.textContent = existingCart.length || 0
}

displayCartBadge()