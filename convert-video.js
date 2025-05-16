import { exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFile = path.join(__dirname, 'public', 'videos', 'Huntertech Video Ad 2.mp4');
const outputFile = path.join(__dirname, 'public', 'videos', 'Huntertech Video Ad 2.webm');

// FFmpeg command for high-quality WebM conversion
const ffmpegPath = 'C:\\ProgramData\\chocolatey\\lib\\ffmpeg\\tools\\ffmpeg\\bin\\ffmpeg.exe';
const ffmpegCommand = `"${ffmpegPath}" -i "${inputFile}" -c:v libvpx-vp9 -crf 30 -b:v 0 -c:a libopus "${outputFile}"`;

console.log('Starting video conversion...');
console.log('Input file:', inputFile);
console.log('Output file:', outputFile);

exec(ffmpegCommand, (error, stdout, stderr) => {
    if (error) {
        console.error('Error converting video:', error);
        console.error('FFmpeg stderr:', stderr);
        return;
    }
    console.log('Video converted successfully!');
    console.log('FFmpeg stdout:', stdout);
}); 