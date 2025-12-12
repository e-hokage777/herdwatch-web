import { Card } from "@/components/ui/card";
import BenefitCard from "./benefit-card";

export default function Benefits() {
  return (
    <section className="pt-20 pb-8 bg-gray-200">
      <div className="px-8">
        <h4 className="text-start">
          Why <strong>use</strong> Herdwatch ?
        </h4>
        <h2 className="text-start text-4xl">
          Herdwatch helps solve a myraid of challenges
        </h2>
      </div>

      <div className="flex flex-col justify-center gap-8 mt-8">
        <BenefitCard
          imgSrc="/images/cattle-farm.jpg"
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
          imgSrc="/images/cattle-farm.jpg"
          title="Prevent Stray Cattle Damage"
          description="Location tracking prevents animals from wandering into farms or forests, reducing vegetation loss."
        />
      </div>
    </section>
  );
}
