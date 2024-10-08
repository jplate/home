import ContentDiv from '../components/ContentDiv';
import Section from '../components/Section';

export default function Page() {
    return (
        <ContentDiv>
            <Section id='intro'>
                I have taught courses in Logic and Critical Thinking, as well as
                general introductions to philosophy. Some of my slides are
                available{' '}
                <span style={{ whiteSpace: 'nowrap' }}>
                    <a
                        href='https://sites.google.com/site/jplate01/teaching?authuser=0'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        here
                    </a>
                    .
                </span>
            </Section>
        </ContentDiv>
    );
}
