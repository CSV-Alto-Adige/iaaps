import FiveXMille from "@/components/5xmille/5xmille";
import Blog from "@/components/blog/blog";
import HighImpactHero from "@/components/hero/high-impact-hero";
import { Mission } from "@/components/mission/mission";
import QuickLinks from "@/components/quick-links/quick-links";

export default function Home() {
  return (
    <main className="bg-[#EFEEE9]/50">
      <HighImpactHero />
      <QuickLinks />
      <Blog />
      <Mission />
      <FiveXMille />
    </main>
  );
}
