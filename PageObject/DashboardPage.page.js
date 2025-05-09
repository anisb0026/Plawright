// 1. Import necessary types for JSDoc
const { Page, Locator } = require('@playwright/test');

class DashboardPage {

  // 3. Annotate class properties with their types
  /** @type {Page} */
  page;
  /** @type {Locator} */
  productsName;
  /** @type {Locator} */
  products;
   /** @type {Locator} */
   cartButton;
 

   /**
   * 2. Annotate the constructor parameter
   * @param {Page} page
   */

    constructor(page) {
        this.page = page; // to make page available to the public.
        this.productsName = page.locator("div.card-body b");
        this.products = page.locator(".card-body");
        this.cartButton = page.getByRole("listitem").getByRole("button", { name: "Cart" });
    }

    async printProductsNames() {
        await this.page.waitForLoadState('networkidle');
        console.log('CardTitle = ', await this.productsName.allTextContents());
    }
        
    async addProductToCart(product_name) {
        const product = await this.products.filter({ hasText: product_name });
        const addToCartButton = await product.getByRole("button", { name: "Add to Cart" });
        await addToCartButton.click();
    }

    async navigateToCart () {
        await this.cartButton.click();
    }
}

module.exports = {DashboardPage} ; 

