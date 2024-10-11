import Content from '../components/Content';
import Section from '../components/Section';

export default function Page() {
    return (
        <Content>
            <Section id='intro'>
                <p>
                    My research generally focuses on the metaphysics of
                    intensional entities: properties, relations, states of
                    affairs, and other things of that ilk. In my most recent
                    publication{' '}
                    <span className='whitespace-nowrap'>
                        (&lsquo;
                        <a
                            href='https://philarchive.org/rec/PLAOTT'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Ordinal Type Theory
                        </a>
                        &rsquo;),{' '}
                    </span>
                    I develop an alternative to the &lsquo;Simple Theory of
                    Types&rsquo; that is commonly used in the context of
                    higher-order metaphysics. My current work focuses on the
                    task of expanding this theory into a more full-fledged
                    ontology.
                </p>
            </Section>
        </Content>
    );
}
