export default function LandingSection({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section className="h-dvh w-full flex flex-row justify-between items-center py-8 bg-gray-100">
      <div className="container">{props.children}</div>
    </section>
  );
}
