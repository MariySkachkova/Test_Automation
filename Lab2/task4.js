async function asyncFunctionWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Async function error')); // Відхиляємо проміс з помилкою після затримки
    }, 1000);
  });
}

module.exports = asyncFunctionWithError;
