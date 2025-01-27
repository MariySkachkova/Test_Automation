const { Builder, By, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.google.com');

    // Перевіряємо title сторінки
    await driver.getTitle().then(title => {
      console.log('Title сторінки:', title);
    });


    // Перевіряємо присутність рядка пошуку
    await driver.findElement(By.name('q')).isDisplayed().then(displayed => {
      console.log('Рядок пошуку присутній:', displayed);
    }).catch(error => {
      console.error('Помилка: Рядок пошуку не знайдено або не відображається.');
    });


    // Перевіряємо присутність посилання на Gmail
    await driver.findElement(By.linkText('Gmail')).isDisplayed().then(displayed => {
      console.log('Посилання на Gmail присутнє:', displayed);
    }).catch(error => {
      console.error('Помилка: Посилання на Gmail не знайдено або не відображається.');
    });


    // Перевіряємо присутність логотипу Google
    await driver.findElement(By.css('img[alt="Google"]')).isDisplayed().then(displayed => {
      console.log('Логотип Google присутній:', displayed);
    }).catch(error => {
      console.error('Помилка: Логотип Google не знайдено або не відображається.');
    });


    // Перевіряємо присутність кнопки "Пошук"
    try {
      await driver.wait(until.elementLocated(By.name('btnK')), 10000);
      console.log('Кнопка "Пошук Google" присутня на сторінці.');
    } catch (error) {
      console.error('Помилка: Кнопка "Пошук Google" не знайдена або не відображається.');
    }


  } finally {
    await driver.quit();
  }
})();
