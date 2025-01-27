const { Builder, By } = require('selenium-webdriver');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function searchForCatFood() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {

        console.log("\nScenario 2: Checking the search part");
        console.log("--------------------------------------------------");

        await driver.get('https://rozetka.com.ua/');
        console.log("Navigated to Rozetka website");


        await sleep(2000);



        const searchInput = await driver.findElement(By.css('input.search-form__input'));
        await searchInput.sendKeys('Котячий корм');
        console.log("Entered 'Котячий корм' into search input field");


        await sleep(2000);


        const searchSuggestElement = await driver.findElement(By.css('div.search-suggest'));
        if (searchSuggestElement.isDisplayed()) {
            console.log("Hints in the search box are displayed.");


            const catFoodLink = await driver.findElement(By.xpath("//a[contains(text(), 'Корм для кішок')]"));


            await catFoodLink.click();
            console.log("Clicked on the 'Корм для кішок' link.");
            await sleep(2000);


            const selectElement = await driver.findElement(By.css('.select-css'));
            await selectElement.click();
            console.log("Clicked on the select element.");

            await sleep(1000);


            await selectElement.findElement(By.css('option[value="3: novelty"]')).click();
            console.log("Selected option 'Новинки'");

            await sleep(2000);


            const searchInput2 = await driver.findElement(By.css('input.search-form__input'));
            await searchInput2.click();
            console.log("Clicked on the search input field.");

            await sleep(2000);


            const searchSuggestElement2 = await driver.findElement(By.css('div.search-suggest'));
            const searchHistoryElement = await searchSuggestElement2.findElement(By.css('.js-rz-search-suggest-clean-history'));

            if (searchHistoryElement.isDisplayed()) {
                console.log("Search history is displayed.");
            } else {
                console.log("Search history is not displayed.");
            }

            const catFoodTextElement = await searchSuggestElement2.findElement(By.css('.search-suggest__item-text_type_nowrap'));
            const catFoodText = await catFoodTextElement.getText();

            console.log("Text of the cat food search:", catFoodText);
        } else {
            console.log("Element is not displayed.");
        }

    } catch (error) {
        console.error("An error occurred:", error);
    } finally {

        await driver.quit();
    }
}

searchForCatFood();
