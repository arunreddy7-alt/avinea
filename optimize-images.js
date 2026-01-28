const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const backupDir = path.join(__dirname, 'public-backup');
const maxWidth = 2500;
const quality = 92;

// Supported image extensions
const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

async function optimizeImage(filePath, relativePath) {
    try {
        const ext = path.extname(filePath).toLowerCase();
        const fileName = path.basename(filePath, ext);
        const dirName = path.dirname(filePath);

        // Get image metadata
        const metadata = await sharp(filePath).metadata();
        console.log(`\nProcessing: ${relativePath}`);
        console.log(`  Original: ${metadata.width}x${metadata.height}, ${(fs.statSync(filePath).size / 1024 / 1024).toFixed(2)} MB`);

        // Skip if already optimized (WebP and under reasonable size and dimensions)
        const fileSize = fs.statSync(filePath).size / 1024 / 1024; // in MB
        if (ext === '.webp' && metadata.width <= maxWidth && fileSize < 1) {
            console.log(`  ✓ Already optimized, skipping`);
            return;
        }

        // Create output path - convert to .webp
        const outputPath = path.join(dirName, `${fileName}.webp`);

        // Use temp file if input and output are the same
        const needsOptimization = metadata.width > maxWidth || ext !== '.webp';
        const tempPath = needsOptimization && ext === '.webp'
            ? path.join(dirName, `${fileName}-temp.webp`)
            : outputPath;

        // Resize and convert to WebP
        let sharpInstance = sharp(filePath);

        // Resize if wider than maxWidth
        if (metadata.width > maxWidth) {
            sharpInstance = sharpInstance.resize(maxWidth, null, {
                fit: 'inside',
                withoutEnlargement: true
            });
        }

        // Convert to WebP with quality setting
        await sharpInstance
            .webp({ quality: quality, effort: 6 })
            .toFile(tempPath);

        const newMetadata = await sharp(tempPath).metadata();
        const newSize = fs.statSync(tempPath).size / 1024 / 1024;

        console.log(`  ✓ Optimized: ${newMetadata.width}x${newMetadata.height}, ${newSize.toFixed(2)} MB`);
        console.log(`  → Saved: ${((fileSize - newSize) / fileSize * 100).toFixed(1)}%`);

        // If we used a temp file, replace the original
        if (tempPath !== outputPath) {
            fs.unlinkSync(filePath);
            fs.renameSync(tempPath, outputPath);
            console.log(`  ✓ Replaced original WebP file`);
        }
        // If original was not WebP, delete it after conversion
        else if (ext !== '.webp' && outputPath !== filePath) {
            fs.unlinkSync(filePath);
            console.log(`  🗑  Removed original ${ext} file`);
        }

    } catch (error) {
        console.error(`Error processing ${relativePath}:`, error.message);
    }
}

async function findAndOptimizeImages(dir, baseDir = dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            // Recursively process subdirectories
            await findAndOptimizeImages(filePath, baseDir);
        } else {
            const ext = path.extname(file).toLowerCase();
            if (imageExtensions.includes(ext)) {
                const relativePath = path.relative(baseDir, filePath);
                await optimizeImage(filePath, relativePath);
            }
        }
    }
}

async function main() {
    console.log('🖼️  Image Optimization Tool');
    console.log('═══════════════════════════════════════');
    console.log(`Max width: ${maxWidth}px`);
    console.log(`Quality: ${quality}%`);
    console.log(`Format: WebP`);
    console.log('═══════════════════════════════════════\n');

    // Create backup directory if it doesn't exist
    if (!fs.existsSync(backupDir)) {
        console.log('Creating backup...');
        fs.cpSync(publicDir, backupDir, { recursive: true });
        console.log(`✓ Backup created at: ${backupDir}\n`);
    } else {
        console.log('⚠  Backup already exists, skipping backup creation\n');
    }

    // Find and optimize all images
    await findAndOptimizeImages(publicDir);

    console.log('\n═══════════════════════════════════════');
    console.log('✨ Optimization complete!');
    console.log('═══════════════════════════════════════');

    // Calculate total size before and after
    const getDirectorySize = (dir) => {
        let totalSize = 0;
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);
            if (stat.isFile()) {
                totalSize += stat.size;
            } else if (stat.isDirectory()) {
                totalSize += getDirectorySize(filePath);
            }
        });
        return totalSize;
    };

    const currentSize = getDirectorySize(publicDir) / 1024 / 1024;
    console.log(`\nCurrent public folder size: ${currentSize.toFixed(2)} MB`);

    if (fs.existsSync(backupDir)) {
        const backupSize = getDirectorySize(backupDir) / 1024 / 1024;
        const saved = backupSize - currentSize;
        const savedPercent = (saved / backupSize * 100).toFixed(1);
        console.log(`Original size (backup): ${backupSize.toFixed(2)} MB`);
        console.log(`Total saved: ${saved.toFixed(2)} MB (${savedPercent}%)`);
    }
}

main().catch(console.error);
