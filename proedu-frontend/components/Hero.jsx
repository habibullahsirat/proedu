// "use client";

// import { ChevronLeft, ChevronRight } from "lucide-react";

// export default function Hero() {
//   return (
//     <section id="home" className="mx-auto max-w-[1600px] px-6 pt-4 lg:px-[140px] lg:pt-0">
//       <div className="relative overflow-hidden rounded-[5px]">
//         {/* Background image */}
//         <img
//           src="https://images.unsplash.com/photo-1584697964358-3e14ca57658b?w=1600&q=80"
//           alt="Student learning in a virtual classroom"
//           className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[700px]"
//         />
//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-[#1D1D1D]/70" />

//         {/* Prev / Next arrows - hidden on small screens */}
//         <button
//           aria-label="Previous slide"
//           className="absolute left-4 top-1/2 hidden -translate-y-1/2 items-center justify-center text-white transition-opacity hover:opacity-70 sm:flex lg:left-[50px]"
//         >
//           <ChevronLeft size={40} strokeWidth={1.5} />
//         </button>
//         <button
//           aria-label="Next slide"
//           className="absolute right-4 top-1/2 hidden -translate-y-1/2 items-center justify-center text-white transition-opacity hover:opacity-70 sm:flex lg:right-[50px]"
//         >
//           <ChevronRight size={40} strokeWidth={1.5} />
//         </button>

//         {/* Content */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center sm:px-16">
//           <h1 className="max-w-3xl font-['Poppins'] text-[32px] font-semibold leading-tight text-white sm:text-[48px] lg:text-[65px] lg:leading-[85px]">
//             Get Started Digital Learning
//           </h1>
//           <p className="mt-4 max-w-xl font-['Poppins'] text-[15px] leading-[26px] text-[#F4F4F4] sm:text-[18px] sm:leading-[30px]">
//             It is a long established fact that a reader will be distracted by
//             the readable content of a page when looking at its layout.
//           </p>
//           <a
//             href="#courses"
//             className="mt-8 rounded-[5px] border border-[#289BDE] bg-[#289BDE] px-8 py-3.5 font-['Poppins'] text-[18px] font-semibold text-white transition-colors hover:bg-[#1f83bd] sm:text-[20px]"
//           >
//             Get Started
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// Dynamic Version
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

async function getHero() {
  const res = await fetch("http://localhost:3000/api/hero", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch hero data");
  }

  const data = await res.json();

  return data?.[0] ?? null;
}

export default async function Hero() {
  const hero = await getHero();

  if (!hero) {
    return null;
  }

  return (
    <section
      id="home"
      className="mx-auto max-w-[1600px] px-6 pt-4 lg:px-[140px] lg:pt-0"
    >
      <div className="relative overflow-hidden rounded-[5px]">
        {/* Background image */}
        <Image
          src={hero.image}
          alt={hero.title}
          width={1600}
          height={700}
          priority
          className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[700px]"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#1D1D1D]/70" />

        {/* Prev / Next arrows */}
        <button
          type="button"
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 hidden -translate-y-1/2 items-center justify-center text-white transition-opacity hover:opacity-70 sm:flex lg:left-[50px]"
        >
          <ChevronLeft size={40} strokeWidth={1.5} />
        </button>

        <button
          type="button"
          aria-label="Next slide"
          className="absolute right-4 top-1/2 hidden -translate-y-1/2 items-center justify-center text-white transition-opacity hover:opacity-70 sm:flex lg:right-[50px]"
        >
          <ChevronRight size={40} strokeWidth={1.5} />
        </button>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center sm:px-16">
          <h1 className="max-w-3xl font-['Poppins'] text-[32px] font-semibold leading-tight text-white sm:text-[48px] lg:text-[65px] lg:leading-[85px]">
            {hero.title}
          </h1>

          <p className="mt-4 max-w-xl font-['Poppins'] text-[15px] leading-[26px] text-[#F4F4F4] sm:text-[18px] sm:leading-[30px]">
            {hero.description}
          </p>

          <a
            href={hero.ctaLink}
            className="mt-8 rounded-[5px] border border-[#289BDE] bg-[#289BDE] px-8 py-3.5 font-['Poppins'] text-[18px] font-semibold text-white transition-colors hover:bg-[#1f83bd] sm:text-[20px]"
          >
            {hero.ctaTitle}
          </a>
        </div>
      </div>
    </section>
  );
}
