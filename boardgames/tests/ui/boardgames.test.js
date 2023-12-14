const { test, expect } = require("@playwright/test");

test("Check boardgames page", async ({ page }) => {
  await page.goto("https://ivangeorgiev-exam.onrender.com/boardgames");
  const list = await page.$("ul");
  expect(list).toBeTruthy();
});
