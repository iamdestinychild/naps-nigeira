import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Latest from "@/components/Latest";


export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Mission />
      <Latest />
    </main>
  );
}
