document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItemsList = document.getElementById("cart-items");

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const productTitle = button.parentNode.querySelector("p").textContent;
            const productPrice = button.parentNode.querySelector("h3").textContent;

            // Create a new cart item element
            const cartItem = document.createElement("li");
            cartItem.textContent = `${productTitle} - ${productPrice}`;
            cartItemsList.appendChild(cartItem);
        });
    });
});
