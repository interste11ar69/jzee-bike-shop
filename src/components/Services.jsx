import React from "react";

// 🛠️ THE FULL SERVICE MENU
const services = [
  {
    title: "Full Overhaul",
    price: "₱1,500+",
    description:
      "Strip down to the frame. Deep clean, regrease, repacking, and full tuning. The spa day your bike deserves.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
        />
      </svg>
    ),
  },
  {
    title: "Hydraulic Bleeding",
    price: "₱350 / wheel",
    description:
      "Shimano, SRAM, Tektro. We remove the bubbles and replace the fluid so you can stop on a dime.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
        />
      </svg>
    ),
  },
  {
    title: "Wheel Building",
    price: "₱800 / wheel",
    description:
      "Lacing and truing. We build them bombproof. Tunog mayaman or silent killer, we tune the tension perfectly.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z"
        />
      </svg>
    ),
  },
  {
    title: "Suspension Service",
    price: "Inquire",
    description:
      "Fork and rear shock maintenance. Wiper seal replacement, oil change, and lockout repair.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
        />
      </svg>
    ),
  },
  {
    title: "Drivetrain Deep Clean",
    price: "₱450",
    description:
      "Ultrasonic cleaning for your chain, cogs, and crank. We remove the black gunk so it shifts like new.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
        />
      </svg>
    ),
  },
  {
    title: "Tubeless Setup",
    price: "₱300 / wheel",
    description:
      "Say goodbye to pinch flats. We tape, seal, and seat your tires properly. Sealant included.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z"
        />
      </svg>
    ),
  },
  {
    title: "Bearing Press",
    price: "₱400+",
    description:
      "Bottom brackets, hubs, and pivot bearings. We use proper press tools, not hammers.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
        />
      </svg>
    ),
  },
  {
    title: "Dream Build Assembly",
    price: "₱1,500+",
    description:
      "Bought a frame and parts? We build it up from the ground up. Pro cable routing and torque spec guaranteed.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
        />
      </svg>
    ),
  },
  {
    title: "Basic Tune-Up",
    price: "₱350",
    description:
      "Shifting adjustment, brake alignment, and safety check. Quick and dirty to get you back on the road.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
        />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <section
      id="MECHANIC"
      className="relative py-24 px-6 md:px-12 border-t border-black overflow-hidden"
    >
      {/* 
         🛠️ PARALLAX BACKGROUND 
         Uses your 'interior.jpg' to give the section texture and life.
         The 'fixed' class makes it stay still while you scroll.
      */}
      <div
        className="absolute inset-0 bg-[url('/interior.jpg')] bg-cover bg-center bg-fixed opacity-20 grayscale"
        style={{ pointerEvents: "none" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
              The <span className="text-jzee-green">Workshop</span>
            </h2>
            <p className="text-zinc-400 text-sm uppercase tracking-widest max-w-md leading-relaxed">
              Expert mechanics. Professional tools. <br />
              We fix what others can't.
            </p>
          </div>

          {/* CTA */}
          <a
            href="https://m.me/100063770933795"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-black px-8 py-4 font-black uppercase tracking-widest hover:bg-jzee-green transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]"
          >
            Book a Service
          </a>
        </div>

        {/* SERVICE GRID - 3x3 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-8 hover:border-jzee-green hover:bg-zinc-900 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                {/* ICON with Glow */}
                <div className="text-zinc-500 group-hover:text-jzee-green transition-colors p-2 bg-black rounded-lg border border-zinc-800 group-hover:border-jzee-green group-hover:shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                  {service.icon}
                </div>

                {/* PRICE TAG */}
                <span className="text-white font-mono text-xs font-bold border border-zinc-700 bg-black px-3 py-1 rounded uppercase tracking-wider group-hover:border-jzee-green transition-colors">
                  {service.price}
                </span>
              </div>

              <h3 className="text-xl font-black text-white uppercase italic mb-3 group-hover:text-jzee-green transition-colors">
                {service.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
