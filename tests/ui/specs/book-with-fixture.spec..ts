import { test } from '../fixtures/books-fixture';
import { APIRequestContext, Page } from '@playwright/test';
import baseAPIUrl from '../../utils/environmentBaseUrl';

test.describe.configure({ mode: 'serial' }); // Execute the test in 'serial' mode. DemoQA restriction

let apiContext: APIRequestContext;
const env = process.env.ENV!;
const password = process.env.PASSWORD!;
const userId = process.env.USERID!;
const userName = process.env.USERNAME!;

test.beforeAll(async ({ playwright }) => {
    apiContext = await playwright.request.newContext({
        baseURL: baseAPIUrl[env].api,

        extraHTTPHeaders: {
            Authorization: `Basic ${Buffer.from(`${userName}:${password}`).toString('base64')}`,
            // Authorization: `Basic ${env}`,
            Accept: 'application/json',
        }
    });
});

test.describe('Books - Fixture', () => {
    // The scope of use is file or describe
    test.use({ isDupe: false });

    test('Add brand new book', async({ page, bookPage }) => {
        // first thing that will happen is to call the fixture automatically. 
        // whenever the fixture has a "use" it goes back to the test and then 
        // go back to the fixture again when the test is done and execute any 
        // remaining commands
        

        await bookPage.addToYourCollection(); // TODO: Get the Id of the new book

        await page.goto('123456678'); // TODO: Id of the new book
    });
});
