import { test } from "allure-playwright";
import { LoginPage } from "../page-objects/login-page";
import { InventoryPage } from "../page-objects/inventory-page";
import { CheckoutPage } from "../page-objects/checkout-page";
import { FormePage } from "../page-objects/form-page";
import { OverviewPage } from "../page-objects/overview-page";
import { BackHomePage } from "../page-objects/backHome-page";
import { LogoutPage } from "../page-objects/logout-page";

test("Should perform end to end connexion on saucedemo website", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await page.pause();
  await loginPage.loginToApplication(
    process.env.SAUCE_USERNAME,
    process.env.SAUCE_PASSWORD,
  );

  const inventoryPage = new InventoryPage(page);
  await inventoryPage.addItemToCarte();

  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.checkoutYourCart();

  const formePage = new FormePage(page);
  await formePage.fillForme("hakim", "Kim", "13008");
  await formePage.continue();

  const overviewPage = new OverviewPage(page);
  await overviewPage.finishTransaction();

  const backHomePage = new BackHomePage(page);
  await backHomePage.backToHome();

  const logoutPage = new LogoutPage(page);
  await logoutPage.logout();
});
