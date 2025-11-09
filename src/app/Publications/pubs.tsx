export interface CoAuthor {
    name: string;
    link?: string;
}

export interface BibItem {
    coauthors?: CoAuthor[];
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    details: React.ReactNode;
    link?: string;
    philPLink?: string;
    description?: React.ReactNode;
    year?: string;
    doi?: string;
}

export const papers: BibItem[] = [
    {
        title: <>Towards an Ontology of Roles and States</>,
        details: (
            <>
                Forthcoming in <i>Erkenntnis</i>
            </>
        ),
        description: (
            <>
                Revises the framework of my 'Ordinal Type Theory' by incorporating a broadly positionalistic
                conception of relations. Properties are treated as a special case of <i>roles</i>, relations
                as <i>sets of role sequences.</i> (Click{' '}
                <a
                    href='https://jplate.github.io/pasi/?src=TORS0'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ fontWeight: 'bold' }}
                >
                    here
                </a>{' '}
                for an interactive view of the concluding section&rsquo;s diagram, and{' '}
                <a
                    href='https://jplate.github.io/pasi/?src=TORS1'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ fontWeight: 'bold' }}
                >
                    here
                </a>{' '}
                for a visually more interesting version.)
            </>
        ),
        philPLink: 'https://philpapers.org/rec/PLATAO-12',
        doi: '10.1007/s10670-025-01036-1',
    },
    {
        title: (
            <>
                <i>Quo vadis</i>, Metaphysics of Relations?
            </>
        ),
        subtitle: (
            <>
                Introduction to a Special Issue of <i>Dialectica</i> on the Metaphysics of Relational States
            </>
        ),
        details: (
            <>
                Forthcoming in <i>Dialectica</i>
            </>
        ),
        link: 'https://philpapers.org/rec/PLAQVM',
        philPLink: 'https://philpapers.org/rec/PLAQVM',
        doi: '10.48106/dial.v76.i2.01',
    },
    {
        title: 'Ordinal Type Theory',
        description: (
            <>
                Criticizes the Simple Theory of Types and develops an alternative framework, essentially
                keeping the &lsquo;orders&rsquo; of Ramified Type Theory while discarding the more familiar
                &lsquo;simple&rsquo; types. The framework also contains an account of how intensional entities
                (i.e., states of affairs, properties, and relations) are individuated. The concept of a{' '}
                fundamental entity plays a pivotal role.
            </>
        ),
        details: (
            <>
                <i>Inquiry</i> <b>68</b>: 2344&ndash;2400
            </>
        ),
        link: 'https://www.tandfonline.com/doi/full/10.1080/0020174X.2023.2278031',
        philPLink: 'https://philpapers.org/rec/PLAOTT',
        year: '2025',
        doi: '10.1080/0020174x.2023.2278031',
    },
    {
        title: 'Qualitative Properties and Relations',
        description: (
            <>
                Distinguishes two concepts of qualitativeness (or &lsquo;purity&rsquo;): <em>pure</em>{' '}
                qualitativeness (roughly <i>à la</i> Carnap) and <em>strict</em> qualitativeness (roughly{' '}
                <i>à la</i> Carmichael). The penultimate section revisits Quine&rsquo;s &lsquo;Grades of
                Discriminability&rsquo;.
            </>
        ),
        details: (
            <>
                <i>Philosophical Studies</i> <b>179</b>: 1297&ndash;1322
            </>
        ),
        link: 'https://link.springer.com/article/10.1007/s11098-021-01708-y',
        philPLink: 'https://philpapers.org/rec/PLAQPA',
        year: '2022',
        doi: '10.1007/s11098-021-01708-y',
    },
    {
        title: 'Intrinsic Properties and Relations',
        description: (
            <>
                Proposes an account of intrinsicality in &lsquo;broadly logical&rsquo; terms, following the
                pattern of my &lsquo;Logically Simple Properties and Relations&rsquo;.
            </>
        ),
        details: (
            <>
                <i>Inquiry</i> <b>61</b>: 783&ndash;853
            </>
        ),
        link: 'https://www.tandfonline.com/doi/full/10.1080/0020174X.2018.1446046',
        philPLink: 'https://philpapers.org/rec/PLAIPA-2',
        year: '2018',
        doi: '10.1080/0020174x.2018.1446046',
    },
    {
        title: 'Logically Simple Properties and Relations',
        description: (
            <>
                Develops a &lsquo;broadly logical&rsquo; account of what it is for a property or relation (or
                state of affairs) to be <em>logically simple</em>. This is offered as a replacement for
                Lewis&rsquo;s concept of a <em>perfectly natural</em> property or relation.
            </>
        ),
        details: (
            <>
                <i>Philosophers&rsquo; Imprint</i> <b>16</b>(1): 1&ndash;40
            </>
        ),
        link: 'https://quod.lib.umich.edu/p/phimp/3521354.0016.001/--logically-simple-properties-and-relations?view=image',
        philPLink: 'https://philpapers.org/rec/PLALSP',
        year: '2016',
    },
    {
        title: 'An Analysis of the Binding Problem',
        description: (
            <>
                Introduces a distinction between three kinds of binding problem: the brain&rsquo;s, the
                cognitive scientist&rsquo;s, and the philosopher&rsquo;s.
            </>
        ),
        details: (
            <>
                <i>Philosophical Psychology</i> <b>20</b>: 773&ndash;92
            </>
        ),
        link: 'https://www.tandfonline.com/doi/abs/10.1080/09515080701694136',
        philPLink: 'https://philpapers.org/rec/PLAAAO',
        year: '2007',
        doi: '10.1080/09515080701694136',
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
        philPLink: 'https://philpapers.org/rec/MOLFAB',
        year: '2007',
        doi: '10.1080/09515080701209380',
    },
];

export const reviews: BibItem[] = [
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
        philPLink: 'https://philpapers.org/rec/PLAKBM',
        year: '2018',
        doi: '10.1111/1746-8361.12239',
    },
];
