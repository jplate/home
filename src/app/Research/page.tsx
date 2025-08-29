import Content from '../components/Content';
import Section from '../components/Section';

export default function Page() {
    return (
        <Content>
            <Section id='intro'>
                <p>
                    My research generally focuses on the metaphysics of intensional entities: properties,
                    relations, states of affairs, and other things of that ilk. In my most recent publication{' '}
                    <span className='whitespace-nowrap'>
                        (&lsquo;
                        <a
                            href='https://philarchive.org/rec/PLAOTT'
                            target='_blank'
                            rel='noopener'
                        >
                            Ordinal Type Theory
                        </a>
                        &rsquo;),{' '}
                    </span>
                    I develop an alternative to the &lsquo;Simple Theory of Types&rsquo; that is commonly used
                    in the context of higher-order metaphysics. In the same paper, I express skepticism not
                    only about Simple Type Theory, but also about:
                </p>
                <ul>
                    <li>plural logic (fn. 62) and</li>
                    <li>the topic-neutral concept of parthood (§6.2).</li>
                </ul>
                <p>In work that is currently unpublished, I defend:</p>
                <ul>
                    <li>a conception of relations as sets of sequences of &lsquo;roles&rsquo; and</li>
                    <li>
                        the thesis that fundamentality (as understood in the context of OTT) is itself a
                        fundamental property.
                    </li>
                </ul>
                <p>
                    I further propose that sets are a special case of properties (or can be profitably{' '}
                    <i>replaced</i> with properties, as suggested by van Inwagen in chapter&nbsp;6 of his{' '}
                    <span className='whitespace-nowrap'>
                        <a
                            href='https://global.oup.com/academic/product/being-9780192883964'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            recent book
                        </a>
                    </span>
                    ) and that properties are a special case of roles. This brings into view an ontology that
                    is&mdash;at least in my eyes&mdash;attractively elegant: there are no
                    &lsquo;abstract&rsquo; objects other than states of affairs and roles; and likewise, there
                    are no &lsquo;complex&rsquo; entities other than states of affairs and roles.
                </p>
            </Section>
        </Content>
    );
}
