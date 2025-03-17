import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import StoreLocations from "@/components/StoreLocations";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <StoreLocations />
      <Featured />
      <Testimonials />
    </main>
  );
}
