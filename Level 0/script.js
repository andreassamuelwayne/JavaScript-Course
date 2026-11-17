const button = document.getElementById('myButton');
const message = document.getElementById('Message');

let clicks = 0;
button.addEventListener('click', function() {
console.log('Button was clicked!');
console.log('JavaScript detected it!');

    clicks = clicks + 1; //  here we are incrementing the clicks 
                        // variable by 1 each time the button is 
                        // clicked

    console.log(`Click ${clicks}`);
   if (clicks === 1) {
    message.textContent = "This is your first click!";
} else if (clicks === 2) {
    message.textContent = "Nice! That's your second click.";
} else if (clicks === 3) {
    message.textContent = "Three clicks already! You've clicked " + clicks + " times.";
} else if (clicks === 4) {
    message.textContent = "Wow! Four clicks! Keep going!";
}    
});

const resetButton = document.getElementById('resetButton');


resetButton.addEventListener('click', function() {
    clicks = 0; // Reset the click count to 0 
    message.textContent = "Click count has been reset.";
});