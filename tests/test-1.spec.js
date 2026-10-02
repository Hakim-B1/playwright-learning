import { test, expect } from "@playwright/test";

test("TestProducts", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500/tests/index.html");
  await page.pause();
  //   test.setTimeout(500);
  //   test.slow();
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click({ timeout: 3000 });
  await page.waitForURL("https://www.saucedemo.com/inventory.html");
  await expect(page).toHaveURL(/inventory.html/);
  await page.close();
  await page.getByAltText("products", { exact: true });
  await page.locator("xpath=//div//button[2]");
  await page.locator('xpath=//button[contains(text(),"Save Changes")]');
});
