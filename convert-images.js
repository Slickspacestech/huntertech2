import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'public', 'images', 'bim');

// Get all image files
const imageFiles = fs.readdirSync(imagesDir).filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png'].includes(ext);
});

console.log(`Found ${imageFiles.length} image files to convert in BIM folder`);

// Convert each image to webp
async function convertImages() {
    for (const file of imageFiles) {
        const inputPath = path.join(imagesDir, file);
        const outputPath = path.join(imagesDir, `${path.parse(file).name}.webp`);
        
        console.log(`Converting ${file} to WebP...`);
        try {
            await sharp(inputPath)
                .webp({ 
                    quality: 80,
                    effort: 6, // Higher effort for better compression
                    lossless: false
                })
                .toFile(outputPath);
            
            // Verify the new file
            const stats = fs.statSync(outputPath);
            if (stats.size === 0) {
                console.error(`Failed to convert ${file} - output file is 0 bytes`);
            } else {
                console.log(`Successfully converted ${file} to webp (${stats.size} bytes)`);
            }
        } catch (error) {
            console.error(`Error converting ${file}:`, error.message);
            if (error.code) console.error(`Error code: ${error.code}`);
            if (error.errno) console.error(`Error number: ${error.errno}`);
        }
    }
}

// Convert cybersecurity.jpg to AVIF
async function convertCybersecurityToAvif() {
    const inputPath = path.join(imagesDir, 'cybersecurity.jpg');
    const outputPath = path.join(imagesDir, 'cybersecurity.avif');
    if (!fs.existsSync(inputPath)) {
        console.error('cybersecurity.jpg not found!');
        return;
    }
    try {
        await sharp(inputPath)
            .avif({ quality: 50 })
            .toFile(outputPath);
        const stats = fs.statSync(outputPath);
        if (stats.size === 0) {
            console.error('cybersecurity.avif was created but is 0 bytes!');
        } else {
            console.log(`Successfully converted cybersecurity.jpg to AVIF (${stats.size} bytes)`);
        }
    } catch (error) {
        console.error('Error converting cybersecurity.jpg to AVIF:', error.message);
    }
}

convertImages().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});

convertCybersecurityToAvif(); 