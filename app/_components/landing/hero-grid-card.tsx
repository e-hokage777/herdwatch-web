import { cn } from "@/lib/utils";
import CowThreeQuarter from "../icons/cow-3-quat";

export default function HeroGridCard({
  image,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {image: React.ReactNode}) {
  return (
    <div className={cn(props.className, "flex flex-col justify-between items-center")}>
      <p className="text-2xl">35 km/h</p>
      {image}
    </div>
  );
}
