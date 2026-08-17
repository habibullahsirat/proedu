"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = ["Home", "Courses", "Deals", "Success", "About", "Register"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 lg:px-[140px] lg:py-[26px]">
        {/* Logo */}
        <a
          href="#home"
          className="font-['Poppins'] text-2xl font-semibold text-[#4A4A4A] lg:text-[32px]"
        >
          Pro Edu
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-['Poppins'] text-[16px] text-[#777777] transition-colors hover:text-[#289BDE] xl:text-[18px]"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#register"
          className="hidden rounded-[5px] border border-[#289BDE] px-8 py-3.5 font-['Poppins'] text-[18px] font-semibold text-[#289BDE] transition-colors hover:bg-[#289BDE] hover:text-white lg:inline-block"
        >
          Register
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="text-[#4A4A4A] lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <div className="border-t border-[#E8E8E8] bg-white px-6 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="font-['Poppins'] text-[16px] text-[#777777] hover:text-[#289BDE]"
              >
                {link}
              </a>
            ))}
            <a
              href="#register"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-[5px] border border-[#289BDE] px-6 py-3 text-center font-['Poppins'] text-[16px] font-semibold text-[#289BDE]"
            >
              Register
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
