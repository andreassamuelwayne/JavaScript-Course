const birthYearInput = document.getElementById("birthYear");
const calculateButton = document.getElementById("calculateButton");
const result = document.getElementById("result");

function getBirthYear() {
    const enteredYear = birthYearInput.value.trim();

    if (enteredYear === "") {
        result.textContent = "Please enter your birth year.";
        return null;
    }

    const birthYear = Number(enteredYear);
    const currentYear = new Date().getFullYear();

    if (!Number.isInteger(birthYear) || birthYear < 1 || birthYear > currentYear) {
        result.textContent = `Please enter a valid year between 1 and ${currentYear}.`;
        return null;
    }

    return birthYear;
}

function calculateAge(birthYear) {
    return new Date().getFullYear() - birthYear;
}

function displayAge(age) {
    result.textContent = `Your age is approximately ${age} years.`;
}

calculateButton.addEventListener("click", function () {
    const birthYear = getBirthYear();

    if (birthYear !== null) {
        displayAge(calculateAge(birthYear));
    }
});
