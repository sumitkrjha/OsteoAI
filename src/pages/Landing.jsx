import Hero from "../components/Hero";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Working from "../components/Working";
import Team from "../components/Team";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const Landing = () => {
  const [isLoginIn, setIsLoginIn] = useState(false);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token === null) {
      setIsLoginIn(false);
    } else {
      setIsLoginIn(true);
    }
  }, []);
  return (
    <div id="home" className="bg-white">
      <Header isLoginIn={isLoginIn} />
      <Hero />
      <AboutUs />
      <Working />
      <Team />
      <Footer />
    </div>
  );
};

export default Landing;
