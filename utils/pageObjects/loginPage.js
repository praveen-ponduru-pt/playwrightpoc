
class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = page.locator("[name='username']");
        this.password = page.locator("[name='password']");
        this.loginButton = page.locator("[type='submit']");
    }

    async login(userName, password) {
        await this.username.fill(userName);
        await this.password.fill(password);
        await this.loginButton.click();
    }

}

export { LoginPage }