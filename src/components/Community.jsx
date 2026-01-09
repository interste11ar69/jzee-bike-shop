import React, { useState } from "react";
import { motion } from "framer-motion";

// 📸 THE MIXED GALLERY DATA
const galleryItems = [
  { type: "image", src: "/community/com_1.jpg" },
  { type: "image", src: "/community/com_2.jpg" },

  // 🃏 FILLER 1: The "Manifesto" Card
  // CHANGED: Background will be handled in the render logic below
  {
    type: "quote",
    text: "RIDE DAILY.",
    sub: "DAVAO CITY",
  },

  { type: "image", src: "/community/com_3.jpg" },
  { type: "image", src: "/community/com_4.jpg" },
  { type: "image", src: "/community/com_5.jpg" },
  { type: "image", src: "/community/com_6.jpg" },

  // 🃏 FILLER 2: The "Submit Your Build" Card
  {
    type: "cta",
    title: "FEATURE YOUR BUILD",
    link: "https://m.me/100063770933795",
  },

  { type: "image", src: "/community/com_7.jpg" },
  { type: "image", src: "/community/com_8.jpg" },
  { type: "image", src: "/community/com_9.jpg" },
  { type: "image", src: "/community/com_10.jpg" },
  { type: "image", src: "/community/com_11.jpg" },
  { type: "image", src: "/community/com_12.jpg" },
];

const Community = () => {
  const [visibleCount, setVisibleCount] = useState(8);

  const showMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <section className="bg-zinc-950 py-24 px-4 md:px-12 border-t border-zinc-900">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
        <div className="max-w-2xl">
          {/* 
             🛠️ TEXT UPDATE: "Biker Friends" 
             This matches Ma'am Zee's language.
          */}
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
            Jzee <span className="text-jzee-green">Biker Friends</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base uppercase tracking-widest leading-relaxed">
            Our Community. Our Rides. <br />
            Built in Davao.
          </p>
        </div>

        <a
          href="https://www.facebook.com/profile.php?id=100063770933795"
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-2 text-white text-xs font-bold uppercase border-b border-jzee-green pb-1 hover:text-jzee-green transition-colors mt-8 md:mt-0"
        >
          <span>Visit Facebook Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </a>
      </div>

      {/* MASONRY GRID */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {galleryItems.slice(0, visibleCount).map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="break-inside-avoid relative group overflow-hidden rounded-sm"
          >
            {/* IMAGE */}
            {item.type === "image" && (
              <div className="relative bg-zinc-900">
                <img
                  src={item.src}
                  alt="Jzee Build"
                  className="w-full h-auto object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-jzee-green text-[10px] font-black uppercase tracking-widest border-l-2 border-jzee-green pl-2">
                    Biker Friend
                  </span>
                </div>
              </div>
            )}

            {/* 
               🃏 QUOTE CARD (Color Change Here)
               Changed 'bg-jzee-green' to 'bg-white'.
               If you want it dark gray, use 'bg-zinc-800' and 'text-white'.
            */}
            {item.type === "quote" && (
              <div className="w-full h-[200px] bg-white flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-black text-4xl font-black uppercase leading-none tracking-tighter">
                  {item.text}
                </h3>
                <p className="text-black text-xs font-bold uppercase tracking-widest mt-2 border-t border-black pt-2">
                  {item.sub}
                </p>
              </div>
            )}

            {/* CTA CARD */}
            {item.type === "cta" && (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="w-full h-[250px] border-2 border-dashed border-zinc-800 hover:border-jzee-green hover:bg-zinc-900 transition-all flex flex-col justify-center items-center text-center p-6 cursor-pointer group/card"
              >
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-4 group-hover/card:bg-jzee-green group-hover/card:text-black transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-black uppercase leading-none tracking-tighter group-hover/card:text-jzee-green transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mt-2">
                  Send us your photo
                </p>
              </a>
            )}
          </motion.div>
        ))}
      </div>

      {/* LOAD MORE BUTTON */}
      {visibleCount < galleryItems.length && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={showMore}
            className="group flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em]">
              Load More
            </span>
            <div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center group-hover:border-jzee-green group-hover:text-jzee-green transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </button>
        </div>
      )}
    </section>
  );
};

export default Community;
