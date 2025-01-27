const { Builder, By, until } = require('selenium-webdriver');

const { login } = require('./authorization');

(async function test5() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {

        console.log("\nTest №5");

        // Викликаємо функцію для входу в обліковий запис
        await login(driver);

        // Клік на елемент "Products"
        console.log("Navigating to the products page");
        await driver.findElement(By.xpath("//a[contains(text(), 'Products')]")).click();

        await driver.wait(until.titleContains("Automation Exercise - All Products"), 4000);

        // Знаходимо елемент поля введення по його ідентифікатору "search_product" і вводимо в нього текст
        console.log("Searching for the 'Soft Stretch Jeans' product");
        await driver.findElement(By.id("search_product")).sendKeys("Soft Stretch Jeans");

        // Клік на кнопку з ідентифікатором "submit_search"
        await driver.findElement(By.id("submit_search")).click();

        // Знаходимо елемент який містить назву товару
        let productElement = await driver.findElement(By.xpath(`//div[@class="productinfo text-center"]/p[contains(text(), "Soft Stretch Jeans")]`));

        // Перевіряємо чи знайдено товар
        if (productElement) {
            console.log("The 'Soft Stretch Jeans' product is found");
        } else {
            console.log("The 'Soft Stretch Jeans' product is not found");
        }

        // Відкриття сторінки зі знайденим товаром
        await driver.get("https://automationexercise.com/product_details/33");

        //Перевіряємо що присутня позначка 'New'
        let imgElement = await driver.findElement(By.css('img.newarrival[src="/static/images/product-details/new.jpg"]'));
        if (imgElement) {
            console.log("This product is categorized as 'New'");
        } else {
            console.log("This product is from the old collection");
        }

    } catch (error) {
        console.error('Test failed:', error);

    } finally {
        console.log("\n");
        // Закриваємо вікно браузера
        await driver.quit();
    }
})();
