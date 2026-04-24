const fs = require('fs');
const path = require('path');

const blogDir = '/Users/drefan/Projects/Kuno Lapidary/content/blog';
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.mdx'));

const imageUsage = {}; // imagePath -> array of filenames

files.forEach(file => {
    const content = fs.readFileSync(path.join(blogDir, file), 'utf8');
    
    // Find heroImages
    const heroMatch = content.match(/heroImage:\s*"(.*?)"/);
    if (heroMatch) {
        const img = heroMatch[1];
        if (!imageUsage[img]) imageUsage[img] = [];
        imageUsage[img].push(`${file} (Hero)`);
    }

    // Find inline images
    const imgMatches = content.matchAll(/src="(.*?)"/g);
    for (const match of imgMatches) {
        const img = match[1];
        if (!imageUsage[img]) imageUsage[img] = [];
        imageUsage[img].push(`${file} (Inline)`);
    }
    
    const mdImgMatches = content.matchAll(/!\[.*?\]\((.*?)\)/g);
    for (const match of mdImgMatches) {
        const img = match[1];
        if (!imageUsage[img]) imageUsage[img] = [];
        imageUsage[img].push(`${file} (MD)`);
    }
});

let report = "# Image Audit Report\n\n## Duplicated Images\n\n";
let hasDuplicates = false;

for (const [img, usages] of Object.entries(imageUsage)) {
    // Check if an image is used in more than 1 distinct file
    const uniqueFiles = new Set(usages.map(u => u.split(' ')[0]));
    if (uniqueFiles.size > 1) {
        hasDuplicates = true;
        report += `### ${img}\nUsed in ${uniqueFiles.size} files:\n`;
        usages.forEach(u => {
            report += `- ${u}\n`;
        });
        report += '\n';
    }
}

if (!hasDuplicates) {
    report += "No duplicated images found across different articles!\n";
}

fs.writeFileSync('/Users/drefan/.gemini/antigravity/brain/8077aaf5-d47e-4e5c-af77-9b499788548b/image_audit_report.md', report);
console.log("Audit complete. Report saved.");
