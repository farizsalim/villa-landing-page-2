import Gallery from "./components/Gallery";
import SiteHeader from "./components/SiteHeader";
import { Booking, Footer, Hero, Journal, Location, Story } from "./components/VillaSections";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <SiteHeader />
      <main>
        <Hero />
        <Story />
        <Gallery />
        <Journal />
        <Location />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
