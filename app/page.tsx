import Arrivals from "./components/Arrivals";
import BrandSection from "./components/BrandSection";
import Browse from "./components/Browse";
import HappyCustomers from "./components/HappyCustomers";
import Hero from "./components/Hero";
import Selling from "./components/Selling";
import Subscribe from "./components/Subscribe";



export default function Home() {
  return (
    <div>
      {/* <h1>Shop Haven</h1> */}
      <Hero />
      <BrandSection />
      <Arrivals />
      <Selling />
      <Browse/>
      <HappyCustomers/>
      <Subscribe/>
    </div>
  );
}
