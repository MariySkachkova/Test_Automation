const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {


    // Відкриття сторінки Вікіпедії
    await driver.get('https://uk.wikipedia.org/');

    // Знаходження та введення пошукового запиту "Київ"
    await driver.findElement(By.name('search')).sendKeys('Київ', Key.RETURN);

    // Очікування завантаження сторінки з результатами пошуку
    await driver.wait(until.titleContains('Київ'), 5000);

    // Клікання на посилання з текстом "Київ" в переліку результатів пошуку
    await driver.findElement(By.linkText('Київ')).click();


    // Перевірка присутності герба Києва
    await driver.findElement(By.css('a[title="Герб Києва"]')).isDisplayed().then(displayed => {
      console.log('Елемент "Герб Києва" присутній на сторінці:', displayed);
    }).catch(error => {
      console.error('Елемент "Герб Києва" відсутній на сторінці.');
    });


    // Перевірка присутності зображення герба Києва
    await driver.findElement(By.css('img[src="//upload.wikimedia.org/wikipedia/commons/thumb/1/1a/COA_of_Kyiv_Kurovskyi.svg/90px-COA_of_Kyiv_Kurovskyi.svg.png"]')).isDisplayed().then(displayed => {
      console.log('Зображення герба Києва присутнє на сторінці:', displayed);
    }).catch(error => {
      console.error('Зображення герба Києва відсутнє на сторінці або не відображається.');
    });


    // Перевірка присутності кількості населення
    await driver.findElement(By.css('a[title="Населення"]')).isDisplayed().then(displayed => {
      console.log('Елемент "Населення" присутній на сторінці:', displayed);
    }).catch(error => {
      console.error('Елемент "Населення" відсутній на сторінці.');
    });


    // Отримання значення населення
    const populationElement = await driver.findElement(By.xpath('//td[contains(text()," 2 952 301 (1 січня 2022)")]'));
    let populationText = await populationElement.getText();
    populationText = populationText.split('[')[0].trim();
    console.log('Населення Києва:', populationText);


    // Перевірка присутності кількості населення
    await driver.findElement(By.css('a[title="Густота населення"]')).isDisplayed().then(displayed => {
      console.log('Елемент "Густота населення" присутній на сторінці:', displayed);
    }).catch(error => {
      console.error('Елемент "Густота населення" відсутній на сторінці.');
    });


    // Отримання значення густоти населення
    const densityElement = await driver.findElement(By.xpath('//td[contains(text(),"3516,93")]'));
    const densityText = await densityElement.getText();
    console.log('Значення величини густоти населення:', densityText);


    // Перевіряємо присутність підрозділу "Епідемія коронавірусу"
    await driver.findElement(By.linkText('Коронавірусна хвороба 2019 в Україні')).isDisplayed().then(displayed => {
      console.log('Підрозділ "Коронавірусна хвороба 2019 в Україні" присутній на сторінці:', displayed);
    }).catch(error => {
      console.error('Помилка: Підрозділ "Коронавірусна хвороба 2019 в Україні не знайдений або не відображається.');
    });


    // Перевірка присутності елементу середньої температури
    await driver.findElement(By.xpath('//th[contains(text(),"Середня температура")]')).isDisplayed().then(displayed => {
      console.log('Елемент "Середня температура" присутній на сторінці:', displayed);
    }).catch(error => {
      console.error('Елемент "Середня температура" відсутній на сторінці.');
    });


    // Отримання значення середньої температури в Квітні 
    const avgTempElement = await driver.findElement(By.xpath('//*[@id="collapsibleTable0"]/tbody/tr[5]/th[5]'));
    const avgTempText = await avgTempElement.getText();
    console.log('Середня температура в Квітні,°C:', avgTempText);


    // Отримання списку найвизначніших архітектурних пам'яток
    const monumentsList = await driver.findElements(By.xpath('//*[@id="mw-content-text"]/div[1]/ul[11]/li'));
    // Перевірка кількості елементів списку
    if (monumentsList.length > 20) {
      console.log('Кількість елементів у списку найвизначніших архітектурних пам\'яток більше 20.');
    } else {
      console.log('Кількість елементів у списку найвизначніших архітектурних пам\'яток не більше 20.');
    }


  } catch (error) {
    console.error('Error:', error);
  } finally {
    await driver.quit();
  }
})();
