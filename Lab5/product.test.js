const { Builder, By, until } = require('selenium-webdriver');

async function RozetkaTest() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {


        console.log("\nScenario 1: Viewing products in categories");
        console.log("--------------------------------------------------");
        await viewCatalog(driver);


        await sleep(2000);


    } finally {
        console.log("Quitting driver");
        await driver.quit();
    }
}

async function viewCatalog(driver) {

    await driver.get('https://rozetka.com.ua/');


    const catalogButton = await driver.findElement(By.xpath("//button[contains(text(), 'Каталог')]"));
    await catalogButton.click();
    console.log("Clicked on the catalog button");

    await sleep(1000);


    const elementXPath = "/html/body/rz-app-root/div/div/rz-header/rz-main-header/header/div/div/rz-header-fat-menu/rz-fat-menu/div[2]/ul/li[9]/div";
    try {
        await driver.wait(until.elementLocated(By.xpath(elementXPath)), 1000);
        console.log("Сatalog is displayed after clicking catalog button.");


        const laptopsLink = await driver.findElement(By.xpath("//a[contains(@href, '/ua/computers-notebooks/c80253/')]"));
        await laptopsLink.click();
        console.log("Clicked on the 'Laptops and Computers' link.");

        await sleep(2000);


        const pageTitle = await driver.getTitle();
        console.log("Page title after navigating to laptops and computers:", pageTitle);


        const h1Element = await driver.findElement(By.css('h1.portal__heading.ng-star-inserted'));
        const h1Text = await h1Element.getText();
        console.log("Category title:", h1Text);

        await sleep(2000);


        const monitorsLink = await driver.findElement(By.xpath("/html/body/rz-app-root/div/div/rz-super-portal/div/main/section/div[2]/rz-dynamic-widgets/rz-widget-list[1]/section/ul/li[3]/rz-list-tile/div/a[2]"));
        await monitorsLink.click();
        console.log("Clicked on the 'Monitors' link.");

        await sleep(2000);

        const filterCheckbox = await driver.findElement(By.css('a.checkbox-filter__link[data-id="Acer"]'));
        await filterCheckbox.click();
        console.log("Clicked on the 'Acer' filter.");

        await sleep(5000);


        const headingElement = await driver.findElement(By.css('h1.catalog-heading.ng-star-inserted'));
        const headingText = await headingElement.getText();
        console.log("Filter title:", headingText);

        await sleep(5000);


        const productElements = await driver.findElements(By.css('span.goods-tile__title'));
        const productElement = productElements[0];
        const productTitle = await productElement.getText();
        await productElement.click();
        console.log("Clicked on the first product.");
        console.log("First product:", productTitle);


    } catch (error) {
        console.log("Element is not displayed .");
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

RozetkaTest();
