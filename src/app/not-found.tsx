import Link from 'next/link';
import Section from './components/Section';

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
