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
}

export const papers: BibItem[] = [
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
    },
    {
        title: 'Ordinal Type Theory',
        details: (
            <>
                <i>Inquiry</i> <b>68</b>: 2344&ndash;2400
            </>
        ),
        link: 'https://www.tandfonline.com/doi/full/10.1080/0020174X.2023.2278031',
        philPLink: 'https://philpapers.org/rec/PLAOTT',
        year: '2025',
    },
    {
        title: 'Qualitative Properties and Relations',
        details: (
            <>
                <i>Philosophical Studies</i> <b>179</b>: 1297&ndash;1322
            </>
        ),
        link: 'https://link.springer.com/article/10.1007/s11098-021-01708-y',
        philPLink: 'https://philpapers.org/rec/PLAQPA',
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
        philPLink: 'https://philpapers.org/rec/PLAIPA-2',
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
        philPLink: 'https://philpapers.org/rec/PLALSP',
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
        philPLink: 'https://philpapers.org/rec/PLAAAO',
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
        philPLink: 'https://philpapers.org/rec/MOLFAB',
        year: '2007',
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
    },
];
