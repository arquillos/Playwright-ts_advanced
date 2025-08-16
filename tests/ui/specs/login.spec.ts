import { test } from '@playwright/test'
import pagesUrls from '../../utils/pagesUrls'
import LoginPage from '../pages/login';

const userName = process.env.USERNAME!;
const password = process.env.PASSWORD!;
let loginPage: LoginPage;

test.use({ storageState: { cookies: [], origins: [] } }); // Doesn't share the logged in session
// test.use({ storageState: undefined }); // Same result.

test.describe.configure({ mode: 'serial' }); // Execute the test in 'serial' mode. DemoQA restriction

test.beforeEach(async ({ page }) => {
    await page.goto(pagesUrls.loginPage);
    loginPage = new LoginPage(page)
});

test.describe('Book Store - Login', () => {
    test('successfull login', async () => {
        // Debug statement to check the values of userName and password
        console.log(`Username: ${userName}`);
        console.log(`Password: ${password}`);
        
        await loginPage.doLogin(userName, password);
        await loginPage.checkLoggedIn();
    });

    test('failing login - invalid username', async () => {
        await loginPage.doLogin('wrongUserName', password);
        await loginPage.checkInvalidCredentials();
    });

    test('failing login - invalid password', async () => {
        await loginPage.doLogin(userName, 'wrongPassword');
        await loginPage.checkInvalidCredentials();
    });
});
