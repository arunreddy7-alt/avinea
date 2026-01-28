#!/bin/bash

# Video Optimization Script
# Reduces video file size for web while maintaining quality

echo "🎬 Video Optimization Script"
echo "═══════════════════════════════════════"

INPUT_VIDEO="public/highlights.mp4"
OUTPUT_VIDEO="public/highlights-optimized.mp4"
BACKUP_DIR="public-backup"

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ Error: ffmpeg is not installed"
    echo ""
    echo "Install ffmpeg:"
    echo "  macOS: brew install ffmpeg"
    echo "  Ubuntu: sudo apt install ffmpeg"
    echo "  Windows: Download from https://ffmpeg.org/download.html"
    exit 1
fi

# Check if input video exists
if [ ! -f "$INPUT_VIDEO" ]; then
    echo "❌ Error: $INPUT_VIDEO not found"
    exit 1
fi

# Get input video size
INPUT_SIZE=$(du -h "$INPUT_VIDEO" | cut -f1)
echo "Input video: $INPUT_VIDEO"
echo "Current size: $INPUT_SIZE"
echo ""

# Backup original if not already backed up
if [ -f "$BACKUP_DIR/highlights.mp4" ]; then
    echo "✓ Backup already exists, skipping"
else
    echo "Creating backup..."
    mkdir -p "$BACKUP_DIR"
    cp "$INPUT_VIDEO" "$BACKUP_DIR/"
    echo "✓ Backup created at: $BACKUP_DIR/highlights.mp4"
fi

echo ""
echo "Optimizing video..."
echo "Settings:"
echo "  - Resolution: 1920x1080 max (maintains aspect ratio)"
echo "  - Codec: H.264 (best compatibility)"
echo "  - CRF: 28 (good quality, smaller size)"
echo "  - Preset: medium (balanced speed/compression)"
echo ""

# Optimize video
# -c:v libx264: Use H.264 codec
# -crf 28: Constant Rate Factor (18-28 is good, higher = smaller file)
# -preset medium: Encoding preset (faster = bigger file, slower = smaller file)
# -vf scale: Resize to max 1920 width, maintain aspect ratio
# -movflags +faststart: Enable streaming (video plays before fully downloaded)
# -c:a aac: Audio codec
# -b:a 128k: Audio bitrate
# -ac 2: Stereo audio

ffmpeg -i "$INPUT_VIDEO" \
    -c:v libx264 \
    -crf 28 \
    -preset medium \
    -vf "scale='min(1920,iw)':'min(1080,ih)':force_original_aspect_ratio=decrease" \
    -movflags +faststart \
    -c:a aac \
    -b:a 128k \
    -ac 2 \
    "$OUTPUT_VIDEO" \
    -y

# Check if optimization was successful
if [ $? -eq 0 ]; then
    OUTPUT_SIZE=$(du -h "$OUTPUT_VIDEO" | cut -f1)

    echo ""
    echo "═══════════════════════════════════════"
    echo "✨ Optimization complete!"
    echo "═══════════════════════════════════════"
    echo ""
    echo "Original: $INPUT_SIZE"
    echo "Optimized: $OUTPUT_SIZE"
    echo ""
    echo "Next steps:"
    echo "1. Test the optimized video: open public/highlights-optimized.mp4"
    echo "2. If quality looks good, replace original:"
    echo "   mv public/highlights-optimized.mp4 public/highlights.mp4"
    echo "3. Original backed up at: $BACKUP_DIR/highlights.mp4"
else
    echo ""
    echo "❌ Optimization failed"
    exit 1
fi
