const https = require('https');

function fetchUrl(urlStr) {
  return new Promise((resolve, reject) => {
    https.get(urlStr, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        console.log('Redirecting to:', res.headers.location);
        resolve(fetchUrl(res.headers.location));
      } else {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(data));
      }
    }).on('error', reject);
  });
}

fetchUrl('https://share.google/alOexi57Wa6ax2IzL')
  .then(data => {
    // try to extract reviews
    console.log("Fetched data length:", data.length);
    // write to file so we can inspect
    const fs = require('fs');
    fs.writeFileSync('scraped_reviews.html', data);
  })
  .catch(console.error);
