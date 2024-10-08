import ContentDiv from './components/ContentDiv';
import Image from 'next/image';
import Section from './components/Section';
import portrait from './images/20231014portrait.jpg';

export default function Page() {
    return (
        <ContentDiv>
            <Image
                className='hidden md:block'
                src={portrait}
                alt='Photo taken 2023/10/14'
                width={180}
                style={{ filter: 'grayscale(100%)' }} // Apply greyscale filter
                priority
            />
            <Section id='intro'>
                I&rsquo;m an analytic philosopher, specializing in metaphysics
                and philosophical logic. I live in Lugano, where I&rsquo;ve been
                a postdoc at the{' '}
                <a
                    href='https://www.usi.ch/en'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    University of Italian Switzerland
                </a>{' '}
                (USI) until September 2022.
            </Section>
        </ContentDiv>
    );
}
