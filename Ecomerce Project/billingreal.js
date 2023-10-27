document.addEventListener("DOMContentLoaded", function () {
    // Retrieve product details from the URL or another data source
    // const productImageSrc =
    //     "https://www.reliancedigital.in/medias/Realme-Neo-LED-Televisions-492796729-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxOTY0MTR8aW1hZ2UvanBlZ3xpbWFnZXMvaDlkL2g1ZC85ODA4NTQzOTczNDA2LmpwZ3xkMmQ0YTM5NTE3MDU3MmI0MWNjYjZkYThiZmM5OWY0MmJlYmI2Y2NmZjJlZDUzOGQ0NDQwNWIxYjJmZmZmZGEx";
    const productName = "Apple iphone 13(Blue)";
    const productPrice = "50,000";
    const discountPrice = "$5000";

    // Populate the billing page with product details
    const productImage = document.getElementById("product-image");
    const productNameElement = document.getElementById("product-name");
    const productPriceElement = document.getElementById("product-price");
    const discountPriceElement = document.getElementById("discount-price");
    const quantityInput = document.getElementById("quantity");
    const addToCartButton = document.getElementById("add-to-cart");
    const deleteButton = document.getElementById("delete");
    const saveForLaterButton = document.getElementById("save-for-later");
    const proceedToBuyButton = document.getElementById("proceed-to-buy");

    productImage.src = productImageSrc;
    productNameElement.textContent = productName;
    productPriceElement.textContent = productPrice;
    discountPriceElement.textContent = discountPrice;

    addToCartButton.addEventListener("click", function () {
        const quantity = parseInt(quantityInput.value);
        const totalPrice = parseFloat(productPrice.replace(/[^0-9.]/g, "")) * quantity; // Remove non-numeric characters
        addToCart(productName, totalPrice, quantity);
        alert(`Added ${quantity} ${quantity === 1 ? "item" : "items"} to the cart.`);
    });

    deleteButton.addEventListener("click", function () {
        // Handle delete functionality
        alert("Item deleted.");
    });

    saveForLaterButton.addEventListener("click", function () {
        // Handle save for later functionality
        alert("Item saved for later.");
    });

    proceedToBuyButton.addEventListener("click", function () {
        // Handle proceed to buy functionality
        alert("Proceeding to buy.");
    });
});

// Function to add an item to the cart (from previous code)
function addToCart(productName, totalPrice, quantity) {
    // Your cart handling code (push item to cart array, update UI, etc.)
}
