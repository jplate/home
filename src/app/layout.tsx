import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export const metadata: Metadata = {
    title: {
        default: 'Jan Plate - Analytic Philosopher',
        template: '%s | Jan Plate Philosophy',
    },
    description:
        'Jan Plate is an analytic philosopher working in metaphysics and philosophical logic. Research in essence, types, relations, and higher-order metaphysics. PhD from Washington University in St. Louis.',
    keywords: [
        'Jan Plate',
        'philosophy',
        'analytic philosophy',
        'metaphysics',
        'philosophical logic',
        'essence',
        'type theory',
        'higher-order metaphysics',
        'ontology',
        'philosopher',
        'academic philosopher',
        'Washington University',
        'Lugano',
        'Großenhain',
    ],
    authors: [{ name: 'Jan Plate' }],
    creator: 'Jan Plate',
    publisher: 'Jan Plate',
    metadataBase: new URL('https://jplate.github.io'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://jplate.github.io',
        siteName: 'Jan Plate Philosophy',
        title: 'Jan Plate - Analytic Philosopher',
        description:
            'Analytic philosopher working in metaphysics and philosophical logic. Research on essence, types, relations, and higher-order metaphysics.',
        images: [
            {
                url: '/icon.svg',
                alt: 'Jan Plate',
            },
        ],
    },
    twitter: {
        card: 'summary',
        title: 'Jan Plate - Analytic Philosopher',
        description:
            'Analytic philosopher working in metaphysics and philosophical logic. PhD from Washington University in St. Louis.',
        images: ['/icon.svg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: './icon.svg',
        apple: './apple_icon.png',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={` ${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
        </html>
    );
}
