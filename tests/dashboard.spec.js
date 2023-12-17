import { test, expect } from "@playwright/test"
import { library } from "../utils/library";
import { DashboardPage } from "../utils/pageObjects/dashboardPage";
import { headers } from "../utils/constants.json"


test.beforeEach(async ({ page }) => {
    await library.loginToTheApplication(page);
    await page.waitForLoadState();
})

test.skip("Navigate to Dashboard page", async ({ page }) => {

    const dashboardPage = new DashboardPage(page);
    await expect(dashboardPage.header, "Verify header").toHaveText(headers.dashboard);
})