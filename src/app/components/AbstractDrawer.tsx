'use client';

import { useId, useState } from 'react';

/* Abstracts are plain JSX (see pubs.tsx): emphasis with <em>/<i>, and typographic dashes and
   quotes written as HTML entities. */

const AbstractDrawer = ({ abstract }: { abstract: React.ReactNode }) => {
    const [open, setOpen] = useState(false);
    const id = useId();
    return (
        <div className='mt-1'>
            <button
                type='button'
                aria-expanded={open}
                aria-controls={id}
                onClick={() => setOpen(!open)}
                className='font-mono text-xs uppercase tracking-[0.08em] cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-100'
            >
                {open ? 'hide abstract' : 'show abstract'}
            </button>
            <div
                id={id}
                className={`grid -ml-12 overflow-hidden sm:ml-0 ${
                    open
                        ? 'grid-rows-[1fr] opacity-100 [transition:grid-template-rows_0.3s_cubic-bezier(0,0,0.2,1),opacity_0.2s_ease-in-out]'
                        : 'grid-rows-[0fr] opacity-0 [transition:grid-template-rows_0.25s_ease-in-out,opacity_0.2s_ease-in-out]'
                }`}
            >
                <div className='min-h-0'>
                    <p className='mt-1 mb-0 rounded-xl sm:rounded-l-none sm:border-l-2 sm:border-l-[color:var(--links)] bg-[color:var(--abstract-bg)] px-4 py-3 text-sm'>
                        {abstract}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AbstractDrawer;
