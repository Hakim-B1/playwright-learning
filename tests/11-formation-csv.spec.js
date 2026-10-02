import { test } from "@playwright/test";
import fs from "fs";
import { parse } from "csv-parse/sync";

const usersData = parse(fs.readFileSync("./tests/users-data.csv"), {
  columns: true,
  skip_empty_lines: true,
});

test("Should display the content of users-data.csv", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.pause();
  await page.getByPlaceholder("Username").fill(usersData[0].pUserName);
  await page.getByPlaceholder("Password").fill(usersData[0].pPassword);
  await page.getByRole("button", { name: "Login" }).click({ timeout: 3000 });
  //   await expect(page.locator("#error-button")).toBeVisible();
});
