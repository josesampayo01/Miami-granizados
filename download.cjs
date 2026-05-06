const fs = require('fs');
const path = require('path');
const https = require('https');

const commitSha = '5dc1a424abd4c28c277e023f4d0bff0a33b91c82';

const filesToDownload = [
  { url: `https://raw.githubusercontent.com/josesampayo01/Miami-granizados/${commitSha}/public/video/SaveClip.App_AQN0lLNqJzNDRwX4smvLautLXcQIalxQUDSbab_5lxRyi3dblu6JrI85vu3yiuHIOvMVnFC_AEPiJaIN_GXN4xpqEoXFI473ZlFOxEA.mp4`, dest: 'public/video/SaveClip.App_AQN0lLNqJzNDRwX4smvLautLXcQIalxQUDSbab_5lxRyi3dblu6JrI85vu3yiuHIOvMVnFC_AEPiJaIN_GXN4xpqEoXFI473ZlFOxEA.mp4' },
  { url: `https://raw.githubusercontent.com/josesampayo01/Miami-granizados/${commitSha}/public/video/SaveClip.App_AQOyK59IxCDvr5nX9XSWBQ_0qY7vkqeg-jF7WHmVQPDXVCY1SFXflm5EsM-LAPQ2dqErtoPiSqBezDJxR_JDC3SY9idNEih0u0ciBEw.mp4`, dest: 'public/video/SaveClip.App_AQOyK59IxCDvr5nX9XSWBQ_0qY7vkqeg-jF7WHmVQPDXVCY1SFXflm5EsM-LAPQ2dqErtoPiSqBezDJxR_JDC3SY9idNEih0u0ciBEw.mp4' },
  { url: `https://raw.githubusercontent.com/josesampayo01/Miami-granizados/${commitSha}/public/images/logos/roboneo_image_with_aigc.png`, dest: 'public/images/logos/roboneo_image_with_aigc.png' },
  { url: `https://raw.githubusercontent.com/josesampayo01/Miami-granizados/${commitSha}/public/images/products/IMG_3942.png`, dest: 'public/images/products/IMG_3942.png' },
  { url: `https://raw.githubusercontent.com/josesampayo01/Miami-granizados/${commitSha}/public/images/vapers/IMG_3937.jpeg`, dest: 'public/images/vapers/IMG_3937.jpeg' },
  { url: `https://raw.githubusercontent.com/josesampayo01/Miami-granizados/${commitSha}/public/images/vapers/IMG_3938.jpeg`, dest: 'public/images/vapers/IMG_3938.jpeg' },
  { url: `https://raw.githubusercontent.com/josesampayo01/Miami-granizados/${commitSha}/public/images/vapers/IMG_3939.jpeg`, dest: 'public/images/vapers/IMG_3939.jpeg' },
  { url: `https://raw.githubusercontent.com/josesampayo01/Miami-granizados/${commitSha}/public/images/vapers/IMG_3940.jpeg`, dest: 'public/images/vapers/IMG_3940.jpeg' },
  { url: `https://raw.githubusercontent.com/josesampayo01/Miami-granizados/${commitSha}/public/images/vapers/IMG_3941.jpeg`, dest: 'public/images/vapers/IMG_3941.jpeg' },
  { url: `https://raw.githubusercontent.com/josesampayo01/Miami-granizados/${commitSha}/public/images/promociones/IMG_3933.jpeg`, dest: 'public/images/promociones/IMG_3933.jpeg' },
  { url: `https://raw.githubusercontent.com/josesampayo01/Miami-granizados/${commitSha}/public/images/promociones/IMG_3934.jpeg`, dest: 'public/images/promociones/IMG_3934.jpeg' },
  { url: `https://raw.githubusercontent.com/josesampayo01/Miami-granizados/${commitSha}/public/images/Snoop/IMG_3942.png`, dest: 'public/images/Snoop/IMG_3942.png' }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  for (const f of filesToDownload) {
    console.log('Downloading', f.url);
    await download(f.url, f.dest);
  }
}
main();
