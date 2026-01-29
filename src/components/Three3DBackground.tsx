import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Floating geometric shape component
function FloatingShape({ position, scale, color, rotationSpeed }: any) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        // Slow rotation
        meshRef.current.rotation.x += rotationSpeed[0];
        meshRef.current.rotation.y += rotationSpeed[1];
    });

    return (
        <Float
            speed={1.5}
            rotationIntensity={0.5}
            floatIntensity={0.5}
            floatingRange={[-0.1, 0.1]}
        >
            <mesh ref={meshRef} position={position} scale={scale}>
                <icosahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                    color={color}
                    wireframe
                    transparent
                    opacity={0.15}
                    emissive={color}
                    emissiveIntensity={0.2}
                />
            </mesh>
        </Float>
    );
}

export default function Three3DBackground() {
    // Generate random positions for shapes
    const shapes = useMemo(() => {
        const colors = ['#00e5ff', '#a78bfa', '#34d399'];
        return Array.from({ length: 8 }, (_, i) => ({
            key: i,
            position: [
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 8,
                (Math.random() - 0.5) * 5 - 5,
            ] as [number, number, number],
            scale: Math.random() * 0.5 + 0.3,
            color: colors[i % colors.length],
            rotationSpeed: [
                (Math.random() - 0.5) * 0.002,
                (Math.random() - 0.5) * 0.002,
            ] as [number, number],
        }));
    }, []);

    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                style={{ background: 'transparent' }}
                dpr={[1, 2]}
            >
                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={0.5} />
                <fog attach="fog" args={['#02040a', 5, 15]} />

                {shapes.map((shape) => (
                    <FloatingShape
                        key={shape.key}
                        position={shape.position}
                        scale={shape.scale}
                        color={shape.color}
                        rotationSpeed={shape.rotationSpeed}
                    />
                ))}
            </Canvas>
        </div>
    );
}
