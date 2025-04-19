import { LucideIcon } from 'lucide-react';
import * as React from 'react';

const Close: LucideIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
    ({ className = '', style = {}, onClick = () => { }, ...props }, ref) => (
        <svg
            width={20}
            height={3}
            viewBox="0 0 20 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ref={ref}
            className={className}
            style={style}
            onClick={onClick}
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 3H0V0h20z"
                fill="#FF7018"
            />
        </svg>
    )
);

Close.displayName = 'Close';

export default Close;





