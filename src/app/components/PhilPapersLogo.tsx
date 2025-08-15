interface PhilPapersLogoProps {
    size?: number;
    className?: string;
}

const PhilPapersLogo = ({ size = 16, className = '' }: PhilPapersLogoProps) => {
    // Calculate dimensions based on size parameter
    const width = size * 1.25; // Maintain aspect ratio (30/24 = 1.25)
    const height = size;
    
    // viewBox values:
    const rectWidth = 30;
    const rectHeight = 24;

    // Calculate scaled values based on the viewBox coordinate system
    const textX = rectWidth / 2; // Center horizontally
    const textY = rectHeight * 0.67; // Position text vertically (16/24 ≈ 0.67)
    const fontSize = rectHeight * 0.5; // Scale font size proportionally (12/24 = 0.5)
    
    return (
        <svg
            width={width}
            height={height}
            viewBox={`0 0 ${rectWidth} ${rectHeight}`}
            className={className}
            style={{ display: 'inline-block' }}
        >
            <defs>
                <linearGradient id="philpapersGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#0066CC', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#009933', stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            <rect 
                width={rectWidth} 
                height={rectHeight} 
                rx="3" 
                fill="url(#philpapersGradient)" 
                filter="drop-shadow(0 1px 2px rgba(0,0,0,0.1))" 
            />
            <text
                x={textX}
                y={textY}
                textAnchor="middle"
                fill="white"
                fontSize={fontSize}
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
            >
                PP
            </text>
        </svg>
    );
};

export default PhilPapersLogo;
