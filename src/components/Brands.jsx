import React from "react";

const brands = [
  "SHIMANO",
  "SRAM",
  "FOX RACING",
  "SPECIALIZED",
  "SAGMIT",
  "MOUNTAINPEAK",
  "MAXXIS",
  "CONTINENTAL",
  "ZIPP",
  "ENVE",
  "KMC",
  "LOOK",
];

const Brands = () => {
  return (
    // Placed between Hero and Catalog.
    // z-20 ensures it sits above the hero image bottom edge if needed.
    <div className="bg-jzee-green py-3 overflow-hidden border-y border-black relative z-20">
      {/* The Animation Wrapper */}
      <div className="flex animate-marquee whitespace-nowrap">
        {/* We repeat the list 4 times to make the loop seamless */}
        {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
          <span
            key={index}
            className="text-black font-black italic text-xl mx-8 uppercase tracking-widest"
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Brands;
