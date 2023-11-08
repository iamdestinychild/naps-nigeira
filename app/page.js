import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Latest from "@/components/Latest";
import Quotes from "@/components/Quotes";


export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Mission />
      <Quotes />
      <Latest />
    </main>
  );
}
