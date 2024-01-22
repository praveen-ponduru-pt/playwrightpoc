import { text } from "stream/consumers";


class DashboardPage {
    constructor(page) {

        this.page = page;
        this.header = page.locator("div.oxd-topbar-header-title > span > h6");
        this.profileMenu = page.locator("span.oxd-userdropdown-tab");
        this.logoutButton = page.locator("div.oxd-topbar-header-userarea > ul > li > ul > li:nth-child(4) > a");
    }

    async logout() {

        await this.page.waitForLoadState();
        await this.profileMenu.click({ force: true });
        await this.logoutButton.click();
    }
}

export { DashboardPage }