import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroGridCard from "./hero-grid-card";
import CowThreeQuarter from "../icons/cow-3-quat";
import CowEat from "../icons/cow-eat";
import CowSleep from "../icons/cow-sleep";
import CowReadyToRun from "../icons/cow-ready-to-run";

export default function Hero() {
  return (
    <section id="hero" className="h-dvh w-full  bg-gray-100">
      <div className="container mx-auto px-4 h-full w-full flex flex-row justify-between items-center">
        {/** title and text */}
        <div className="w-1/2 h-full flex flex-col justify-center items-start gap-4">
          <h1 className=" text-6xl mb-8">
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
        <div className="grid grid-rows-2 grid-cols-2 w-1/2 h-1/2">
          <HeroGridCard
            image={<CowThreeQuarter className="w-64 fill-white" />}
            className="bg-black text-white py-4"
          />
          <HeroGridCard
            image={<CowEat className="w-64" />}
            className="bg-gray-50 py-4"
          />
          <HeroGridCard
            image={<CowSleep className="w-64" />}
            className="bg-white py-4"
          />
          <HeroGridCard
            image={<CowReadyToRun className="w-64 fill-white" />}
            className="bg-black text-white py-4"
          />
        </div>
      </div>
    </section>
  );
}
