const fullText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, maiores. Obcaecati ipsam dolores asperiores aut incidunt quae tempora consequuntur quaerat pariatur eaque iure expedita aliquam minima rerum officia, esse vero.";
let displayedText = "";

function typeText() {
    // Choose a suitable chunk size based on desired typing speed
    const chunkSize = 1;

    if (fullText.length > displayedText.length) {
        displayedText += fullText.slice(displayedText.length, displayedText.length + chunkSize);
        document.getElementById("typed-text").textContent = displayedText;
    }
    else {
        clearInterval(intervalId);
}
}
const intervalId = setInterval(typeText, 25);