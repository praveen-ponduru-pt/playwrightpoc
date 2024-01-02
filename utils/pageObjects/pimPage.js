class PIMPage {
    constructor(page) {

        this.page = page;
        this.pimMenu = page.getByRole('link', { name: 'PIM' });
        this.addButton = page.getByRole('button', { name: ' Add' });
        this.firstName = page.getByPlaceholder('First Name');
        this.middleName = page.getByPlaceholder('Middle Name');
        this.lastName = page.getByPlaceholder('Last Name');
        this.createLoginToggle = page.locator('form span');
        this.username = page.locator('div:nth-child(4) > .oxd-grid-2 > div > .oxd-input-group > div:nth-child(2) > .oxd-input');
        // this.enabledRadioButton = 
        this.password = page.locator('div.oxd-grid-item.oxd-grid-item--gutters.user-password-cell > div > div:nth-child(2) > input');
        this.confirmPassword = page.locator('div.oxd-form-row.user-password-row > div > div:nth-child(2) > div > div:nth-child(2) > input');
        this.saveButton = page.getByRole('button', { name: 'Save' });
        // this.cancelButton =
        this.successMessage = page.locator('div.oxd-toast-content.oxd-toast-content--success > p.oxd-text.oxd-text--p.oxd-text--toast-message.oxd-toast-content-text');
    }

    async addEmployee(firstName, middleName, lastName, username, password, confirmPassword) {

        await this.page.waitForLoadState();
        await this.pimMenu.click();
        await this.addButton.click();
        await this.firstName.fill(firstName);
        await this.middleName.fill(middleName);
        await this.lastName.fill(lastName);
        await this.createLoginToggle.click();
        await this.username.fill(username);
        await this.password.fill(password);
        await this.confirmPassword.fill(confirmPassword);
        await this.saveButton.click();
    }
}

export { PIMPage }