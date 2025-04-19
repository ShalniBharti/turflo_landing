import { LucideIcon } from 'lucide-react';
import * as React from 'react';

const RightArroww : LucideIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
    ({ className = '', style = {}, onClick = () => { }, ...props }, ref) => (
        <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ref={ref}
            className={className}
            style={style}
            onClick={onClick}
            {...props}
        >
            <path
                d="M0 9V7h12L6.5 1.5 7.92.08 15.84 8l-7.92 7.92L6.5 14.5 12 9z"
                fill="#fff"
            />
        </svg>
    )
);

RightArroww.displayName = 'RightArroww';

export default RightArroww;







