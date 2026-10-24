interface ItalicProps {
    children: string;
    em?: boolean; // render as <em> instead of <i>
    ic?: number; // italic correction, in em (default 0.12)
}

/* Italic text followed by an italic correction (Geist has no italic, so the slant is synthesized and the
   last letter can crowd what follows). The correction is applied as letter-spacing on the last character
   rather than as padding, so that it is covered by the selection highlight and adds nothing to copied text.
   The rest of the word is made `relative` so that it paints on top: otherwise the selection background of
   the last character covers whatever the slanted glyph before it overhangs (e.g., the dot of an 'i' or 'j'). */
const Italic = ({ children, em = false, ic = 0.12 }: ItalicProps) => {
    const chars = Array.from(children);
    const last = chars.pop();
    const Tag = em ? 'em' : 'i';
    return (
        <Tag>
            {chars.length > 0 && <span className='relative'>{chars.join('')}</span>}
            <span style={{ letterSpacing: `${ic}em` }}>{last}</span>
        </Tag>
    );
};

export default Italic;
