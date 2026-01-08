import React, { useState } from "react";
import { motion } from "framer-motion";

// 🛠️ DYNAMIC CATEGORIES (Based on your actual images)
const categories = [
  "All",
  "Frames", // S-Works, Elves, Sagmit, Aeroic
  "Suspension", // Manitou, Suntour, Rigid Forks
  "Drivetrain", // Shimano Groupsets/RDs
  "Wheels", // Zipp, Enve, DT Swiss, Hubs, Tires
  "Gear", // Helmets, Shoes, Gloves, Glasses
];

const allItems = [
  // --- 1. FRAMES ---
  {
    id: 1,
    category: "Frames",
    name: "S-Works Epic World Cup",
    price: "₱350,000",
    status: "Dream Build",
    image: "/sworks_epicframe.jpg",
  },
  {
    id: 2,
    category: "Frames",
    name: "Elves Nandor 29er",
    price: "₱65,000",
    status: "Available",
    image: "/elves_nandor.jpg",
  },
  {
    id: 3,
    category: "Frames",
    name: "Sagmit CrazyBoost V3",
    price: "₱8,500",
    status: "Best Seller",
    image: "/sagmit_crazyboost.jpg",
  },
  {
    id: 4,
    category: "Frames",
    name: "Mountainpeak Explorer V2",
    price: "₱9,500",
    status: "Restocked",
    image: "/mountainpeak_explorerv2.jpg",
  },
  {
    id: 5,
    category: "Frames",
    name: "Aeroic Carbon Frame",
    price: "₱28,000",
    status: "Available",
    image: "/aeroic.jpg",
  },

  // --- 2. SUSPENSION & FORKS ---
  {
    id: 6,
    category: "Suspension",
    name: "Manitou Machete Comp",
    price: "₱14,500",
    status: "In Stock",
    image: "/manitou_machete.jpg",
  },
  {
    id: 7,
    category: "Suspension",
    name: "Suntour Epixon Air",
    price: "₱8,500",
    status: "Budget King",
    image: "/suntour_epixon.jpg",
  },
  {
    id: 8,
    category: "Suspension",
    name: "Mountainpeak Rigid Fork",
    price: "₱3,500",
    status: "Available",
    image: "/mountainpeak_rigidfork.jpg",
  },
  {
    id: 9,
    category: "Suspension",
    name: "Kocevlo Rigid Forks",
    price: "₱4,000",
    status: "Available",
    image: "/kocevlo_rigidforks.jpg",
  },

  {
    id: 10,
    category: "Suspension",
    name: "Sagmit Evo 2 airfork",
    price: "₱2,800",
    status: "Available",
    image: "/sagmit_evo2fork.jpg",
  },
  {
    id: 11,
    category: "Suspension",
    name: "Tanke airfork",
    price: "₱2,800",
    status: "Available",
    image: "/tanke_airforks.jpg",
  },

  // --- 3. DRIVETRAIN ---
  {
    id: 12,
    category: "Drivetrain",
    name: "Shimano Ultegra R8000",
    price: "₱48,000",
    status: "Road",
    image: "/shimano_ultegra.jpg",
  },
  {
    id: 13,
    category: "Drivetrain",
    name: "Shimano Deore M5120",
    price: "₱2,450",
    status: "RD Only",
    image: "/Shimano_Deore_M5120.jpg",
  },

  // --- 4. WHEELS & TIRES ---
  {
    id: 14,
    category: "Wheels",
    name: "Zipp 303 Firecrest",
    price: "₱110,000",
    status: "Premium",
    image: "/zipp_wheelset.jpg",
  },
  {
    id: 15,
    category: "Wheels",
    name: "ENVE SES 4.5",
    price: "₱145,000",
    status: "Order Basis",
    image: "/enve_wheelset.jpg",
  },
  {
    id: 16,
    category: "Wheels",
    name: "DT Swiss ARC 1100",
    price: "₱95,000",
    status: "Available",
    image: "/dtswiss_wheelset.jpg",
  },
  {
    id: 17,
    category: "Wheels",
    name: "Speedone Torpedo Hubs",
    price: "₱4,500",
    status: "Tunog Mayaman",
    image: "/speedonehub.jpg",
  },
  {
    id: 18,
    category: "Wheels",
    name: "CST Fox Trail Tires",
    price: "₱850",
    status: "Pair",
    image: "/cstfoxtrailtires.jpg",
  },

  // --- 5. GEAR (Helmets, Shoes, etc) ---
  {
    id: 19,
    category: "Gear",
    name: "Shimano S-Phyre RC9",
    price: "₱18,500",
    status: "Pro Level",
    image: "/shimano_sphyre.jpg",
  },
  {
    id: 20,
    category: "Gear",
    name: "Shimano RC5 Shoes",
    price: "₱6,500",
    status: "Available",
    image: "/rc5.jpg",
  },
  {
    id: 21,
    category: "Gear",
    name: "HJC Furion Helmet",
    price: "₱9,800",
    status: "Aero",
    image: "/hjc_helmets.jpg",
  },
  {
    id: 22,
    category: "Gear",
    name: "Sunrimoon Helmet",
    price: "₱2,500",
    status: "Budget",
    image: "/sunrimoon_helmet.jpg",
  },
  {
    id: 23,
    category: "Gear",
    name: "6BySix Cycling Glasses",
    price: "₱1,200",
    status: "New",
    image: "/6bysix_cyclingglasses.jpg",
  },
  {
    id: 24,
    category: "Gear",
    name: "6BySix Gloves",
    price: "₱850",
    status: "In Stock",
    image: "/6bysix_gloves.jpg",
  },
];

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? allItems
      : allItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="INVENTORY"
      className="bg-black py-24 px-4 md:px-12 border-t border-zinc-900 min-h-screen"
    >
      {/* HEADER */}
      <div className="mb-12">
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">
          The <span className="text-jzee-green">Vault</span>
        </h2>

        {/* FILTER TABS */}
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
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="group relative bg-zinc-900 border border-zinc-800 hover:border-jzee-green transition-all"
          >
            {/* IMAGE */}
            <div className="aspect-square overflow-hidden relative">
              <img
                src={item.image}
                alt={item.name}
                className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  item.status === "Sold Out" ? "grayscale opacity-50" : ""
                }`}
              />

              {/* STATUS BADGE */}
              <div
                className={`absolute top-2 right-2 text-[10px] font-bold px-2 py-1 uppercase ${
                  item.status === "Available" || item.status === "In Stock"
                    ? "bg-jzee-green text-black"
                    : item.status === "Dream Build" || item.status === "Premium"
                    ? "bg-white text-black"
                    : "bg-zinc-800 text-white border border-zinc-600"
                }`}
              >
                {item.status}
              </div>
            </div>

            {/* INFO */}
            <div className="p-4">
              <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-1">
                {item.category}
              </p>
              <h3 className="text-sm md:text-lg font-bold text-white uppercase leading-tight mb-3">
                {item.name}
              </h3>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                <span className="text-white font-mono text-sm">
                  {item.price}
                </span>

                {/* INQUIRE BUTTON */}
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
        ))}
      </div>
    </section>
  );
};

export default Catalog;
