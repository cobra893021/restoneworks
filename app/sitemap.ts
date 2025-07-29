import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // ▼▼▼ ここにあなたのウェブサイトのURLを入力してください ▼▼▼
    const baseUrl = 'https://your-website.com'

    return [
        {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
        },
        {
        url: `${baseUrl}/privacy`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
        },
    ]
}