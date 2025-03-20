'use client';

import {
    AnimationProps,
    TargetAndTransition,
    VariantLabels,
    motion,
} from 'framer-motion';
import { cn } from '@/lib/utils';
interface Props {
    children: React.ReactNode;
    initial: AnimationProps['initial'];
    whileInView: TargetAndTransition | VariantLabels | undefined;
    className?: string;
}

export const Reveal = ({ children, initial, whileInView, className }: Props) => {
    return (
        <motion.div 
            initial={initial}
            whileInView={whileInView}
            className={cn('relative z-10', className)}
        >
            {children}
        </motion.div>
    );
};
