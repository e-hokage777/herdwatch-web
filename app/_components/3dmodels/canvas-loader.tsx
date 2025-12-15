import { Html, useProgress } from "@react-three/drei";

export default function CanvasLoader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center bg-black/50 px-4 py-3 rounded-md">
        <div className="h-8 w-8 mb-2 animate-spin border-4 border-t-transparent border-white rounded-full" />
        <div className="text-sm text-white">Loading {Math.round(progress)}%</div>
      </div>
    </Html>
  );
}
