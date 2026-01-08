import React from "react";

const Location = () => {
  // 🛰️ GPS TARGETING SYSTEM
  const mapLink =
    "https://www.google.com/maps/dir/?api=1&destination=B21+L8+Ph4B+Gentian+St.+El+Rio+Vista+Subd.+Davao+City";

  return (
    <section
      id="LOCATION"
      className="bg-black text-white py-24 px-4 md:px-12 border-t border-zinc-900"
    >
      <div className="container mx-auto">
        {/* THE MANIFESTO */}
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
            "Barato na.
            <br />
            <span className="text-jzee-green italic font-serif font-normal">
              Naa pay hangyo."
            </span>
          </h2>
          <p className="text-zinc-500 text-sm font-bold uppercase tracking-[0.3em]">
            The Jzee Promise
          </p>
        </div>

        {/* INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-zinc-800">
          {/* LEFT: DETAILS */}
          <div className="p-12 flex flex-col justify-center bg-zinc-900/50 backdrop-blur-sm">
            <div className="space-y-10">
              <div>
                <h3 className="text-jzee-green text-xs font-black uppercase tracking-widest mb-2">
                  HQ Location
                </h3>
                <p className="text-2xl font-bold leading-tight">
                  B21 L8 Ph4B Gentian St.
                  <br />
                  El Rio Vista Subd.
                  <br />
                  Davao City, 8000
                </p>
              </div>

              <div>
                <h3 className="text-jzee-green text-xs font-black uppercase tracking-widest mb-2">
                  Operating Hours
                </h3>
                <p className="text-2xl font-bold">Daily: Morning - Midnight</p>
                <p className="text-white/60 uppercase tracking-widest text-sm mt-1">
                  Open on Holidays
                </p>
              </div>

              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black text-center px-10 py-4 font-black uppercase tracking-widest hover:bg-jzee-green transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* RIGHT: MAP (Standard Colors) */}
          <div className="h-[500px] bg-zinc-800 relative overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=Gentian+St+El+Rio+Vista+Subd+Davao+City&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }} // <--- NO FILTERS. Pure Google Maps.
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
