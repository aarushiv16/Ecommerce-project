document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");

    form.addEventListener("submit", function (e) {
        if (!validateForm()) {
            e.preventDefault(); // Prevent the default form submission
        }
    });

    function validateForm() {
        const fullNameInput = document.getElementById("full-name");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const confirmPasswordInput = document.getElementById("confirm-password");

        if (fullNameInput.value.trim() === "" ||
            emailInput.value.trim() === "" ||
            passwordInput.value === "" ||
            confirmPasswordInput.value === "") {
            alert("Please fill in all fields.");
            return false;
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
            alert("Passwords do not match.");
            return false;
        }

        return true; // Form is valid, submission will proceed
    }
});
