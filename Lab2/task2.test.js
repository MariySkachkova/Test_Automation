const asyncFunction = require('./task2');

test('Async function resolves with "hello world"', async () => {
  await expect(asyncFunction()).resolves.toBe('hello world');
});
