import { Metadata } from 'next';
import Link from 'next/link';
import Section from './components/Section';

export const metadata: Metadata = {
    title: 'Page Not Found',
    description: "404 - The requested page could not be found on Jan Plate's website.",
    robots: {
        index: false,
        follow: false,
    },
};

const NotFound = () => {
    return (
        <main>
            <div className='flex flex-col w-full items-center text-center mt-[25vh]'>
                {/* 404 Marquee */}
                <div className='marquee-container mb-8'>
                    <div className='marquee'>
                        <span>404</span>
                        <span>404</span>
                        <span>404</span>
                        <span>404</span>
                        <span>404</span>
                        <span>404</span>
                        <span>404</span>
                        <span>404</span>
                        <span>404</span>
                        <span>404</span>
                        <span>404</span>
                        <span>404</span>
                        <span>404</span>
                        <span>404</span>
                        <span>404</span>
                        <span>404</span>
                    </div>
                </div>

                <Section id='main' header='Page Not Found'>
                    <p>The page you were looking for doesn&rsquo;t exist.</p>
                    <p>
                        <Link href='/'>Here</Link> you can go back to the homepage.
                    </p>
                </Section>
            </div>
        </main>
    );
};

export default NotFound;
