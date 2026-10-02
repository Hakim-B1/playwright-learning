// nom de fichier : 09-formation-create-newpages.spec
// vous dites quoi de ce code?
// c'est le cours sur la manipulation de nouvelles pages

import { test, expect, chromium } from "@playwright/test";
test("Should launch a new window when performing a click on blogs and get the Property and Real Estate element", async ({}) => {
  const browser = await chromium.launch();
  const context = await browser.newContext(); // c'est le profile des pages que tu vas lancer par la suite
  const page = await context.newPage();
  await page.goto("https://www.hdfc.com/");
  const pagepromise = context.waitForEvent("page");
  await page.getByText("Blogs").first().click();
  const newpage = await pagepromise;
  await newpage.getByRole("button", { name: " CONTINUE " }).click();
  await newpage.locator(".navbar-card").nth(1).hover();
  await expect(
    newpage.getByRole("link", { name: "View More" }).nth(1),
  ).toBeVisible();
  await expect(
    newpage.getByRole("link", { name: "View More" }).nth(1),
  ).toBeEnabled();
  await expect(newpage.locator(".nav-read-more").nth(1)).toHaveText(
    "View More",
  );
  await newpage.close();
  await page.close();
  await context.close();
  await browser.close();
});
