async function asyncFunction() {
    async function innerAsyncFunction() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(10); // Повертаємо число 10 після 1 секунди затримки
        }, 1000);
      });
    }
  
    const result = await innerAsyncFunction();
    return result * 2; // Повертаємо результат, подвоєний
  }
  
  module.exports = asyncFunction;
  
