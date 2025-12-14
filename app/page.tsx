import Image from "next/image";
import Hero from "./_components/landing/hero";
import NavBar from "./_components/nav/nav";
import Features from "./_components/landing/features";
import Benefits from "./_components/landing/benefits";
import Footer from "./_components/nav/footer";
import Contact from "./_components/landing/contact";
import About from "./_components/landing/about";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Benefits />
      <Contact />
      <div className="border border-t-2 py-8">
        <Footer />
      </div>
    </main>
  );
}
