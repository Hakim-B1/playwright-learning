# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 10-formation-API.spec.js >> 
- Location: tests\10-formation-API.spec.js:2:1

# Error details

```
TypeError: Cannot read properties of undefined (reading 'price')
```

# Test source

```ts
  1 | import { test, expect } from "@playwright/test";
  2 | test("", async ({ request }) => {
  3 |   const response = await request.get("https://api.restful-api.dev/objects/7");
  4 |   const responseBody = await response.json();
> 5 |   const name = await response.data.price;
    |                                    ^ TypeError: Cannot read properties of undefined (reading 'price')
  6 |   console.log(await response.json());
  7 |   console.log(name);
  8 | });
  9 | 
```