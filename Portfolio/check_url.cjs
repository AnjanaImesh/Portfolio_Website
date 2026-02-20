const https = require('https');

const options = {
    hostname: 'unsplash.com',
    path: '/photos/iR4mClggzEU/download',
    method: 'GET',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
};

const req = https.request(options, (res) => {
    console.log('StatusCode:', res.statusCode);
    console.log('Location:', res.headers.location);
});

req.on('error', (e) => {
    console.error(e);
});

req.end();
