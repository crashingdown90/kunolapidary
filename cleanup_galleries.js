const fs = require('fs');
const path = require('path');

const blogDir = '/Users/drefan/Projects/Kuno Lapidary/content/blog';
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.mdx'));

let removedCount = 0;

files.forEach(file => {
    const filePath = path.join(blogDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Regex to match the Gallery section:
    // ## Gallery
    // <div className="grid...
    // ...
    // </div>
    const galleryRegex = /## Gallery\s*<div className="grid[\s\S]*?<\/div>\s*/;
    
    if (galleryRegex.test(content)) {
        content = content.replace(galleryRegex, '');
        fs.writeFileSync(filePath, content);
        removedCount++;
    }
});

console.log(`Cleaned up generic Gallery blocks from ${removedCount} files.`);
