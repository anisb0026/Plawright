// 1. Import necessary types for JSDoc
const { Page, Locator } = require('@playwright/test');

const {expect } = require('@playwright/test');


class CartPage {

   // 3. Annotate class properties with their types
  /** @type {Page} */
  page;
  /** @type {Locator} */
  checkoutButton;
  
   /**
   * 2. Annotate the constructor parameter
   * @param {Page} page
   */

    constructor(page) {
        this.page = page; // to make page available to the public.
        this.checkoutButton = page.getByRole("button",{name :"Checkout"});
    
    }

    async verifyProductIsDisplayed(product_name) {
        await this.page.waitForTimeout(2000);
        await expect(this.page.getByText(product_name)).toBeVisible();


    }
        
    async checkout() {
        await this.checkoutButton.click();
      }

}

module.exports = {CartPage} ; 

