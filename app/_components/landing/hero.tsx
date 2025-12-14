import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroGridCard from "./hero-grid-card";
import CowThreeQuarter from "../icons/cow-3-quat";
import CowEat from "../icons/cow-eat";
import CowSleep from "../icons/cow-sleep";
import CowReadyToRun from "../icons/cow-ready-to-run";

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-26 pb-8 min-h-dvh w-full bg-gray-100 md:pt-0 md:h-dvh"
    >
      <div className="container mx-auto px-4 h-full w-full flex flex-col items-center gap-8 md:flex-row md:justify-between  md:gap-4">
        {/** title and text */}
        <div className="flex-1 h-full flex flex-col justify-center items-start gap-4">
          <h1 className=" lg:text-6xl md:text-5xl text-4xl mb-8">
            <strong>Smart Livestock Monitoring</strong> for Healthier Herds and
            Lower Emissions
          </h1>
          <h2 className="text-xl ">
            HerdWatch is a wearable, AI-powered livestock monitoring system that
            gives farmers real-time insights into the wellbeing and movement of
            their animals.
          </h2>
          <Button className="cursor-pointer">Learn More</Button>
        </div>

        {/** grid of images */}
        <div className="flex-1 w-full grid  grid-rows-2 grid-cols-2">
          <HeroGridCard
            image={
              <CowThreeQuarter className="fill-white size-24 md:size-32 lg:size-64" />
            }
            title="2 km/h"
            className="bg-black text-white py-4"
          />
          <HeroGridCard
            image={<CowEat className="size-24 md:size-32 lg:size-64" />}
            title="Eating"
            className="bg-gray-50 py-4"
          />
          <HeroGridCard
            image={<CowSleep className="size-24 md:size-32 lg:size-64"  />}
            className="bg-white py-4"
            title="2 bps/min"
          />
          <HeroGridCard
            image={
              <CowReadyToRun className="fill-white size-24 md:size-32 lg:size-64  " />
            }
            className="bg-black text-white py-4"
            title="3km away"
          />
        </div>
      </div>
    </section>
  );
}
