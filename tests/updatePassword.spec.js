import { test, expect } from "@playwright/test"
import { library } from "../utils/library";
import { UpdatePasswordPage } from "../utils/pageObjects/updatePasswordPage";
import { login } from "../utils/constants.json"
import { headers } from "../utils/constants.json"

test.beforeEach(async ({ page }) => {

    await library.loginToTheApplication(page);
})

test.afterEach(async ({ page }) => {

    await library.logoutFromTheApplication(page);
})

test("Update Password", async ({ page }) => {

    const updatePasswordPage = new UpdatePasswordPage(page);
    await updatePasswordPage.updatePassword(login.PASSWORD, login.newPassword, login.newPassword);

    await expect(updatePasswordPage.header).toHaveText(headers.updatePassword);
    await expect(updatePasswordPage.successMessage).toHaveText("Successfully Saved");
})

test("Incorrect Current Password", async ({ page }) => {

    const updatePasswordPage = new UpdatePasswordPage(page);
    await updatePasswordPage.updatePassword(login.wrongPassword, login.newPassword, login.newPassword);

    await expect(updatePasswordPage.successMessage).toHaveText("Current Password is Incorrect");
})

test("Passwords Dont match", async ({ page }) => {

    const updatePasswordPage = new UpdatePasswordPage(page);
    await updatePasswordPage.updatePassword(login.PASSWORD, login.newPassword, login.wrongPassword);

    await expect(updatePasswordPage.passwordsDontMatchMessage).toHaveText("Passwords do not match");
})
