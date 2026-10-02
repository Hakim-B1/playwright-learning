// Drag et drop avec deux approches, laquelle est preférable en terme de solidité, et de bonne pratique au sein des entreprises ?
import { test, expect } from "@playwright/test";

test("Should perform drad and drop file using const", async ({ page }) => {
  await page.goto("https://jqueryui.com/droppable/");
  const iframe = await page.frameLocator(".demo-frame");
  const draggable = await iframe.getByText("Drag me to my target");
  const droppable = await iframe.getByText("Drop here");
  await draggable.dragTo(droppable);
});

test("Should perform drad and drop file using only locators", async ({
  page,
}) => {
  await page.goto("https://jqueryui.com/droppable/");
  await page
    .frameLocator(".demo-frame")
    .getByText("Drag me to my target")
    .dragTo(page.frameLocator(".demo-frame").getByText("Drop here"));
});
