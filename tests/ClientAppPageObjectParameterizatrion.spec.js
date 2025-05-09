const {test , expect } = require('@playwright/test');
const {POManager} = require('../PageObject/POManager.page');


// Json ==> stingFormat ===> Object.
const dataset = JSON.parse(JSON.stringify(require('../utils/TestData_Parameterization.json')));

for(const data of dataset) {

  test(`POM implementation for ${data.product_name}`, async ({ page }) => {

  const poManager = new POManager (page)
  
  const loginPage = poManager.getLoginPage();
  await loginPage.goTo();
  await loginPage.validLogin(data.email, data.pswrd);
  await page.waitForLoadState('networkidle'); // Wait until the website is totally finished loading.
  console.log ('titlePage = ',await page.title());
  await expect(page).toHaveTitle("Let's Shop");

  const dashboardPage = poManager.getDashboardPage()
  await dashboardPage.printProductsNames();
  await dashboardPage.addProductToCart(data.product_name);
  await dashboardPage.navigateToCart();

  const cartPage = poManager.getCartPage();
  await cartPage.verifyProductIsDisplayed(data.product_name);
  await cartPage.checkout();

  const orderReviewPage = poManager.getOrderReviewPage();
  await orderReviewPage.submitOrder();

  const assertionOrderPage = poManager.getAssertionOrderPage()
  await assertionOrderPage.assertionOrder();

  });

}






    