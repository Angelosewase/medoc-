import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import OurServices from "../components/OurServices";
import WhyUs from "../components/WhyUs";
import Plans from "../components/Plans";
import GetAppSection from "../components/GetAppSection";

function Main() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutUs />
      <OurServices />
      <WhyUs />
      <Plans />
      <GetAppSection />
      <Footer />
    </div>
  );
}

export default Main;
