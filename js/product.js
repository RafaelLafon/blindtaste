const btnMinus = document.querySelector('.btn-minus');
const btnPlus = document.querySelector('.btn-plus');
const quantityDisplay = document.querySelector('.quantity-value'); 
const priceDisplay = document.querySelector('.old-price'); 
const btnOrder = document.querySelector('.btn-order'); 

const toggleBtn = document.querySelector(".toggle-btn");
const extraInfo = document.querySelector(".extra-info");

let quantity = 1;
let pricePerUnit = 15;
let price = pricePerUnit; 

function loadCartData() {
    const storedQuantity = localStorage.getItem('quantity');
    const storedTotalPrice = localStorage.getItem('totalPrice');

    if (storedQuantity && storedTotalPrice) {
        quantity = parseInt(storedQuantity);
        price = parseFloat(storedTotalPrice);
        updateQuantityAndPrice();
        console.log('Données chargées depuis le Local Storage :', { quantity, price });
    } else {
        console.log('Aucune donnée dans le Local Storage, valeurs par défaut.');
    }
}

function updateQuantityAndPrice() {
    quantityDisplay.textContent = quantity;
    priceDisplay.textContent = `€${price.toFixed(2)}`;
    console.log(`Quantité: ${quantity}, Prix: €${price.toFixed(2)}`);
}

function saveCartData() {
    localStorage.setItem('quantity', quantity);
    localStorage.setItem('totalPrice', price.toFixed(2));
    console.log("Données enregistrées dans le localStorage:", {
        quantity: localStorage.getItem('quantity'),
        totalPrice: localStorage.getItem('totalPrice')
    });
}

btnMinus.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        price = quantity * pricePerUnit;
        updateQuantityAndPrice();
        saveCartData();
    }
});

btnPlus.addEventListener('click', () => {
    if (quantity < 99) {
        quantity++;
        price = quantity * pricePerUnit;
        updateQuantityAndPrice();
        saveCartData();
    }
});

btnOrder.addEventListener('click', () => {
    saveCartData();
    alert("Votre commande a été enregistrée !");
});

toggleBtn.addEventListener("click", function() {
    if (extraInfo.style.display === "none" || extraInfo.style.display === "") {
        extraInfo.style.display = "block";
        toggleBtn.textContent = "➖"; 
    } else {
        extraInfo.style.display = "none";
        toggleBtn.textContent = "➕"; 
    }
});

document.addEventListener('DOMContentLoaded', () => {
    loadCartData();
});