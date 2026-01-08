import React, { useState, useEffect } from "react";

// 🛠️ ACCEPT THE PROP 'onSearch'
const Navbar = ({ onSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false); // Toggle for search bar

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
      <div className="px-6 md:px-12 flex justify-between items-center">
        {/* LEFT: LOGO */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img
            src="/logo.png"
            alt="Jzee"
            className="h-10 w-10 rounded-full border-2 border-white/10"
          />
          <div className="flex flex-col leading-none drop-shadow-md">
            <span className="font-black text-xl tracking-tighter uppercase italic text-white">
              JZEE<span className="text-jzee-green"></span>
            </span>
          </div>
        </div>

        {/* CENTER: LINKS (Hidden if Search is Open on Mobile) */}
        <div
          className={`hidden md:flex gap-8 text-sm font-black uppercase tracking-widest text-white drop-shadow-md ${
            showSearch ? "opacity-0 pointer-events-none" : "opacity-100"
          } transition-opacity`}
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
        <div className="flex items-center gap-4 text-white">
          {/* 🔍 SEARCH BAR LOGIC */}
          <div
            className={`flex items-center transition-all duration-300 ${
              showSearch ? "w-48 md:w-64 bg-white" : "w-8 bg-transparent"
            }`}
          >
            {/* The Input Field */}
            {showSearch && (
              <input
                type="text"
                placeholder="SEARCH PARTS..."
                className="w-full bg-transparent text-black text-xs font-bold px-3 focus:outline-none uppercase"
                autoFocus
                onChange={(e) => {
                  onSearch(e.target.value); // Send text to App.jsx
                  // Auto-scroll to catalog if they type
                  if (e.target.value.length > 0) {
                    document
                      .getElementById("INVENTORY")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              />
            )}

            {/* The Icon Button */}
            <button
              onClick={() => {
                setShowSearch(!showSearch);
                if (showSearch) onSearch(""); // Clear search when closing
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
                  /> // X Icon
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  /> // Search Icon
                )}
              </svg>
            </button>
          </div>

          {/* MESSAGE BUTTON (Hidden when searching on small screens) */}
          {!showSearch && (
            <a
              href="https://m.me/100063770933795"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block bg-white text-black px-5 py-2 text-xs font-black uppercase hover:bg-jzee-green transition-colors shadow-lg"
            >
              Message Us
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
