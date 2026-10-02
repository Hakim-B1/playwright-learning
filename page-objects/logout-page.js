export class LogoutPage {
  constructor(page) {
    this.page = page;
    this.displayMenu = page.getByRole("button", { name: "Open Menu" });
    this.logoutButton = page.getByText("Logout");
  }

  async logout() {
    await this.displayMenu.click();
    await this.logoutButton.click();
  }
}
