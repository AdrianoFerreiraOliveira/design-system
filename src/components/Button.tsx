import {Slot} from '@radix-ui/react-slot';
import {clsx} from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    size?:'sm' |'md' |'lg';
    children: ReactNode;
    asChild:boolean;
}

export function Button({children, asChild,className,...props}:ButtonProps){
    const Comp =asChild? Slot :'button';
    return(
        <Comp className={clsx(
            'py-3 px-4 bg-purple-300 rounded font-semibold text-white text-sm w-full transition-colors hover:bg-purple-200 focus:ring-2 ring-white',        
            className,
        )}
        {...props}
        >
            {children}
            </Comp>
    )
}