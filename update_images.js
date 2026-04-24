const fs = require('fs');
const path = require('path');

const brainDir = '/Users/drefan/.gemini/antigravity/brain/e1ba5510-171d-4e81-bd22-2bd9ec80269e';
const publicDir = path.join(__dirname, 'public/images/blog');
const blogDir = path.join(__dirname, 'content/blog');

const mapping = {
    'collecting-agates-beach.mdx': 'collecting_agates_beach',
    'understanding-rock-formation-geological-journey.mdx': 'understanding_rock_formation',
    'amethyst-vs-citrine.mdx': 'amethyst_vs_citrine',
    'art-of-faceting.mdx': 'art_of_faceting',
    'dremel-vs-foredom-carving.mdx': 'dremel_vs_foredom_carving',
    'crucial-lapidary-safety-equipment.mdx': 'crucial_lapidary_safety_equipment',
    'how-to-polish-turquoise.mdx': 'how_to_polish_turquoise',
    'where-to-find-lapidary-rough.mdx': 'where_to_find_lapidary_rough',
    'building-lapidary-workshop.mdx': 'building_lapidary_workshop',
    'how-to-select-cabochon-machine.mdx': 'how_to_select_cabochon_machine',
    'how-to-use-a-lapidary-trim-saw.mdx': 'how_to_use_a_lapidary_trim_saw',
    'lapidary-templates-and-preforming.mdx': 'lapidary_templates_and_preforming',
    'understanding-the-mohs-hardness-scale.mdx': 'understanding_the_mohs_hardness_scale',
    'polishing-obsidian-tips-and-tricks.mdx': 'polishing_obsidian_tips_and_tricks',
    'how-to-drill-holes-in-stone.mdx': 'how_to_drill_holes_in_stone',
    'introduction-to-wire-wrapping.mdx': 'introduction_to_wire_wrapping',
    'precious-vs-semi-precious-gemstones-explained.mdx': 'precious_vs_semi_precious_gemstones',
    'formation-of-geodes.mdx': 'formation_of_geodes',
    'geology-of-metamorphic-rocks.mdx': 'geology_of_metamorphic_rocks',
    'the-geology-of-pegmatites.mdx': 'the_geology_of_pegmatites',
    'working-with-petrified-wood.mdx': 'working_with_petrified_wood',
    'guide-to-polishing-compounds.mdx': 'guide_to_polishing_compounds',
    'identifying-synthetic-vs-natural-gemstones.mdx': 'identifying_synthetic_vs_natural',
    'the-science-of-opalescence.mdx': 'the_science_of_opalescence'
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

console.log("All duplicates resolved!");
