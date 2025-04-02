const btnMinus = document.querySelector('.btn-minus');
const btnPlus = document.querySelector('.btn-plus');
const quantityDisplay = document.querySelector('.quantity-value'); // Affichage de la quantité
const priceDisplay = document.querySelector('.old-price'); // Affichage du prix
const btnOrder = document.querySelector('.btn-order'); // Le bouton commander

// Initialiser la quantité et le prix
let quantity = 1;
let price = 15; // Le prix de base pour un article

// Fonction pour mettre à jour l'affichage de la quantité et du prix
function updateQuantityAndPrice() {
    console.log(`Quantité: ${quantity}, Prix: €${price}`); // Vérification dans la console
    quantityDisplay.textContent = quantity; // Met à jour la quantité affichée
    priceDisplay.textContent = `€${price}`; // Met à jour le prix affiché à côté du titre
}

// Gérer le bouton "-" (diminuer la quantité et le prix)
btnMinus.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--; // Réduit la quantité
        price -= 15; // Réduit le prix de 15 €
        updateQuantityAndPrice(); // Met à jour la quantité et le prix
    }
});

// Gérer le bouton "+" (augmenter la quantité et le prix)
btnPlus.addEventListener('click', () => {
    if (quantity < 99) {
        quantity++; // Augmente la quantité
        price += 15; // Augmente le prix de 15 €
        updateQuantityAndPrice(); // Met à jour la quantité et le prix
    }
});

// Lorsque l'utilisateur clique sur "Commander"
btnOrder.addEventListener('click', () => {
    // Stocker la quantité et le prix total dans le localStorage
    localStorage.setItem('quantity', quantity);
    localStorage.setItem('totalPrice', price);

    // Vérification dans la console pour voir si les valeurs sont bien stockées
    console.log("Stocké dans le localStorage:", {
        quantity: localStorage.getItem('quantity'),
        totalPrice: localStorage.getItem('totalPrice')
    });
});

// Gérer le toggle pour afficher des infos supplémentaires
document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.querySelector(".toggle-btn");
    const extraInfo = document.querySelector(".extra-info");

    toggleBtn.addEventListener("click", function() {
        if (extraInfo.style.display === "none" || extraInfo.style.display === "") {
            extraInfo.style.display = "block";
            toggleBtn.textContent = "➖"; // Change le bouton en -
        } else {
            extraInfo.style.display = "none";
            toggleBtn.textContent = "➕"; // Remet le bouton en +
        }
    });
});
