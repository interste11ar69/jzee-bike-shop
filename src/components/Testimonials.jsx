import React, { useRef } from "react";
import { TESTIMONIALS } from "../model/AppConstants";

const Testimonials = () => {
  const scrollRef = useRef(null);

  // 🕹️ SCROLL LOGIC
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      // Scroll by 400px (approx one card width)
      const scrollAmount = direction === "left" ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-zinc-950 border-t border-zinc-900 py-24 overflow-hidden relative">
      <div className="px-4 md:px-12 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        {/* HEADER */}
        <div>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
            Legit <span className="text-jzee-green">Check</span>
          </h2>
          <p className="text-zinc-500 text-sm uppercase tracking-widest mt-2">
            Feedback from our Biker Friends.
          </p>
        </div>

        {/* 🕹️ NAVIGATION ARROWS (The Fix) */}
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border border-zinc-700 bg-zinc-900 text-white flex items-center justify-center hover:border-jzee-green hover:text-jzee-green transition-all active:scale-95"
          >
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
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full border border-zinc-700 bg-zinc-900 text-white flex items-center justify-center hover:border-jzee-green hover:text-jzee-green transition-all active:scale-95"
          >
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
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* HORIZONTAL SCROLL CONTAINER */}
      {/* Added 'ref={scrollRef}' to link the buttons to this div */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 px-4 md:px-12 pb-8 scrollbar-hide snap-x snap-mandatory scroll-smooth"
      >
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="snap-center min-w-[300px] md:min-w-[400px] bg-zinc-900/50 border border-zinc-800 p-8 flex flex-col justify-between rounded-sm hover:border-jzee-green transition-colors"
          >
            <div>
              {/* STAR RATING */}
              <div className="flex gap-1 mb-4 text-jzee-green">
                {[...Array(t.rating)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-white text-lg italic font-medium leading-relaxed">
                "{t.text}"
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white font-black text-sm border border-zinc-700">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="text-white font-bold uppercase text-sm">
                  {t.name}
                </p>
                <p className="text-zinc-500 text-[10px] uppercase tracking-widest">
                  {t.role}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* CALL TO ACTION CARD */}
        <a
          href="https://www.facebook.com/profile.php?id=100063770933795&sk=reviews"
          target="_blank"
          rel="noreferrer"
          className="snap-center min-w-[300px] md:min-w-[400px] bg-jzee-green flex flex-col items-center justify-center p-8 text-center cursor-pointer hover:brightness-110 transition-all"
        >
          <h3 className="text-black font-black text-2xl uppercase leading-none">
            See More
          </h3>
          <p className="text-black/80 font-bold text-sm uppercase mt-2">
            On Facebook Page
          </p>
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
