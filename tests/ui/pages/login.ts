import { type Page, type Locator, expect } from '@playwright/test'
import messages from '../../utils/messages';

class LoginPage {
    readonly page: Page;
    readonly userName: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly messagePanel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userName = page.getByPlaceholder('UserName');
        this.password = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.messagePanel = page.locator('#name');
    }

    async fillEmail(email: string) {
        await this.userName.fill(email);
    }

    async fillPassword(password: string) {
        await this.password.fill(password);
    }

    async doLogin(email: string, password: string) {
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.loginButton.click();
    }

    async checkLoggedIn() {
        await expect(this.page).toHaveURL(/.*profile/);
        await expect(this.page).toHaveTitle(/DEMOQA/);
    }

    async checkInvalidCredentials() {
        await expect(this.messagePanel).toHaveText(messages.login.invalid);
    }
}

export default LoginPage;
