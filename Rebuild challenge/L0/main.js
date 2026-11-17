const message = document.getElementById("message");
const myButton = document.getElementById("myButton");
const resetButton = document.getElementById("resetButton");

let clickCount = 0;
myButton.addEventListener("click", function() {
  clickCount++;
  message.textContent = `You clicked the button ${clickCount} times!`;
});

resetButton.addEventListener("click", function() {
  clickCount = 0;
  message.textContent = "Welcome to my first JavaScript project!";
});