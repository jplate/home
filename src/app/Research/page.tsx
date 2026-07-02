import { Metadata } from 'next';
import Image from 'next/image';
import Content from '../components/Content';
import Section from '../components/Section';

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

const Diagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 611 261"
    width = "60%"
    height = "auto"
    {...props}
  >
    <path
      d="M5.5 160.5c0 25 20 45 45 45h210c25 0 45-20 45-45v-110c0-25-20-45-45-45h-210c-25 0-45 20-45 45z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M51.5 159.5c0 17.5 14.5 32 32 32h177a31.375 31.375 0 0 0 31-32v-77c0-17.5-13.5-31-31-31h-177a31.375 31.375 0 0 0-32 31z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M82.5 156.5c0 12.25 9.75 22 22 22h151c12.247.272 22.728-9.753 23-22v-52c-.272-12.247-10.753-22.272-23-22h-151c-12.25 0-22 9.75-22 22z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M103.5 151.5c0 8.575 6.425 15 15 15h133c8.575 0 15-6.425 15-15v-24c0-8.575-6.425-15-15-15h-133c-8.575 0-15 6.425-15 15z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text
      x={146.641}
      y={144.828}
      fontSize={18.773}
      fill="currentColor"
    >
      {"relations"}
    </text>
    <text
      x={162.836}
      y={102.828}
      fontSize={18.773}
      fill="currentColor"
    >
      {"sets"}
    </text>
    <text
      x={117.523}
      y={72.469}
      fontSize={21.902}
      fill="currentColor"
    >
      {"properties"}
    </text>
    <text
      x={126.773}
      y={32.609}
      fontSize={25.031}
      fill="currentColor"
    >
      {"roles"}
    </text>
    <path
      d="M605.5 160.5c0 25-20 45-45 45h-210c-25 0-45-20-45-45v-110c0-25 20-45 45-45h210c25 0 45 20 45 45z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M559.5 159.5c0 17.5-14.5 32-32 32h-177a31.375 31.375 0 0 1-31-32v-77c0-17.5 13.5-31 31-31h177a31.375 31.375 0 0 1 32 31z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M528.5 156.5c0 12.25-9.75 22-22 22h-151c-12.247.272-22.728-9.753-23-22v-52c.272-12.247 10.753-22.272 23-22h151c12.25 0 22 9.75 22 22z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M507.5 151.5c0 8.575-6.425 15-15 15h-133c-8.575 0-15-6.425-15-15v-24c0-8.575 6.425-15 15-15h133c8.575 0 15 6.425 15 15z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text
      x={374.586}
      y={145.156}
      fontSize={18.773}
      fill="currentColor"
    >
      {"ord. objects"}
    </text>
    <text
      x={402.156}
      y={102.828}
      fontSize={18.773}
      fill="currentColor"
    >
      {"events"}
    </text>
    <text
      x={415.758}
      y={72.531}
      fontSize={21.902}
      fill="currentColor"
    >
      {"facts"}
    </text>
    <text
      x={420.977}
      y={32.609}
      fontSize={25.031}
      fill="currentColor"
    >
      {"states"}
    </text>
    <path
      d="M412.5 231.5c0 13.203-10.797 24-24 24h-166c-13.203 0-24-10.797-24-24v-3c.281-13.2 10.8-23.281 24-23h166c13.2-.281 23.719 9.8 24 23z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text
      x={242.578}
      y={237.609}
      fontSize={25.031}
      fill="currentColor"
    >
      {"particulars"}
    </text>
  </svg>
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
                    other than states of affairs and roles:
                </p>
                <div className='flex justify-center'>
                    <Diagram />
                </div>
                <p>
                    In case you&rsquo;d like a more <i className='pr-[0.12em]'>interactive</i> approach to my
                    published work in metaphysics, here is a &lsquo;shared artifact&rsquo; that I made with{' '}
                    <a
                        href='https://www.anthropic.com/news/claude-fable-5-mythos-5'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <i className='pr-[0.12em]'>Claude Fable 5</i>
                    </a>{' '}
                    (and subsequently modified) in June 2026:
                </p>
                <a
                    href='https://claude.ai/public/artifacts/75376800-b06a-4441-b016-07784683209b'
                    // version 22
                    target='_blank'
                    rel='noopener noreferrer'
                    className='companion-card'
                >
                    <span>Interactive</span>
                    <span>Properties &amp; Relations — ask my papers anything</span>
                    <span>
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
                                <i className='pr-[0.12em]'>Philosophers&rsquo; Imprint</i> (2016)
                            </td>
                        </tr>
                        <tr>
                            <td className='py-1 pr-5 whitespace-nowrap'>
                                <IPR />
                            </td>
                            <td className='py-1'>
                                &lsquo;Intrinsic Properties and Relations&rsquo;,{' '}
                                <i className='pr-[0.12em]'>Inquiry</i> (2018)
                            </td>
                        </tr>
                        <tr>
                            <td className='py-1 pr-5 whitespace-nowrap'>
                                <QPR />
                            </td>
                            <td className='py-1'>
                                &lsquo;Qualitative Properties and Relations&rsquo;,{' '}
                                <i className='pr-[0.12em]'>Philosophical Studies</i> (2022)
                            </td>
                        </tr>
                        <tr>
                            <td className='py-1 pr-5 whitespace-nowrap'>
                                <QVMR />
                            </td>
                            <td className='py-1'>
                                &lsquo;<i>Quo Vadis</i>, Metaphysics of Relations?&rsquo;,{' '}
                                <i className='pr-[0.12em]'>Dialectica</i> (2022; introduction to a special
                                issue)
                            </td>
                        </tr>
                        <tr>
                            <td className='py-1 pr-5 whitespace-nowrap'>
                                <OTT />
                            </td>
                            <td className='py-1'>
                                &lsquo;Ordinal Type Theory&rsquo;, <i className='pr-[0.12em]'>Inquiry</i>{' '}
                                (2025)
                            </td>
                        </tr>
                        <tr>
                            <td className='py-1 pr-5 whitespace-nowrap'>
                                <TORS />
                            </td>
                            <td className='py-1'>
                                &lsquo;Towards an Ontology of Roles and States&rsquo;,{' '}
                                <i className='pr-[0.12em]'>Erkenntnis</i> (forthcoming; published online 2026)
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    There are two main strands running through most of these papers: first, the search for a
                    satisfactory theory of intensional entities that can serve as a framework for further
                    theorizing, metaphysical or otherwise; and second, the attempt to analyze certain concepts
                    of metaphysical interest, in particular ones applicable to intensional entities. Both
                    strands trace back to my{' '}
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
                    behind its analysis of the concept of a{' '}
                    <i className='pr-[0.12em]'>logically simple property or relation</i> is also already
                    present there. <IPR /> applies the same basic idea to the problem of analyzing the concept
                    of <i>intrinsicality</i>, and uses essentially the same framework. However, it runs into
                    certain problems (see in particular §6.3 of that paper), which already point in the
                    direction of an approach that employs a &lsquo;genuinely metaphysical&rsquo; notion (and
                    not just &lsquo;broadly logical&rsquo; notions in addition to a concept of parthood).
                </p>
                <p>
                    In <QPR />, the &lsquo;broadly logical&rsquo; approach has finally been abandoned. This
                    paper already cites <OTT /> (despite having been published a few years earlier), in which
                    the concept of <i className='pr-[0.12em]'>fundamentality</i> is taken as primitive, and
                    which develops with the help of this concept a full account of how intensional entities
                    are individuated. <TORS />
                    , in turn, is based on <OTT /> and to a lesser degree on <QVMR />. What makes <QVMR />{' '}
                    relevant for <TORS /> is mainly the fact that the former provides some historical
                    background for&mdash;as well as a defense of&mdash;an at least broadly{' '}
                    <i className='pr-[0.12em]'>positionalistic</i> approach to the metaphysics of relational
                    states. However, the approach defended in <QVMR /> is based on a triadic concept of
                    &lsquo;occupation&rsquo; (as in, &lsquo;<i className='pr-[0.12em]'>X</i> occupies the
                    position <i className='pr-[0.12em]'>P</i> in the state of affairs{' '}
                    <i className='pr-[0.16em]'>S</i>
                    &rsquo;), whereas the approach of <TORS /> is based on a dyadic concept of
                    &lsquo;resultance&rsquo;, which links states of affairs to &lsquo;role assignments&rsquo;,
                    i.e., generalized multisets of role&ndash;entity pairs.
                </p>
            </Section>
        </Content>
    );
}
