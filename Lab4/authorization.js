const { By } = require('selenium-webdriver');

async function login(driver) {

    console.log("Navigating to https://automationexercise.com/");
    await driver.get("https://automationexercise.com/");

    console.log("Clicking on 'Signup / Login' link on the menu panel");
    await driver.findElement(By.linkText("Signup / Login")).click();

    // Перевіряємо, що title “Automation Exercise - Signup / Login”.
    const title = await driver.getTitle();
    console.log("Title is", title);

    // Вводимо емейл і пароль у відповідні поля та натискаємо кнопку “Login”
    console.log('Entering email and password');
    await driver.findElement(By.css('[data-qa="login-email"]')).sendKeys('21fi.yu.bozhenko@std.npu.edu.ua');
    await driver.findElement(By.css('[data-qa="login-password"]')).sendKeys('12345678');

    console.log("Clicking on 'Login' button");
    await driver.findElement(By.css('[data-qa="login-button"]')).click().then(() => {
        console.log("User successfully logged in");
    }).catch(() => {
        console.error('Login failed:', error);
    });
};

module.exports = {
    login: login
};
