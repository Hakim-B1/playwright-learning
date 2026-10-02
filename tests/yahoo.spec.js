import { test, expect } from "@playwright/test";

test("Openning Browser", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
});
test("test20", async ({ page }) => {
  await page.pause();
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
  await page.waitForTimeout(18000);
  await expect(page.locator('[data-test="title"]')).toHaveText("Products");
});

test("Closing Browser", async ({ page }) => {
  await page.close();
});
/*0
dans la démarche page object model , on doit separer le code des cas de test de celui des Page. pour ce faire il faut créer deux repertoires
01- unn repertoire qu'on va appeler Pagemodel
02- TestCases
important; pour chaque page, il faut créer une class
*/
class myclasse {
  constructor(page){
this.page=page
this.username= page.locator()
this.password= page.locator()
this.loginbutton= page.locator()
  }
// ici on peut mettre les méthode


}