type TBrandLogoProps = {
    width?: number;
    height?: number;
    fill?: string;
    className?: string;
};

export const BrandLogo = ({ width = 160, height = 32, className = '' }: TBrandLogoProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 240 40'
            xmlns='http://www.w3.org/2000/svg'
            className={className}
            aria-label='Alphastream Bot'
        >
            <rect x='6' y='16' width='10' height='16' fill='#EF4444' rx='1.5' />
            <line x1='11' y1='6' x2='11' y2='16' stroke='#EF4444' strokeWidth='2.5' />
            <line x1='11' y1='32' x2='11' y2='36' stroke='#EF4444' strokeWidth='2.5' />
            <rect x='22' y='22' width='10' height='12' fill='#22C55E' rx='1.5' />
            <line x1='27' y1='12' x2='27' y2='22' stroke='#22C55E' strokeWidth='2.5' />
            <line x1='27' y1='34' x2='27' y2='36' stroke='#22C55E' strokeWidth='2.5' />
            <polyline points='6,34 14,24 24,30 34,18' stroke='#FBBF24' strokeWidth='2' strokeLinecap='round' fill='none' />
            <text x='48' y='26' fontFamily="'IBM Plex Sans', Arial, sans-serif" fontSize={19} fontWeight={700}>
                <tspan fill='#1AB79D'>Alpha</tspan>
                <tspan fill='#F8FAFC'>stream</tspan>
                <tspan fill='#94A3B8' fontWeight={500} fontSize={15} dx={4}>
                    {' '}
                    Bot
                </tspan>
            </text>
        </svg>
    );
};
