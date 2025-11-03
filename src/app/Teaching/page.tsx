import { Metadata } from 'next';
import Content from '../components/Content';
import Section from '../components/Section';

export const metadata: Metadata = {
    title: 'Teaching',
    description: 'Jan Plate teaching courses in Logic, Critical Thinking, and Philosophy.',
    keywords: ['philosophy teaching', 'logic course', 'critical thinking', 'philosophy education'],
};

export default function Page() {
    return (
        <Content>
            <Section id='intro'>
                <p>
                    I have taught courses in Logic and Critical Thinking, as well as general introductions to
                    philosophy. Some of my slides are available{' '}
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
                </p>
            </Section>
        </Content>
    );
}
