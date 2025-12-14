import { cn } from "@/lib/utils";
import CowThreeQuarter from "../icons/cow-3-quat";

export default function HeroGridCard({
  image,
  title,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {image: React.ReactNode, title: string}) {
  return (
    <div className={cn(props.className, "flex flex-col justify-between items-center")}>
      <p className="text-2xl">{title}</p>
      {image}
    </div>
  );
}
