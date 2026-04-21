import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Lineup from "@/components/Lineup";
import Gallery from "@/components/Gallery";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <Lineup />
      <Gallery />
      <InstagramFeed />
      <Footer />
    </main>
  );
}
