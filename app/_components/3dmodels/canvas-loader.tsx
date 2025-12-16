import { Html, useProgress } from "@react-three/drei";

export default function CanvasLoader() {
  const { progress } = useProgress();

  return (
    <Html  as="div">
      <div className="size-full flex items-center justify-center">
          Loading {Math.round(progress)}%
        <div className="text-2xl text-black">
        </div>
      </div>
    </Html>
  );
}
