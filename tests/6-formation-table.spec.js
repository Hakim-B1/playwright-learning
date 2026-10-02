// Nom de fichier 6-formation-table.spec.js  , vous dites quoi du code suivant :
import { test, expect } from "@playwright/test";
test("Should display on console the example table elements by rows ", async ({
  page,
}) => {
  await page.goto("https://www.w3schools.com/html/html_tables.asp");
  await page
    .frameLocator("#fast-cmp-iframe")
    .getByRole("button", { name: "Accept" })
    .click();

  const rows = page.locator("#customers td:nth-child(1)");
  const count = await rows.count();
  for (let i = 1; i < count; i++) {
    const company = await rows.nth(i).textContent();
    console.log(company);
  }
  await page.close();
});




