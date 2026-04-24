const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'content/blog');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx'));

const imageMap = {};

files.forEach(file => {
    const content = fs.readFileSync(path.join(dir, file), 'utf8');
    const match = content.match(/heroImage:\s*"([^"]+)"/);
    if (match) {
        const img = match[1];
        if (!imageMap[img]) {
            imageMap[img] = [];
        }
        imageMap[img].push(file);
    }
});

let duplicatesFound = false;
for (const [img, linkedFiles] of Object.entries(imageMap)) {
    if (linkedFiles.length > 1) {
        duplicatesFound = true;
        console.log(`Duplicate Image: ${img}`);
        console.log(`Used in: ${linkedFiles.join(', ')}\n`);
    }
}

if (!duplicatesFound) {
    console.log("No duplicate images found!");
}
