export const SITE_CONFIG = {
  name: 'Kuno Lapidary',
  tagline: "Unearthing Nature's Brilliance, One Stone at a Time",
  description: 'Explore the fascinating world of lapidary arts, gemstones, and geology. Expert guides, in-depth articles, and geological insights for enthusiasts and professionals.',
  url: 'https://www.kunolapidary.com',
  email: 'hello@kunolapidary.com',
  author: 'Kuno Lapidary Team',
  locale: 'en_US',
  categories: ['Lapidary', 'Gemstones', 'Geology'],
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const FOOTER_LINKS = {
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  categories: [
    { label: 'Lapidary', href: '/blog?category=Lapidary' },
    { label: 'Gemstones', href: '/blog?category=Gemstones' },
    { label: 'Geology', href: '/blog?category=Geology' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Disclaimer', href: '/disclaimer' },
  ],
} as const;
