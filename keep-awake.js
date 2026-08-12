const https = require('https');

// The URL of your app deployed on Render
const URL = 'https://alpinistsat.onrender.com/api/keep-awake';

// Ping every 14 minutes (14 * 60 * 1000 = 840000 ms)
// Render free tier sleeps after 15 minutes of inactivity.
const INTERVAL = 14 * 60 * 1000;

console.log(`[Keep-Awake] Starting keep-awake script... Pinging every 14 minutes.`);

setInterval(() => {
  https.get(URL, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      console.log(`[Keep-Awake] Ping successful at ${new Date().toISOString()} - Status: ${res.statusCode}`);
    });
  }).on('error', (err) => {
    console.error(`[Keep-Awake] Error pinging server: ${err.message}`);
  });
}, INTERVAL);
