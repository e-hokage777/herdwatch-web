"use client";

import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function BenefitCard({
  imgSrc,
  title,
  description,
  reverse = false,
  gray = true,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  imgSrc: string;
  title: string;
  description: string;
  gray?: boolean;
  reverse?: boolean;
}) {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // setting initial state for animation
    gsap.set(imageRef.current, {
      xPercent: reverse ? 100 : -100,
      opacity: 0,
    })
    gsap.set(textRef.current, {
      xPercent: reverse ? -100 : 100,
      opacity: 0,
    })
    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",

        },
      })
      .to(imageRef.current, {
        xPercent: 0,
        opacity: 1,
        duration: 0.3,
      })
      .to(textRef.current, {
        xPercent: 0,
        opacity: 1,
        duration: 0.3,
      });
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "w-full py-8 overflow-x-hidden",
        reverse && " bg-primary text-white",
        props.className
      )}
    >
      <div
        className={cn(
          "container mx-auto px-4 flex flex-col items-center gap-4 md:flex-row",
          reverse && "md:flex-row-reverse"
        )}
      >
        <div className="flex-1 h-96">
          <div
            ref={imageRef}
            className={cn(
              "w-full h-full",
            )}
          >

            <Image src={imgSrc} alt={title} fill objectFit="cover"/>
          </div>
        </div>
        <div className="flex-1">
          <div
            ref={textRef}
            className={cn(
              "w-full h-full flex flex-col gap-4",
            )}
          >
            <h2 className="text-3xl font-semibold">{title}</h2>
            <p className="text-lg">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
