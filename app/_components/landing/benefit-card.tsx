import { cn } from "@/lib/utils";

export default function BenefitCard({
  imgSrc,
  title,
  description,
  reverse = false,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  imgSrc: string;
  title: string;
  description: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={cn(
        "w-full px-8 py-8 flex items-center gap-4",
        reverse && "flex-row-reverse bg-black text-white",
        props.className
      )}
    >
      <div className="flex-1 h-96">
        <img
          src={imgSrc}
          alt=""
          className="object-cover w-full h-full"
          style={{ filter: "grayscale(100%)" }}
        />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-2xl">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
