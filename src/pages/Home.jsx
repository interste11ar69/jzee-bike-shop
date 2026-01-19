import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import Catalog from "../components/Catalog";
import Testimonials from "../components/Testimonials"; // Assuming you added this
import Services from "../components/Services";
import Community from "../components/Community";
import Location from "../components/Location";
import Footer from "../components/Footer";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-black min-h-screen">
      <Navbar onSearch={setSearchTerm} />
      <Hero />
      <Brands />
      <Catalog searchTerm={searchTerm} />
      <Testimonials />
      <Services />
      <Community />
      <Location />
      <Footer />
    </div>
  );
};

export default Home;
