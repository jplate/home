import React from 'react';
import MyNavbar from './Navbar';
import MyFooter from './Footer';

interface ContentDivProps {
    children: React.ReactNode;
}

const ContentDiv = ({ children }: ContentDivProps) => {
    return (
        <div className='relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen px-8 pb-20 gap-16 sm:px-20 font-[family-name:var(--font-geist-sans)]'>
            <MyNavbar />
            <main className='flex flex-col gap-8 row-start-2 items-start mb-8'>
                {children}
            </main>
            <MyFooter />
        </div>
    );
};

export default ContentDiv;
