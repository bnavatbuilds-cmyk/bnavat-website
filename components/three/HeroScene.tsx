"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function SpatialArchitecture() {
  const masterGroup = useRef<THREE.Group>(null);
  const outerCage = useRef<THREE.Mesh>(null);
  const innerCore = useRef<THREE.Mesh>(null);
  const ringOne = useRef<THREE.Mesh>(null);
  const ringTwo = useRef<THREE.Mesh>(null);
  const scrollProgress = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.current = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state, delta) => {
    const s = scrollProgress.current;

    if (masterGroup.current) {
      // Smoothly shift 3D sculpture position and rotation across the entire page scroll
      const targetX = Math.sin(s * Math.PI * 2) * 1.35;
      const targetY = Math.cos(s * Math.PI) * 0.35;
      const targetScale = 1 - Math.sin(s * Math.PI) * 0.15;

      masterGroup.current.position.x = THREE.MathUtils.lerp(
        masterGroup.current.position.x,
        targetX,
        0.04
      );
      masterGroup.current.position.y = THREE.MathUtils.lerp(
        masterGroup.current.position.y,
        targetY,
        0.04
      );
      masterGroup.current.scale.setScalar(
        THREE.MathUtils.lerp(masterGroup.current.scale.x, targetScale, 0.04)
      );

      masterGroup.current.rotation.y += delta * 0.12;
      masterGroup.current.rotation.x = THREE.MathUtils.lerp(
        masterGroup.current.rotation.x,
        s * Math.PI * 1.5 + state.pointer.y * 0.2,
        0.04
      );
      masterGroup.current.rotation.z = THREE.MathUtils.lerp(
        masterGroup.current.rotation.z,
        -state.pointer.x * 0.2,
        0.04
      );
    }

    if (outerCage.current) {
      outerCage.current.rotation.y -= delta * 0.08;
    }

    if (innerCore.current) {
      innerCore.current.rotation.x += delta * 0.18;
      innerCore.current.rotation.y += delta * 0.15;
    }

    if (ringOne.current) {
      ringOne.current.rotation.z += delta * 0.1;
    }

    if (ringTwo.current) {
      ringTwo.current.rotation.x -= delta * 0.07;
    }
  });

  return (
    <group ref={masterGroup}>
      {/* Outer Architectural Wireframe */}
      <mesh ref={outerCage}>
        <octahedronGeometry args={[2.25, 1]} />
        <meshStandardMaterial color="#F4F3EE" wireframe transparent opacity={0.16} />
      </mesh>

      {/* Secondary Geometric Cube Frame */}
      <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <boxGeometry args={[2.45, 2.45, 2.45]} />
        <meshStandardMaterial color="#5F6872" wireframe transparent opacity={0.28} />
      </mesh>

      {/* Solid Sculptural Core */}
      <mesh ref={innerCore}>
        <icosahedronGeometry args={[1.1, 0]} />
        <meshStandardMaterial
          color="#1E1F22"
          roughness={0.25}
          metalness={0.85}
          flatShading
        />
      </mesh>

      {/* Primary Orbital Ring */}
      <mesh ref={ringOne} rotation={[Math.PI / 2.2, 0.2, 0]}>
        <torusGeometry args={[3.0, 0.01, 16, 96]} />
        <meshBasicMaterial color="#F4F3EE" transparent opacity={0.28} />
      </mesh>

      {/* Secondary Tilted Ring */}
      <mesh ref={ringTwo} rotation={[0.4, Math.PI / 3, 0]}>
        <torusGeometry args={[3.4, 0.008, 12, 80]} />
        <meshBasicMaterial color="#5F6872" transparent opacity={0.22} />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mediaQuery.matches) {
      setMounted(true);
    }
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <Canvas
        dpr={[1, 1.25]}
        camera={{ position: [0, 0, 6.4], fov: 42 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
        }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 6, 4]} intensity={1.8} color="#F4F3EE" />
        <directionalLight position={[-5, -4, -3]} intensity={0.9} color="#5F6872" />
        <SpatialArchitecture />
      </Canvas>
    </div>
  );
}
