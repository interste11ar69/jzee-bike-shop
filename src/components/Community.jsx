import React from "react";
import { motion } from "framer-motion";

// 📸 THE GALLERY DATA
// Assumes images are in public/community/com_1.jpg, etc.
const galleryImages = [
  "/community/com_1.jpg",
  "/community/com_2.jpg",
  "/community/com_3.jpg",
  "/community/com_4.jpg",
  "/community/com_5.jpg",
  "/community/com_6.jpg",
  "/community/com_7.jpg",
  "/community/com_8.jpg",
  "/community/com_9.jpg",
  "/community/com_10.jpg", // Skipped 9 based on your screenshot list
  "/community/com_11.jpg",
  "/community/com_12.jpg",
];

const Community = () => {
  return (
    <section className="bg-zinc-950 py-24 px-4 md:px-12 border-t border-zinc-900">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
            The Jzee <span className="text-jzee-green">Tribe</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base uppercase tracking-widest leading-relaxed">
            From Sunday rides to dream builds. <br />
            Real riders. Real machines. Built in Davao.
          </p>
        </div>

        {/* FACEBOOK LINK */}
        <a
          href="https://www.facebook.com/profile.php?id=100063770933795"
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-2 text-white text-xs font-bold uppercase border-b border-jzee-green pb-1 hover:text-jzee-green transition-colors mt-8 md:mt-0"
        >
          <span>View Full Album</span>
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

      {/* 
         🖼️ THE MASONRY GRID 
         We use 'columns' to create a Pinterest-style layout.
         Images will flow naturally.
      */}
      <div className="columns-1 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {galleryImages.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            viewport={{ once: true }}
            className="break-inside-avoid relative group overflow-hidden rounded-sm"
          >
            {/* IMAGE */}
            <img
              src={src}
              alt={`Jzee Community ${index + 1}`}
              className="w-full h-auto object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
            />

            {/* SUBTLE OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-jzee-green text-[10px] font-bold uppercase tracking-widest">
                Jzee Rider
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MOBILE CTA */}
      <div className="mt-12 flex justify-center md:hidden">
        <a
          href="https://www.facebook.com/profile.php?id=100063770933795"
          target="_blank"
          rel="noreferrer"
          className="text-white text-xs font-bold uppercase border-b border-jzee-green pb-1"
        >
          View More on Facebook
        </a>
      </div>
    </section>
  );
};

export default Community;
