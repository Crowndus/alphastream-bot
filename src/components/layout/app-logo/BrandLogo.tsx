type TBrandLogoProps = {
    width?: number;
    height?: number;
    fill?: string;
    className?: string;
};

export const BrandLogo = ({ width = 150, height = 32, fill = 'currentColor', className = '' }: TBrandLogoProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 220 48'
            xmlns='http://www.w3.org/2000/svg'
            className={className}
            aria-label='Alphastream Bot'
        >
            <rect x='0' y='16' width='8' height='14' fill='#6467F2' rx='1.5' />
            <line x1='4' y1='12' x2='4' y2='16' stroke='#6467F2' strokeWidth='2' />
            <line x1='4' y1='30' x2='4' y2='34' stroke='#6467F2' strokeWidth='2' />
            <rect x='12' y='10' width='8' height='20' fill='#1AB79D' rx='1.5' />
            <line x1='16' y1='4' x2='16' y2='10' stroke='#1AB79D' strokeWidth='2' />
            <line x1='16' y1='30' x2='16' y2='36' stroke='#1AB79D' strokeWidth='2' />
            <rect x='24' y='14' width='8' height='16' fill='#1AB79D' rx='1.5' />
            <line x1='28' y1='8' x2='28' y2='14' stroke='#1AB79D' strokeWidth='2' />
            <line x1='28' y1='30' x2='28' y2='34' stroke='#1AB79D' strokeWidth='2' />
            <text x='44' y='32' fontFamily='Arial, Helvetica, sans-serif' fontSize='20' fontWeight={700} fill={fill}>
                Alphastream
            </text>
        </svg>
    );
};
