async function fetchDataFromFakeAPI() {
  try {
    // Викликаємо функцію, яка отримує дані з фіктивного API
    const data = await callFakeAPI();
    // Повертаємо дані у форматі JSON
    return JSON.parse(data);
  } catch (error) {
    console.error('Error fetching data from fake API:', error);
    throw error;
  }
}

// Функція, яка імітує виклик фіктивного API і повертає дані у вигляді рядка
function callFakeAPI() {
  // В цьому прикладі, просто імітуємо отримання даних з фіктивного API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        '{"userId": 1, "id": 1, "title": "Fake Data", "body": "This is fake data from a fake API"}'
      );
    }, 1000); // Штучне затримання для імітації запиту до API
  });
}

module.exports = fetchDataFromFakeAPI;
