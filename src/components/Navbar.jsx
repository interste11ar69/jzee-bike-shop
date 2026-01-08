import React from "react";

const Navbar = () => {
  return (
    // 🛠️ THE FIX: Gradient background instead of solid black.
    // "from-black/90 to-transparent" creates a subtle shadow so text is readable,
    // but the image flows underneath it.
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/90 to-transparent text-white">
      {/* MAIN NAV CONTAINER */}
      <div className="px-6 md:px-12 h-24 flex justify-between items-center">
        {/* LEFT: LOGO & NAME */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img
            src="/logo.png"
            alt="Jzee"
            className="h-12 w-12 rounded-full border-2 border-white/10"
          />
          <div className="flex flex-col leading-none drop-shadow-md">
            <span className="font-black text-2xl tracking-tighter uppercase italic">
              JZEE<span className="text-jzee-green"> BIKE</span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-300 uppercase">
              Shop
            </span>
          </div>
        </div>

        {/* CENTER: FUNCTIONAL LINKS */}
        <div className="hidden md:flex gap-10 text-sm font-black uppercase tracking-widest drop-shadow-md">
          {["INVENTORY", "MECHANIC", "LOCATION"].map((item) => (
            <button
              key={item}
              className="relative group overflow-hidden hover:text-jzee-green transition-colors"
            >
              <span className="relative z-10">{item}</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-jzee-green -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </button>
          ))}
        </div>

        {/* RIGHT: ACTION BUTTONS */}
        <div className="flex items-center gap-6">
          {/* Search Icon */}
          <button className="hover:text-jzee-green transition-colors drop-shadow-md">
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
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>

          {/* MESSAGE BUTTON - Solid White Block for Contrast */}
          <a
            href="https://m.me/100063770933795"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-white text-black px-6 py-3 text-xs font-black uppercase hover:bg-jzee-green transition-colors shadow-lg"
          >
            Message Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
