import Link from 'next/link';
import Section from './components/Section';

const NotFound = () => {
    return (
        <main>
            <div className='flex flex-col w-full items-center text-center mt-[25vh]'>
                <Section id='main' header='404'>
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
