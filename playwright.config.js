const { devices } = require('@playwright/test');
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  
  testDir: './tests',
  timeout: 30 * 1000,
  //retries: 1,
  expect: {
    timeout: 5000,
  },

  reporter: [["line"], ["allure-playwright"]], 
    
  use: {
    
    browserName: 'chromium',
    headless: false,
    screenshot: 'only-on-failure',
    video:'retain-on-failure',
    trace: 'retain-on-failure',
    ignoreHTTPSErrors: true,
    permissions: ['geolocation', 'notifications', 'camera', 'microphone'],
    //...devices['iPhone 12 Pro Max']
    
  },

})