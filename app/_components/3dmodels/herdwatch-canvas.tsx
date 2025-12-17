"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, SpotLight } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import CanvasLoader from "./canvas-loader";

export default function HerdwatchCanvas({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1031) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    const updateZoom = () => {
      if (window.innerWidth < 1031) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", updateZoom);

    return () => {
      window.removeEventListener("resize", updateZoom);
    };
  }, []);

  return (
    <Canvas
      className="w-full h-full "
      camera={{ position: [0, 0, 13], zoom: isMobile ? 0.5 : 1 }}
    >
      <OrbitControls enableZoom={false} enablePan={false} />
      <Suspense fallback={<CanvasLoader />}>
        <directionalLight intensity={5} color="#34e5eb" />
        <directionalLight
          intensity={10}
          position={[-15, 0, 0]}
          color="#34e5eb"
        />
        <directionalLight intensity={5} position={[15, 0, 0]} color="#7134eb" />
        <directionalLight
          intensity={5}
          position={[0, -15, 0]}
          color="#4acfed"
        />
        <ambientLight intensity={20} />
        {children}
      </Suspense>
      <Preload all />
    </Canvas>
  );
}
