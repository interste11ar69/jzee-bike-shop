import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full h-screen relative bg-black text-white overflow-hidden flex flex-col justify-end pt-32">
      {/* 
         📸 BACKGROUND
         Keep the shop photo. It looks authentic.
      */}
      <div className="absolute inset-0 z-0">
        <img
          src="/interior.jpg"
          alt="Jzee Bike Shop Interior"
          className="w-full h-full object-cover grayscale opacity-40"
        />
        {/* The "Street" Overlay */}
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 px-6 md:px-10 pb-12 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* 
              THE HEADLINE: 
              Massive. Unmissable.
          */}
          <h2 className="text-[5rem] md:text-[9rem] font-black uppercase leading-[0.85] tracking-tighter mb-8">
            JZEE
            <br />
            BIKE SHOP.
          </h2>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 border-t border-white/30 pt-8">
            <button className="bg-white text-black px-10 py-4 font-bold uppercase tracking-widest hover:bg-jzee-green hover:text-black border border-white hover:border-jzee-green transition-all duration-300">
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
    </div>
  );
};

export default Hero;
