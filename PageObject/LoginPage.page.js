// 1. Import necessary types for JSDoc
const { Page, Locator } = require('@playwright/test');

class LoginPage {

  // 3. Annotate class properties with their types
  /** @type {Page} */
  page;
  /** @type {Locator} */
  userName;
  /** @type {Locator} */
  password;
   /** @type {Locator} */
  signInbutton;
 

   /**
   * 2. Annotate the constructor parameter
   * @param {Page} page
   */


    constructor(page) {
    this.page = page; // to make page available to the public.
    this.userName = page.getByPlaceholder("email@example.com");
    this.password = page.getByPlaceholder("enter your passsword");
    this.signInbutton = page.getByRole('button',{name:"Login"});
  }

    async goTo() {
    await this.page.goto("https://rahulshettyacademy.com/client/");
   }

   async validLogin(email, pswrd) {
    await this.userName.fill(email);
    await this.password.fill(pswrd);
    await this.signInbutton.click();
   }

}
module.exports = {LoginPage} ; 


