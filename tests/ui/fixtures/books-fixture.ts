import { test as base } from '@playwright/test';
import BookPage from '../pages/book';
import { buildUrl } from '../../utils/urlBuilder';
import pagesUrls from '../../utils/pagesUrls';

// Declare the types of your fixtures.
type MyFixtures = {
    bookPage: BookPage;
}

export type Duplicate = {
    isDupe: boolean;  
}

// Extend base test by providing "bookPage" and "isDupe".
export const test = base.extend<MyFixtures & Duplicate>({
    isDupe: false, // Setting a default value

    bookPage: async ({ page, isDupe }, use) => {
        // 1. Set up the fixture.
        // Browse to the page
        await page.goto(buildUrl(pagesUrls.bookStorePage));
        
        // Create the page object
        const bookPage = new BookPage(page);

        // 2. Use the fixture value in the test.
        await use(bookPage);

        // 3. Clean up the fixture.
        await bookPage.addToYourCollection(isDupe);
    },
});

export { expect } from '@playwright/test';