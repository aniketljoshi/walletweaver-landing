"use client";

import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";
import { cn } from "../../lib/utils";

interface ThreeDGlobeProps {
  className?: string;
}

// Chain node locations on the sphere surface (lat/lon converted to 3D coords)
const CHAIN_POINTS = [
  { lat: 40.7, lon: -74.0 },   // New York (Ethereum)
  { lat: 1.35, lon: 103.8 },   // Singapore (BNB Chain)
  { lat: 35.68, lon: 139.69 }, // Tokyo (Polkadot)
  { lat: 51.51, lon: -0.13 },  // London (Chainlink)
  { lat: -33.87, lon: 151.21 },// Sydney (Solana)
  { lat: 37.57, lon: 126.98 }, // Seoul (Avalanche)
];

// Convert lat/lon to 3D sphere coordinates
function latLonToVec3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

// Generate arc pairs between points
function generateArcs(points: THREE.Vector3[]): [THREE.Vector3, THREE.Vector3][] {
  const arcs: [THREE.Vector3, THREE.Vector3][] = [];
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      // Only connect some pairs to avoid visual clutter
      if (Math.random() > 0.4) {
        arcs.push([points[i], points[j]]);
      }
    }
  }
  return arcs;
}

// Arc component using QuadraticBezierCurve3
function Arc({
  start,
  end,
}: {
  start: THREE.Vector3;
  end: THREE.Vector3;
}) {
  const curve = useMemo(() => {
    // Calculate midpoint and push it outward for the arc
    const mid = new THREE.Vector3()
      .addVectors(start, end)
      .multiplyScalar(0.5);
    const distance = start.distanceTo(end);
    mid.normalize().multiplyScalar(2 + distance * 0.4);

    return new THREE.QuadraticBezierCurve3(start, mid, end);
  }, [start, end]);

  const points = useMemo(() => curve.getPoints(50), [curve]);
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    return geo;
  }, [points]);

  return (
    <line geometry={geometry}>
      <lineBasicMaterial
        color="#00f0ff"
        transparent
        opacity={0.3}
        linewidth={1}
      />
    </line>
  );
}

// Glowing point on the sphere surface
function ChainNode({ position }: { position: THREE.Vector3 }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(clock.getElapsedTime() * 2) * 0.3;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group position={position}>
      {/* Core dot */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color="#00f0ff" />
      </mesh>
      {/* Outer glow */}
      <mesh>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.2} />
      </mesh>
      {/* Point light for local glow */}
      <pointLight color="#00f0ff" intensity={0.5} distance={1.5} decay={2} />
    </group>
  );
}

// The globe mesh with auto-rotation
function GlobeMesh() {
  const groupRef = useRef<THREE.Group>(null);

  // Compute chain positions and arcs once
  const chainPositions = useMemo(
    () => CHAIN_POINTS.map((p) => latLonToVec3(p.lat, p.lon, 2)),
    []
  );

  const arcs = useMemo(() => generateArcs(chainPositions), [chainPositions]);

  // Auto-rotation
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Wireframe sphere */}
      <Sphere args={[2, 32, 32]}>
        <meshBasicMaterial
          color="#00f0ff"
          wireframe
          transparent
          opacity={0.08}
        />
      </Sphere>

      {/* Second slightly larger sphere for depth */}
      <Sphere args={[2.01, 16, 16]}>
        <meshBasicMaterial
          color="#a78bfa"
          wireframe
          transparent
          opacity={0.04}
        />
      </Sphere>

      {/* Chain node points */}
      {chainPositions.map((pos, idx) => (
        <ChainNode key={`node-${idx}`} position={pos} />
      ))}

      {/* Arcs between chain nodes */}
      {arcs.map(([start, end], idx) => (
        <Arc key={`arc-${idx}`} start={start} end={end} />
      ))}
    </group>
  );
}

// Memoized inner component for performance
const GlobeScene = React.memo(function GlobeScene() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} intensity={0.3} color="#00e5ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.2} color="#a78bfa" />

      <GlobeMesh />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={(2 * Math.PI) / 3}
      />
    </>
  );
});

export const ThreeDGlobe = React.memo(function ThreeDGlobe({
  className,
}: ThreeDGlobeProps) {
  return (
    <div className={cn("h-[500px] w-full", className)}>
      <Canvas
        camera={{
          position: [0, 0, 5.5],
          fov: 45,
          near: 0.1,
          far: 100,
        }}
        dpr={[1, 2]}
        style={{ background: "transparent" }}
      >
        <GlobeScene />
      </Canvas>
    </div>
  );
});
