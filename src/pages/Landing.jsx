import Hero from "../components/Hero";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Working from "../components/Working";
import Team from "../components/Team";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div id="home" className="bg-white">
      <Header />
      <Hero />
      <AboutUs />
      <Working />
      <Team />
      <Footer />
    </div>
  );
};

export default Landing;
