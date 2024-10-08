import ContentDiv from '../components/ContentDiv';
import Section from '../components/Section';

export default function Page() {
    return (
        <ContentDiv>
            <Section id='intro'>
                <p>
                    My research generally focuses on the metaphysics of intensional
                    entities: properties, relations, states of affairs, and other
                    things of that ilk. In my most recent publication
                    (&lsquo;Ordinal Type Theory&rsquo;), I develop an alternative to
                    the &lsquo;Simple Theory of Types&rsquo; that is commonly used
                    in the context of higher-order metaphysics. My current work
                    focuses on the task of expanding this theory into a more
                    full-fledged ontology.
                </p>
            </Section>
        </ContentDiv>
    );
}
