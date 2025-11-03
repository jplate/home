import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://jplate.github.io';

    return [
        {
            url: baseUrl,
            changeFrequency: 'yearly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/Home`,
            changeFrequency: 'yearly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/Research`,
            changeFrequency: 'yearly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/Publications`,
            changeFrequency: 'yearly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/Teaching`,
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/WebDev`,
            changeFrequency: 'yearly',
            priority: 0.7,
        },
    ];
}
