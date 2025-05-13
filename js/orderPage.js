// Sélectionner les éléments où le prix et la quantité seront affichés sur la page commande
const totalPriceElement = document.getElementById('totalPrice');
const quantityElement = document.getElementById('quantity-display'); // L'élément pour afficher la quantité

// Fonction pour récupérer et afficher les données
function displayOrderData() {
    // Récupérer la quantité et le prix depuis le localStorage
    const storedQuantity = localStorage.getItem('quantity');
    const storedTotalPrice = localStorage.getItem('totalPrice');

    // Si des valeurs existent dans localStorage, les afficher
    if (storedQuantity && storedTotalPrice) {
        quantityElement.textContent = `Quantité : ${storedQuantity}`;
        totalPriceElement.textContent = `${storedTotalPrice} €`;
        console.log("Données récupérées depuis le localStorage :", { storedQuantity, storedTotalPrice });
    } else {
        // Si pas de données, afficher des valeurs par défaut
        quantityElement.textContent = "Quantité : 1";
        totalPriceElement.textContent = "15 €";
        console.log("Aucune donnée dans le localStorage, valeurs par défaut affichées.");
    }
}

// Charger les données au démarrage de la page
document.addEventListener('DOMContentLoaded', displayOrderData);
