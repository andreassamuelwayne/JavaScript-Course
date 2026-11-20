/**
 * Practical mission 8 (Functions)
 */

function greetDeveloper(name){
    console.log("Welcome home," + name);
}
greetDeveloper("SamuelWayne");

function addNumbers(a, b){
    return a + b;
}

// I missed calling the function after defining it, and passing the values to use in the function.
let result1 = addNumbers(25, 15);
console.log(result1);

function calculateDiscount(price, discount){
    return price - (price * discount);
}

let result2 = calculateDiscount(10000, 1500);
console.log(result2);