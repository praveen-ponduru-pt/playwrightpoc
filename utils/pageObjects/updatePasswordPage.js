class UpdatePasswordPage {
    constructor(page) {
        this.page = page;
        this.header = page.locator('div>h6');
        this.currentPassword = page.getByRole('textbox').nth(1);
        this.newPassword = page.getByRole('textbox').nth(2);
        this.confirmPassword = page.getByRole('textbox').nth(3);
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.profileMenu = page.locator("div.oxd-topbar-header-userarea > ul > li > span");
        this.changePasswordButton = page.getByRole('menuitem', { name: 'Change Password' });
        this.successMessage = page.locator("//*[@id=\"oxd-toaster_1\"]/div/div[1]/div[2]/p[2]");
        this.passwordsDontMatchMessage = page.locator("div.oxd-form-row.user-password-row > div > div:nth-child(2) > div > span");
    }

    async updatePassword(currentPassword, newPassword, confirmPassword) {

        await this.profileMenu.click();
        await this.changePasswordButton.click();
        // this.page.waitForLoadState();
        await this.currentPassword.fill(currentPassword);
        await this.newPassword.fill(newPassword);
        await this.confirmPassword.fill(confirmPassword);
        await this.saveButton.click();
        await this.page.waitForLoadState();
    }
}

export { UpdatePasswordPage }