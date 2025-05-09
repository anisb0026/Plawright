const {LoginPage} = require('./LoginPage.page');
const {DashboardPage}  = require('./DashboardPage.page');
const {CartPage}  = require('./CartPage.page');
const {OrderReviewPage}  = require('./OrderReviewPage.page');
const {AssertionOrderPage}  = require('./AssertionOrderPage.page');



class POManager {

    constructor(page) {
        this.loginPage = new LoginPage (page);        // create Object loginPage for class LoginPage.
        this.dashboardPage = new DashboardPage(page); // create Object dashboardPage for class DashboardPage.
        this.cartPage = new CartPage(page); 
        this.orderReviewPage = new OrderReviewPage(page);
        this.assertionOrderPage = new AssertionOrderPage(page);
    }

    getLoginPage() {
        return this.loginPage
    }

    getDashboardPage() {
        return this.dashboardPage
    }

    getCartPage() {
        return this.cartPage
    }

    getOrderReviewPage() {
        return this.orderReviewPage
    }

    getAssertionOrderPage() {
        return this.assertionOrderPage
    }
}

module.exports = {POManager}; 
