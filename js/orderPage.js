const totalPriceElement = document.getElementById('totalPrice');
const quantityElement = document.getElementById('quantity-display'); 
const storedQuantity = localStorage.getItem('quantity');
const storedTotalPrice = localStorage.getItem('totalPrice');

if (storedQuantity && storedTotalPrice) {
    quantityElement.textContent = `Quantité : ${storedQuantity}`;
    totalPriceElement.textContent = `${storedTotalPrice} €`;
} else {
    quantityElement.textContent = "Quantité : 1";
    totalPriceElement.textContent = "15 €";
}
document.addEventListener('DOMContentLoaded', () => {
    const totalPriceElement = document.getElementById('totalPrice');
    const quantityElement = document.getElementById('quantity-display'); 

    const storedQuantity = localStorage.getItem('quantity');
    const storedTotalPrice = localStorage.getItem('totalPrice');

    if (storedQuantity && storedTotalPrice) {
        quantityElement.textContent = `Quantité : ${storedQuantity}`;
        totalPriceElement.textContent = `${storedTotalPrice} €`;
    } else {
        console.log("Aucune donnée dans le localStorage");
        quantityElement.textContent = "Quantité : 1";
        totalPriceElement.textContent = "15 €";
    }
});
