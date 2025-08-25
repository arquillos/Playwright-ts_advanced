import { test } from '@playwright/test';
import hooks from '../../utils/hooks';
import ProfilePage from '../pages/profile';
import pagesUrls from '../../utils/pagesUrls';

let profilePage: ProfilePage;

test.beforeEach(async ({ page }) => {
    profilePage = await hooks.before(page, ProfilePage, pagesUrls.profile);
});

test.describe('Profile - Dynamic Page Object Model', () => {
   test('Check logged in', async () => {
    await profilePage.checkLoggedIn();
   }) ;
});