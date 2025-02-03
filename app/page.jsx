import StyleGuide from "@/components/StyleGuide";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden">
      <Hero />
      {/* <StyleGuide /> */}
      <div className="h-[4000px]"></div>
    </main>
  );
}
