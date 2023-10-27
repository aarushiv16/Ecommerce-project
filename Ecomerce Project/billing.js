

document.addEventListener("DOMContentLoaded", function () {
    
    // const productImageSrc =
    //     "https://i2.wp.com/thetechrevolutionist.com/wp-content/uploads/2019/08/IMG_20190803_153212.jpg";
    const productName = "Razer Blade 15 Gaming Laptop";
    const productPrice = "$1,27,599";
    const discountPrice = "$1,199.99";

    
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


function addToCart(productName, totalPrice, quantity) {
    
}
