import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-20 pb-10 border-t border-zinc-900">
      <div className="container mx-auto px-6 md:px-12">
        {/* TOP SECTION: COLUMNS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* BRAND COLUMN */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-2xl font-black uppercase italic mb-6">
              JZEE<span className="text-jzee-green">.BIKE</span>
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              The South's premier destination for high-performance cycling
              components. Authorized dealer for Shimano, SRAM, and Fox.
            </p>
            <div className="flex gap-4">
              {/* Social Placeholders */}
              <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-jzee-green hover:text-black transition-colors cursor-pointer">
                FB
              </div>
              <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-jzee-green hover:text-black transition-colors cursor-pointer">
                IG
              </div>
            </div>
          </div>

          {/* SHOP COLUMN */}
          <div>
            <h3 className="font-bold uppercase tracking-widest mb-6 text-sm">
              Products
            </h3>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">
                Framesets
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Groupsets
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Wheelsets
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Apparel
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Sale Items
              </li>
            </ul>
          </div>

          {/* SUPPORT COLUMN (The "Trust" Builder) */}
          <div>
            <h3 className="font-bold uppercase tracking-widest mb-6 text-sm">
              Support
            </h3>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">
                Shipping Policy
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Warranty Claims
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Crash Replacement
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Bike Fitting
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Contact Us
              </li>
            </ul>
          </div>

          {/* NEWSLETTER (Shimano Style) */}
          <div>
            <h3 className="font-bold uppercase tracking-widest mb-6 text-sm">
              Stay Connected
            </h3>
            <p className="text-zinc-500 text-xs mb-4">
              Get the latest drops and local race news.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="bg-zinc-900 border border-zinc-800 text-white px-4 py-2 text-xs w-full focus:outline-none focus:border-jzee-green"
              />
              <button className="bg-white text-black px-4 py-2 text-xs font-bold uppercase hover:bg-jzee-green transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR (Fox Style) */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-600 uppercase tracking-widest">
          <p>© 2026 JZEE BIKE SHOP DAVAO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-white cursor-pointer">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
