// Функція, що повертає суму елементів масиву
function calculateSum(array) {
    return array.reduce((acc, curr) => acc + curr, 0);
}

// Функція, що повертає масив позитивних чисел
function filterPositiveNumbers(array) {
    return array.filter(num => num > 0);
}

// Функція, що повертає масив негативних чисел
function filterNegativeNumbers(array) {
    return array.filter(num => num < 0);
}

module.exports = { calculateSum, filterPositiveNumbers, filterNegativeNumbers };
