import Image from 'next/image';
import Footer from './components/Footer';
import portrait from './images/20231014portrait.jpg';

export default function Home() {
    return (
        <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
            <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
                <Image
                    className='hidden md:block'
                    src={portrait}
                    alt='Photo of author, 2023/10/14'
                    width={180}
                    style={{ filter: 'grayscale(100%)' }} // Apply greyscale filter
                    priority
                />
                <section
                    id='intro'
                    className='prose text-md max-w-md md:max-w-xl xl:max-w-3xl mt-3 mx-4 mb-9'
                >
                    I&rsquo;m an analytic philosopher, specializing in
                    metaphysics and philosophical logic. I live in Lugano, where
                    I&rsquo;ve been a postdoc at the{' '}
                    <a href='https://www.usi.ch/en'>
                        University of Italian Switzerland
                    </a>{' '}
                    (USI) until September 2022.
                </section>

                <Footer
                    copyRightHolder='Jan Plate'
                    licenseInfo='The source code for this webpage is licensed under the MIT License.'
                    sections={[
                        {
                            header: 'Links',
                            contents: [
                                <a
                                    key='1'
                                    href='https://philpeople.org/profiles/jan-plate'
                                    className='hover:underline'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    PhilPapers profile
                                </a>,
                                <a
                                    key='2'
                                    href='https://github.com/jplate'
                                    className='hover:underline'
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
                                <>
                                    <span>Email: </span>
                                    <a href='mailto:janplate@gmail.com'>
                                        jan.plate@gmail.com
                                    </a>
                                </>,
                                <>
                                    <span>&#120143;: </span> {/* Twitter */}
                                    <a
                                        href='https://x.com/jan_plate'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        @jan_plate
                                    </a>
                                </>,
                            ],
                        },
                    ]}
                />
            </main>
        </div>
    );
}
