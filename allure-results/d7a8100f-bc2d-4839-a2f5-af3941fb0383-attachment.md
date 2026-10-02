# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 11-formation-csv.spec.js >> Should display the content of users-data.csv
- Location: tests\11-formation-csv.spec.js:10:1

# Error details

```
ReferenceError: expect is not defined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - generic [ref=e10]:
        - textbox "Username" [ref=e11]: standard_user
        - img [ref=e12]
      - generic [ref=e14]:
        - textbox "Password" [ref=e15]: "123456"
        - img [ref=e16]
      - 'heading "Epic sadface: Username and password do not match any user in this service" [level=3] [ref=e19]':
        - button [ref=e20] [cursor=pointer]:
          - img [ref=e21]
        - text: "Epic sadface: Username and password do not match any user in this service"
      - button "Login" [active] [ref=e23] [cursor=pointer]
    - generic [ref=e25]:
      - generic [ref=e26]:
        - heading "Accepted usernames are:" [level=4] [ref=e27]
        - text: standard_user
        - text: locked_out_user
        - text: problem_user
        - text: performance_glitch_user
        - text: error_user
        - text: visual_user
      - generic [ref=e28]:
        - heading "Password for all users:" [level=4] [ref=e29]
        - text: secret_sauce
```

# Test source

```ts
  1  | import { test } from "@playwright/test";
  2  | import fs from "fs";
  3  | import { parse } from "csv-parse/sync";
  4  | 
  5  | const usersData = parse(fs.readFileSync("./tests/users-data.csv"), {
  6  |   columns: true,
  7  |   skip_empty_lines: true,
  8  | });
  9  | 
  10 | test("Should display the content of users-data.csv", async ({ page }) => {
  11 |   await page.goto("https://www.saucedemo.com/");
  12 |   await page.pause();
  13 |   await page.getByPlaceholder("Username").fill(usersData[1].pUserName);
  14 |   await page.getByPlaceholder("Password").fill(usersData[1].pPassword);
  15 |   await page.getByRole("button", { name: "Login" }).click({ timeout: 3000 });
> 16 |   await expect(page).toHaveURL(/inventory/);
     |   ^ ReferenceError: expect is not defined
  17 | });
  18 | 
```