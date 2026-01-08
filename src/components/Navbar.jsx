import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // 🧠 SCROLL LISTENER
  // Detects if the user has scrolled down more than 50px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 border-b border-zinc-800 py-2" // Scrolled: Compact & Solid Black
          : "bg-gradient-to-b from-black/90 to-transparent py-4" // Top: Transparent & Tall
      }`}
    >
      {/* MAIN NAV CONTAINER */}
      <div className="px-6 md:px-12 flex justify-between items-center">
        {/* LEFT: LOGO & NAME */}
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

        {/* CENTER: FUNCTIONAL LINKS */}
        <div className="hidden md:flex gap-8 text-sm font-black uppercase tracking-widest text-white drop-shadow-md">
          {["INVENTORY", "MECHANIC", "LOCATION"].map((item) => (
            <button
              key={item}
              onClick={() => {
                const element = document.getElementById(item);
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="relative group overflow-hidden hover:text-jzee-green transition-colors"
            >
              <span className="relative z-10">{item}</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-jzee-green -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </button>
          ))}
        </div>

        {/* RIGHT: ACTION BUTTONS */}
        <div className="flex items-center gap-6 text-white">
          {/* Search Icon */}
          <button className="hover:text-jzee-green transition-colors drop-shadow-md">
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
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>

          {/* MESSAGE BUTTON */}
          <a
            href="https://m.me/100063770933795"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-white text-black px-5 py-2 text-xs font-black uppercase hover:bg-jzee-green transition-colors shadow-lg"
          >
            Message Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
