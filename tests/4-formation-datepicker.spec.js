// Le nom du fichier est: 4-formation-datepicker.spec.js
import { test, expect } from "@playwright/test";

test.only("Should select the last day of August", async ({ page }) => {
  await page.goto("https://jqueryui.com/datepicker/");
  await page.pause();
  const iframe = await page.frameLocator(".demo-frame");
  await iframe.locator("#datepicker").click();
  await iframe.getByTitle("Next").click({ clickCount: 2 });
  await iframe.getByRole("link", { name: "31" }).click();
  await expect(iframe.locator("#datepicker")).toHaveValue("08/31/2026");
});

test("Should select dynamically the tommorow date", async ({ page }) => {
  await page.goto("https://jqueryui.com/datepicker/");
  await page.pause();
  const iframe = await page.frameLocator(".demo-frame");
  await iframe.locator("#datepicker").click();
  await iframe
    .locator(
      '//a[@class="ui-state-default ui-state-highlight"]//following::a[@class="ui-state-default"]',
    )
    .click();
  await page.close();
});
