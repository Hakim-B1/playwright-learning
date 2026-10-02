# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: saucedemo-login.spec.js >> Should login to saucedemo
- Location: tests\saucedemo-login.spec.js:3:1

# Error details

```
TypeError: page.getbyplaceholder is not a function
```

# Test source

```ts
  1  | export class LoginPage {
  2  |   constructor(page) {
  3  |     this.page = page;
> 4  |     this.usernameInput = page.getbyplaceholder("Username");
     |                               ^ TypeError: page.getbyplaceholder is not a function
  5  |     this.passwordInput = page.getbyplaceholder("Password");
  6  |     this.submitButton = page.getbyrole("button", { name: "Login" });
  7  |   }
  8  |   async open() {
  9  |     await this.page.goto("https://www.saucedemo.com/");
  10 |   }
  11 |   async login(username, password) {
  12 |     await this.usernameInput.fill(username);
  13 |     await this.passwordInput.fill(password);
  14 |     await this.submitButton.click();
  15 |   }
  16 | }
  17 | 
```