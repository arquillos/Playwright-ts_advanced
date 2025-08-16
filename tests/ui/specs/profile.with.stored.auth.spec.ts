import { test } from '@playwright/test'
import pagesUrls from '../../utils/pagesUrls'
import ProfilePage from '../pages/profile';

let profilePage: ProfilePage;

test.beforeEach(async ({ page }) => {
    await page.goto(pagesUrls.profile);
    profilePage = new ProfilePage(page)
});

test.describe('Profile page - Stored Auth', () => {
    test('Check logged in', async () => {
        await profilePage.checkLoggedIn();
    });
});
