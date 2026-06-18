import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const plexMono = localFont({
    src: [
        { path: './fonts/IBMPlexMono-Regular.woff2', weight: '400' },
        { path: './fonts/IBMPlexMono-Medium.woff2', weight: '500' },
    ],
    variable: '--font-plex-mono',
});

export const metadata: Metadata = {
    title: {
        default: 'Jan Plate',
        template: '%s | Jan Plate Philosophy',
    },
    description:
        'Jan Plate is an analytic philosopher specializing in metaphysics. PhD from Washington University in St. Louis.',
    keywords: [
        'Jan Plate',
        'philosophy',
        'analytic philosophy',
        'metaphysics',
        'properties and relations',
        'philosophical logic',
        'essence',
        'higher-order metaphysics',
        'ontology',
        'philosopher',
        'Washington University in St. Louis',
        'Geestland',
    ],
    authors: [{ name: 'Jan Plate' }],
    creator: 'Jan Plate',
    publisher: 'Jan Plate',
    metadataBase: new URL('https://jplate.github.io/home'),
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://jplate.github.io/home',
        siteName: 'Jan Plate Philosophy',
        title: 'Jan Plate, analytic metaphysician',
        description:
            'Analytic philosopher working in metaphysics, especially the metaphysics of intensional entities.',
        images: [
            {
                url: '/icon.svg',
                alt: 'Jan Plate',
            },
        ],
    },
    twitter: {
        card: 'summary',
        title: 'Jan Plate',
        description:
            'Analytic philosopher working in metaphysics, especially the metaphysics of intensional entities. PhD 2012 from Washington University in St. Louis.',
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
    verification: {
        google: 'TcSpSJRp_j2y0o20j_QW9co75JRUWQzIZqQgCTfbmf8',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className={`${geistSans.variable} ${plexMono.variable}`}>
            <body className='antialiased'>{children}</body>
        </html>
    );
}
