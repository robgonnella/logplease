const puppeteer = require('puppeteer');

const headless = (
  process.env.HEADLESS && (
    process.env.HEADLESS.toLowerCase() === 'true' ||
    process.env.HEADLESS === '1'
  )
) || false;

if (headless) {
  console.log('Running tests in headless browser');
  console.log('Check browser-test-new-run.png for results');
}

(async () => {
  const browser = await puppeteer.launch({headless});
  const page = await browser.newPage();
  page.setViewport({width: 800, height: 1000});
  await page.goto(`file://${__dirname}/index.html`);
  await page.screenshot({path: 'browser-test-new-run.png'});
  await browser.close();
})();