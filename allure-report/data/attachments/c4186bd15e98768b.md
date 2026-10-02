# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login-page.spec.js >> Should connect to saucedemo Account
- Location: test-cases\login-page.spec.js:9:1

# Error details

```
TypeError: overviewPage.finishButton is not a function
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e11]: Swag Labs
        - generic [ref=e14]: "1"
      - generic [ref=e16]: "Checkout: Your Information"
    - generic [ref=e19]:
      - generic [ref=e20]:
        - textbox "First Name" [ref=e22]: hakim
        - textbox "Last Name" [ref=e24]: Kim
        - textbox "Zip/Postal Code" [active] [ref=e26]: "13008"
      - generic [ref=e28]:
        - button "Go back Cancel" [ref=e29] [cursor=pointer]:
          - img "Go back" [ref=e30]
          - text: Cancel
        - button "Continue" [ref=e31] [cursor=pointer]
  - contentinfo [ref=e32]:
    - list [ref=e33]:
      - listitem [ref=e34]:
        - link "Twitter" [ref=e35] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e36]:
        - link "Facebook" [ref=e37] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e38]:
        - link "LinkedIn" [ref=e39] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e40]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import { test } from "allure-playwright";
  2  | import { LoginPage } from "../page-objects/login-page";
  3  | import { InventoryPage } from "../page-objects/inventory-page";
  4  | import { CheckoutPage } from "../page-objects/checkout-page";
  5  | import { FormePage } from "../page-objects/form-page";
  6  | import { OverviewPage } from "../page-objects/overview-page";
  7  | import { BackHomePage } from "../page-objects/backHome-page";
  8  | 
  9  | test("Should connect to saucedemo Account", async ({ page }) => {
  10 |   const loginPage = new LoginPage(page);
  11 |   await loginPage.goto();
  12 |   await page.pause();
  13 |   await loginPage.loginToApplication(
  14 |     process.env.SAUCE_USERNAME,
  15 |     process.env.SAUCE_PASSWORD,
  16 |   );
  17 | 
  18 |   const inventoryPage = new InventoryPage(page);
  19 |   await inventoryPage.addItemToCarte();
  20 | 
  21 |   const checkoutPage = new CheckoutPage(page);
  22 |   await checkoutPage.checkoutYourCart();
  23 | 
  24 |   const formePage = new FormePage(page);
  25 |   await formePage.fillForme("hakim", "Kim", "13008");
  26 |   await formePage.continue;
  27 | 
  28 |   const overviewPage = new OverviewPage(page);
> 29 |   await overviewPage.finishButton();
     |                      ^ TypeError: overviewPage.finishButton is not a function
  30 | 
  31 |   const backHomePage = new BackHomePage(page);
  32 |   await backHomePage.bachHomeButton();
  33 | });
  34 | 
```