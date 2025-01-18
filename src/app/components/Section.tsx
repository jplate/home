import react from 'react';

interface SectionProps {
    id: string;
    header?: react.ReactNode;
    children: react.ReactNode;
}

const Section = ({ id, header, children }: SectionProps) => {
    return (
        <section id={id} className='prose max-w-md md:max-w-xl xl:max-w-3xl mt-3 mx-4 mb-9'>
            {header && <h2>{header}</h2>}
            {children}
        </section>
    );
};

export default Section;
