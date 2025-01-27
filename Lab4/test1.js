const { Builder, By } = require('selenium-webdriver');

const { login } = require('./authorization');


(async function signInTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {

        console.log("\nTest №1");

        // Авторизація
        await login(driver);

        // Перевіряємо що title “Automation Exercise”
        const title = await driver.getTitle();
        console.log("Title is", title);

        // Перевіряємо що правильне ім’я користувача відображається на панелі меню
        let nameOfUser = await driver.findElement(By.xpath("//a[contains(text(), 'Logged in as')]/b")).getText();
        console.log(`Correct user name is displayed on the menu panel: ${nameOfUser}`);

    } catch (error) {
        console.error('Sign in test failed:', error);
    } finally {
        console.log("\n");
        await driver.quit();
    }

})();
