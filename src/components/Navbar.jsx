import React from "react";

const Navbar = () => {
  return (
    // 1. FLUSH BACKGROUND: "bg-gradient-to-b" fades from black to transparent. No hard lines.
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/90 to-transparent text-white pb-10">
      {/* TOP BAR (Global) */}
      <div className="px-6 py-2 flex justify-between items-center text-[10px] uppercase tracking-widest text-zinc-400 border-b border-white/5">
        <div className="flex gap-4">
          <span>Philippines</span>
          <span>Global</span>
        </div>
        <div className="flex gap-4">
          <span>Dealer Locator</span>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="px-6 md:px-10 py-4 flex justify-between items-center">
        {/* LEFT: LOGO TEXT (Matches Hero Exactly) */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Jzee"
            className="h-12 w-12 rounded-full border-2 border-white/10"
          />
          <span className="text-2xl font-black italic uppercase tracking-tighter leading-none">
            JZEE<span className="text-jzee-green">.BIKE</span>
          </span>
        </div>

        {/* CENTER: LINKS (Now matching the Hero Style) 
            Changed from 'tracking-widest' to 'italic font-black tracking-tight'
        */}
        <div className="hidden md:flex gap-8 text-lg font-black italic uppercase tracking-tight">
          {["MTB", "Road", "Gravel", "E-Bike", "Apparel"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative group hover:text-jzee-green transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* RIGHT: ICONS */}
        <div className="flex items-center gap-6">
          <button className="hover:text-jzee-green transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
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
          <button className="hover:text-jzee-green transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
