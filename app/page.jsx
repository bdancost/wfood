import StyleGuide from "@/components/StyleGuide";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Reservation from "@/components/Reservation";
import About from "@/components/About";
import Map from "@/components/Map";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1440px] overflow-hidden bg-white">
      <Header />
      <Hero />
      <Menu />
      <Reservation />
      <About />
      <Map />
      {/* <StyleGuide /> */}
      <div className="h-[4000px]"></div>
    </main>
  );
}
