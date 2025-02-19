import Content from '../components/Content';
import Section from '../components/Section';

export default function Page() {
    return (
        <Content>
            <Section id='intro'>
                <p>
                    Back in the fall of 2006, I decided to write a diagram editor in the form of a{' '}
                    <a
                        href='https://en.wikipedia.org/wiki/Java_applet'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Java applet
                    </a>{' '}
                    that would allow the user to generate <i>TeXdraw</i> code to be used in a LaTeX document.
                    Sadly, however, browser support for Java applets would soon be on the wane, and so I gave
                    up on the idea of maintaining a web site for my diagram editor.
                </p>
                <p>
                    Eventually, in the spring of 2024, I thought that it might be interesting to implement the
                    applet, or some variant of it, as a modern web application. The result of this (by now
                    largely complete) effort is available{' '}
                    <span style={{ whiteSpace: 'nowrap' }}>
                        <a href='https://jplate.github.io/pasi' target='_blank' rel='noopener noreferrer'>
                            here
                        </a>
                        .
                    </span>
                </p>
            </Section>
        </Content>
    );
}
