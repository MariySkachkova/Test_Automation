const asyncFunction = require('./task3');

test('Async function test', async () => {
  const result = await asyncFunction();
  expect(result).toBe(20); // Перевіряємо, що результат дорівнює 20
});
