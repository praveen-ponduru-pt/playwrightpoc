import { test, expect } from "@playwright/test"
import { library } from "../utils/library";
import { UpdatePasswordPage } from "../utils/pageObjects/updatePasswordPage";
import { login } from "../utils/constants.json"
import { headers } from "../utils/constants.json"

test.beforeEach(async ({ page }) => {

    await library.loginToTheApplication(page);
    await page.waitForLoadState();
})

test.afterEach(async ({ page }) => {

    await library.logoutFromTheApplication(page);
})

test("Update Password", async ({ page }) => {

    const updatePasswordPage = new UpdatePasswordPage(page);
    await updatePasswordPage.updatePassword(login.PASSWORD, login.newPassword, login.newPassword);

    await expect(updatePasswordPage.successMessage).toHaveText("Successfully Saved");
    console.log()
})
