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
    <div className="bg-jzee-green py-3 border-y border-black relative z-20 overflow-hidden flex">
      {/* 👇 FIXED: Added 'shrink-0' 
         This forces the list to stay full width and prevents the overlapping/squishing.
      */}
      <div className="flex animate-marquee whitespace-nowrap min-w-full shrink-0 items-center">
        {brands.map((brand, index) => (
          <span
            key={index}
            className="text-black font-black italic text-xl mx-8 uppercase tracking-widest"
          >
            {brand}
          </span>
        ))}
      </div>

      {/* 👇 FIXED: Added 'shrink-0' here too */}
      <div className="flex animate-marquee whitespace-nowrap min-w-full shrink-0 items-center">
        {brands.map((brand, index) => (
          <span
            key={`dup-${index}`}
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
