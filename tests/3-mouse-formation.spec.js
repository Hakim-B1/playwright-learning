import { test, expect } from "@playwright/test";

test("should detect a right click", async ({ page }) => {
  await page.goto("https://vinothqaacademy.com/mouse-event/");
  //   await page.pause();
  await page
    .getByRole("button", { name: "Right Click Me" })
    .click({ button: "right" });
  //   await page.locator('//div[@id="contextMenu"]/button[2]').click();
  await page.getByRole("button", { name: "Copy" }).click();
  await expect(page.locator("#rightStatus")).toHaveText("Selected: Copy ✅");
});

test.only("should detect hover and display two options", async ({ page }) => {
  await page.goto(
    "https://testautomationpractice.blogspot.com/p/playwrightpractice.html",
  );
  await page.pause();
  await page.getByRole("button", { name: "Point Me" }).hover();
  await page
    .getByRole("button", { name: "Point Me" })
    .press
  await expect(page.locator(".dropdown-content a")).toHaveCount(2);
  await expect(page.locator(".dropdown-content a")).toHaveText([
    "Mobiles",
    "Laptops",
  ]);
  await page.close();
});
