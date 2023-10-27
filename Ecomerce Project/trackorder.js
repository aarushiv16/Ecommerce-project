document.addEventListener("DOMContentLoaded", function () {
    const trackOrderForm = document.getElementById("track-order-form");

    trackOrderForm.addEventListener("submit", function (event) {
        event.preventDefault();

        
        const orderId = document.getElementById("order-id").value;
        const billingEmail = document.getElementById("billing-email").value;

        
        alert(`Order ID: ${orderId}\nBilling Email: ${billingEmail}`);
    });
});
