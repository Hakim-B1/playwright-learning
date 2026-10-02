import { test, expect } from "@playwright/test";

test("allows switching Bing safe search to strict", async ({ page }) => {
  await page.goto("https://www.bing.com/");
  await page.pause();
  await page
    .getByRole("button", {
      name: /paramètres et liens rapides|settings and quick links/i,
    })
    .click();
  await page
    .getByRole("menuitem", { name: /recherche sécurisée|safesearch/i })
    .click();

  const strictOption = page.getByRole("radio", { name: /strict/i });
  const moderateOption = page.getByRole("radio", { name: /modéré|moderate/i });
  const disabledOption = page.getByRole("radio", { name: /désactivé|off/i });

  await strictOption.check();

  await expect(strictOption).toBeChecked();
  await expect(moderateOption).not.toBeChecked();
  await expect(disabledOption).not.toBeChecked();
});
