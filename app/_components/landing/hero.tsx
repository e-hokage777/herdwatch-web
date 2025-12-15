import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen w-full  md:pt-0 md:h-dvh text-white relative"
      style={{
        backgroundImage: "url('/images/hero-image.webp')",
        backgroundSize: "cover",
        backgroundPosition: "left bottom",
      }}
    >
      <div
        className="w-full min-h-screen pt-26 pb-8 "
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 200), rgba(0, 0, 0, 0.1))",
        }}
      >
        <div className="container mx-auto px-4 h-full w-full flex flex-col items-center gap-8 md:flex-row md:justify-between  md:gap-4">
          {/** title and text */}
          <div className="flex-1 h-full flex flex-col justify-center items-start gap-4">
            <h1 className=" lg:text-6xl md:text-5xl text-4xl mb-8 font-bold">
              Smart Livestock Monitoring for Healthier Herds
              and Lower Emissions
            </h1>
            <h2 className="text-xl ">
              Aurok-1 is a wearable, AI-powered livestock monitoring system
              that gives farmers real-time insights into the wellbeing and
              movement of their animals.
            </h2>
            <Link href="#about" className={cn(buttonVariants({ variant: "default" }), "cursor-pointer rounded-none")}>Learn More</Link>
          </div>

          {/** grid of images */}
          <div className="flex-1 w-full grid  grid-rows-2 grid-cols-2">
          </div>
        </div>
      </div>
    </section>
  );
}
