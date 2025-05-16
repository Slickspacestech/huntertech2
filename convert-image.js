import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFile = path.join(__dirname, 'public', 'images', 'networking_bg.jpg');
const outputFile = path.join(__dirname, 'public', 'images', 'networking_bg.webp');

sharp(inputFile)
  .webp()
  .toFile(outputFile)
  .then(() => {
    console.log('Image converted successfully!');
  })
  .catch(err => {
    console.error('Error converting image:', err);
  }); 