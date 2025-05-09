// 1. Import necessary types for JSDoc
const { Page, Locator } = require('@playwright/test');
 
class OrderReviewPage {
    
  // 3. Annotate class properties with their types
  /** @type {Page} */
  page;
  /** @type {Locator} */
  enterCountry;
  /** @type {Locator} */
  selectCountry;
   /** @type {Locator} */
  submitButton;
 

   /**
   * 2. Annotate the constructor parameter
   * @param {Page} page
   */
  
  constructor(page) {
    this.page = page; // Now VS Code knows this.page is a Playwright Page
    this.enterCountry = page.getByPlaceholder("Select Country"); // VS Code knows this is a Locator
    this.selectCountry = page.getByRole("button", { name: "India" }).nth(1); // VS Code knows this is a Locator
    this.submitButton = page.getByText("PLACE ORDER"); // VS Code knows this is a Locator
  }
 
  async submitOrder() {
    // Autocompletion should now work here for Playwright methods
    await this.enterCountry.pressSequentially("ind");
    await this.selectCountry.click();
    await this.submitButton.click();
  }
}
 
module.exports = { OrderReviewPage }; // Correct export syntax
