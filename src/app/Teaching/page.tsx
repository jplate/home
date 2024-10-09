import Content from '../components/Content';
import Section from '../components/Section';

export default function Page() {
    return (
        <Content>
            <Section id='intro'>
                I have taught courses in Logic and Critical Thinking, as well as
                general introductions to philosophy. Some of my slides are
                available{' '}
                <span style={{ whiteSpace: 'nowrap' }}>
                    <a
                        href='https://sites.google.com/site/jplate01/teaching'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        here
                    </a>
                    .
                </span>
            </Section>
        </Content>
    );
}
