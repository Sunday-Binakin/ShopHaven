import Arrivals from "./components/Arrivals";
import BrandSection from "./components/BrandSection";
import Hero from "./components/Hero";
import Selling from "./components/Selling";



export default function Home() {
  return (
    <div>
      {/* <h1>Shop Haven</h1> */}
      <Hero />
      <BrandSection />
      <Arrivals />
      <Selling />
    </div>
  );
}
