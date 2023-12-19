import { LoginPage } from "./pageObjects/loginPage"
import { login } from "./constants.json"
import { DashboardPage } from "./pageObjects/dashboardPage";

const library = {

    loginToTheApplication: async (page) => {

        const loginPage = new LoginPage(page);
        await page.goto(login.BASEURL);
        await loginPage.login(login.USERNAME, login.PASSWORD);
    },

    logoutFromTheApplication: async (page) => {

        const dashboardPage = new DashboardPage(page);
        dashboardPage.logout();
    }
}

export { library }