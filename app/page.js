import Image from "next/image";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import News from "@/components/News";
import Events from "@/components/Events";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <News />
      <Events />
      <Footer />
    </main>
  );
}
