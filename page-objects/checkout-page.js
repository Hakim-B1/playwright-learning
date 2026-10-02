export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.CheckoutButton = page.getByRole("button", { name: "checkout" });
  }

  async checkoutYourCart() {
    await this.CheckoutButton.click();
  }
}
