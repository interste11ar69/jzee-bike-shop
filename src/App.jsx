import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import Services from "./components/Services"; // <--- IMPORT THIS
import Community from "./components/Community";
import Location from "./components/Location";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Catalog />
      <Services /> {/* <--- PLACE IT HERE */}
      <Community />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
