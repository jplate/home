'use client';

import Content from './components/Content';
import Image from 'next/image';
import Section from './components/Section';
import portrait from './images/20231014portrait.jpg';

export default function Page() {
    return (
        <Content>
            <div className='hidden md:block mb-9 min-h-[210px]'>
                {/* we pre-specify the needed height so as to trigger the vertical scrollbar immediately, rather than only when the 
                    picture loads. */}
                <Image
                    src={portrait}
                    alt='Photo taken 2023/10/14'
                    width={180}
                    style={{ filter: 'grayscale(100%)' }} // Apply greyscale filter
                    priority
                />
            </div>
            <Section id='intro'>
                <p>
                    I&rsquo;m an analytic philosopher, working mainly in
                    metaphysics and philosophical logic. I live in Lugano, where
                    I&rsquo;ve been a postdoc at the{' '}
                    <a
                        href='https://www.usi.ch/en'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        University of Italian Switzerland
                    </a>{' '}
                    (USI) until September 2022.
                </p>
                <p>
                    I&rsquo;ve obtained my PhD from{' '}
                    <a
                        href='https://washu.edu/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
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
