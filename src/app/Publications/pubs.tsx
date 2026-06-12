export interface CoAuthor {
    name: string;
    link?: string;
}

export interface BibItem {
    coauthors?: CoAuthor[];
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    abstract?: string;
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
                Revises the framework of my &lsquo;Ordinal Type Theory&rsquo; by incorporating a broadly positionalistic
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
        abstract: 'Facts (and, more generally, states of affairs) are plausibly individuated in an at least moderately coarse-grained way: the fact that this rose is red should not be distinguished from the fact that this rose fails to fail to be red. Something similar can be said for properties and relations. It is relatively easy to formulate principles that entail that the individuation of states of affairs, properties, and relations---in brief, intensional entities---is coarse-grained enough to conform to this idea. It is less easy to devise a complementary principle that imposes an \\emph\{upper\} bound on the coarse-grainedness of intensional entities. A promising approach to this problem is to formulate a principle according to which the \\emph\{fundamental\} entities (including fundamental properties and relations) are freely recombinable or `logically independent\'; but certain special provisions that have to be made with regard to relations tend to render such a principle unattractively complex. In this paper I put forward a simpler principle, based on a broadly positionalistic conception of relations.',
        link: 'https://link.springer.com/article/10.1007/s10670-025-01036-1',
        philPLink: 'https://philpapers.org/rec/PLATAO-12',
        doi: '10.1007/s10670-025-01036-1',
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
        abstract: 'Higher-order logic, with its type-theoretic apparatus known as the \\emph{simple theory of types} (STT), has increasingly come to be employed in theorizing about properties, relations, and states of affairs---or `intensional entities\' for short. This paper argues against this employment of STT and offers an alternative: \\emph{ordinal type theory} (OTT). Very roughly, STT and OTT can be regarded as complementary simplifications of the `ramified theory of types\' outlined in the Introduction to \\emph{Principia Mathematica} (on a realist reading). While STT, understood as a theory of intensional entities, retains the Fregean division of properties and relations into a multiplicity of categories according to their adicities and `input types\' and discards the division of intensional entities into different `orders\', OTT takes the opposite approach: it \\emph{retains} the hierarchy of orders (though with some modifications) and \\emph{discards} the categorization of properties and relations according to their adicities and input types. In contrast to STT, this latter approach avoids intensional counterparts of the Epimenides and related paradoxes. \\emph{Fundamental} intensional entities lie at the base of the proposed hierarchy and are also given a prominent part to play in the individuation of non-fundamental intensional entities.',
        link: 'https://www.tandfonline.com/doi/full/10.1080/0020174X.2023.2278031',
        philPLink: 'https://philpapers.org/rec/PLAOTT',
        year: '2025',
        doi: '10.1080/0020174x.2023.2278031',
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
        description: (
            <>
                Provides an overview of some problems in the metaphysics of relational states, mainly from a
                positionalistic perspective.
            </>
        ),
        details: (
            <>
                <i>Dialectica</i> <b>76</b>: 163&ndash;196
            </>
        ),
        abstract: 'In this introductory essay, the metaphysics of relational states is discussed mainly from a positionalistic perspective, beginning with a puzzle concerning the instantiations of converse relations (such as \\textit{loving} and \\textit{being loved by}). The closing section provides a brief overview of the six contributions to this Special Issue.',
        link: 'https://www.philosophie.ch/plate-2022',
        philPLink: 'https://philpapers.org/rec/PLAQVM',
        year: '2022',
        doi: '10.48106/dial.v76.i2.01',
    },
    {
        title: 'Qualitative Properties and Relations',
        description: (
            <>
                Distinguishes two concepts of qualitativeness (or &lsquo;purity&rsquo;): <em className='pr-[0.12em]'>pure</em>{' '}
                qualitativeness (roughly <i className='pr-[0.12em]'>à la</i> Carnap) and <em className='pr-[0.12em]'>strict</em> qualitativeness (roughly{' '}
                <i className='pr-[0.12em]'>à la</i> Carmichael). The penultimate section revisits Quine&rsquo;s &lsquo;Grades of
                Discriminability&rsquo;.
            </>
        ),
        details: (
            <>
                <i>Philosophical Studies</i> <b>179</b>: 1297&ndash;1322
            </>
        ),
        abstract: 'This paper is concerned with two concepts of qualitativeness that apply to intensional entities (i.e., properties, relations, and states of affairs). I propose an account of \\emph{pure} qualitativeness that largely follows the traditional understanding established by Carnap, and try to shed light on its ontological presuppositions. On this account, an intensional entity is purely qualitative iff it does not `involve\' any particular (i.e., anything that is not an intensional entity). An alternative notion of qualitativeness---which I propose to refer to as a concept of \\emph{strict} qualitativeness---has recently been introduced by Chad Carmichael. However, Carmichael\'s definition presupposes a highly fine-grained conception of properties and relations. To eliminate this presupposition, I tentatively suggest a different definition that rests on a concept of \\emph{perspicuous denotation}. In the penultimate section, both concepts of qualitativeness are put to work in distinguishing between different `grades\' of qualitative discriminability.',
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
        abstract: 'This paper provides an analysis of the intrinsic/extrinsic distinction, as applied both to properties and to relations. In contrast to other accounts, the approach taken here locates the source of a property\'s  intrinsicality or extrinsicality in the manner in which that property is \`logically constituted\', and thus---plausibly---in its nature or essence, rather than in, e.g., its modal profile. Another respect in which the present proposal differs from many extant analyses lies in the fact that it does not seek to analyse the \`global\' distinction between intrinsic and extrinsic properties on the basis of the `local\' distinction between having a property intrinsically and having it extrinsically. Instead, the latter distinction is explicated on the basis of the former.',
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
        abstract: 'This paper presents an account of what it is for a property or relation (or \`attribute\' for short) to be \\emph\{logically simple\}. Based on this account, it is shown, among other things, that the logically simple attributes are in at least one important way sparse. This in turn lends support to the view that the concept of a logically simple attribute can be regarded as a promising substitute for Lewis\'s concept of a perfectly natural attribute. At least in part, the advantage of using the former concept lies in the fact that it is amenable to analysis, where that analysis---\\textit\{i.e.\}, the account proposed in this paper---requires the adoption neither of an Armstrongian theory of universals nor of a primitive notion of naturalness, fundamentality, or grounding.',
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
        abstract: 'Despite its prominent role in cognitive psychology, its relevance for the research of consciousness, and some helpful clarification (e.g., Revonsuo 1999), the binding problem is still surrounded by considerable confusion. In this paper, I first give an informal but systematic overview on the diversity of the various forms that the binding problem can assume, and then attempt to extract, on the basis of ``working definitions\'\' of various much-discussed types of binding, a common denominator. I propose that at the heart of the binding problem lies the notion of representing an entity as having a certain property, and discuss several objections that could be raised against the proposed analysis, as well its usefulness and implications.',
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
        abstract: 'The use of brain scanning now dominates the cognitive sciences, but important questions remain to be answered about what, exactly, scanning can tell us. One corner of cognitive science that has been transformed by the use of neuroimaging, and that a scanning enthusiast might point to as proof of scanning\'s importance, is the study of face perception. Against this view, we argue that the use of scanning has, in fact, told us rather little about the information processing underlying face perception and that it is not likely to tell us much more.',
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
