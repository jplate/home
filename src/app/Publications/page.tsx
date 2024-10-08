import ContentDiv from '../components/ContentDiv';
import styles from './Publications.module.css';
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
                    <div style={{ marginTop: '0.3em' }}>
                        {pub.details}
                    </div>
                    <div style={{ marginTop: '0.3em' }}>{pub.year}</div>
                </li>
            ))}
        </ol>
    );
};

export default function Page() {
    return (
        <ContentDiv>
            <h2 className={styles.sectionHeader}>Journal articles</h2>
            <PubList pubs={papers} />
            <h2 className={styles.sectionHeader}>Book reviews</h2>
            <PubList pubs={reviews} />
        </ContentDiv>
    );
}
