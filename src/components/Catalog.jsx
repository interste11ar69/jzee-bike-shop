import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { productService } from "../services/productService";
import { CATEGORIES } from "../model/AppConstants";

const Catalog = ({ searchTerm }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [items, setItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(0);
  const ITEMS_PER_PAGE = 8;

  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);

  // 🔄 RESET
  useEffect(() => {
    setPage(0);
    setItems([]);
    fetchData(0, activeCategory, searchTerm, true);
  }, [activeCategory, searchTerm]);

  // 📡 FETCH
  const fetchData = async (pageIndex, category, search, isReset = false) => {
    if (isReset) setIsLoading(true);
    else setIsLoadingMore(true);

    try {
      const { data, count } = await productService.getProducts({
        page: pageIndex,
        limit: ITEMS_PER_PAGE,
        category: category,
        searchTerm: search,
      });

      setTotalCount(count || 0);

      if (isReset) {
        setItems(data);
      } else {
        // 👇 SAFETY: Filter out any duplicates before adding
        setItems((prev) => {
          const newItems = data.filter((d) => !prev.some((p) => p.id === d.id));
          return [...prev, ...newItems];
        });
      }
    } catch (error) {
      console.error("Catalog Error:", error);
    } finally {
      setIsLoading(false);
      setIsLoadingMore(false);
    }
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchData(nextPage, activeCategory, searchTerm, false);
  };

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
      {isLoading && page === 0 ? (
        // 👇 FIXED: Grid stays at 4 columns max (lg:grid-cols-4)
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="h-64 bg-zinc-900/50 animate-pulse rounded-sm border border-zinc-800"
            ></div>
          ))}
        </div>
      ) : (
        <>
          {/* 👇 FIXED: Stays 4 columns until the screen is MASSIVE (2000px+) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 min-[1800px]:grid-cols-6 min-[2300px]:grid-cols-7 gap-4 md:gap-8">
            {" "}
            {items.length > 0 ? (
              items.map((item) => (
                <motion.div
                  key={item.id}
                  // ❌ REMOVED layoutId to prevent "Black Blank" glitches
                  onClick={() => setSelectedItem(item)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="group relative bg-zinc-900 border border-zinc-800 hover:border-jzee-green cursor-pointer flex flex-col h-full"
                >
                  {/* IMAGE */}
                  <div className="aspect-square overflow-hidden relative flex-shrink-0">
                    <motion.img
                      // ❌ REMOVED layoutId here too
                      src={item.image_url}
                      alt={item.name}
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

          {/* LOAD MORE BUTTON */}
          {items.length < totalCount && (
            <div className="mt-16 flex justify-center">
              <button
                onClick={handleLoadMore}
                disabled={isLoadingMore}
                className="group flex flex-col items-center gap-2 disabled:opacity-50"
              >
                <div
                  className={`w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-500 group-hover:border-jzee-green group-hover:text-jzee-green transition-all duration-300 ${isLoadingMore ? "animate-spin border-t-jzee-green" : ""}`}
                >
                  {isLoadingMore ? (
                    <div className="w-2 h-2 bg-jzee-green rounded-full"></div>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6 animate-bounce"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  )}
                </div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500 group-hover:text-white transition-colors">
                  {isLoadingMore
                    ? "Loading..."
                    : `Load More (${totalCount - items.length} Left)`}
                </span>
              </button>
            </div>
          )}
        </>
      )}

      {/* --- MODAL (POPUP) --- */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-4 md:py-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: "circOut" }}
              className="relative w-full max-w-5xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl z-50 rounded-sm flex flex-col md:flex-row max-h-[90vh] md:h-auto"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-50 bg-black/50 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:text-black transition-colors"
              >
                ✕
              </button>

              <div className="w-full md:w-3/5 bg-black relative flex items-center justify-center h-64 md:h-auto border-b md:border-b-0 md:border-r border-zinc-800">
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  src={selectedItem.image_url}
                  className="w-full h-full object-contain p-4 md:p-8"
                  style={{
                    objectPosition:
                      selectedItem.image_position || "center center",
                  }}
                />
                <div className="absolute top-4 left-4 bg-jzee-green text-black px-3 py-1 text-xs font-black uppercase tracking-widest">
                  {selectedItem.status}
                </div>
              </div>

              <div className="w-full md:w-2/5 p-6 md:p-10 flex flex-col justify-center bg-zinc-900 overflow-y-auto">
                <div className="mb-auto">
                  <p className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] mb-2">
                    {selectedItem.category}
                  </p>
                  <h2 className="text-2xl md:text-4xl font-black text-white uppercase italic leading-[0.9] mb-4">
                    {selectedItem.name}
                  </h2>
                  <div className="inline-block border border-jzee-green/30 bg-jzee-green/5 px-4 py-2 mb-6">
                    <p className="text-xl md:text-2xl font-mono text-jzee-green font-bold">
                      {selectedItem.display_price}
                    </p>
                  </div>
                  <div className="prose prose-invert">
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {selectedItem.description ||
                        "Inquire for full specs, compatibility, and latest pricing adjustments."}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-800">
                  {/* SMART INQUIRE BUTTON */}
                  <a
                    href={`https://m.me/100063770933795?text=${
                      selectedItem.status === "Sold Out"
                        ? `Good day Jzee Bikes, ask unta ko if kanus-a mo mag restock ani: ${selectedItem.name}?`
                        : `Good day Jzee Bikes, ask unta ko if available pa ang ${selectedItem.name} (${selectedItem.display_price})?`
                    }`}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center justify-center gap-3 w-full py-4 font-black uppercase tracking-widest transition-all hover:scale-[1.02] ${
                      selectedItem.status === "Sold Out"
                        ? "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white" // Grey for Sold Out
                        : "bg-white text-black hover:bg-jzee-green" // White/Green for Available
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                    {selectedItem.status === "Sold Out"
                      ? "Inquire Restock"
                      : "Inquire Now"}
                  </a>
                  <p className="text-center text-zinc-600 text-[9px] uppercase tracking-widest mt-3">
                    Direct Message to Owner
                  </p>
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
