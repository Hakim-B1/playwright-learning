import { test, expect } from "@playwright/test";
test("Should display a small descriptive message in a little box when hovering over Tooltip on bottom", async ({
  page,
}) => {
  await page.goto("http://practice.expandtesting.com/tooltips");
  await page.pause();
  //   await page.getByText("Tooltip on bottom").hover();
  await page.getByRole("button", { name: "Tooltip on top" }).hover();
  //   await page.getByRole("button", { name: "Tooltip on bottom" }).first().hover();
  await expect(page.getByRole("tooltip")).toBeVisible();
  //   await page.getByRole("");
  await expect(page.getByRole("tooltip")).toHaveText("Tooltip on bottom");
});
