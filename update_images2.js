const fs = require('fs');
const path = require('path');

const brainDir = '/Users/drefan/.gemini/antigravity/brain/e1ba5510-171d-4e81-bd22-2bd9ec80269e';
const publicDir = path.join(__dirname, 'public/images/blog');
const blogDir = path.join(__dirname, 'content/blog');

const mapping = {
    'understanding-tanzanite.mdx': 'understanding_tanzanite',
    'understanding-gemstone-cleavage-planes.mdx': 'understanding_gemstone_cleavage_planes'
};

const brainFiles = fs.readdirSync(brainDir);

for (const [mdxFile, imageNameBase] of Object.entries(mapping)) {
    // Find the generated image in brain dir
    const matchingImages = brainFiles.filter(f => f.startsWith(imageNameBase) && f.endsWith('.png'));
    if (matchingImages.length === 0) {
        console.error(`Could not find image for ${imageNameBase} in brain dir.`);
        continue;
    }
    // Get the latest one if multiple
    matchingImages.sort();
    const sourceImage = matchingImages[matchingImages.length - 1];
    const sourcePath = path.join(brainDir, sourceImage);
    
    // Output image name
    const outName = mdxFile.replace('.mdx', '.png');
    const outPath = path.join(publicDir, outName);
    
    // Copy image
    fs.copyFileSync(sourcePath, outPath);
    console.log(`Copied ${sourceImage} -> ${outName}`);
    
    // Update MDX
    const mdxPath = path.join(blogDir, mdxFile);
    let mdxContent = fs.readFileSync(mdxPath, 'utf8');
    const newHeroImagePath = `/images/blog/${outName}`;
    mdxContent = mdxContent.replace(/heroImage:\s*"([^"]+)"/, `heroImage: "${newHeroImagePath}"`);
    fs.writeFileSync(mdxPath, mdxContent);
    console.log(`Updated ${mdxFile}`);
}

console.log("Final two duplicates resolved!");
