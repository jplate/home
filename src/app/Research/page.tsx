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

const Abbr = ({ children }: { children: React.ReactNode }) => (
    <span className='text-[0.9em] tracking-wide'>{children}</span>
);

const AbbrLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} target='_blank' rel='noopener'>
        <Abbr>{children}</Abbr>
    </a>
);

const LSPR = () => (
    <AbbrLink href='https://quod.lib.umich.edu/p/phimp/3521354.0016.001/--logically-simple-properties-and-relations?view=image'>
        LSPR
    </AbbrLink>
);

const IPR = () => (
    <AbbrLink href='https://www.tandfonline.com/doi/full/10.1080/0020174X.2018.1446046'>IPR</AbbrLink>
);

const QPR = () => (
    <AbbrLink href='https://link.springer.com/article/10.1007/s11098-021-01708-y'>QPR</AbbrLink>
);

const QVMR = () => <AbbrLink href='https://www.philosophie.ch/plate-2022'>QVMR</AbbrLink>;

const OTT = () => (
    <AbbrLink href='https://www.tandfonline.com/doi/full/10.1080/0020174X.2023.2278031'>OTT</AbbrLink>
);

const TORS = () => (
    <AbbrLink href='https://link.springer.com/article/10.1007/s10670-025-01036-1'>TORS</AbbrLink>
);

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
                    href='https://claude.ai/public/artifacts/eed31e2a-e102-406c-8c75-d511bd380a4a'
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
                <p>The six papers in question are as follows:</p>
                <table className='not-prose my-6 w-full border-collapse text-left'>
                    <tbody className='align-top'>
                        <tr>
                            <td className='py-1 pr-5 whitespace-nowrap'>
                                <LSPR />
                            </td>
                            <td className='py-1'>
                                &lsquo;Logically Simple Properties and Relations&rsquo;,{' '}
                                <i>Philosophers' Imprint</i> (2016)
                            </td>
                        </tr>
                        <tr>
                            <td className='py-1 pr-5 whitespace-nowrap'>
                                <IPR />
                            </td>
                            <td className='py-1'>
                                &lsquo;Intrinsic Properties and Relations&rsquo;, <i>Inquiry</i> (2018)
                            </td>
                        </tr>
                        <tr>
                            <td className='py-1 pr-5 whitespace-nowrap'>
                                <QPR />
                            </td>
                            <td className='py-1'>
                                &lsquo;Qualitative Properties and Relations&rsquo;,{' '}
                                <i>Philosophical Studies</i> (2022)
                            </td>
                        </tr>
                        <tr>
                            <td className='py-1 pr-5 whitespace-nowrap'>
                                <QVMR />
                            </td>
                            <td className='py-1'>
                                &lsquo;<i>Quo Vadis</i>, Metaphysics of Relations?&rsquo;, <i>Dialectica</i>{' '}
                                (2022; introduction to a special issue)
                            </td>
                        </tr>
                        <tr>
                            <td className='py-1 pr-5 whitespace-nowrap'>
                                <OTT />
                            </td>
                            <td className='py-1'>
                                &lsquo;Ordinal Type Theory&rsquo;, <i>Inquiry</i> (2025)
                            </td>
                        </tr>
                        <tr>
                            <td className='py-1 pr-5 whitespace-nowrap'>
                                <TORS />
                            </td>
                            <td className='py-1'>
                                &lsquo;Towards an Ontology of Roles and States&rsquo;, <i>Erkenntnis</i>{' '}
                                (forthcoming; published online 2026)
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    There are two main strands running through most of these papers: first, the search for a
                    satisfactory framework in which to theorize about <i>intensional entities</i> (i.e., about
                    properties, relations, and states of affairs); and second, the attempt to analyze certain
                    concepts of metaphysical interest, in particular ones applicable to intensional entities.
                    Both strands trace back to my{' '}
                    <a
                        href='https://openscholarship.wustl.edu/etd/1017/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        PhD thesis
                    </a>
                    .
                </p>
                <p>
                    <LSPR /> presents a framework similar to the one used in that thesis, and the main idea
                    behind its analysis of the concept of a <i>logically simple property or relation</i> is
                    also already present there. <IPR /> applies the same basic idea to the problem of
                    analyzing the concept of <i>intrinsicality</i>, and uses essentially the same framework.
                    However, it runs into certain problems (see in particular §6.3 of that paper), which
                    already point in the direction of an approach that employs a &lsquo;genuinely
                    metaphysical&rsquo; notion (and not just &lsquo;broadly logical&rsquo; notions in addition
                    to a concept of parthood).
                </p>
                <p>
                    In <QPR />, the &lsquo;broadly logical&rsquo; approach has finally been abandoned. This
                    paper already cites <OTT /> (despite having been published a few years earlier), in which
                    the concept of <i>fundamentality</i> is taken as primitive, and which develops with the
                    help of this concept a full account of how intensional entities are individuated. <TORS />
                    , in turn, is based on <OTT /> and to a lesser degree on <QVMR />. What makes <QVMR />{' '}
                    relevant for <TORS /> is mainly the fact that the former provides some historical
                    background for&mdash;as well as a defense of&mdash;a <i>broadly positionalistic</i>{' '}
                    approach to the metaphysics of relational states. However, the approach defended in{' '}
                    <QVMR /> is based on a triadic concept of &lsquo;occupation&rsquo; (as in, &lsquo;
                    <i className='pr-[0.12em]'>X</i> occupies the position <i className='pr-[0.12em]'>P</i> in
                    the state of affairs <i className='pr-[0.16em]'>S</i>&rsquo;), whereas the approach of{' '}
                    <TORS /> is based on a dyadic concept of &lsquo;resultance&rsquo;, which links states of
                    affairs to &lsquo;role assignments&rsquo;, i.e., generalized multisets of
                    role&ndash;entity pairs.
                </p>
            </Section>
        </Content>
    );
}
