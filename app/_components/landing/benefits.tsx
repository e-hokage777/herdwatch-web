import { Card } from "@/components/ui/card";
import BenefitCard from "./benefit-card";

export default function Benefits() {
  return (
    <section id="benefits" className="pt-20  bg-gray-200">
      <div className="px-4 container mx-auto">
        <h4 className="text-start">
          Why <strong>use</strong> Aurok-1 ?
        </h4>
        <h2 className="text-start text-4xl">
          Aurok-1 helps solve a myraid of challenges
        </h2>
      </div>

      <div className="flex flex-col justify-center gap-8 mt-8">
        <BenefitCard
          imgSrc="/images/cow-sick.png"
          title="Early Disease Detection"
          description="Identify health problems before they spread, preventing animal loss and reducing carbon waste from premature cattle deaths."
        />
        <BenefitCard
          reverse
          imgSrc="/images/cattle-farm.jpg"
          title="Optimized Grazing"
          description="GPS and activity data guide better land use, preventing overgrazing and lowering emissions linked to land degradation."
        />
        <BenefitCard
          imgSrc="/images/cattle-farm.jpg"
          title="Lower Fuel Use"
          description="Remote monitoring reduces the need for motorbike rounds or long-distance grazing supervision."
        />
        <BenefitCard
          reverse
          imgSrc="/images/crop-damage.jpg"
          title="Prevent Stray Cattle Damage"
          description="Location tracking prevents animals from wandering into farms or forests, reducing vegetation loss."
        />
      </div>
    </section>
  );
}
