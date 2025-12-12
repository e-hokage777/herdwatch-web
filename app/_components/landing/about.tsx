import { Card } from "@/components/ui/card";
import { Locate, Activity, Thermometer, HeartPulseIcon } from "lucide-react";

export default function About() {
  return (
    <section
      className="pt-20 pb-8 px-8 bg-cover bg-no-repeat bg-black/80"
      style={{
        backgroundImage: "url('/images/cattle-farm.jpg')",
        filter: "grayscale(100%)",
        backgroundPosition: "bottom"
      }}
    >
      <h4 className="text-center text-white">
        About <strong>Herdwatch</strong>
      </h4>
      <h2 className="text-center text-white text-4xl">
        Your Virtual Cattle Companion
      </h2>
      <h4 className="text-center text-white">
        Easily monitor the the status of all your cattle
      </h4>

      <div className="flex flex-row justify-center gap-8 mt-8">
        <Card className="p-4 flex flex-col gap-4 items-center flex-1">
          <Locate className="w-32 h-32" />
          <h2 className="text-2xl">GPS TRACKING</h2>
          <p className="text-sm">
            Tracks the real-time location of each animal to prevent stray
            cattle, improve grazing management, and enhance security.
          </p>
        </Card>
        <Card className="p-4 flex flex-col gap-4 items-center flex-1">
          <Thermometer className="w-32 h-32" />
          <h2 className="text-2xl">Temperature Monitoring</h2>
          <p className="text-sm">
            Detects abnormal body temperature early, helping farmers identify
            fevers, infections, or heat stress before they worsen.
          </p>
        </Card>
        <Card className="p-4 flex flex-col gap-4 items-center flex-1">
          <Activity className="w-32 h-32" />
          <h2 className="text-2xl">ACTIVITY MONITORING</h2>
          <p className="text-sm">
            Monitors daily movement patterns to spot unusual behavior such as
            reduced activity, injury, or early signs of illness.
          </p>
        </Card>
        <Card className="p-4 flex flex-col gap-4 items-center flex-1">
          <HeartPulseIcon className="w-32 h-32" />
          <h2 className="text-2xl">HEART RATE MONITORING</h2>
          <p className="text-sm">
            Measures the animal&apos;s heart rate to provide deeper insights
            into stress levels, health conditions, and overall wellbeing.
          </p>
        </Card>
      </div>
    </section>
  );
}
