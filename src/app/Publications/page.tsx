import Content from '../components/Content';
import Section from '../components/Section';
import { BibItem, papers, reviews } from './pubs';

interface PubListProps {
    pubs: BibItem[];
}

const PubList = ({ pubs }: PubListProps) => {
    return (
        <ol
            style={{
                listStyleType: 'decimal',
                paddingLeft: '2em',
                marginTop: '0em',
                marginBottom: '2em',
            }}
        >
            {pubs.map((pub, index) => (
                <li
                    key={index}
                    style={{
                        marginBottom: '1em',
                        paddingLeft: '1em',
                    }}
                >
                    <div style={{ fontWeight: 'bold' }}>
                        {pub.link ? (
                            <a
                                href={pub.link}
                                target='_blank'
                                rel='noopener noreferrer'
                                style={{ fontWeight: 'bold' }}
                            >
                                {pub.title}
                            </a>
                        ) : (
                            pub.title
                        )}
                    </div>
                    {pub.subtitle}
                    {pub.coauthors && (
                        <>
                            (with{' '}
                            {pub.coauthors.map((coauthor, coauthorIndex) => (
                                <span key={coauthorIndex}>
                                    {coauthor.link ? (
                                        <a
                                            href={coauthor.link}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            style={{ fontWeight: 'normal' }}
                                        >
                                            {coauthor.name}
                                        </a>
                                    ) : (
                                        coauthor.name
                                    )}
                                    {coauthorIndex < pub.coauthors!.length - 1
                                        ? ', '
                                        : ''}
                                </span>
                            ))}
                            )
                        </>
                    )}
                    <div style={{ marginTop: '0.3em' }}>{pub.details}</div>
                    <div style={{ marginTop: '0.3em' }}>{pub.year}</div>
                </li>
            ))}
        </ol>
    );
};

export default function Page() {
    return (
        <Content>
            <Section id='papers' header='Journal articles'>
                <PubList pubs={papers} />
            </Section>
            <Section id='reviews' header='Book reviews'>
                <PubList pubs={reviews} />
            </Section>
        </Content>
    );
}
