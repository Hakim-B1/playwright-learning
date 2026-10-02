import { test } from "@playwright/test";

test("Display suggestions", async ({ page }) => {
  // await page.goto("https://demoqa.com/auto-complete");
  await page.goto("https://www.amazon.fr/");

  await page.pause();
  await page.waitForTimeout(5000);
  // await page.getByRole("searchbox").click();
  await page.getByRole("searchbox").screenshot({
    path: "tests/images/amazonsearchbox_" + Date.now() + ".png",
  });
  
  await page.close();
});
