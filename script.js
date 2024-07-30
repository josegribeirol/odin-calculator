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
const firstNumber = 0;

const operator = '';

const lastNumber = 0;

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