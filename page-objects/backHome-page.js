export class BackHomePage {
  constructor(page) {
    this.page = page;
    this.bachHomeButton = page.getByRole("button", { name: "Back Home" });
  }

  async backToHome() {
    await this.bachHomeButton.click();
  }
}
