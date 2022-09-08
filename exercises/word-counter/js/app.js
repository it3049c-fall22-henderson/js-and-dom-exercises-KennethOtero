// 🤖: create 2 constants with references to textarea input and the stats section from the DOM
const userInput = document.getElementById("text");
const userStats = document.getElementById("stat");

// 🤖: Create an Event Listener on textarea input
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.
userInput.addEventListener("input", function(e) {
  let wordCount = 0;
  let charCount = 0;

  let text = userInput.value;
  let textArray = text.split(" ");
  for (let i = 0; i < textArray.length; i++) {
    // Get the word count
    if (!textArray[i] == "") wordCount++;

    // Get character count
    charCount = text.length;
  }

  // Show results
  userStats.innerHTML = "You've written " + wordCount + " words and " + charCount + " characters.";
});