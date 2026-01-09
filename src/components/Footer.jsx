import React from "react";

const Footer = () => {
  // 🌌 STAR GENERATOR: 30 stars with different twinkle speeds
  const stars = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1 + "px",
    duration: Math.random() * 4 + 2 + "s",
  }));

  return (
    <footer className="relative bg-black text-white py-16 border-t border-zinc-900 overflow-hidden">
      {/* 🌠 THE UNIVERSE BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full animate-pulse opacity-20"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* LEFT: JZEE BRANDING */}
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Jzee"
              className="h-10 w-10 rounded-full opacity-50 grayscale hover:grayscale-0 transition-all"
            />
            <div className="flex flex-col leading-none">
              <span className="font-black text-xl tracking-tighter uppercase italic">
                JZEE<span className="text-zinc-500">BIKE SHOP</span>
              </span>
              <span className="text-[9px] font-bold tracking-[0.3em] text-zinc-600 uppercase">
                Davao City
              </span>
            </div>
          </div>

          {/* CENTER: FACEBOOK LINK */}
          <div className="flex gap-6">
            <a
              href="https://www.facebook.com/profile.php?id=100063770933795"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 hover:text-jzee-green transition-colors flex items-center gap-2 text-xs font-black uppercase tracking-widest"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <span>Facebook</span>
            </a>
          </div>

          {/* RIGHT: THE STABLE NEBULA SIGNATURE */}
          <div className="text-center md:text-right mt-8 md:mt-0">
            <p className="text-zinc-800 text-[8px] uppercase tracking-[0.5em] font-black mb-2">
              ENGINEERED BY
            </p>

            <div className="relative group cursor-default inline-block">
              {/* 🌌 THE SUBTLE ATMOSPHERE (Background Glow) */}
              <div
                className="absolute -inset-3 rounded-full blur-xl opacity-20 group-hover:opacity-50 transition-opacity duration-1000"
                style={{
                  background:
                    "linear-gradient(to right, #3b82f6, #a855f7, #ec4899)",
                }}
              ></div>

              {/* 🚀 THE BRAND TEXT (Simplified & Robust) */}
              <p className="relative flex items-center justify-center md:justify-end">
                <span className="font-mono font-black text-[10px] md:text-xs uppercase tracking-[0.4em] leading-none bg-gradient-to-r from-white via-blue-200 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                  INTERSTELLAR_LABS
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
