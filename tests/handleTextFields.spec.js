import { test, expect } from "@playwright/test";
test("Handle text fields", async ({ page }) => {
  await page.goto("https://bookmyshow.com");
  //   await page.pause();
  const val = await page
    .locator('//p[@class="sc-1jg5yz-4 cVsVcL"]')
    .allTextContents();
  console.log(val);
  await page.close();
});
