import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ParallaxSectionProps {
    children: ReactNode;
    speed?: number; // 0 = no movement, 1 = normal scroll, >1 = fast, <1 = slow/reverse
    className?: string;
}

export default function ParallaxSection({ children, speed = 0.5, className = "" }: ParallaxSectionProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Calculate parallax offset based on scroll progress
    // A positive speed moves the element "slower" than scroll (parallax depth)
    // Adjust the range based on desired intensity
    const y = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);

    return (
        <div ref={ref} className={`relative ${className}`}>
            <motion.div style={{ y }} className="w-full h-full">
                {children}
            </motion.div>
        </div>
    );
}
