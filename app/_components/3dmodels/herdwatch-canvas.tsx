"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, SpotLight } from "@react-three/drei";
import { useEffect } from "react";

export default function HerdwatchCanvas({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <Canvas className="w-full h-full" camera={{ position: [0, 0, 20] }}>
      <OrbitControls enableZoom={false} />
      <directionalLight intensity={10} />
      <directionalLight intensity={8} position={[-15, 0, 0]} />
      <directionalLight intensity={8} position={[15, 0, 0]} />
      <directionalLight intensity={8} position={[0, -15, 0]} />
      <ambientLight intensity={20} />
      {children}
    </Canvas>
  );
}
