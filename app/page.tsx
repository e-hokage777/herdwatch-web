import Image from "next/image";
import Hero from "./_components/landing/hero";
import NavBar from "./_components/nav/nav";
import About from "./_components/landing/about";
import Benefits from "./_components/landing/benefits";
import Footer from "./_components/nav/footer";
import Contact from "./_components/landing/contact";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <Benefits/>
      <Contact/>
      <Footer/>
    </main>
  );
}
