import StyleGuide from "@/components/StyleGuide";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1440px] overflow-hidden bg-white">
      <Header />
      <Hero />
      {/* <StyleGuide /> */}
      <div className="h-[4000px]"></div>
    </main>
  );
}
