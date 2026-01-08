import React from "react";
import { motion } from "framer-motion";

// 🛠️ YOUR REAL DATA
const items = [
  {
    id: 1,
    name: "S-Works Tarmac SL8",
    category: "Frameset",
    price: "₱280,000",
    image: "/frame.jpg",
  },
  {
    id: 2,
    name: "Zipp 404 Firecrest",
    category: "Wheelset",
    price: "₱110,000",
    image: "/wheels.jpg",
  },
  {
    id: 3,
    name: "Shimano RC9 S-Phyre",
    category: "Apparel",
    price: "₱18,500",
    image: "/shoes.jpg",
  },
  {
    id: 4,
    name: "Shimano Ultegra R8100",
    category: "Groupset",
    price: "₱65,000",
    image: "/group.jpg",
  },
];

const Inventory = () => {
  return (
    <section className="bg-black text-white py-24 px-4 md:px-8">
      {/* HEADER - Big and Bold */}
      <div className="mb-20 border-b-2 border-white pb-8">
        <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter">
          New Arrivals
        </h2>
      </div>

      {/* THE GRID - Minimalist "Adidas" Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-12">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            {/* IMAGE - The only source of color */}
            <div className="relative overflow-hidden bg-zinc-900 aspect-[4/3] mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              {/* HOVER OVERLAY - Subtle */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>

            {/* TEXT INFO - Stark Black & White */}
            <div className="flex justify-between items-start border-t border-zinc-800 pt-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold uppercase leading-none mb-1 group-hover:underline decoration-2 underline-offset-4">
                  {item.name}
                </h3>
                <p className="text-zinc-500 text-sm uppercase tracking-widest">
                  {item.category}
                </p>
              </div>
              <span className="text-xl font-mono font-bold">{item.price}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* VIEW ALL BUTTON */}
      <div className="mt-20 flex justify-center">
        <button className="border-2 border-white text-white px-12 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
          View Full Catalog
        </button>
      </div>
    </section>
  );
};

export default Inventory;
