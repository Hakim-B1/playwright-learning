# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: saucedemo-login.spec.js >> Should login to saucedemo
- Location: tests\saucedemo-login.spec.js:3:1

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "/inventory.html/"
Received: "https://www.saucedemo.com/"
Timeout:  1000ms

Call log:
  - Expect "toHaveURL" with timeout 1000ms
    10 × unexpected value "https://www.saucedemo.com/"

```

```yaml
- text: Swag Labs
- textbox "Username": Standard_user
- textbox "Password": secret_sauce
- 'heading "Epic sadface: Username and password do not match any user in this service" [level=3]':
  - button
  - text: "Epic sadface: Username and password do not match any user in this service"
- button "Login"
- heading "Accepted usernames are:" [level=4]
- text: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
- heading "Password for all users:" [level=4]
- text: secret_sauce
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { LoginPage } from "../pages/loginPage";
  3  | test("Should login to saucedemo", async ({ page }) => {
  4  |   const loginpage = new LoginPage(page);
  5  |   await loginpage.open();
  6  |   await loginpage.login("Standard_user", "secret_sauce");
> 7  |   await expect(page).toHaveURL("/inventory.html/");
     |                      ^ Error: expect(page).toHaveURL(expected) failed
  8  |   await expect(page.locator(".title")).toHaveText("Products");
  9  | });
  10 | 
```