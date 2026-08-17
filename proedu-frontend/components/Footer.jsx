import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const SOCIALS = [
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "Twitter" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Instagram, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-[#161616] px-6 py-16 lg:px-[140px] lg:py-[80px]">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center text-center">
        <p className="font-['Poppins'] text-[32px] font-semibold text-white sm:text-[40px]">
          Pro Edu
        </p>

        <p className="mt-6 max-w-md font-['Poppins'] text-[15px] leading-7 text-[#E8E8E8] sm:text-[16px]">
          Office 41, Zawaya Building, Ghala Muscat, Sultanate of Oman
        </p>

        <p className="mt-4 font-['Poppins'] text-[14px] text-[#E8E8E8] sm:text-[15px]">
          Privacy Policy&nbsp;&nbsp;|&nbsp;&nbsp;Terms of use
        </p>

        <div className="mt-8 flex items-center gap-4">
          {SOCIALS.map(({ icon: Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#242424] text-white transition-colors hover:bg-[#289BDE]"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <p className="mt-10 font-['Poppins'] text-[14px] text-[#777777]">
          © {new Date().getFullYear()} Pro Edu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
