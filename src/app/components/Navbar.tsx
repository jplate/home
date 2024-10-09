'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useScrollbarWidth from '../hooks/useScrollbarWidth';

interface NavItem {
    href: string;
    text: string;
}

interface NavbarProps {
    brandName: string;
    items: NavItem[];
}

const NavItem: React.FC<
    NavItem & { isActive: boolean; onClick: () => void }
> = ({ href, text, isActive, onClick }) => (
    <Link
        href={href}
        className={`opacity-75 hover:opacity-100 transition-opacity px-3 py-2 text-sm font-medium whitespace-nowrap ${isActive ? 'active-nav-item' : ''}`}
        onClick={onClick}
    >
        {text}
    </Link>
);

const Navbar: React.FC<NavbarProps> = ({ brandName, items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const triggerPoint = 5; // Adjust this value to set when the fadeout should start
            if (window.scrollY > triggerPoint) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const pathname = usePathname();
    const sbWidth = useScrollbarWidth();

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav
            className={`sticky top-0 lg:left-1/4 z-40 border-b border-gray-200 mt-8 px-5 min-w-[70vw] md:min-w-[50vw] transition-opacity duration-300 ${isVisible? 'opacity-100': 'opacity-0'}`}
            style={{
                marginRight: `-${sbWidth}px`,
            }}
        >
            <div className='flex justify-between'>
                <Link
                    href='/'
                    className='logo mr-5'
                >
                    {brandName}
                </Link>
                <div className='hidden md:block'>
                    <div className='ml-10 flex items-baseline space-x-4'>
                        {items.map((item, index) => (
                            <NavItem
                                key={index}
                                {...item}
                                isActive={pathname === item.href}
                                onClick={() => {}}
                            />
                        ))}
                    </div>
                </div>
                <div className='md:hidden'>
                    <button
                        onClick={toggleMenu}
                        className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500'
                    >
                        <span className='sr-only'>Open main menu</span>
                        <svg
                            className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            aria-hidden='true'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M4 6h16M4 12h16M4 18h16'
                            />
                        </svg>
                        <svg
                            className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            aria-hidden='true'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M6 18L18 6M6 6l12 12'
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                    {items.map((item, index) => (
                        <NavItem                            
                            key={index}
                            {...item}
                            isActive={pathname === item.href}
                            onClick={toggleMenu}
                        />
                    ))}
                </div>
            </div>
        </nav>
    );
};

const MyNavbar: React.FC = () => (
    <Navbar
        brandName='Jan Plate'
        items={[
            { href: '/', text: 'Home' },
            { href: '/Research', text: 'Research' },
            { href: '/Publications', text: 'Publications' },
            { href: '/Teaching', text: 'Teaching' },
            { href: '/WebDev', text: 'Web-Dev' },
        ]}
    />
);

export default MyNavbar;
