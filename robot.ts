import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/en', '/ua'],
      disallow: ['/en/*', '/ua/*'],
    },
    sitemap: 'https://yiy-soft.vercel.app/sitemap.xml',
  };
}
