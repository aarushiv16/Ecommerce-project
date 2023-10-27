document.addEventListener("DOMContentLoaded", function () {
    const reviewForm = document.getElementById("review-form");
    const reviewsList = document.getElementById("reviews-list");

    // Function to save a review to localStorage
    function saveReviewToLocalStorage(name, rating, comment) {
        const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
        const newReview = { name, rating, comment };
        reviews.push(newReview);
        localStorage.setItem("reviews", JSON.stringify(reviews));
    }

    // Function to display reviews from localStorage
    function displayReviewsFromLocalStorage() {
        const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
        reviews.forEach(review => {
            const reviewElement = document.createElement("div");
            reviewElement.classList.add("review");
            reviewElement.innerHTML = `
                <h3>${review.name}</h3>
                <div class="rating">Rating: ${review.rating} stars</div>
                <p>${review.comment}</p>
            `;
            reviewsList.appendChild(reviewElement);
        });
    }

    reviewForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const rating = document.querySelector('input[name="rating"]:checked').value;
        const comment = document.getElementById("comment").value;

        // Save the review to localStorage
        saveReviewToLocalStorage(name, rating, comment);

        // Display the review on the page
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review");
        reviewElement.innerHTML = `
            <h3>${name}</h3>
            <div class="rating">Rating: ${rating} stars</div>
            <p>${comment}</p>
        `;
        reviewsList.appendChild(reviewElement);

        // Clear form fields after submission
        document.getElementById("name").value = "";
        document.querySelector('input[name="rating"]:checked').checked = false;
        document.getElementById("comment").value = "";
    });

    // Display reviews from localStorage when the page loads
    displayReviewsFromLocalStorage();
});
