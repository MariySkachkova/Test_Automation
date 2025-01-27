const { Builder, By, until } = require('selenium-webdriver');

(async function testEmptyEmailErrorMessage() {
    // Ініціалізація драйвера браузера
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        console.log("\nTest №3");

        // Відкриття сайту
        console.log('Navigating to https://automationexercise.com/');
        await driver.get('https://automationexercise.com/');

        // Клік на "Signup / Login" у панелі меню
        console.log("Clicking on 'Signup / Login' link on the menu panel");
        await driver.findElement(By.linkText("Signup / Login")).click();

        // Очікування завантаження сторінки "Signup / Login" протягом 10 секунд
        await driver.wait(until.titleIs('Automation Exercise - Signup / Login'), 10000);

        // Введення електронної пошти
        console.log("Entering the email");
        await driver.findElement(By.css('[data-qa="login-email"]')).sendKeys('21fi.yu.bozhenko@std.npu.edu.ua');

        // Клік на кнопку "Login" без введення паролю
        console.log("Clicking the 'Login' button without entering password");
        await driver.findElement(By.xpath("//button[contains(text(), 'Login')]")).click();

        // Затримка виконання коду на 2 секунди для відображення повідомлення про помилку
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Отримання елементу вводу паролю
        let passwordInput = await driver.findElement(By.name("password"));
        // Отримання повідомлення про валідацію поля
        let errorMessage = await passwordInput.getAttribute("validationMessage");
        console.log(`Validation Message: ${errorMessage}`);
    } finally {
        console.log("\n");
        // Завершення сеансу браузера
        await driver.quit();
    }
})();
