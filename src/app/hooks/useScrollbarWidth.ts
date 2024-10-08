import { useState, useEffect } from 'react';

export default function useScrollbarWidth() {
    const [scrollbarWidth, setScrollbarWidth] = useState(0);

    useEffect(() => {
        const documentWidth = document.documentElement.clientWidth;
        const windowWidth = window.innerWidth;
        const scrollbarWidth = windowWidth - documentWidth;
        setScrollbarWidth(scrollbarWidth);
    }, []);

    return scrollbarWidth;
}
