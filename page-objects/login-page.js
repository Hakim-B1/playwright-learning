import { expect } from "@playwright/test";
export class LoginPage {
  constructor(page) {
    this.page = page;
    this.userName = page.getByRole("textbox", { name: "Username" });
    this.password = page.getByRole("textbox", { name: "Password" });
    this.loginButton = page.getByRole("button", { name: "login" });
  }

  async goto() {
    await this.page.goto("https://www.saucedemo.com/");
  }
  async loginToApplication(user, pwd) {
    await this.userName.fill(user);
    await this.password.fill(pwd);
    await this.loginButton.click();
  }
  async verifyLoggedIn() {
    await expect(this.page).toHaveURL(/inventory/);
  }
}
