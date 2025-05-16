const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');

// Get all image files
const imageFiles = fs.readdirSync(imagesDir).filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png'].includes(ext);
});

console.log(`Found ${imageFiles.length} image files to check`);

// Convert each image to webp
async function convertImages() {
    let foundZeroByteFiles = false;
    
    for (const file of imageFiles) {
        const inputPath = path.join(imagesDir, file);
        const outputPath = path.join(imagesDir, `${path.parse(file).name}.webp`);
        
        // Check if webp already exists and is 0 bytes
        if (fs.existsSync(outputPath)) {
            const stats = fs.statSync(outputPath);
            console.log(`Checking ${file} -> ${path.basename(outputPath)} (${stats.size} bytes)`);
            
            if (stats.size === 0) {
                foundZeroByteFiles = true;
                console.log(`Found 0 byte webp for ${file}, attempting conversion again...`);
                try {
                    // Remove the 0 byte file
                    fs.unlinkSync(outputPath);
                    
                    // Try conversion with different settings
                    await sharp(inputPath)
                        .webp({ 
                            quality: 80,
                            effort: 6, // Higher effort for better compression
                            lossless: false
                        })
                        .toFile(outputPath);
                    
                    // Verify the new file
                    const newStats = fs.statSync(outputPath);
                    if (newStats.size === 0) {
                        console.error(`Failed to convert ${file} - output file is still 0 bytes`);
                    } else {
                        console.log(`Successfully converted ${file} to webp (${newStats.size} bytes)`);
                    }
                } catch (error) {
                    console.error(`Error converting ${file}:`, error.message);
                    // Log additional error details
                    if (error.code) console.error(`Error code: ${error.code}`);
                    if (error.errno) console.error(`Error number: ${error.errno}`);
                }
            }
        } else {
            console.log(`No webp file found for ${file}`);
        }
    }
    
    if (!foundZeroByteFiles) {
        console.log('No 0-byte webp files found to convert.');
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