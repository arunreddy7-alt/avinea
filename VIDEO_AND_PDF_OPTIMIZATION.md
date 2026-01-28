# Video and PDF Optimization Guide

## Summary
Your site has a **22 MB video** that autoplays - this is causing additional lag. PDFs are less critical but can also be optimized.

## Current Files

### Video Files
- `highlights.mp4` - **22 MB** ⚠️ **HIGH PRIORITY**
  - Used in: VideoHighlight.js and Location.js
  - Autoplays and loops (always downloading)
  - Expected after optimization: **3-5 MB** (80% reduction)

### PDF Files
- `AVINEA by Vyom-Sigma (6).pdf` - **10 MB** (Brochure download)
- `AVINEA - General Cost Sheet (2).pdf` - **2.8 MB**
- Total: ~13 MB
- Priority: **MEDIUM** (users download these on-demand, not autoloaded)

## Video Optimization (RECOMMENDED)

### Why Optimize?
- 22 MB video downloads automatically when users visit your site
- On mobile, this significantly slows down the page
- Can easily reduce to 3-5 MB without visible quality loss

### Step 1: Install ffmpeg

**On macOS:**
```bash
brew install ffmpeg
```

**On Ubuntu/Debian:**
```bash
sudo apt install ffmpeg
```

**On Windows:**
Download from https://ffmpeg.org/download.html

**Verify installation:**
```bash
ffmpeg -version
```

### Step 2: Run Optimization Script

I've created a ready-to-use script: `optimize-video.sh`

```bash
./optimize-video.sh
```

This will:
- ✅ Create backup in `public-backup/highlights.mp4`
- ✅ Optimize video (reduce from 22 MB to ~3-5 MB)
- ✅ Maintain 1080p quality
- ✅ Enable fast streaming (plays before fully downloaded)
- ✅ Save as `public/highlights-optimized.mp4`

### Step 3: Test and Replace

1. **Test the optimized video:**
   ```bash
   open public/highlights-optimized.mp4
   ```
   Check if quality is acceptable

2. **If quality looks good, replace original:**
   ```bash
   mv public/highlights-optimized.mp4 public/highlights.mp4
   ```

3. **Test on your website:**
   ```bash
   npm run dev
   ```
   Visit the VideoHighlight section and verify it plays smoothly

### Manual Optimization (Alternative)

If you prefer to do it manually:

```bash
ffmpeg -i public/highlights.mp4 \
    -c:v libx264 \
    -crf 28 \
    -preset medium \
    -vf "scale='min(1920,iw)':'min(1080,ih)':force_original_aspect_ratio=decrease" \
    -movflags +faststart \
    -c:a aac \
    -b:a 128k \
    public/highlights-optimized.mp4
```

**Settings Explained:**
- `-crf 28`: Quality setting (18=high quality/large, 32=lower quality/small, 28=sweet spot)
- `-preset medium`: Balance between speed and compression
- `-movflags +faststart`: Enable progressive streaming
- `scale=1920:1080`: Max resolution (maintains aspect ratio)

### Expected Results
- **Before**: 22 MB
- **After**: 3-5 MB (80% reduction)
- **Quality**: Visually identical for web use
- **Performance**: Much faster page load, smoother scrolling

## PDF Optimization (OPTIONAL)

PDFs are lower priority since users download them on-demand (not autoloaded).

### Why Optimize PDFs?
- Faster downloads for users
- Lower bandwidth costs
- Better mobile experience

### Option 1: Online Tools (Easiest)
Use these free tools:
- https://www.ilovepdf.com/compress_pdf
- https://smallpdf.com/compress-pdf
- https://www.adobe.com/acrobat/online/compress-pdf.html

**Settings:**
- Recommended compression: "Medium" or "High"
- Target: Reduce 10 MB → 3-5 MB
- Quality: Should maintain readability

### Option 2: Using Ghostscript (Command Line)

**Install Ghostscript:**
```bash
# macOS
brew install ghostscript

# Ubuntu
sudo apt install ghostscript
```

**Optimize PDF:**
```bash
# High quality (recommended for brochure)
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook \
   -dNOPAUSE -dQUIET -dBATCH \
   -sOutputFile="public/AVINEA-brochure-optimized.pdf" \
   "public/AVINEA by Vyom-Sigma (6).pdf"
```

**PDF Settings:**
- `/screen`: 72 DPI (smallest, screen-only viewing)
- `/ebook`: 150 DPI (recommended - good balance)
- `/printer`: 300 DPI (print quality - larger file)

### Expected Results for PDFs
- **Before**: 10 MB + 2.8 MB = 12.8 MB total
- **After**: ~4-5 MB total (60-70% reduction)

## Priority Recommendations

### Must Do (HIGH IMPACT):
1. ✅ **Optimize MP4 video** (22 MB → 3-5 MB)
   - This is autoloaded, biggest performance win
   - Run `./optimize-video.sh`

### Should Do (MEDIUM IMPACT):
2. ⚡ **Optimize main PDF brochure** (10 MB → 3-4 MB)
   - On-demand download, less critical than video
   - Use online tool or Ghostscript

### Optional (LOW IMPACT):
3. 💡 Cost sheet PDF is already small (2.8 MB) - optimization optional

## Testing After Optimization

### Performance Testing
1. **Before optimization:** Check current load time
   ```bash
   npm run build && npm start
   # Open Chrome DevTools > Network tab
   # Check "highlights.mp4" size and load time
   ```

2. **After optimization:** Compare
   - Video should be 3-5 MB (vs 22 MB)
   - Initial page load should be noticeably faster
   - Scrolling should be smoother

### Visual Quality Check
- Play the optimized video in fullscreen
- Check if quality is acceptable
- If too compressed, re-run with CRF 25 (higher quality)
- If still too large, try CRF 30 (more compression)

## Troubleshooting

### Video looks pixelated
- Re-run with lower CRF: `-crf 25` (higher quality, larger file)
- Or increase resolution: `-vf "scale=2560:1440"`

### Video still too large
- Increase compression: `-crf 30` (more compression)
- Or lower resolution: `-vf "scale=1280:720"`

### Audio is bad quality
- Increase audio bitrate: `-b:a 192k` (instead of 128k)

### ffmpeg installation issues
**macOS:** Ensure Homebrew is installed first:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**Ubuntu:** Update package list first:
```bash
sudo apt update
```

## Total Impact

### Current Additional Assets
- Videos: 22 MB
- PDFs: 12.8 MB
- **Total**: 34.8 MB

### After Optimization
- Videos: ~4 MB (80% saving)
- PDFs: ~5 MB (60% saving)
- **Total**: ~9 MB
- **Total Saved**: ~26 MB (75% reduction)

### Combined with Image Optimization
- **Images**: 330 MB → 73 MB (saved 257 MB)
- **Videos + PDFs**: 35 MB → 9 MB (saved 26 MB)
- **Grand Total Saved**: **283 MB** (78% overall reduction)

## Final Notes

1. **Backup**: Original video backed up in `public-backup/` folder
2. **Reversible**: Can always restore from backup if needed
3. **Future videos**: Use the optimization script for any new videos
4. **CDN**: Consider using a CDN for videos in production

---

**Created**: 2026-01-27
**Tools**: ffmpeg (video), Ghostscript (PDF), online tools (PDF)
