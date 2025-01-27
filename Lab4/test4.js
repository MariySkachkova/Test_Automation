const { Builder, By } = require('selenium-webdriver');

const { login } = require('./authorization');

(async function test4() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {

        console.log("\nTest №4");

        // Викликаємо функцію для входу в обліковий запис
        await login(driver);

        // Переходимо на сторінку з футболками
        console.log("Navigating to T-shirts page");
        await driver.get('https://automationexercise.com/category_products/3');

        // Відкриваємо сторінку товару
        console.log("Opening 'Pure Cotton V-Neck T-Shirt' product page");
        await driver.get("https://automationexercise.com/product_details/28");

        // Знаходимо поле вводу кількості товару
        let quantityInput = await driver.findElement(By.name("quantity"));
        console.log("Setting quantity to 2");
        // Очищуємо поле вводу
        await quantityInput.clear();
        // Вводимо кількість товару
        await quantityInput.sendKeys('2');

        console.log("Adding t-shirt to cart");
        // Додаємо товар в кошик
        await driver.findElement(By.xpath('//button[@class="btn btn-default cart"]'), 2000).click();

        console.log("Navigating to cart");
        // Переходимо до кошика
        await driver.findElement(By.linkText("Cart")).click();

        // Отримуємо назву товару
        let productNameElement = await driver.findElement(By.css('td.cart_description h4'));
        let productName = await productNameElement.getText();
        console.log('Product Name in the cart:', productName);

        // Отримуємо ціну товару
        let priceElement = await driver.findElement(By.css('td.cart_price p'));
        let priceText = await priceElement.getText();
        let priceNum = parseFloat(priceText.replace('Rs. ', ''));
        console.log(`Product Price: ${priceNum}`);

        // Отримуємо загальну ціну
        let totalPriceElement = await driver.findElement(By.css('td.cart_total p'));
        let totalPriceText = (await totalPriceElement.getText()).replace("Rs. ", "");
        let totalPriceNum = parseFloat(totalPriceText);

        // Порівнюємо загальну ціну з ціною товару за дві одиниці
        if (totalPriceNum == priceNum * 2) {
            console.log(`The total price is correct: ${totalPriceNum}`);
        } else {
            console.log(`The total price is incorrect: ${totalPriceNum}`);
        }

    } catch (error) {
        console.error('Test failed:', error);

    } finally {
        console.log("\n");
        // Закриваємо вікно браузера
        await driver.quit();
    }
})();
