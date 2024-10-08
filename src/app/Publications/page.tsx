import ContentDiv from '../components/ContentDiv';
import styles from './Publications.module.css';

interface CoAuthor {
    name: string;
    link?: string;
}

interface BibItem {
    coauthors?: CoAuthor[];
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    details: React.ReactNode;
    link?: string;
    description?: React.ReactNode;
    year?: string;
}

const papers: BibItem[] = [
    {
        title: 'Ordinal Type Theory',
        details: (
            <>
                Forthcoming in <i>Inquiry</i>
            </>
        ),
        link: 'https://www.tandfonline.com/doi/full/10.1080/0020174X.2023.2278031',
    },
    {
        title: (
            <>
                <i>Quo vadis</i>, Metaphysics of Relations?
            </>
        ),
        subtitle: (
            <>
                Introduction to a Special Issue of <i>Dialectica</i> on the
                Metaphysics of Relational States
            </>
        ),
        details: (
            <>
                Forthcoming in <i>Dialectica</i>
            </>
        ),
        link: 'https://philpapers.org/rec/PLAQVM',
    },
    {
        title: 'Qualitative Properties and Relations',
        details: (
            <>
                <i>Philosophical Studies</i> <b>179</b>: 1297&ndash;1322
            </>
        ),
        link: 'https://link.springer.com/article/10.1007/s11098-021-01708-y',
        year: '2022',
    },
    {
        title: 'Intrinsic Properties and Relations',
        details: (
            <>
                <i>Inquiry</i> <b>61</b>: 783&ndash;853
            </>
        ),
        link: 'https://www.tandfonline.com/doi/full/10.1080/0020174X.2018.1446046',
        year: '2018',
    },
    {
        title: 'Logically Simple Properties and Relations',
        details: (
            <>
                <i>Philosophers&rsquo; Imprint</i> <b>16</b>(1): 1&ndash;40
            </>
        ),
        link: 'https://quod.lib.umich.edu/p/phimp/3521354.0016.001/--logically-simple-properties-and-relations?view=image',
        year: '2016',
    },
    {
        title: 'An Analysis of the Binding Problem',
        details: (
            <>
                <i>Philosophical Psychology</i> <b>20</b>: 773&ndash;92
            </>
        ),
        link: 'https://www.tandfonline.com/doi/abs/10.1080/09515080701694136',
        year: '2007',
    },
    {
        coauthors: [
            {
                name: 'Christopher Mole',
                link: 'https://philpeople.org/profiles/christopher-mole',
            },
            { name: 'Marilee Dobbs' },
            { name: 'Corey Kubatzky' },
            { name: 'Marc Nardone' },
            { name: 'Rawdon Waller' },
        ],
        title: 'Faces and Brains: The Limitations of Brain Scanning in Cognitive Science',
        details: (
            <>
                <i>Philosophical Psychology</i> <b>20</b>: 197&ndash;207
            </>
        ),
        link: 'https://www.tandfonline.com/doi/abs/10.1080/09515080701209380',
        year: '2007',
    },
];

const reviews: BibItem[] = [
    {
        title: (
            <>
                Karen Bennett: <i>Making Things Up</i>
            </>
        ),
        details: (
            <>
                <i>Dialectica</i> <b>72</b>: 466&ndash;73
            </>
        ),
        link: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/1746-8361.12239',
        year: '2018',
    },
];

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
                    <div style={{ fontWeight: 'bold' }}>{pub.title}</div>
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
                        {pub.link ? (
                            <a
                                href={pub.link}
                                target='_blank'
                                rel='noopener noreferrer'
                                style={{ fontWeight: 'normal' }}
                            >
                                {pub.details}
                            </a>
                        ) : (
                            pub.details
                        )}
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
