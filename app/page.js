import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import News from "@/components/News";
import Events from "@/components/Events";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <News />
      <Events />
    </main>
  );
}
