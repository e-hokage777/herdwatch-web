import { Card } from "@/components/ui/card";
import { Locate, Activity, Thermometer, HeartPulseIcon } from "lucide-react";

export default function Features() {
  return (
    <section
      id="features"
      className="pt-20 pb-8 bg-cover bg-no-repeat bg-black/80"
      style={{
        backgroundImage: "url('/images/cattle-farm.jpg')",
        filter: "grayscale(100%)",
        backgroundPosition: "bottom",
      }}
    >
      <div className="container mx-auto px-4">
        <h4 className="text-center text-white"></h4>
        <h2 className="text-center text-white text-4xl font-semibold">
          Your Virtual Cattle Companion
        </h2>

        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-4">
          <Card className="p-4 flex flex-col gap-4 items-center flex-1">
            <Locate className="w-20 h-20 text-primary" />
            <h2 className="text-xl text-start w-full">GPS TRACKING</h2>
            <p className="text-sm">
              Tracks the real-time location of each animal to prevent stray
              cattle, improve grazing management, and enhance security.
            </p>
          </Card>
          <Card className="p-4 flex flex-col gap-4 items-center flex-1">
            <Thermometer className="w-20 h-20 text-primary" />
            <h2 className="text-xl text-start w-full">TEMPERATURE MONITORING</h2>
            <p className="text-sm">
              Detects abnormal body temperature early, helping farmers identify
              fevers, infections, or heat stress before they worsen.
            </p>
          </Card>
          <Card className="p-4 flex flex-col gap-4 items-center flex-1">
            <Activity className="w-20 h-20 text-primary" />
            <h2 className="text-xl text-start w-full">ACTIVITY MONITORING</h2>
            <p className="text-sm">
              Monitors daily movement patterns to spot unusual behavior such as
              reduced activity, injury, or early signs of illness.
            </p>
          </Card>
          <Card className="p-4 flex flex-col gap-4 items-center flex-1">
            <HeartPulseIcon className="w-20 h-20 text-primary" />
            <h2 className="text-xl text-start w-full">HEART RATE MONITORING</h2>
            <p className="text-sm">
              Measures the animal&apos;s heart rate to provide deeper insights
              into stress levels, health conditions, and overall wellbeing.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
