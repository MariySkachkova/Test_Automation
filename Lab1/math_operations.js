// Функція додавання
function add(a, b) {
    return a + b;
}

// Функція віднімання
function subtract(a, b) {
    return a - b;
}

// Функція множення
function multiply(a, b) {
    return a * b;
}

// Функція ділення
function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}

module.exports = { add, subtract, multiply, divide };
