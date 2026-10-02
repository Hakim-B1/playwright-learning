import { test, expect } from "@playwright/test";

test("Should display the alert and fill the prompt", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toBe("prompt");
    expect(dialog.message()).toBe("I am a JS prompt");
    await dialog.accept("hakim");
  });

  await page.getByRole("button", { name: "Click for JS Prompt" }).click();
  await expect(page.locator("#result")).toHaveText("You entered: hakim");
});

test("Should display the alert and dismiss the prompt", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toBe("prompt");
    expect(dialog.message()).toBe("I am a JS prompt");
    await dialog.dismiss();
  });

  await page.getByRole("button", { name: "Click for JS Prompt" }).click();
  await expect(page.locator("#result")).toHaveText("You entered: null");
});
