import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export default function Sponsors() {
  return (
    <section className="flex flex-col items-center py-16">
      <h2 className="text-4xl">Sponsored By</h2>
      <div className="mx-auto mt-8 flex flex-wrap gap-8 justify-center">
        <Image
          src="/svgs/british-council.svg"
          alt="sponsor"
          width={200}
          height={80}
          // className="size-24 md:w-32 md:h-32"
        />
        <Image
          src="/svgs/dipper.svg"
          alt="sponsor"
          width={200}
          height={80}
          // className="size-24 md:w-32 md:h-32"
        />
        <Image
          src="/svgs/knust.svg"
          alt="sponsor"
          width={200}
          height={80}
          // className="size-24 md:w-32 md:h-32"
        />
      </div>
    </section>
  );
}
