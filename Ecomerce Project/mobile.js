// JavaScript for managing the wishlist

// Function to handle adding a product to the wishlist
function addToWishlist(productName, productPrice) {
    const wishlist = document.getElementById('wishlist');

    // Create a new wishlist item
    const wishlistItem = document.createElement('li');
    wishlistItem.innerHTML = `<span>${productName} - ${productPrice}</span> <button class="remove-from-wishlist-button">&#10084;</button>`;

    // Add event listener to the remove button
    const removeButton = wishlistItem.querySelector('.remove-from-wishlist-button');
    removeButton.addEventListener('click', () => {
        wishlist.removeChild(wishlistItem);
    });

    // Append the wishlist item to the wishlist
    wishlist.appendChild(wishlistItem);
}

// Function to handle the click event on wishlist buttons
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('wishlist-button')) {
        const productName = event.target.getAttribute('data-product-name');
        const productPrice = event.target.getAttribute('data-product-price');

        // Check if the product is already in the wishlist
        const wishlistItems = document.querySelectorAll('#wishlist li span');
        const isInWishlist = Array.from(wishlistItems).some((item) => item.textContent.includes(productName));

        if (!isInWishlist) {
            addToWishlist(productName, productPrice);
            event.target.classList.add('added-to-wishlist');
        }
    }
});
