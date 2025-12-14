"use client";
import { Float } from "@react-three/drei";
import HerdWatchCanvas from "../3dmodels/herdwatch-canvas";
import { Aurok1Model } from "../3dmodels/aurok1";

export default function About() {
  return (
    <section id="about" className="bg-tertiary relative">
      <div
        className="h-[15vh] w-full pointer-none"
        style={{
          backgroundImage: "url(/svgs/Aurok-1_Pattern.svg)",
          backgroundSize: "cover",
          backgroundPosition: "left bottom",
        }}
      />
      <div className="container mx-auto px-4 py-2">
        <div className="w-full h-[65vh] flex flex-col-reverse  md:flex-row md:gap-4">
          <div className="flex-1">
            <HerdWatchCanvas>
              <Float
                speed={1} // Animation speed, defaults to 1
                rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
                floatIntensity={0.8} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                floatingRange={[-0.9, 0.9]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
              >
                <Aurok1Model
                  rotation={[Math.PI / 2.0, -Math.PI / 3, Math.PI / 4]}
                />
              </Float>
            </HerdWatchCanvas>
          </div>
          <div className="flex-1 flex flex-col justify-center items-start gap-8">
            <div>
              {/* <h4 className="text-start">Aurok-1 ?</h4> */}
              <h2 className="text-start text-5xl">Introducing Aurok-1</h2>
            </div>
            <p>
              Aurok-1 is an innovative livestock monitoring technology designed
              to help farmers protect and manage their herds through{" "}
              <strong>real-time data collection</strong> and{" "}
              <strong>intelligent analysis</strong>. The system integrates
              low-power sensors, GPS tracking, and wireless communication into a
              compact wearable device that attaches comfortably to cattle.
              Aurok-1 addresses two major challenges faced by farmers across
              Africa: the rising threat of cattle loss due to theft, disease,
              and environmental stress, and the increasing need for data-driven
              livestock management to improve productivity and support climate
              resilience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
