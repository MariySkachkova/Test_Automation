const { add, subtract, multiply, divide } = require('./math_operations');

// Параметризовані тести для функції додавання
test.each([
    [2, 3, 5],
    [-2, -3, -5],
    [0, 0, 0],
    [10, -5, 5],
    [2.5, 3.5, 6],
])('adds %i + %i to equal %i', (a, b, expected) => {
    expect(add(a, b)).toBe(expected);
});

// Параметризовані тести для функції віднімання
test.each([
    [5, 2, 3],
    [-5, -2, -3],
    [0, 0, 0],
    [10, 5, 5],
    [2.5, 1.5, 1],
])('subtracts %i - %i to equal %i', (a, b, expected) => {
    expect(subtract(a, b)).toBe(expected);
});

// Параметризовані тести для функції множення
test.each([
    [2, 3, 6],
    [-2, -3, 6],
    [0, 5, 0],
    [10, -5, -50],
    [2.5, 2, 5],
])('multiplies %i * %i to equal %i', (a, b, expected) => {
    expect(multiply(a, b)).toBe(expected);
});

// Параметризовані тести для функції ділення
test.each([
    [10, 2, 5],
    [-10, -2, 5],
    [0, 5, 0],
    [10, -5, -2],
    [2.5, 0.5, 5],
])('divides %i / %i to equal %i', (a, b, expected) => {
    expect(divide(a, b)).toBe(expected);
});

// Тест для перевірки ділення на нуль
test('divides by zero throws an error', () => {
    expect(() => {
        divide(10, 0);
    }).toThrow();
});
