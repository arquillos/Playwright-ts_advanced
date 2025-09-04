import pageUrls from '../utils/pagesUrls';

// Create the URL dinamically
export function buildUrl(page: string, params?: Record<any, any>) {
    console.log('Building URL. page: ' + page)

    const uiPath = pageUrls[page.replace('/', '')];
    console.log('uiPath: ' + uiPath)

    const qParams = new URLSearchParams(params);

    const url = params ? `${uiPath.concat('?')}${qParams.toString()}` : uiPath;
    console.log('URL: ' + url)

    /**
        * page  bookStore
        * uiPath  /books
        * params  { book: '9781449337711' }
        * qParams  URLSearchParams { 'book' => '9781449337711' }
        * url  /books?book=9781449337711
    */

    return url;
}