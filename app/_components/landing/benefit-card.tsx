"use client";

import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function BenefitCard({
  imgSrc,
  title,
  description,
  reverse = false,
  gray=true,
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


    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
        },
      })
      .from(imageRef.current, {
        x: reverse ? 100 : -100,
        opacity: 0,
      })
      .from(textRef.current, {
        x: reverse ? -100 : 100,
        opacity: 0,
      });
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "w-full py-8",
        reverse && " bg-primary text-white",
        props.className
      )}
    >
      <div
        ref={imageRef}
        className={cn(
          "container mx-auto px-4 flex flex-col items-center gap-4 md:flex-row",
          reverse && "md:flex-row-reverse"
        )}
      >
        <div className="flex-1 h-96">
          <img
            src={imgSrc}
            alt=""
            className="object-cover w-full h-full"
            style={{ filter: `grayscale(${gray ? 100 : 0}%)` }}
          />
        </div>
        <div ref={textRef} className="flex-1 flex flex-col gap-4">
          <h2 className="text-2xl">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
