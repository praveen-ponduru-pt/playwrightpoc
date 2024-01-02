// @ts-check
const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

test.skip('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test.skip('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test.only('Using Chrome Web Store extension with Playwright', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Extension ID from the Chrome Web Store
  const extensionId = 'cppjkneekbjaeellbfkmgnhonkkjfpdn';

  // Inject script to interact with the extension
  // await page.evaluate(async (extensionId) => {
  //   // Check if the extension is installed
  //   const isExtensionInstalled = async (id) => {
  //     return new Promise((resolve) => {
  //       chrome.runtime.sendMessage(id, { message: 'ping' }, (response) => {
  //         resolve(response);
  //       });
  //     });
  //   };

  //   const extensionInstalled = await isExtensionInstalled(extensionId);

  //   if (!extensionInstalled) {
  //     // If not installed, redirect to the Chrome Web Store page
  //     window.location.href = `https://chrome.google.com/webstore/detail/${extensionId}`;
  //   }
  // }, extensionId);

  // Your Playwright-specific test logic
  await page.goto('https://example.com');
  const title = await page.title();
  console.log(title);

  await browser.close();
});