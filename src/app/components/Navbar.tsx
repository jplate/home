'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
    href: string;
    text: string;
}

interface NavbarProps {
    brandName: string;
    items: NavItem[];
}

const NavItemComponent: React.FC<NavItem & { isActive: boolean; onClick: () => void }> = ({ href, text, isActive, onClick }) => (
    <Link
        href={href}
        className={`text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out ${isActive ? 'active-nav-item' : ''}`}
        onClick={onClick}
    >
        {text}
    </Link>
);

const Navbar: React.FC<NavbarProps> = ({ brandName, items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className='bg-white border-b border-gray-200 mt-8'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16 min-w-[90vw] md:min-w-[50vw]'>
                    <Link href='/' className='text-xl font-light text-gray-800'>
                        {brandName}
                    </Link>
                    <div className='hidden md:block'>
                        <div className='ml-10 flex items-baseline space-x-4'>
                            {items.map((item, index) => (
                                <NavItemComponent 
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
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                    {items.map((item, index) => (
                        <NavItemComponent 
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
        brandName="Jan Plate"
        items={[
            { href: '/', text: 'Home' },
            { href: '/research', text: 'Research' },
            { href: '/publications', text: 'Publications' },
            { href: '/teaching', text: 'Teaching' },
            { href: '/web-dev', text: 'Web-Dev' },
        ]}
    />
);

export default MyNavbar;
