// Get the element containing the text you want to animate
const typewriterElement = document.querySelector("#page2 p");

// Array of paragraphs to display with typewriter effect
const paragraphs = [
  '"Surrender to the Truth, Find Liberation in Obedience."',
  '"Through Devotion, We Transcend the Ordinary and Become Eternal."',
  '"Join the Circle of the Chosen, Forge Your Destiny Beyond Limits."',
];

let paragraphIndex = 0;
let textIndex = 0;
let isTyping = true;

// Function to simulate typewriter effect
function type() {
  if (paragraphIndex >= paragraphs.length) {
    // If all paragraphs have been displayed, stop typing
    isTyping = false;
    return;
  }

  if (textIndex < paragraphs[paragraphIndex].length) {
    typewriterElement.textContent +=
      paragraphs[paragraphIndex].charAt(textIndex);
    textIndex++;
    setTimeout(type, 100); // Adjust the typing speed here (milliseconds)
  } else {
    if (isTyping) {
      isTyping = false; // Stop typing temporarily
      setTimeout(() => {
        typewriterElement.textContent = ""; // Clear the element
        textIndex = 0;
        paragraphIndex = (paragraphIndex + 1) % paragraphs.length; // Move to the next paragraph in a loop
        isTyping = true; // Resume typing
        setTimeout(type, 2000); // Delay between paragraphs (milliseconds)
      }, 1500); // Delay at the end of each paragraph (milliseconds)
    }
  }
}
// Start the typewriter effect when the page loads
window.onload = type;