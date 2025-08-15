interface PhilPapersLogoProps {
    size?: number;
    className?: string;
}

const PhilPapersLogo = ({ size = 16, className = '' }: PhilPapersLogoProps) => {
    // Calculate dimensions based on size parameter
    const width = size * 1.25; // Maintain aspect ratio (30/24 = 1.25)
    const height = size;

    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 207 207'
            className={className}
            style={{ display: 'inline-block' }}
            xmlns='http://www.w3.org/2000/svg'
        >
            <defs>
                <style>
                    {`
                        .cls-1 {
                            fill: #109d49;
                        }
                        .cls-2 {
                            fill: #074ba9;
                        }
                    `}
                </style>
            </defs>
            <path
                className='cls-2'
                d='M117,99c6-2,11-4,16-9,11-10,16-23,16-39,0-9-2-17-5-25-3-7-8-14-13-18-5-4-11-7-18-9h-36V102h16c11,0,19-1,25-2Z'
            />
            <path
                className='cls-2'
                d='M154,0c4,2,8,4,11,7,15,12,23,27,23,47s-8,35-24,44c-8,5-18,8-30,9-4,0-13,0-27,0h-32v59c0,11,1,19,2,25,1,5,4,10,7,13,1,1,3,2,4,3h118V0h-53Z'
            />
            <path
                className='cls-1'
                d='M35,11c-3-4-6-8-11-10c-1,0-2-1-3-1H0V207H28c1-1,3-2,4-3,3-3,6-8,7-13,2-5,2-14,2-25V45c0-9,0-17-1-22c-1-5-2-9-4-12Z'
            />
        </svg>
    );
};

export default PhilPapersLogo;
