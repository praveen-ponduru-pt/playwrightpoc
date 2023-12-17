import { LoginPage } from "./pageObjects/loginPage"
import { login } from "./constants.json"

const library = {

    loginToTheApplication: async (page) => {
        const loginPage = new LoginPage(page);
        await page.goto(login.BASEURL);
        await loginPage.login(login.USERNAME, login.PASSWORD);
    }
}

export { library }