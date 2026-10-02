import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
test("should login successfully with valid credentials", async ({ page }) => {
  const loginpage = new LoginPage(page);
  await loginpage.open();
  await page.pause();
  await loginpage.login("standard_user", "secret_sauce");
  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.getByText("Products")).toBeVisible();
});
