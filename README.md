# Kuno Lapidary

Unearthing Nature's Brilliance, One Stone at a Time.

A blog website about lapidary arts, gemstones, and geology — featuring expert guides, in-depth articles, and geological insights for enthusiasts at all skill levels.

**Live site:** [kunolapidary.com](https://kunolapidary.com)

## Tech Stack

- [Next.js 16](https://nextjs.org/) with App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [MDX](https://mdxjs.com/) for blog content

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── content/blog/       # MDX blog articles (15 articles)
├── src/
│   ├── app/            # Next.js App Router pages
│   ├── components/     # React components & SVG illustrations
│   └── lib/            # Utilities (MDX parser, SEO, constants)
├── public/             # Static assets
└── package.json
```

## Content

Blog articles are written in MDX and stored in `content/blog/`. Each article includes frontmatter metadata for title, category, tags, SEO fields, and FAQ structured data.

Categories: **Lapidary**, **Gemstones**, **Geology**

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

## License

All rights reserved.
