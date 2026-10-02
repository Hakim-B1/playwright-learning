export class FormePage {
  constructor(page) {
    this.page = page;
    this.formeFirstName = page.getByPlaceholder("First Name");
    this.formLastName = page.getByPlaceholder("Last Name");
    this.formZip = page.getByPlaceholder("Zip/Postal Code");
    this.continueButton = page.locator("#continue");
  }
  async fillForme(FirstName, LastName, ZipeCode) {
    await this.formeFirstName.fill(FirstName);
    await this.formLastName.fill(LastName);
    await this.formZip.fill(ZipeCode);
  }
  async continue() {
    await this.continueButton.click();
  }
}
