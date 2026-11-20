let balance = 2500;
let withdrawal = 750;

let remaining = balance - withdrawal;
console.log(remaining);
console.log(remaining >= 2000);

/**
 * Loops
 */

/**
 * 1) FOR LOOP
 */
for(let i = 1; i <= 57; i++) {
    console.log(i);
}

/**
 * 2) WHILE LOOP
 */
let energy = 3;
while(energy > 0) {
    console.log("Mission active");
    energy--;
}

/**
 * 3) DO WHILE LOOP
 */
let attempts = 1;
do {
    console.log("Attempt made");
    attempts++;
} while(attempts <= 3);