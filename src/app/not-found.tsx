import Link from 'next/link';
import Section from './components/Section';

const NotFound = () => {
    return (
        <main className='relative min-h-screen'>
            <div className='absolute top-1/4 flex flex-col w-full items-center text-center'>
                <Section id='main' header='404'>
                    <p>The page you were looking for doesn&rsquo;t exist.</p>
                    <p>
                        <Link href='/'>Here</Link> you can go back to the
                        homepage.
                    </p>
                </Section>
            </div>
        </main>
    );
};

export default NotFound;
