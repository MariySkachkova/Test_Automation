const asyncFunctionWithError = require('./task4');

test('Async function test with error', () => {
  return expect(asyncFunctionWithError()).rejects.toThrow('Async function error');
});
