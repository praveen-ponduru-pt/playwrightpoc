import { test, expect } from '@playwright/test';
import { library } from '../utils/library';
import { PIMPage } from '../utils/pageObjects/pimPage';
import { login, addEmployee } from '../utils/constants.json';

test.beforeEach(async ({ page }) => {

    await library.loginToTheApplication(page);
    await page.waitForLoadState();
})

test.afterEach(async ({ page }) => {

    await library.logoutFromTheApplication(page);
})

test("Add Employee", async ({ page }) => {

    const pimPage = new PIMPage(page);
    await pimPage.addEmployee(addEmployee.firstName, addEmployee.middleName, addEmployee.lastName,
        addEmployee.userName, login.PASSWORD, login.PASSWORD);
    await expect(pimPage.successMessage).toHaveText('Successfully Saved');
})