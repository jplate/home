import react from 'react';

interface FooterProps {
    copyRightHolder: string;
    licenseInfo: string;
    sections: {
        header: string;
        contents: react.JSX.Element[];
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
        <footer className='pt-8 grow-0'>
            <style>{footerStyle(sections.length)}</style>
            <div className='footer-div mx-auto grid gap-8 px-20 sm:px-16 md:px-32 lg:px-64 2xl:px-72'>
                {sections.map((info, i) => (
                    <div
                        key={i}
                        className='mx-6 sm:mx-auto 2xl:ml-0 2xl:flex 2xl:items-baseline'
                    >
                        <h3 className='text-base font-semibold tracking-wide 2xl:tracking-normal my-1 mr-6 -translate-x-3 sm:translate-x-0'>
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
            <div className='text-xs mx-auto mt-3 text-center border-t border-btnborder/60 pt-4'>
                <p className='px-8'>
                    © {new Date().getFullYear()} {copyRightHolder}.{' '}
                    {licenseInfo}
                </p>
            </div>
        </footer>
    );
};

const MyFooter = () => (
    <Footer
        copyRightHolder='Jan Plate'
        licenseInfo='The source code for this website is licensed under the MIT License.'
        sections={[
            {
                header: 'Links',
                contents: [
                    <a
                        key='1'
                        href='https://philpeople.org/profiles/jan-plate'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        PhilPapers profile
                    </a>,
                    <a
                        key='2'
                        href='https://github.com/jplate'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        GitHub profile
                    </a>,
                ],
            },
            {
                header: 'Contact',
                contents: [
                    <span className='whitespace-nowrap' key='1'>
                        Email:{' '}
                        <a href='mailto:janplate@gmail.com'>
                            jan.plate@gmail.com
                        </a>
                    </span>,
                    <span className='whitespace-nowrap' key='2'>
                        &#120143;: {/* Twitter */}
                        <a
                            href='https://x.com/jan_plate'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            @jan_plate
                        </a>
                    </span>,
                ],
            },
        ]}
    />
);

export default MyFooter;
