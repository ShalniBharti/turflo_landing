import { LucideIcon } from 'lucide-react';
import * as React from 'react';

const HeaderArrow: LucideIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
    ({ className = '', style = {}, onClick = () => { }, ...props }, ref) => (
        <svg
            width={24}
            height={21}
            viewBox="0 0 24 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ref={ref}
            className={className}
            style={style}
            onClick={onClick}
            {...props}
        >
            <path
                d="M.75.5h22.5V3H.75zm7.5 8.75h15v2.5h-15zM.75 18h22.5v2.5H.75z"
                fill="#1E293B"
            />
        </svg>
    )
);

HeaderArrow.displayName = 'HeaderArrow';

export default HeaderArrow;








