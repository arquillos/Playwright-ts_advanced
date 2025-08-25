// Hooks file - Browse to any page and create a new page
import { Page } from '@playwright/test';
import { buildUrl } from './urlBuilder';
import LoginPage from '../ui/pages/login';
import ProfilePage from '../ui/pages/profile';

async function before(
    page: Page,
    PageObjectParam: LoginPage|ProfilePage,
    targetPage: string,
    params?: Record<any, any>
) {
    // Browse to the page
    await page.goto(buildUrl(targetPage, params));

    // Create the page object
    const pageObject = await new PageObjectParam(page);

    return pageObject;
};

export default { before };
