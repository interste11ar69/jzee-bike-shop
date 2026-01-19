import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { productService } from "../services/productService";
import { CATEGORIES } from "../model/AppConstants";

const Catalog = ({ searchTerm }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [items, setItems] = useState([]); // Stores Real DB Data
  const [isLoading, setIsLoading] = useState(true);

  // 🆕 Modal State
  const [selectedItem, setSelectedItem] = useState(null);

  // 📡 FETCHING DATA
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let data;
        if (searchTerm) {
          data = await productService.search(searchTerm);
        } else {
          data = await productService.getByCategory(activeCategory);
        }
        setItems(data || []);
      } catch (error) {
        console.error("Failed to fetch inventory:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [activeCategory, searchTerm]);

  return (
    <section
      id="INVENTORY"
      className="bg-black py-24 px-4 md:px-12 border-t border-zinc-900 min-h-screen relative"
    >
      {/* --- HEADER --- */}
      <div className="mb-12">
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">
          The <span className="text-jzee-green">Showroom</span>
        </h2>

        {searchTerm ? (
          <p className="text-zinc-400 text-sm uppercase tracking-widest">
            Results for:{" "}
            <span className="text-white font-bold">"{searchTerm}"</span>
          </p>
        ) : (
          <div className="flex gap-4 overflow-x-auto p-4 scrollbar-hide">
            {CATEGORIES.map((cat) => (
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

      {/* --- GRID --- */}
      {isLoading ? (
        // SKELETON LOADING STATE (Professional Touch)
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-64 bg-zinc-900/50 animate-pulse rounded-sm border border-zinc-800"
            ></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {items.length > 0 ? (
            items.map((item) => (
              <motion.div
                key={item.id}
                layoutId={`card-${item.id}`}
                onClick={() => setSelectedItem(item)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="group relative bg-zinc-900 border border-zinc-800 hover:border-jzee-green cursor-pointer flex flex-col h-full"
              >
                {/* IMAGE */}
                <div className="aspect-square overflow-hidden relative flex-shrink-0">
                  <motion.img
                    layoutId={`image-${item.id}`}
                    src={item.image_url}
                    alt={item.name}
                    // 👇 THIS IS THE MAGIC LINE
                    style={{
                      objectPosition: item.image_position || "center center",
                    }}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      item.status === "Sold Out" ? "grayscale opacity-50" : ""
                    }`}
                  />
                  <div
                    className={`absolute top-2 right-2 text-[10px] font-bold px-2 py-1 uppercase bg-jzee-green text-black`}
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
                  <div className="mt-auto pt-4 border-t border-zinc-800">
                    <span className="text-white font-mono text-sm">
                      {item.display_price}
                    </span>
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
      )}

      {/* --- MODAL (POPUP) --- */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />

            <motion.div
              layoutId={`card-${selectedItem.id}`}
              className="relative w-full max-w-lg bg-zinc-900 border border-jzee-green overflow-hidden shadow-2xl z-50 rounded-sm"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 bg-black/50 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-jzee-green hover:text-black transition-colors"
              >
                ✕
              </button>

              <div className="flex flex-col max-h-[80vh] overflow-y-auto">
                <div className="h-64 w-full bg-black relative flex-shrink-0">
                  <motion.img
                    layoutId={`image-${selectedItem.id}`}
                    src={selectedItem.image_url}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-8">
                  <span className="text-jzee-green text-xs font-black uppercase tracking-widest">
                    {selectedItem.category}
                  </span>
                  <h2 className="text-3xl font-black text-white uppercase italic leading-none mb-2 mt-2">
                    {selectedItem.name}
                  </h2>
                  <p className="text-2xl font-mono text-zinc-300 mb-6">
                    {selectedItem.display_price}
                  </p>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                    {selectedItem.description ||
                      "Inquire for full specs and details."}
                  </p>

                  <a
                    href={`https://m.me/100063770933795?text=Hello Ma'am Zee, is the ${selectedItem.name} still available?`}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full bg-white text-black py-4 font-black uppercase text-center hover:bg-jzee-green transition-colors tracking-widest"
                  >
                    Inquire via Messenger
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Catalog;
