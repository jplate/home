import React from 'react';
import MyNavbar from './Navbar';
import MyFooter from './Footer';

interface ContentDivProps {
    children: React.ReactNode;
}

const Content = ({ children }: ContentDivProps) => {
    return (
        <>
            <MyNavbar />
            <div className='flex flex-col min-h-[90vh]'>
                <div className='grid flex-grow items-center'>
                    <main className='flex-col p-8 max-h-min mx-auto sm:px-10 font-[family-name:var(--font-geist-sans)]'>
                        {children}
                    </main>
                </div>
                <div className='grid py-3'>
                    <MyFooter />
                </div>
            </div>
        </>
    );
};

export default Content;