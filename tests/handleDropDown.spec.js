import { test, expect } from "@playwright/test";
test("handleDropDown", async ({ page }) => {
  await page.goto("https://www.salesforce.com/products/free-trial/developer/");
  await page.getByRole("button", { name: "Accept All Cookies" }).click();
  await page.waitForTimeout(2000);
  //await page.pause();
  const value = await page
    .locator('select[name="country"]')
    .getByRole("option")
    .allTextContents();
  for (const values of await value) {
  }
  console.log(value.length);
  await expect(value.length).toBe(245);
  await expect(value).toContain("India");
  await expect(value).toHaveLength(245);
  await expect(value).toHaveCount(245);
  await page.locator('//button[text()="click here"]').dblclick();

  // const value = await page.getByRole("option");
  // // console.log(await value.count());
  // for (let values of value.all()) {
  //   console.log(await values.nth().textContent());
  // }

  //for (let i = 0; i < (await value.count()); i++) {
  // console.log(await value.nth(i).allTextContents());
  //}
  await page.close();
});
