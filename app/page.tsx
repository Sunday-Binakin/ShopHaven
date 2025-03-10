import Arrivals from "./components/Arrivals";
import BrandSection from "./components/BrandSection";
import Hero from "./components/Hero";



export default function Home() {
  return (
    <div>
      {/* <h1>Shop Haven</h1> */}
      <Hero />
      <BrandSection />
      <Arrivals />
    </div>
  );
}
