import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-zinc-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          {/* LEFT: THE HQ INFO */}
          <div className="max-w-md">
            {/* 
                NAME UPDATE: Stacked for impact. 
                "BIKE SHOP" in Green to make it pop.
            */}
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              JZEE
              <br />
              <span className="text-jzee-green">BIKE SHOP</span>
            </h2>

            <div className="space-y-6 text-sm uppercase tracking-widest text-zinc-400">
              <div>
                <p className="text-white font-bold mb-1">Visit The Garage</p>
                <p>B21 L8 Ph4B Gentian St.</p>
                <p>El Rio Vista Subd., Davao City</p>
              </div>

              {/* HOURS UPDATE: The "Grind" Schedule */}
              <div>
                <p className="text-white font-bold mb-1">Operating Hours</p>
                <p className="text-white">Daily: Morning - Midnight</p>
                <p className="text-jzee-green font-bold">Open on Holidays</p>
              </div>
            </div>
          </div>

          {/* RIGHT: THE FINAL CTA */}
          <div className="w-full md:w-auto flex flex-col items-start md:items-end">
            <h3 className="font-bold uppercase tracking-widest mb-6 text-sm text-white">
              Got Questions?
            </h3>

            {/* BIG MESSAGE BUTTON */}
            <a
              href="https://m.me/100063770933795"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 bg-white text-black px-8 py-4 font-black uppercase tracking-widest hover:bg-jzee-green transition-all mb-8"
            >
              <span>Chat on Messenger</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </a>

            {/* SOCIAL ICONS - Removed IG, kept FB */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100063770933795"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-900 text-zinc-600 text-[10px] uppercase tracking-widest">
          <p>© 2026 JZEE BIKE SHOP. DAVAO CITY.</p>
          <p className="mt-2 md:mt-0">Ride Safe Biker Friends!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
