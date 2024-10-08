import React from 'react';

interface SectionProps {
    id: string;
    children: React.ReactNode;
}

const Section = ({ id, children }: SectionProps) => {
    return (
        <section
            id={id}
            className='prose max-w-md md:max-w-xl xl:max-w-3xl mt-3 mx-4 mb-9'
        >
            {children}
        </section>
    );
};

export default Section;
