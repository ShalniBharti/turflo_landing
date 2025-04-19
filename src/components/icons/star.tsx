import { LucideIcon } from 'lucide-react';
import * as React from 'react';

const Star: LucideIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
    ({ className = '', style = {}, onClick = () => { }, ...props }, ref) => (
        <svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ref={ref}
            className={className}
            style={style}
            onClick={onClick}
            {...props}
        >
            <path
                d="m4.369 15.75 1.219-5.269L1.5 6.938l5.4-.47L9 1.5l2.1 4.969 5.4.468-4.088 3.544 1.22 5.269L9 12.956z"
                fill="url(#a)"
            />
            <defs>
                <linearGradient
                    id="a"
                    x1={9}
                    y1={1.5}
                    x2={9}
                    y2={15.75}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFC400" />
                    <stop offset={1} stopColor="#D78500" />
                </linearGradient>
            </defs>
        </svg>
    )
);

Star.displayName = 'Star';

export default Star;







