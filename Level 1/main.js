const numberInput = document.getElementById('numberInput');
const numberInput2 = document.getElementById('numberInput2');
const addButton = document.getElementById('addButton');
const subtractButton = document.getElementById('subtractButton');
const multiplyButton = document.getElementById('multiplyButton');
const divideButton = document.getElementById('divideButton');
const calculateButton = document.getElementById('calculateButton');
const resultMessage = document.getElementById('result');

/** old code for basic arithmetic operations
 * addButton.addEventListener('click', function() {
    const number1 = Number(numberInput.value);
    const number2 = Number(numberInput2.value);
    const sum = number1 + number2;
    resultMessage.textContent = `The sum is: ${sum}`;
});

const subtractButton = document.getElementById('subtractButton');
subtractButton.addEventListener('click', function() {
    const number1 = Number(numberInput.value);
    const number2 = Number(numberInput2.value);
    const difference = number1 - number2;
    resultMessage.textContent = `The difference is: ${difference}`;
});

const multiplyButton = document.getElementById('multiplyButton');
multiplyButton.addEventListener('click', function() {
    const number1 = Number(numberInput.value);
    const number2 = Number(numberInput2.value);
    const product = number1 * number2;
    resultMessage.textContent = `The product is: ${product}`;
});

const divideButton = document.getElementById('divideButton');
divideButton.addEventListener('click', function() {
    const number1 = Number(numberInput.value);
    const number2 = Number(numberInput2.value);
    const quotient = number1 / number2;
    resultMessage.textContent = `The quotient is: ${quotient}`;
});
 */
addButton.addEventListener('click', function() {

    if (!validateInput()) {
        resultMessage.textContent = 'Please enter both numbers.';
        return;
    } else{
        const number1 = Number(numberInput.value);
        const number2 = Number(numberInput2.value);
        const sum = add(number1, number2);
        resultMessage.textContent = `The sum is: ${sum}`;
    }

});

subtractButton.addEventListener('click', function() {
    if (!validateInput()) {
        resultMessage.textContent = 'Please enter both numbers.';
        return;
    } else{
        const number1 = Number(numberInput.value);
        const number2 = Number(numberInput2.value);
        const difference = subtract(number1, number2);
        resultMessage.textContent = `The difference is: ${difference}`;
    }
});

multiplyButton.addEventListener('click', function() {
    if (!validateInput()) {
        resultMessage.textContent = 'Please enter both numbers.';
        return;
    } 
    
    else{
        const number1 = Number(numberInput.value);
        const number2 = Number(numberInput2.value);
        const product = multiply(number1, number2);
        resultMessage.textContent = `The product is: ${product}`;
    }
});

divideButton.addEventListener('click', function() {
    if (!validateInput()) {
        resultMessage.textContent = 'Please enter both numbers.';
        return;
    }
    
    const number1 = Number(numberInput.value);
    const number2 = Number(numberInput2.value);

    if(numberInput2.value == 0) {
        resultMessage.textContent = 'Cannot divide by zero.';
        return;
    }else{
        const quotient = number1 / number2;
        resultMessage.textContent = `The quotient is: ${quotient}`;
    }
});

// new code for basic arithmetic operations using functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}


calculateButton.addEventListener('click', function() {
    const number1 = Number(numberInput.value);
    const number2 = Number(numberInput2.value);
    
    console.log("You entered:", number1, number2);
    console.log(add(number1, number2));
    console.log(subtract(number1, number2));
    console.log(multiply(number1, number2));
    console.log(divide(number1, number2));
    resultMessage.textContent = "The result will be displayed here.";
});

function validateInput() {
    if (numberInput.value === "" || numberInput2.value === "") {
        return false;
    }

    return true;
}