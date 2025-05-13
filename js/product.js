// Sélectionner les éléments de quantité, prix et boutons
const btnMinus = document.querySelector('.btn-minus');
const btnPlus = document.querySelector('.btn-plus');
const quantityDisplay = document.querySelector('.quantity-value'); // Affichage de la quantité
const priceDisplay = document.querySelector('.old-price'); // Affichage du prix
const btnOrder = document.querySelector('.btn-order'); // Le bouton commander

// Toggle pour afficher les informations supplémentaires
const toggleBtn = document.querySelector(".toggle-btn");
const extraInfo = document.querySelector(".extra-info");

// Initialiser la quantité et le prix
let quantity = 1;
let pricePerUnit = 15; // Le prix de base pour un article
let price = pricePerUnit; // Prix total

// Charger les données depuis le Local Storage au démarrage
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

// Fonction pour mettre à jour l'affichage de la quantité et du prix
function updateQuantityAndPrice() {
    quantityDisplay.textContent = quantity;
    priceDisplay.textContent = `€${price.toFixed(2)}`;
    console.log(`Quantité: ${quantity}, Prix: €${price.toFixed(2)}`);
}

// Fonction pour enregistrer les données dans le Local Storage
function saveCartData() {
    localStorage.setItem('quantity', quantity);
    localStorage.setItem('totalPrice', price.toFixed(2));
    console.log("Données enregistrées dans le localStorage:", {
        quantity: localStorage.getItem('quantity'),
        totalPrice: localStorage.getItem('totalPrice')
    });
}

// Gérer le bouton "-" (diminuer la quantité et le prix)
btnMinus.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        price = quantity * pricePerUnit;
        updateQuantityAndPrice();
        saveCartData();
    }
});

// Gérer le bouton "+" (augmenter la quantité et le prix)
btnPlus.addEventListener('click', () => {
    if (quantity < 99) {
        quantity++;
        price = quantity * pricePerUnit;
        updateQuantityAndPrice();
        saveCartData();
    }
});

// Lorsque l'utilisateur clique sur "Commander"
btnOrder.addEventListener('click', () => {
    saveCartData();
    alert("Votre commande a été enregistrée !");
});

// Gérer le toggle pour afficher des infos supplémentaires
toggleBtn.addEventListener("click", function() {
    if (extraInfo.style.display === "none" || extraInfo.style.display === "") {
        extraInfo.style.display = "block";
        toggleBtn.textContent = "➖"; // Change le bouton en -
    } else {
        extraInfo.style.display = "none";
        toggleBtn.textContent = "➕"; // Remet le bouton en +
    }
});

// Charger les données au démarrage
document.addEventListener('DOMContentLoaded', () => {
    loadCartData();
});