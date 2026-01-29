import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface UseScrollAnimationOptions {
    trigger: React.RefObject<HTMLElement>;
    start?: string;
    end?: string;
    scrub?: boolean | number;
    markers?: boolean;
    onEnter?: () => void;
    onLeave?: () => void;
}

export function useScrollAnimation(
    animationFn: (element: HTMLElement) => gsap.core.Timeline | gsap.core.Tween,
    options: UseScrollAnimationOptions
) {
    const animationRef = useRef<gsap.core.Timeline | gsap.core.Tween | null>(null);

    useEffect(() => {
        const element = options.trigger.current;
        if (!element) return;

        // Create the animation
        const animation = animationFn(element);

        // Create ScrollTrigger
        ScrollTrigger.create({
            trigger: element,
            start: options.start || 'top bottom',
            end: options.end || 'bottom top',
            scrub: options.scrub !== undefined ? options.scrub : false,
            markers: options.markers || false,
            onEnter: options.onEnter,
            onLeave: options.onLeave,
            animation: animation,
        });

        animationRef.current = animation;

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => {
                if (trigger.trigger === element) {
                    trigger.kill();
                }
            });
            if (animationRef.current) {
                animationRef.current.kill();
            }
        };
    }, [animationFn, options]);

    return animationRef;
}

// Refresh all ScrollTriggers (useful after layout changes)
export function useScrollTriggerRefresh() {
    useEffect(() => {
        ScrollTrigger.refresh();
    }, []);
}
