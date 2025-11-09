import { Metadata } from 'next';
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
};

export default function Page() {
    return (
        <Content>
            <Section id='intro'>
                <p>
                    My research generally focuses on the metaphysics of intensional entities: properties,
                    relations, states of affairs, and other things of that ilk. In a recent{' '}
                    <span className='whitespace-nowrap'>
                        <a href='https://philarchive.org/rec/PLAOTT' target='_blank' rel='noopener'>
                            paper
                        </a>
                    </span>{' '}
                    I develop an alternative to the Simple Theory of Types that is commonly used in the
                    context of higher-order metaphysics. I build on this in my forthcoming{' '}
                    <span className='whitespace-nowrap'>
                        &lsquo;
                        <a href='https://philarchive.org/rec/PLAOTT' target='_blank' rel='noopener'>
                            Towards an Ontology of Roles and States
                        </a>
                        &rsquo;,{' '}
                    </span>
                    in which I propose a conception of relations as <em>sets of role sequences</em>. The
                    tentative upshot is an ontology in which there are no &lsquo;complex&rsquo; entities other
                    than states of affairs and roles.
                </p>
            </Section>
        </Content>
    );
}
