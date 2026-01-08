import React from "react";

const Location = () => {
  const mapLink =
    "https://www.google.com/maps/dir/?api=1&destination=B21+L8+Ph4B+Gentian+St.+El+Rio+Vista+Subd.+Davao+City";

  return (
    <section className="bg-white text-black py-24 px-4 md:px-8">
      <div className="container mx-auto">
        {/* THE QUOTE - Massive, Center Stage */}
        <div className="mb-24 text-center">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
            "Barato na.
            <br />
            <span className="italic font-serif font-normal">
              Naa pay hangyo."
            </span>
          </h2>
          <p className="text-sm font-bold uppercase tracking-[0.3em]">
            The Jzee Promise
          </p>
        </div>

        {/* INFO GRID - Inverted (Black on White) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t-2 border-black pt-12">
          {/* DETAILS */}
          <div className="flex flex-col justify-between h-full">
            <div className="space-y-12">
              <div>
                <h3 className="font-black uppercase text-xl mb-2">
                  HQ Location
                </h3>
                <p className="text-lg leading-relaxed">
                  B21 L8 Ph4B Gentian St.
                  <br />
                  El Rio Vista Subd.
                  <br />
                  Davao City, 8000
                </p>
              </div>
              <div>
                <h3 className="font-black uppercase text-xl mb-2">
                  Operating Hours
                </h3>
                <p className="text-lg">Mon - Sat: 09:00 - 18:00</p>
                <p className="text-lg opacity-50">Sunday: Closed</p>
              </div>
            </div>

            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-block bg-black text-white text-center px-10 py-5 font-bold uppercase tracking-widest hover:bg-transparent hover:text-black hover:border-2 hover:border-black transition-all"
            >
              Get Directions
            </a>
          </div>

          {/* MAP - Clean, No Filters */}
          <div className="h-[500px] bg-zinc-100 border-2 border-black p-2">
            <iframe
              src="https://maps.google.com/maps?q=Gentian+St+El+Rio+Vista+Subd+Davao+City&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
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
