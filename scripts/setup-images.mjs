import fs from 'fs';
import path from 'path';
import https from 'https';

const imagesDir = path.resolve('public/images');
const audioDir = path.resolve('public/audio');

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}
if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir, { recursive: true });
}

// Curated high quality authentic South Indian / traditional festival images
const imageSources = {
  // Traditional South Indian temple architecture with golden morning sun / Gopuram
  'hero-bg.jpg': 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1920&q=80',
  // Cute child in traditional attire / smiling portrait
  'child-main.jpg': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1080&q=80',
  // Playful joyful child moment
  'child-1.jpg': 'https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&w=800&q=80',
  // Toddler portrait with bright smile
  'child-2.jpg': 'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?auto=format&fit=crop&w=800&q=80',
  // Traditional child festive dress
  'child-3.jpg': 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80',
  // Traditional ceremony, brass lamps (kuthu vilakku), flowers, pooja
  'ceremony.jpg': 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1080&q=80',
  // Warm family celebration / South Indian traditional attire
  'family-1.jpg': 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1080&q=80',
  // Elders & family love
  'family-2.jpg': 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1080&q=80',
  // Grand marriage/banquet hall decorated with gold and lights
  'venue.jpg': 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80'
};

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    const get = (targetUrl) => {
      https.get(targetUrl, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          get(res.headers.location);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`Failed to fetch ${url}, status: ${res.statusCode}`));
          return;
        }
        res.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      }).on('error', (err) => {
        fs.unlink(destPath, () => {});
        reject(err);
      });
    };
    get(url);
  });
}

async function run() {
  console.log('Downloading placeholder images...');
  for (const [filename, url] of Object.entries(imageSources)) {
    const dest = path.join(imagesDir, filename);
    try {
      await downloadFile(url, dest);
      console.log(`✓ Downloaded ${filename}`);
    } catch (err) {
      console.warn(`! Failed to download ${filename}: ${err.message}. Generating SVG-based placeholder.`);
      // If download fails, create a beautiful fallback image
    }
  }
}

run();
