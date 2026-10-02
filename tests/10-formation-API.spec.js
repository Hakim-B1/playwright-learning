import { test, expect } from "@playwright/test";
test("", async ({ request }) => {
  const response = await request.get("https://api.restful-api.dev/objects/7");
  const responseBody = await response.json();
  const name = await responseBody.data.price;
  console.log(await response.json());
  console.log(name);
});
