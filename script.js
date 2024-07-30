// Basic Functions
const add = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    return a / b;
}

// Variables declaration
let firstNumber = 0;

let operator = '';

let lastNumber = 0;

let displayValue = '';

// Operate function
const operate = (firstNumber, operator, lastNumber) => {
    switch (operator) {
        case 'add':
            return add(firstNumber, lastNumber);
            break;
        case 'subtract':
            return subtract(firstNumber, lastNumber);
            break;
        case 'multiply':
            return multiply(firstNumber, lastNumber);
            break;
        case 'divide':
            return divide(firstNumber, lastNumber);
            break;
    }
};

// Display functionalities
const display = document.getElementById('display');
display.textContent = "0";

// Buttons functionalities
/// Digits
const btnDigits = document.querySelectorAll('.digit');

btnDigits.forEach(btnDigit => {
    btnDigit.addEventListener('click', () => {
        displayValue = displayValue.concat(btnDigit.textContent);
        display.textContent = displayValue;
    })
});

/// Clear Button
const clear = document.getElementById('clear');

clear.addEventListener('click', () => {
    displayValue = '';
    display.textContent = '0';
})