import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://jplate.github.io';

    return [
        {
            url: baseUrl,
            changeFrequency: 'monthly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/Home`,
            changeFrequency: 'monthly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/Research`,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/Publications`,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/Teaching`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/WebDev`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];
}
