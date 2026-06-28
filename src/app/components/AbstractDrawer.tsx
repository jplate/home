'use client';

import { useId, useState } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

/* Abstracts are written using LaTeX conventions: $...$ for inline math (rendered with KaTeX),
   \emph{...} for emphasis, and TeX-style dashes and quotes. */

const texText = (s: string) =>
    s
        .replace(/---/g, '—')
        .replace(/--/g, '–')
        .replace(/``/g, '“')
        .replace(/''/g, '”')
        .replace(/`/g, '‘')
        .replace(/'/g, '’');

const renderTextSegment = (s: string) =>
    s.split(/\\(?:emph|textit)\{([^}]*)\}/g).map((part, i) =>
        i % 2 === 1 ? (
            <i key={i} className='pr-[0.12em]'>
                {texText(part)}
            </i>
        ) : (
            texText(part)
        )
    );

const renderAbstract = (s: string) =>
    s.split(/\$([^$]*)\$/g).map((part, i) =>
        i % 2 === 1 ? (
            <span
                key={i}
                dangerouslySetInnerHTML={{
                    __html: katex.renderToString(part, { throwOnError: false }),
                }}
            />
        ) : (
            <span key={i}>{renderTextSegment(part)}</span>
        )
    );

const AbstractDrawer = ({ abstract }: { abstract: string }) => {
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
                        ? 'grid-rows-[1fr] [transition:grid-template-rows_0.3s_cubic-bezier(0,0,0.2,1)]'
                        : 'grid-rows-[0fr] [transition:grid-template-rows_0.25s_ease-in-out]'
                }`}
            >
                <div className='min-h-0'>
                    <p className='mt-1 mb-0 rounded-xl sm:rounded-l-none sm:border-l-2 sm:border-l-[color:var(--links)] bg-gray-200/40 px-4 py-3 text-sm dark:bg-white/5'>
                        {renderAbstract(abstract)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AbstractDrawer;
