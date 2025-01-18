'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function OriginalHomePage() {
    const router = useRouter();

    useEffect(() => {
        // Redirect to the new Home page (which is now in a subfolder because that somehow helps with image caching)
        router.push('/Home');
    }, [router]);

    return null;
}
