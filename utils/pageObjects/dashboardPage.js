

class DashboardPage {
    constructor(page) {
        this.page = page;
        this.header = page.locator("div.oxd-topbar-header-title > span > h6");
    }


}

export { DashboardPage }