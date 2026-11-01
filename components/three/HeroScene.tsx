"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ArchitecturalMonolith() {
  const outerGroup = useRef<THREE.Group>(null);
  const innerCore = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (outerGroup.current) {
      outerGroup.current.rotation.y += delta * 0.14;
      outerGroup.current.rotation.x = THREE.MathUtils.lerp(
        outerGroup.current.rotation.x,
        state.pointer.y * 0.28,
        0.05
      );
      outerGroup.current.rotation.z = THREE.MathUtils.lerp(
        outerGroup.current.rotation.z,
        -state.pointer.x * 0.28,
        0.05
      );
    }
    if (innerCore.current) {
      innerCore.current.rotation.y -= delta * 0.25;
      innerCore.current.rotation.x += delta * 0.12;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.08;
    }
  });

  return (
    <group ref={outerGroup}>
      {/* Outer Geometric Wireframe Structure */}
      <mesh>
        <octahedronGeometry args={[2.15, 1]} />
        <meshStandardMaterial
          color="#F4F3EE"
          wireframe
          transparent
          opacity={0.22}
        />
      </mesh>

      {/* Secondary Slate Shadow Structural Cage */}
      <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <boxGeometry args={[2.35, 2.35, 2.35]} />
        <meshStandardMaterial
          color="#5F6872"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Solid Matte Architectural Core */}
      <mesh ref={innerCore}>
        <icosahedronGeometry args={[1.05, 0]} />
        <meshStandardMaterial
          color="#1E1F22"
          roughness={0.3}
          metalness={0.8}
          flatShading
        />
      </mesh>

      {/* Precision Orbital Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2.3, 0.2, 0]}>
        <torusGeometry args={[2.85, 0.012, 16, 100]} />
        <meshBasicMaterial color="#F4F3EE" transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  if (!mounted || reducedMotion) {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-25"
      >
        <div className="h-80 w-80 rounded-full border border-bnavat-border flex items-center justify-center">
          <div className="h-56 w-56 rotate-45 border border-bnavat-shadow/50 flex items-center justify-center">
            <div className="h-28 w-28 border border-bnavat-primary/40" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-85"
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6.2], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 6, 4]} intensity={1.8} color="#F4F3EE" />
        <directionalLight position={[-5, -4, -3]} intensity={0.9} color="#5F6872" />
        <ArchitecturalMonolith />
      </Canvas>
    </div>
  );
}
