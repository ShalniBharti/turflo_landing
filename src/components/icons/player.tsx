import { LucideIcon } from 'lucide-react';
import * as React from 'react';

const Player: LucideIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
            <g fill="#FF7018">
                <path d="M53.513 22.5c-2.063 3.563-.825 8.175 2.737 10.237 3.563 2.063 8.175.825 10.237-2.737 2.063-3.562.826-8.175-2.737-10.237-3.562-2.063-8.175-.826-10.237 2.737" />
                <path d="m59.4 39.037-9.75-5.625a18.84 18.84 0 0 1-8.175-22.762 3.71 3.71 0 0 0-1.613-4.538c-1.987-1.125-4.575-.262-5.362 1.875-3.563 9.413-1.313 20.063 5.475 27.263L22.537 65.437c-1.05 1.8-.412 4.088 1.388 5.138s4.087.412 5.137-1.388l3.75-6.487 6.488 3.75-9.375 16.237c-1.05 1.8-.413 4.088 1.387 5.138s4.088.412 5.138-1.388l21.712-37.575a18.86 18.86 0 0 1 2.475 17.7 3.746 3.746 0 0 0 7.013 2.625c3.637-9.825 1.537-21.9-8.25-30.15M47.812 14.25a5.64 5.64 0 0 0 7.688-2.063A5.64 5.64 0 0 0 53.437 4.5a5.629 5.629 0 0 0-5.625 9.75" />
            </g>
        </svg>
    )
);

Player.displayName = 'Player';

export default Player;



