const fs = require('fs');
const path = require('path');
const https = require('https');

const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const images = [
  'alex.png',
  'alexreal.png',
  'alexhd.png',
  'mhslogo.png',
  'star1.png',
  'kapili2.jpg',
  'healthplanetnagao1.webp',
  'metroghy1.webp',
  'nagaometro0.webp',
  'healthcityghy0.webp',
  'ihr.jpg',
  'pheonix0.webp',
  'heroa-bg.jpg',
  'buildings-bg.jpg',
  'servicess-carousel.jpg',
  'hospital-construction-main.jpg',
  'Facility Planning & Architecture.jpg',
  'Hospital Construction & Turnkey Execution.jpg',
  'Engineering & Infrastructure Systems.jpg',
  'Operational & Strategic Consulting.jpg',
  'Medical Equipment Planning & Procurement.webp',
  'Technology & Digital Transformation.jpg',
  'Marketing & Patient Engagement.jpg',
  'Fire safety image.webp',
  'contactu-bg.jpg'
];

async function download(filename) {
  const encodedName = encodeURIComponent(filename);
  const url = `https://www.alexhealthcaresystems.com/${encodedName}`;
  const dest = path.join(publicDir, filename);

  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, (redirectRes) => {
          if (redirectRes.statusCode === 200) {
            const fileStream = fs.createWriteStream(dest);
            redirectRes.pipe(fileStream);
            fileStream.on('finish', () => {
              fileStream.close();
              console.log(`[OK] Downloaded ${filename}`);
              resolve(true);
            });
          } else {
            console.log(`[FAIL] ${filename} - HTTP ${redirectRes.statusCode}`);
            resolve(false);
          }
        }).on('error', (err) => {
          console.log(`[ERR] ${filename}: ${err.message}`);
          resolve(false);
        });
      } else if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(dest);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`[OK] Downloaded ${filename}`);
          resolve(true);
        });
      } else {
        console.log(`[FAIL] ${filename} - HTTP ${res.statusCode}`);
        resolve(false);
      }
    }).on('error', (err) => {
      console.log(`[ERR] ${filename}: ${err.message}`);
      resolve(false);
    });
  });
}

async function run() {
  console.log('Downloading authentic assets from live website...');
  for (const img of images) {
    await download(img);
  }
  console.log('All downloads finished.');
}

run();
