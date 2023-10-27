const textToType = "Welcome to the Demo Page!";
const typewriterText = document.getElementById("typewriter-text");
let currentIndex = 0;

function typeText() {
    if (currentIndex < textToType.length) {
        typewriterText.innerHTML += textToType.charAt(currentIndex);
        currentIndex++;
        setTimeout(typeText, 100); 
    }
}


document.addEventListener("DOMContentLoaded", function() {
    typeText();
});
