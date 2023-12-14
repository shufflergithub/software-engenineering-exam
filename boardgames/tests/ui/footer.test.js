const { test, expect } = require("@playwright/test");

test("Check footer", async ({ page }) => {
  await page.goto("https://ivangeorgiev-exam.onrender.com/");
  const footer = await page.$("footer");
  const text = await footer.textContent();
  expect(text).toContain(
    "© 2023 - Software Engineеring and DevOps exam preparation"
  );
});
