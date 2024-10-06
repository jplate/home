import React from 'react';

interface FooterProps {
    copyRightHolder: string;
    licenseInfo: string;
    sections: {
        header: string;
        contents: React.JSX.Element[];
    }[];
}

const footerStyle = (sectionsLength: number) => `
    @media (min-width: 640px) {
        .footer-div {
            grid-template-columns: repeat(${sectionsLength}, minmax(0, 1fr));
        }
    }
`;

const Footer = ({ copyRightHolder, licenseInfo, sections }: FooterProps) => {
    return (
        <footer className='py-8 2xl:ml-[-150px]'>
            <style>{footerStyle(sections.length)}</style>
            <div className='footer-div container mx-auto grid gap-8 px-20 sm:px-16 md:px-32 lg:px-64 2xl:px-72'>
                {sections.map((info, i) => (
                    <div
                        key={i}
                        className='mx-6 sm:mx-auto 2xl:ml-0 2xl:flex 2xl:items-baseline'
                    >
                        <h3 className='text-lg font-semibold my-1 2xl:mr-6'>
                            {info.header}
                        </h3>
                        <ul className='text-sm 2xl:inline 2xl:flex 2xl:space-x-6'>
                            {info.contents.map((item, j) => (
                                <li key={j} className='my-1'>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className='container text-sm mx-auto mt-3 text-center border-t border-btnborder/60 pt-4'>
                <p className='px-8'>
                    © {new Date().getFullYear()} {copyRightHolder}.{' '}
                    {licenseInfo}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
