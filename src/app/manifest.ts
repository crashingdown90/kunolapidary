import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kuno Lapidary',
    short_name: 'KunoLapidary',
    description: 'Explore the fascinating world of lapidary arts, gemstones, and geology',
    start_url: '/',
    display: 'standalone',
    background_color: '#FDFBF7',
    theme_color: '#5C4033',
    icons: [
      { src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
    ],
  }
}
