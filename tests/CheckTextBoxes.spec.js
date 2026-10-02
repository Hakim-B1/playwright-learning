import { test, expect } from "@playwright/test";

test("testbox", async ({ page }) => {
  await page.goto("https://www.bing.com/account/general");
  await page.pause();

  await page.close();
});
