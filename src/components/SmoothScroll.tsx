import React, { useEffect, useRef, Component, ReactNode } from 'react';
import Lenis from 'lenis';

interface SmoothScrollProps {
    children: React.ReactNode;
}

class SmoothScrollBoundary extends Component<SmoothScrollProps, { hasError: boolean }> {
    constructor(props: SmoothScrollProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.warn('SmoothScroll failed to initialize, falling back to native scroll:', error);
    }

    render() {
        if (this.state.hasError) {
            return <>{this.props.children}</>;
        }
        return <SmoothScrollContent>{this.props.children}</SmoothScrollContent>;
    }
}

function SmoothScrollContent({ children }: SmoothScrollProps) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        try {
            const lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                smoothWheel: true,
                wheelMultiplier: 1,
                touchMultiplier: 2,
                infinite: false,
            });

            lenisRef.current = lenis;

            function raf(time: number) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }

            requestAnimationFrame(raf);

            return () => {
                lenis.destroy();
            };
        } catch (err) {
            console.warn('Lenis initialization failed:', err);
        }
    }, []);

    return <>{children}</>;
}

export default function SmoothScroll(props: SmoothScrollProps) {
    return <SmoothScrollBoundary {...props} />;
}
