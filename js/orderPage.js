// Sélectionner les éléments où le prix et la quantité seront affichés sur la page commande
const totalPriceElement = document.getElementById('totalPrice');
const quantityElement = document.getElementById('quantity-display'); // L'élément pour afficher la quantité

// Récupérer la quantité et le prix depuis le localStorage
const storedQuantity = localStorage.getItem('quantity');
const storedTotalPrice = localStorage.getItem('totalPrice');

// Si des valeurs existent dans localStorage, les afficher
if (storedQuantity && storedTotalPrice) {
    // Mettre à jour l'affichage avec les données récupérées
    quantityElement.textContent = `Quantité : ${storedQuantity}`;
    totalPriceElement.textContent = `${storedTotalPrice} €`;
} else {
    // Si pas de données dans le localStorage, afficher un message ou valeur par défaut
    quantityElement.textContent = "Quantité : 1";
    totalPriceElement.textContent = "15 €";
}
document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner les éléments où le prix et la quantité seront affichés sur la page commande
    const totalPriceElement = document.getElementById('totalPrice');
    const quantityElement = document.getElementById('quantity-display'); // L'élément pour afficher la quantité

    // Récupérer la quantité et le prix depuis le localStorage
    const storedQuantity = localStorage.getItem('quantity');
    const storedTotalPrice = localStorage.getItem('totalPrice');

    // Si des valeurs existent dans localStorage, les afficher
    if (storedQuantity && storedTotalPrice) {
        // Mettre à jour l'affichage avec les données récupérées
        quantityElement.textContent = `Quantité : ${storedQuantity}`;
        totalPriceElement.textContent = `${storedTotalPrice} €`;
    } else {
        // Si pas de données dans le localStorage, afficher un message ou valeur par défaut
        console.log("Aucune donnée dans le localStorage");
        quantityElement.textContent = "Quantité : 1";
        totalPriceElement.textContent = "15 €";
    }
});
