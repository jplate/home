'use client';
import Content from '../components/Content';
import Image from 'next/image';
import Section from '../components/Section';
import portraitSrc from '../images/20251105_300.jpg';

export default function Page() {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Jan Plate',
        jobTitle: 'Analytic Metaphysician',
        description:
            'Analytic philosopher working in metaphysics and philosophical logic. Research in essence, properties, relations, and higher-order metaphysics.',
        alumniOf: {
            '@type': 'Organization',
            name: 'Washington University in St. Louis',
            url: 'https://washu.edu/',
        },
        award: 'PhD in Philosophy',
        url: 'https://jplate.github.io',
        sameAs: ['https://jplate.github.io', 'https://openscholarship.wustl.edu/etd/1017/'],
        knowsAbout: [
            'Metaphysics',
            'Philosophical Logic',
            'Type Theory',
            'Essence',
            'Ontology',
            'Higher-Order Metaphysics',
            'Relations',
            'States of Affairs',
            'Facts',
        ],
        image: 'https://jplate.github.io/icon.svg',
    };

    return (
        <>
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <Content>
                <div className='hidden md:block mb-9 min-h-[210px]'>
                    <Image
                        src={portraitSrc}
                        alt='Jan Plate, analytic philosopher specializing in metaphysics and philosophical logic'
                        width={180}
                        style={{ borderRadius: '1rem', border: '1px solid #fff' }}
                        placeholder='blur'
                        priority
                    />
                </div>
                <Section id='intro'>
                    <p>
                        I&rsquo;m an analytic philosopher, working mainly in metaphysics and philosophical
                        logic. I currently live in the village of Großenhain (Lower Saxony). Previously, until
                        September 2022, I was a postdoc at the{' '}
                        <a href='https://www.usi.ch/en' target='_blank' rel='noopener noreferrer'>
                            University of Italian Switzerland
                        </a>{' '}
                        in Lugano.
                    </p>
                    <p>
                        I&rsquo;ve obtained my PhD from{' '}
                        <a href='https://washu.edu/' target='_blank' rel='noopener noreferrer'>
                            Washington University in St.&nbsp;Louis
                        </a>{' '}
                        with a{' '}
                        <a
                            href='https://openscholarship.wustl.edu/etd/1017/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            dissertation
                        </a>{' '}
                        on the concept of essence.
                    </p>
                </Section>
            </Content>
        </>
    );
}
