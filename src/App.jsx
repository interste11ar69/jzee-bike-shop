import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Inventory from "./components/Inventory";
import Location from "./components/Location";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar /> {/* 1. The Command Center */}
      <Hero /> {/* 2. The Hook */}
      <Inventory /> {/* 3. The Goods */}
      <Location /> {/* 4. The Map */}
      <Footer /> {/* 5. The Trust Foundation */}
    </div>
  );
}

export default App;
