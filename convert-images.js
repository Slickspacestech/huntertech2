import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'public', 'images');

// Convert m365.png to WebP
async function convertM365ToWebP() {
    const inputPath = path.join(imagesDir, 'm365.png');
    const outputPath = path.join(imagesDir, 'm365.webp');
    
    if (!fs.existsSync(inputPath)) {
        console.error('m365.png not found!');
        return;
    }

    console.log('Converting m365.png to WebP...');
    try {
        await sharp(inputPath)
            .webp({ 
                quality: 80,
                effort: 6,
                lossless: false
            })
            .toFile(outputPath);
        
        const stats = fs.statSync(outputPath);
        if (stats.size === 0) {
            console.error('m365.webp was created but is 0 bytes!');
        } else {
            console.log(`Successfully converted m365.png to WebP (${stats.size} bytes)`);
        }
    } catch (error) {
        console.error('Error converting m365.png to WebP:', error.message);
    }
}

// Get all image files
const imageFiles = fs.readdirSync(path.join(imagesDir, 'bim')).filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png'].includes(ext);
});

console.log(`Found ${imageFiles.length} image files to convert in BIM folder`);

// Convert each image to webp
async function convertImages() {
    for (const file of imageFiles) {
        const inputPath = path.join(imagesDir, 'bim', file);
        const outputPath = path.join(imagesDir, 'bim', `${path.parse(file).name}.webp`);
        
        console.log(`Converting ${file} to WebP...`);
        try {
            await sharp(inputPath)
                .webp({ 
                    quality: 80,
                    effort: 6,
                    lossless: false
                })
                .toFile(outputPath);
            
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
    const inputPath = path.join(imagesDir, 'bim', 'cybersecurity.jpg');
    const outputPath = path.join(imagesDir, 'bim', 'cybersecurity.avif');
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

// Convert specific images to WebP
async function convertSpecificImages() {
    const imagesToConvert = ['buildex-huntertech.jpg', 'handshake.jpg'];
    
    for (const image of imagesToConvert) {
        const inputPath = path.join(imagesDir, image);
        const outputPath = path.join(imagesDir, `${path.parse(image).name}.webp`);
        
        if (!fs.existsSync(inputPath)) {
            console.error(`${image} not found!`);
            continue;
        }

        console.log(`Converting ${image} to WebP...`);
        try {
            await sharp(inputPath)
                .webp({ 
                    quality: 80,
                    effort: 6,
                    lossless: false
                })
                .toFile(outputPath);
            
            const stats = fs.statSync(outputPath);
            if (stats.size === 0) {
                console.error(`${image} was converted but output file is 0 bytes!`);
            } else {
                console.log(`Successfully converted ${image} to WebP (${stats.size} bytes)`);
            }
        } catch (error) {
            console.error(`Error converting ${image}:`, error.message);
        }
    }
}

// Convert background images to WebP
async function convertBackgroundImages() {
    const imagesToConvert = ['calgary-bg.jpg', 'vancocuver-bg.jpg'];
    
    for (const image of imagesToConvert) {
        const inputPath = path.join(imagesDir, image);
        const outputPath = path.join(imagesDir, `${path.parse(image).name}.webp`);
        
        if (!fs.existsSync(inputPath)) {
            console.error(`${image} not found!`);
            continue;
        }

        console.log(`Converting ${image} to WebP...`);
        try {
            await sharp(inputPath)
                .webp({ 
                    quality: 80,
                    effort: 6,
                    lossless: false
                })
                .toFile(outputPath);
            
            const stats = fs.statSync(outputPath);
            if (stats.size === 0) {
                console.error(`${image} was converted but output file is 0 bytes!`);
            } else {
                console.log(`Successfully converted ${image} to WebP (${stats.size} bytes)`);
            }
        } catch (error) {
            console.error(`Error converting ${image}:`, error.message);
        }
    }
}

// Run all conversions
async function runAllConversions() {
    await convertM365ToWebP();
    await convertImages();
    await convertCybersecurityToAvif();
    await convertSpecificImages();
    await convertBackgroundImages();
}

// Run the conversion
convertBackgroundImages().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
}); 