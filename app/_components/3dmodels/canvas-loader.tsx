import { Html, useProgress } from "@react-three/drei";

export default function CanvasLoader() {
  const { progress } = useProgress();

  return (
    <Html center fullscreen as="div">
      <div className="size-full flex items-center justify-center">
        {/* <div className="h-8 w-8 mb-2 animate-spin border-4 border-t-transparent border-white rounded-full" /> */}
        <div className="text-2xl text-white">Loading {Math.round(progress)}%</div>
      </div>
    </Html>
  );
}
