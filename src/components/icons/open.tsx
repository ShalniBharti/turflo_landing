import { LucideIcon } from 'lucide-react';
import * as React from 'react';

const Open: LucideIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
    ({ className = '', style = {}, onClick = () => { }, ...props }, ref) => (
        <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ref={ref}
            className={className}
            style={style}
            onClick={onClick}
            {...props}
        >
            <path
                d="M19.27 8.099v3.105h-8.056v8.057H8.067v-8.057H.01V8.1h8.057V0h3.147v8.099z"
                fill="#FF7018"
            />
        </svg>
    )
);

Open.displayName = 'Games';

export default Open;





