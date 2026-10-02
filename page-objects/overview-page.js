export class OverviewPage {
  constructor(page) {
    this.page = page;
    this.finishButton = page.getByRole("button", { name: "Finish" });
  }
  async finishTransaction() {
    await this.finishButton.click();
  }
}
