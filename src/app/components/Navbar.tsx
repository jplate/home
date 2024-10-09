'use client';

import react, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx/lite';
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
} from '@headlessui/react';
import useScrollbarWidth from '../hooks/useScrollbarWidth';

const menuButtonClassName = clsx(
    'inline-flex items-center rounded-md bg-btnbg/85 text-sm text-btncolor border border-btnborder',
    'focus:outline-none data-[hover]:bg-btnhoverbg data-[hover]:text-btnhovercolor data-[open]:bg-btnhoverbg data-[open]:text-btnhovercolor',
    'data-[focus]:outline-1 data-[focus]:outline-btnhoverbg transition-colors duration-300'
);

const menuItemClassName = clsx(
    'menu-item flex w-full items-center rounded-sm px-2 py-1 font-semibold',
    'data-[focus]:bg-btnhoverbg data-[focus]:text-btnhovercolor transition-colors duration-300'
);

export const MenuItemList = ({
    children,
}: Readonly<{ children: react.ReactNode }>) => {
    return (
        <Transition
            enter='transition ease-out duration-75'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
        >
            <MenuItems
                anchor='bottom end'
                className='menu z-50 min-w-40 origin-top-right rounded-md border border-btnborder shadow-lg bg-btnbg/20 p-1 text-sm text-btncolor'
            >
                {children}
            </MenuItems>
        </Transition>
    );
};

interface NavItem {
    href: string;
    text: string;
    isActive?: boolean;
}

const NavItemComp = ({ href, text, isActive }: NavItem) => (
    <Link
        href={href}
        className={clsx(
            'nav-item hover:opacity-100 transition-opacity px-3 py-2 text-sm font-medium whitespace-nowrap',
            isActive
                ? 'border-b-2 border-foreground'
                : 'opacity-75 hover:border-b hover:border-foreground lg:hover:border-none'
        )}
    >
        {text}
    </Link>
);

interface NavbarProps {
    brandName: string;
    items: NavItem[];
}

const Navbar = ({ brandName, items }: NavbarProps) => {
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

    return (
        <nav
            className={clsx(
                'sticky top-0 z-40 border-b border-btnborder min-w-[70vw] md:min-w-[50vw] px-5 lg:px-10 pt-2 transition-opacity duration-300',
                isVisible ? 'opacity-100' : 'opacity-0'
            )}
            style={{
                marginRight: `-${sbWidth}px`,
            }}
        >
            <div className='flex justify-between'>
                <Link href='/' className='logo mr-5'>
                    {brandName}
                </Link>
                <div className='hidden md:block'>
                    <div className='ml-10 flex items-baseline space-x-4'>
                        {items.map((item, index) => (
                            <NavItemComp
                                key={index}
                                {...item}
                                isActive={pathname === item.href}
                            />
                        ))}
                    </div>
                </div>
                <div className='md:hidden'>
                    <Menu>
                        <MenuButton
                            className={clsx(
                                'w-full px-2 py-1 mb-2',
                                menuButtonClassName
                            )}
                        >
                            <div className='flex-1 text-left'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth={1.5}
                                    stroke='currentColor'
                                    className='size-6'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                                    />
                                </svg>
                            </div>
                        </MenuButton>
                        <MenuItemList>
                            {items.map((val, i) => (
                                <MenuItem key={i}>
                                    <Link
                                        className={menuItemClassName}
                                        href={val.href}
                                    >
                                        {val.text}
                                    </Link>
                                </MenuItem>
                            ))}
                        </MenuItemList>
                    </Menu>
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
