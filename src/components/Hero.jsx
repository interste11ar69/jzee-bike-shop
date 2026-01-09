import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [isIdle, setIsIdle] = useState(false);

  // 🕵️‍♂️ INACTIVITY DETECTOR
  useEffect(() => {
    let timeoutId;

    const resetTimer = () => {
      setIsIdle(false);
      clearTimeout(timeoutId);
      // Set to idle after 3 seconds of no activity
      timeoutId = setTimeout(() => setIsIdle(true), 3000);
    };

    // Events to listen for
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("scroll", resetTimer);
    window.addEventListener("touchstart", resetTimer);
    window.addEventListener("click", resetTimer);

    // Initial trigger
    resetTimer();

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("scroll", resetTimer);
      window.removeEventListener("touchstart", resetTimer);
      window.removeEventListener("click", resetTimer);
    };
  }, []);

  return (
    <div className="w-full h-screen relative bg-black text-white overflow-hidden flex flex-col justify-end pt-32">
      {/* 📸 BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img
          src="/interior.jpg"
          alt="Jzee Bike Shop Interior"
          className="w-full h-full object-cover grayscale opacity-40"
        />
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 px-6 md:px-10 pb-20 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-[5rem] md:text-[9rem] font-black uppercase leading-[0.85] tracking-tighter mb-8">
            JZEE
            <br />
            BIKE SHOP.
          </h2>

          {/* 🛠️ GAP FIX: 
            Changed `gap-8` to `gap-5 md:gap-8` 
            This makes the space smaller on mobile but keeps it spacious on PC.
          */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-8 border-t border-white/30 pt-8">
            <button
              onClick={() =>
                document
                  .getElementById("INVENTORY")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white text-black px-10 py-4 font-bold uppercase tracking-widest hover:bg-jzee-green hover:text-black border border-white hover:border-jzee-green transition-all duration-300"
            >
              Browse Catalog
            </button>

            {/* NATIONWIDE SHIPPING FLEX */}
            <div className="flex flex-col">
              <p className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
                <span className="w-2 h-2 bg-jzee-green rounded-full animate-pulse"></span>
                Nationwide Shipping
              </p>
              <p className="text-xs uppercase tracking-widest text-zinc-400 mt-1">
                Luzon • Visayas • Mindanao
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 🖱️👆 THE DYNAMIC INDICATOR 
        Wrapped in AnimatePresence so it fades in/out based on `isIdle` state.
      */}
      <AnimatePresence>
        {isIdle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          >
            {/* --- DESKTOP VIEW: MOUSE SCROLL (Hidden on Mobile) --- */}
            <div className="hidden md:flex flex-col items-center gap-3">
              <div className="w-[20px] h-[32px] border-2 border-zinc-500 rounded-full flex justify-center p-1">
                <motion.div
                  animate={{
                    y: [0, 12, 0],
                    opacity: [1, 0.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-1 h-1.5 bg-jzee-green rounded-full"
                />
              </div>
              <span className="text-[8px] font-black uppercase tracking-[0.4em] text-zinc-500 animate-pulse">
                Scroll
              </span>
            </div>

            {/* --- MOBILE VIEW: SWIPE ANIMATION (Hidden on Desktop) --- */}
            <div className="flex md:hidden flex-col items-center gap-3">
              {/* The Track (Same style as desktop, just different animation inside) */}
              <div className="w-[20px] h-[32px] border-2 border-zinc-500 rounded-full flex justify-center items-end p-1">
                {/* The Moving Dot (Moves UPwards) */}
                <motion.div
                  animate={{
                    y: [0, -12, 0], // ⬆️ Moves UP instead of down
                    opacity: [1, 0, 1], // Fades out at the top
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-1 h-1.5 bg-jzee-green rounded-full"
                />
              </div>

              <span className="text-[8px] font-black uppercase tracking-[0.4em] text-zinc-500 animate-pulse">
                Swipe
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
