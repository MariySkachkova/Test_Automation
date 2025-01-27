async function asyncFunction() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("hello world"); // Повертаємо рядок "hello world" після затримки
      }, 1000);
    });
  }
  
  module.exports = asyncFunction;
  
