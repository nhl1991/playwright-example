// app router.

//　テストファイルの名前は「___.spec.ts」や「＿＿＿.test.ts」
  

// * 「npx playwright test」
// * 「npx playwright foo.spec.ts」
// * 「npx playwright test -g "テストの名"」は、名前で指定したテストのみを実行する。
// * npx playwright test —ui // UI모드

import { test, expect } from "@playwright/test";

test("should navigate to the about page and back to Home", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");
  // Find an element with the text 'About' and click on it
  await page.click("text=About");
  // The new URL should be "/about" (baseURL is used there)
  await expect(page).toHaveURL("/about");
  // The new page should contain an h1 with "About"
  await expect(page.locator("h1")).toContainText("About");
  await expect(page.locator("h2")).toContainText("Playwright is a E2E");
  await page.click("text=Home");
  await expect(page).toHaveURL("/");
});

// 実行方法
// 「npx playwright test app.spec.ts -g "Execute playwright by name」
// 「npx playwright test "Execute playwright by name"」
// 英語の大文字小文字を区別しません
test("Execute playwright by name", async ({ page }) => {
  await page.goto("/");
});
