import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/Brands"; // <--- 1. IMPORT IT
import Catalog from "./components/Catalog";
import Services from "./components/Services";
import Community from "./components/Community";
import Location from "./components/Location";
import Footer from "./components/Footer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-black min-h-screen">
      <Navbar onSearch={setSearchTerm} />
      <Hero />
      <Brands /> {/* <--- 2. PLACE IT HERE */}
      <Catalog searchTerm={searchTerm} />
      <Services />
      <Community />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
