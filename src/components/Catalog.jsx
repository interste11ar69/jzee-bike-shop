import React, { useState } from "react";
import { motion } from "framer-motion";

// 🛠️ DYNAMIC CATEGORIES
const categories = [
  "All",
  "Frames",
  "Suspension",
  "Drivetrain",
  "Wheels",
  "Cockpit", // Added for Brakes/Stems
  "Gear",
];

const allItems = [
  // --- 1. FRAMES (Folder: /frames) ---
  {
    id: 1,
    category: "Frames",
    name: "S-Works Epic World Cup",
    price: "₱350,000",
    status: "Dream Build",
    image: "/frames/sworks_epicframe.jpg",
  },
  {
    id: 2,
    category: "Frames",
    name: "Elves Nandor 29er",
    price: "₱65,000",
    status: "Available",
    image: "/frames/elves_nandor.jpg",
  },
  {
    id: 3,
    category: "Frames",
    name: "Sagmit CrazyBoost V3",
    price: "₱8,500",
    status: "Best Seller",
    image: "/frames/sagmit_crazyboost.jpg",
  },
  {
    id: 4,
    category: "Frames",
    name: "Mountainpeak Explorer V2",
    price: "₱9,500",
    status: "Restocked",
    image: "/frames/mountainpeak_explorerv2.jpg",
  },
  {
    id: 5,
    category: "Frames",
    name: "Aeroic Frame",
    price: "₱4,000",
    status: "Available",
    image: "/frames/aeroic.jpg",
  },

  // --- 2. SUSPENSION (Folder: /forks) ---
  {
    id: 6,
    category: "Suspension",
    name: "Manitou Machete Comp",
    price: "₱14,500",
    status: "In Stock",
    image: "/forks/manitou_machete.jpg",
  },
  {
    id: 7,
    category: "Suspension",
    name: "Manitou Markhor",
    price: "₱11,500",
    status: "Available",
    image: "/forks/manitou_markhour.jpg",
  },
  {
    id: 8,
    category: "Suspension",
    name: "Suntour Epixon Air",
    price: "₱8,500",
    status: "Budget King",
    image: "/forks/suntour_epixon.jpg",
  },
  {
    id: 9,
    category: "Suspension",
    name: "Suntour XCR 2023",
    price: "₱4,500",
    status: "Available",
    image: "/forks/suntour_XCR2023.jpg",
  },
  {
    id: 10,
    category: "Suspension",
    name: "Tanke Air Fork",
    price: "₱3,500",
    status: "Budget",
    image: "/forks/tanke_airforks.jpg",
  },
  {
    id: 11,
    category: "Suspension",
    name: "Kocevlo Rigid Fork",
    price: "₱4,500",
    status: "Carbon",
    image: "/forks/kocevlo_rigidforks.jpg",
  },
  {
    id: 12,
    category: "Suspension",
    name: "Mountainpeak Rigid",
    price: "₱3,500",
    status: "Available",
    image: "/forks/mountainpeak_rigidfork.jpg",
  },
  {
    id: 13,
    category: "Suspension",
    name: "Sagmit Evo 2 Rigid",
    price: "₱2,800",
    status: "Available",
    image: "/forks/sagmit_evo2fork.jpg",
  },

  // --- 3. DRIVETRAIN (Folder: /drivetrain) ---
  {
    id: 14,
    category: "Drivetrain",
    name: "Shimano Ultegra R8000",
    price: "₱48,000",
    status: "Road",
    image: "/drivetrain/shimano_ultegra.jpg",
  },
  {
    id: 15,
    category: "Drivetrain",
    name: "Shimano Deore M5120",
    price: "₱2,450",
    status: "RD Only",
    image: "/drivetrain/Shimano_Deore_M5120.jpg",
  },
  {
    id: 16,
    category: "Drivetrain",
    name: "Shimano M4100 Combo",
    price: "₱2,450",
    status: "Chain + Cogs",
    image: "/drivetrain/shimanoM4100_chainCogs.jpg",
  },

  // --- 4. WHEELS (Folder: /wheelsets) ---
  {
    id: 17,
    category: "Wheels",
    name: "Zipp 303 Firecrest",
    price: "₱110,000",
    status: "Premium",
    image: "/wheelsets/zipp_wheelset.jpg",
  },
  {
    id: 18,
    category: "Wheels",
    name: "ENVE SES 4.5",
    price: "₱145,000",
    status: "Order Basis",
    image: "/wheelsets/enve_wheelset.jpg",
  },
  {
    id: 19,
    category: "Wheels",
    name: "DT Swiss ARC 1100",
    price: "₱95,000",
    status: "Available",
    image: "/wheelsets/dtswiss_wheelset.jpg",
  },
  {
    id: 20,
    category: "Wheels",
    name: "Speedone Torpedo",
    price: "₱4,500",
    status: "Tunog Mayaman",
    image: "/wheelsets/speedonehub.jpg",
  },
  {
    id: 21,
    category: "Wheels",
    name: "CST Fox Trail Tires",
    price: "₱850",
    status: "Pair",
    image: "/wheelsets/cstfoxtrailtires.jpg",
  },

  // --- 5. COCKPIT & BRAKES (Root Folder) ---
  {
    id: 22,
    category: "Cockpit",
    name: "Shimano MT200 Brakes",
    price: "₱1,800",
    status: "Best Seller",
    image: "/cockpit/MT201.jpg",
  },
  {
    id: 23,
    category: "Cockpit",
    name: "Roval Alpinist Stem",
    price: "₱3,500",
    status: "Lightweight",
    image: "/cockpit/rovalstems.jpg",
  },

  // --- 6. GEAR (Folder: /gear) ---
  {
    id: 24,
    category: "Gear",
    name: "Shimano S-Phyre RC9",
    price: "₱18,500",
    status: "Pro Level",
    image: "/gear/shimano_sphyre.jpg",
  },
  {
    id: 25,
    category: "Gear",
    name: "Shimano RC5",
    price: "₱6,500",
    status: "Available",
    image: "/gear/rc5.jpg",
  },
  {
    id: 26,
    category: "Gear",
    name: "Shimano RC1",
    price: "₱4,500",
    status: "Entry Level",
    image: "/gear/rc1.jpg",
  },
  {
    id: 27,
    category: "Gear",
    name: "HJC Furion 2.0",
    price: "₱9,800",
    status: "Aero",
    image: "/gear/hjc_helmets.jpg",
  },
  {
    id: 28,
    category: "Gear",
    name: "Sunrimoon Helmet",
    price: "₱2,500",
    status: "Budget",
    image: "/gear/sunrimoon_helmet.jpg",
  },
  {
    id: 29,
    category: "Gear",
    name: "6BySix Glasses",
    price: "₱1,200",
    status: "New",
    image: "/gear/6bysix_cyclingglasses.jpg",
  },
  {
    id: 30,
    category: "Gear",
    name: "6BySix Gloves",
    price: "₱850",
    status: "In Stock",
    image: "/gear/6bysix_gloves.jpg",
  },
];

const Catalog = ({ searchTerm }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = allItems.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = searchTerm
      ? item.name.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="INVENTORY"
      className="bg-black py-24 px-4 md:px-12 border-t border-zinc-900 min-h-screen"
    >
      {/* HEADER */}
      <div className="mb-12">
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">
          The <span className="text-jzee-green">Showroom</span>
        </h2>

        {searchTerm ? (
          <p className="text-zinc-400 text-sm uppercase tracking-widest">
            Searching for:{" "}
            <span className="text-white font-bold">"{searchTerm}"</span>
          </p>
        ) : (
          <div className="flex gap-4 overflow-x-auto p-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 text-sm font-bold uppercase tracking-widest border transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-[#22c55e] text-black border-[#22c55e] shadow-[0_0_15px_rgba(34,197,94,0.5)]"
                    : "bg-transparent text-zinc-500 border-zinc-800 hover:border-white hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-zinc-900 border border-zinc-800 hover:border-jzee-green transition-all flex flex-col h-full"
            >
              {/* IMAGE */}
              <div className="aspect-square overflow-hidden relative flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    item.status === "Sold Out" ? "grayscale opacity-50" : ""
                  }`}
                />
                <div
                  className={`absolute top-2 right-2 text-[10px] font-bold px-2 py-1 uppercase ${
                    item.status === "Available" || item.status === "In Stock"
                      ? "bg-jzee-green text-black"
                      : item.status === "Dream Build" ||
                        item.status === "Premium"
                      ? "bg-white text-black"
                      : "bg-zinc-800 text-white border border-zinc-600"
                  }`}
                >
                  {item.status}
                </div>
              </div>

              {/* INFO */}
              <div className="p-4 flex flex-col flex-1">
                <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-1">
                  {item.category}
                </p>
                <h3 className="text-sm md:text-lg font-bold text-white uppercase leading-tight mb-4">
                  {item.name}
                </h3>

                <div className="mt-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-2 pt-4 border-t border-zinc-800">
                  <span className="text-white font-mono text-sm">
                    {item.price}
                  </span>
                  <a
                    href="https://m.me/100063770933795"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] font-bold uppercase bg-white text-black px-3 py-1 hover:bg-jzee-green transition-colors w-full md:w-auto text-center"
                  >
                    Inquire
                  </a>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-zinc-500">
            <p className="uppercase tracking-widest">No items found.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Catalog;
