import Image from "next/image";
import Hero from "./_components/landing/hero";
import NavBar from "./_components/landing/nav";
import About from "./_components/landing/about";
import Benefits from "./_components/landing/benefits";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <Benefits/>
    </main>
  );
}
