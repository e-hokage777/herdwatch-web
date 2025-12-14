"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, SpotLight } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function HerdwatchCanvas({
  children,
}: {
  children: React.ReactNode;
}) {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (window.innerWidth < 1031) {
      setZoom(0.7);
    } else {
      setZoom(1);
    }

    const updateZoom = () => {
      if (window.innerWidth < 1031) {
        setZoom(0.5);
      } else {
        setZoom(1);
      }
    };

    window.addEventListener("resize", updateZoom);

    return () => {
      window.removeEventListener("resize", updateZoom);
    };
  }, []);

  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [0, 0, 13], zoom: zoom }}
    >
      <OrbitControls enableZoom={false} />
      <directionalLight intensity={5} color="#34e5eb" />
      <directionalLight intensity={10} position={[-15, 0, 0]} color="#34e5eb" />
      <directionalLight intensity={5} position={[15, 0, 0]} color="#7134eb" />
      <directionalLight intensity={5} position={[0, -15, 0]} color="#4acfed" />
      <ambientLight intensity={20} />
      {children}
    </Canvas>
  );
}
