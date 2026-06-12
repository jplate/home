import { Metadata } from 'next';
import Image from 'next/image';
import Content from '../components/Content';
import Section from '../components/Section';
import diagramSrc from '../images/ORS.png';

export const metadata: Metadata = {
    title: 'Research',
    description:
        'Jan Plate researches metaphysics of intensional entities: properties, relations, states of affairs, etc. Author of "Ordinal Type Theory", "Towards an Ontology of Roles and States", and other publications in analytic metaphysics and philosophical psychology.',
    keywords: [
        'metaphysics',
        'relational roles',
        'type theory',
        'essence',
        'properties',
        'relations',
        'states of affairs',
        'higher-order metaphysics',
        'facts',
    ],
    alternates: {
        canonical: 'https://jplate.github.io/home/Research',
    },
};

export default function Page() {
    return (
        <Content>
            <Section id='intro'>
                <p>
                    My research generally focuses on the metaphysics of intensional entities: properties,
                    relations, states of affairs, and other things of that ilk. In a recent{' '}
                    <a href='https://philarchive.org/rec/PLAOTT' target='_blank' rel='noopener'>
                        paper
                    </a>{' '}
                    I develop an alternative (which I call &lsquo;Ordinal Type Theory&rsquo;) to the Simple
                    Theory of Types that is commonly used in the context of higher-order metaphysics. I build
                    on this in my forthcoming &lsquo;
                    <a href='https://philarchive.org/rec/PLATAO-12' target='_blank' rel='noopener'>
                        Towards an Ontology of Roles and States
                    </a>
                    &rsquo;, in which I propose a conception of relations as <em>sets of role sequences</em>.
                    The tentative upshot is an ontology in which there are no &lsquo;complex&rsquo; entities
                    other than states of affairs and roles<span className='hidden md:inline'>:</span>
                    <span className='md:hidden'>.</span>
                </p>
                <div className='hidden md:flex justify-center mb-9 min-h-[300px]'>
                    <Image
                        src={diagramSrc}
                        alt={'An ontology of roles and states (and particulars)'}
                        className='rounded-xl dark:opacity-[0.8] dark:invert'
                        width={500}
                        placeholder='blur'
                        priority
                    />
                </div>
                <p>
                    In case you&rsquo;d like an interactive approach to my published work in metaphysics, here
                    is a &lsquo;shared artifact&rsquo; that I made with{' '}
                    <a
                        href='https://www.anthropic.com/news/claude-fable-5-mythos-5'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <i className='pr-[0.12em]'>Claude Fable 5</i>
                    </a>{' '}
                    in June 2026:
                </p>
                <a
                    href='https://claude.ai/public/artifacts/85a04752-8951-476f-9d40-6b65b91b28f6'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='card-link not-prose block border border-btnborder rounded-xl p-4 my-6 bg-btnbg hover:bg-gray-200/50 hover:border-gray-300 dark:hover:bg-white/5 dark:hover:border-gray-700 transition-colors duration-100 whitespace-normal no-underline'
                >
                    <span className='block font-mono text-xs uppercase tracking-widest opacity-60'>
                        Interactive
                    </span>
                    <span className='block font-bold mt-1'>
                        Properties &amp; Relations — ask my papers anything
                    </span>
                    <span className='block mt-2 text-sm font-normal opacity-80'>
                        An AI reading companion grounded in the full text of six papers. Opens on claude.ai; a
                        free Claude account is required.
                    </span>
                </a>
            </Section>
        </Content>
    );
}
