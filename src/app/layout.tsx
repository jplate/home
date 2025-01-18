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
    title: 'Jan Plate',
    description: 'Jan Plate’s homepage on GitHub',
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
            <head>
                <link rel='preload' href='/images/20241127_210709 (bw lores).jpg' as='image' />
            </head>
            <body className={` ${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
        </html>
    );
}
