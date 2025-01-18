'use client';
import { useEffect, useState } from 'react';
import Content from './components/Content';
import Image from 'next/image';
import Section from './components/Section';
import portraitSrc from './images/20241127_210709 (bw).jpg';
import lowResPortraitSrc from './images/20241127_210709 (bw lores).jpg';

export default function Page() {
    const [portrait, setPortrait] = useState<JSX.Element | null>(null);

    useEffect(() => {
        const img = (
            <Image
                src={portraitSrc}
                alt='Photo taken 2024/11/27'
                width={180}
                height={198}
                style={{ borderRadius: '5%', border: '1px solid #fff', filter: 'grayscale(100%)' }}
            />
        );
        setPortrait(img);
    }, []);

    return (
        <Content>
            <div className='hidden md:block mb-9 min-h-[210px]'>
                {portrait ?? (
                    <Image
                        src={lowResPortraitSrc}
                        alt='Photo taken 2024/11/27'
                        width={180}
                        style={{ borderRadius: '5%', border: '1px solid #fff' }}
                        priority
                    />
                )}
            </div>
            <Section id='intro'>
                <p>
                    I&rsquo;m an analytic philosopher, working mainly in metaphysics and philosophical logic.
                    I live in Lugano, where I&rsquo;ve been a postdoc at the{' '}
                    <a href='https://www.usi.ch/en' target='_blank' rel='noopener noreferrer'>
                        University of Italian Switzerland
                    </a>{' '}
                    (USI) until September 2022.
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
    );
}
