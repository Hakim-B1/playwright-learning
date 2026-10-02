// @ts-check
import { test, expect } from "@playwright/test";

test("verify Bing title", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://www.bing.com");
  await expect(page).toHaveTitle("Search - Microsoft Bing");

  await browser.close();
});
