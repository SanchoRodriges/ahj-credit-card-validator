import puppeteer from 'puppeteer';

jest.setTimeout(30000); // default puppeteer timeout

describe('Page start', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test('Загружается форма', async () => {
    await page.goto('http://localhost:8080');

    await page.waitForSelector('.check_card');
  });

  test('Платёжная система VISA', async () => {
    await page.goto('http://localhost:8080');
    const input = await page.$('.card-number');
    const submit = await page.$('.check-btn');
    await input.type('4532474065625580');
    await submit.click();
    await page.waitForSelector('.active');
    await page.waitForSelector('.check_card');
  });

  afterEach(async () => {
    await browser.close();
  });
});