// Get references to elements
const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
const quantityInput = document.getElementById('quantity');

// Add click event listeners to "Add to Cart" buttons
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.getAttribute('data-product');
    const productPrice = parseFloat(button.getAttribute('data-price'));
    const quantity = parseInt(quantityInput.value); // Get the selected quantity

    // Check if the product is already in the cart
    const existingItem = shoppingCart.find(item => item.name === productName);

    if (existingItem) {
      // Increment the quantity if it already exists
      existingItem.quantity += quantity;
    } else {
      // Add the product to the cart with the selected quantity
      shoppingCart.push({ name: productName, price: productPrice, quantity });
    }

    // Update the cart display
    displayCart();
  });
});
