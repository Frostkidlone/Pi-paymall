// Simulate live product prices in Pi
const priceElement = document.getElementById("price");

if (priceElement) {
  let price = 100; // starting price
  setInterval(() => {
    // Simulate price changes
    price += (Math.random() - 0.5) * 5;
    priceElement.textContent = `Popular Product: ${price.toFixed(2)} π`;
  }, 2000);
}