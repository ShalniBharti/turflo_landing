import { LucideIcon } from 'lucide-react';
import * as React from 'react';

const Communities: LucideIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
    ({ className = '', style = {}, onClick = () => { }, ...props }, ref) => (
        <svg
            width={90}
            height={90}
            viewBox="0 0 90 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ref={ref}
            className={className}
            style={style}
            onClick={onClick}
            {...props}
        >
            <path
                d="M32.813 23.438a12.188 12.188 0 1 1 24.375 0 12.188 12.188 0 0 1-24.376 0M18.75 18.75a11.25 11.25 0 1 0 0 22.5 11.25 11.25 0 0 0 0-22.5m52.5 0a11.25 11.25 0 1 0 0 22.5 11.25 11.25 0 0 0 0-22.5m-36.562 22.5a6.563 6.563 0 0 0-6.563 6.563v14.062a16.875 16.875 0 0 0 33.75 0V47.813a6.563 6.563 0 0 0-6.562-6.563zm-9.9 3.667q-.409 1.385-.413 2.895v14.063a20.59 20.59 0 0 0 7.631 16.02 16.874 16.874 0 0 1-21.611-11.651l-2.67-9.96a6.56 6.56 0 0 1 4.639-8.04zm33.206 32.974a20.59 20.59 0 0 0 7.631-16.012V47.816a10.3 10.3 0 0 0-.412-2.902l12.427 3.33a6.563 6.563 0 0 1 4.639 8.036l-2.67 9.964A16.876 16.876 0 0 1 57.994 77.89"
                fill="#FF7018"
            />
        </svg>
    )
);

Communities.displayName = 'Communities';

export default Communities;





