const fs = require('fs');
const path = require('path');
const blogDir = path.join(__dirname, 'content/blog');

const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.mdx'));

console.log("=== BLOG OPTIMIZATION AUDIT ===\n");
console.log("Status | Word Count | SEO Score | File Name");
console.log("-------------------------------------------");

let thinContentCount = 0;
let missingImageCount = 0;
let missingFAQCount = 0;

files.forEach(file => {
  const content = fs.readFileSync(path.join(blogDir, file), 'utf8');
  
  // Extract frontmatter
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  const frontmatter = frontmatterMatch ? frontmatterMatch[1] : '';
  const body = content.replace(/^---\n([\s\S]*?)\n---/, '');
  
  const wordCount = body.split(/\s+/).filter(w => w.length > 0).length;
  
  const hasHeroImage = frontmatter.includes('heroImage:');
  const hasFAQ = frontmatter.includes('faq:') && frontmatter.split('question:').length > 1;
  const hasMeta = frontmatter.includes('metaDescription:');
  
  let score = 0;
  if (hasHeroImage) score += 1;
  if (hasFAQ) score += 1;
  if (hasMeta) score += 1;
  if (wordCount > 600) score += 1;
  if (wordCount > 1000) score += 1; // bonus
  
  let status = "✅ OK ";
  if (wordCount < 400 || !hasHeroImage || !hasFAQ) {
    status = "⚠️ OPT";
    if (wordCount < 400) thinContentCount++;
    if (!hasHeroImage) missingImageCount++;
    if (!hasFAQ) missingFAQCount++;
  }
  
  // padding for table
  const wordCountStr = wordCount.toString().padStart(10, ' ');
  const scoreStr = `${score}/5`.padStart(9, ' ');
  
  console.log(`${status} | ${wordCountStr} | ${scoreStr} | ${file}`);
});

console.log("\n=== SUMMARY ===");
console.log(`Total Articles: ${files.length}`);
console.log(`Needs Expansion (Word Count < 400): ${thinContentCount}`);
console.log(`Missing Hero Image: ${missingImageCount}`);
console.log(`Missing FAQ Schema: ${missingFAQCount}`);
