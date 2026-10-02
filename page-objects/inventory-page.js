export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.addToCarte = page.locator("#add-to-cart-sauce-labs-backpack");
    this.cart = page.locator(".shopping_cart_link");
  }
  async addItemToCarte() {
    await this.addToCarte.click();
    await this.cart.click();
  }
}
