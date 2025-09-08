import { type Page, type Locator, expect } from '@playwright/test';
import messages from '../../utils/messages';
import pagesUrls from '../../utils/pagesUrls';
import { buildUrl } from '../../utils/urlBuilder';

class BookPage {
    readonly page: Page;
    readonly addToYourCollectionButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToYourCollectionButton = page.getByText('Add To Your Collection', { exact: true });
    }

    async goto(isbn: string) {
        const params = { book: isbn };
        const url = buildUrl(pagesUrls.bookStorePage, params);
        await this.page.goto(url);
    }

    async addToYourCollection(isDupe?: boolean) {
        if (isDupe) {
            let dialogMessage: string;

            this.page.on('dialog', async (dialog) => {
                dialogMessage = dialog.message();
                console.log('Dialog message: ' + dialogMessage);

                expect(dialogMessage).toBe(messages.book.duplicate);
                await dialog.accept();
            });
        }

        await this.addToYourCollectionButton.click();

        // TODO: Return the ID of the new book
    }
}

export default BookPage;