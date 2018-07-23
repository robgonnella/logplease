const assert = require('assert')
const looksSame = require('looks-same');

const passingPng = 'browser-test-current.png';
const newRun = 'browser-test-new-run.png';

async function compare(img1, img2) {
  return new Promise((resolve, reject) => {
    looksSame(img1, img2, (err, equal) => {
      if (err) { return reject(err); }
      resolve(equal);
    });
  });
}

describe('Snapshot Comparison', () => {
  it('passes all tests in the browser', async() => {
    const equal = await compare(passingPng, newRun);
    assert(equal);
  });
});
