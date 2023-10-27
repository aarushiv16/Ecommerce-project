


// window.onload = function() {
//     alert("Welcome to My Electronic Store!");
// };


document.getElementById("product-search-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var query = document.getElementById("product-search").value;
    alert("Searching for: " + query);
    
});


var addToCartButtons = document.querySelectorAll(".add-to-cart-button");
addToCartButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        alert("Item added to cart!");
        
    });
});
