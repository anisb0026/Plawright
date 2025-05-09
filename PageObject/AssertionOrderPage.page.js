// 1. Import necessary types for JSDoc
const {Page, Locator } = require('@playwright/test');

const {expect } = require('@playwright/test');

class AssertionOrderPage {

   // 3. Annotate class properties with their types
  /** @type {Locator} */
  message;

   /**
   * 2. Annotate the constructor parameter
   * @param {Page} page
   */

    constructor(page) { 
        this.message = page.getByText("Thankyou for the order.");
    
    }

    async assertionOrder() {
        await expect(this.message).toBeVisible();
        
    }
        
}

module.exports = {AssertionOrderPage} ; 
