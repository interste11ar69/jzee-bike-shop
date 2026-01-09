import React, { useState, useEffect } from "react";

const Navbar = ({ onSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 border-b border-zinc-800 py-2"
          : "bg-gradient-to-b from-black/90 to-transparent py-4"
      }`}
    >
      <div className="px-4 md:px-12 flex justify-between items-center max-w-[100vw]">
        {/* LEFT: LOGO & NAME - Added 'flex-shrink-0' to prevent disappearing */}
        <div
          className="flex items-center gap-2 md:gap-3 cursor-pointer flex-shrink-0"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img
            src="/logo.png"
            alt="Jzee"
            className="h-8 w-8 md:h-12 md:w-12 rounded-full border-2 border-white/10"
          />

          {/* 
              🛠️ THE FIX: 
              - 'text-lg md:text-2xl': Smaller text on mobile.
              - Hidden part: If search is open on mobile, we hide the text to save space.
          */}
          <div
            className={`flex flex-col leading-none drop-shadow-md ${
              showSearch ? "hidden xs:flex" : "flex"
            }`}
          >
            <span className="font-black text-lg md:text-2xl tracking-tighter uppercase italic text-white">
              JZEE<span className="text-jzee-green"> BIKE</span>
            </span>
            <span className="text-[8px] md:text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">
              Shop
            </span>
          </div>
        </div>

        <div
          className={`hidden md:flex gap-4 lg:gap-8 text-[10px] lg:text-sm font-black uppercase tracking-widest text-white drop-shadow-md transition-opacity ${
            showSearch ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          {["INVENTORY", "MECHANIC", "LOCATION"].map((item) => (
            <button
              key={item}
              onClick={() =>
                document
                  .getElementById(item)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="relative group overflow-hidden hover:text-jzee-green transition-colors"
            >
              <span className="relative z-10">{item}</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-jzee-green -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </button>
          ))}
        </div>

        {/* RIGHT: ACTIONS */}
        <div className="flex items-center gap-2 md:gap-4 text-white flex-shrink-0">
          {/* SEARCH BOX */}
          <div
            className={`flex items-center transition-all duration-300 ${
              showSearch
                ? "w-40 xs:w-48 md:w-64 bg-white rounded-sm"
                : "w-8 bg-transparent"
            }`}
          >
            {showSearch && (
              <input
                type="text"
                placeholder="SEARCH..."
                className="w-full bg-transparent text-black text-[10px] md:text-xs font-bold px-2 md:px-3 focus:outline-none uppercase"
                autoFocus
                onChange={(e) => onSearch(e.target.value)}
              />
            )}

            <button
              onClick={() => {
                setShowSearch(!showSearch);
                if (showSearch) onSearch("");
              }}
              className={`p-2 ${
                showSearch ? "text-black" : "text-white hover:text-jzee-green"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                {showSearch ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* MESSAGE BUTTON (Mobile: Just the Icon, Desktop: Text) */}
          <a
            href="https://m.me/100063770933795"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black p-2 md:px-5 md:py-2 text-[10px] font-black uppercase hover:bg-jzee-green transition-colors shadow-lg flex items-center gap-2"
          >
            <span className="hidden md:block">Message Us</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 md:hidden"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
