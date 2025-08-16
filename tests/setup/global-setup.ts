// Function to store the authentication cookie with a global function
import { FullConfig, chromium } from "@playwright/test";
import LoginPage from "../ui/pages/login";
import pagesUrls from "../utils/pagesUrls";

// Login and save the cookie for reuse
// config: Connection with the `playwright.config.ts` file
async function globalSetup(config: FullConfig) {
    // Setup
    const user = process.env.USERNAME!;
    const password = process.env.PASSWORD!;
    const { baseURL, storageState } = config.projects[0].use;
    const browser = await chromium.launch({ headless: true, timeout: 10000 });
    const page = await browser.newPage();
    const loginPage = new LoginPage(page);

    // Login
    await page.goto(baseURL+pagesUrls.loginPage);
    await loginPage.doLogin(user, password);
    await loginPage.checkLoggedIn();

    // Save the login context and close the browser
    await page.context().storageState({ path: storageState as string});
    await browser.close()
}

export default globalSetup;