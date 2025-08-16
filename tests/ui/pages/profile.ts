import { expect, Locator, type Page } from "@playwright/test"

class ProfilePage {
    readonly page: Page;
    readonly notLoggedInLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.notLoggedInLabel = page.locator('#notLoggin-label');
    }

    async checkLoggedIn() {
        await expect(this.notLoggedInLabel).not.toBeVisible;
    }
}

export default ProfilePage;
