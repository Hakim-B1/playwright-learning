# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: saucedemo-login.spec.js >> Should login to saucedemo
- Location: tests\saucedemo-login.spec.js:2:1

# Error details

```
ReferenceError: LoginPage is not defined
```

# Test source

```ts
  1 | import { test, expect } from "@playwright/test";
  2 | test("Should login to saucedemo", async ({ page }) => {
> 3 |   const loginpage = new LoginPage(page);
    |                     ^ ReferenceError: LoginPage is not defined
  4 |   await loginpage.open();
  5 |   await loginpage.login("Standard_user", "secret_sauce");
  6 |   await expect(page).toHaveURL("/inventory.html/");
  7 |   await expect(page.locator(".title")).toHaveText("Products");
  8 | });
  9 | 
```