"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const [siteSettings, setSiteSettings] = useState(null);

  useEffect(() => {
    async function fetchSettings() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/site-setting`,
        );
        if (res.ok) {
          const data = await res.json();
          if (data?.[0]) {
            setSiteSettings(data[0]);
          }
        }
      } catch (error) {
        console.error("Failed to fetch footer settings:", error);
      }
    }

    fetchSettings();
  }, []);

  // Helper function to format social links properly
  const formatUrl = (url) => {
    if (!url) return "#";
    return url.startsWith("http://") || url.startsWith("https://")
      ? url
      : `https://${url}`;
  };

  const socials = [
    { icon: FaFacebookF, label: "Facebook", link: siteSettings?.facebookLink },
    { icon: FaTwitter, label: "Twitter", link: siteSettings?.twitterLink },
    { icon: FaLinkedinIn, label: "LinkedIn", link: siteSettings?.linkedinLink },
    { icon: FaTiktok, label: "TikTok", link: siteSettings?.tiktokLink },
  ];

  const siteTitle = siteSettings?.title || "Pro Edu";

  return (
    <footer className="bg-[#161616] px-6 py-16 lg:px-[140px] lg:py-[80px]">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center text-center">
        {/* Logo (image2 from API) */}
        {siteSettings?.image2 ? (
          <Link href="/">
            <Image
              src={siteSettings.image2}
              alt={siteTitle}
              width={160}
              height={50}
              className="h-auto w-auto object-contain"
            />
          </Link>
        ) : (
          <p className="font-['Poppins'] text-[32px] font-semibold text-white sm:text-[40px]">
            {siteTitle}
          </p>
        )}

        {/* Address */}
        <p className="mt-6 max-w-md font-['Poppins'] text-[15px] leading-7 text-[#E8E8E8] sm:text-[16px]">
          {siteSettings?.address ||
            "Office 41, Zawaya Building, Ghala Muscat, Sultanate of Oman"}
        </p>

        {/* Links */}
        <div className="mt-4 flex items-center gap-3 font-['Poppins'] text-[14px] text-[#E8E8E8] sm:text-[15px]">
          <Link
            href="/privacy-policy"
            className="transition-colors hover:text-[#289BDE]"
          >
            Privacy Policy
          </Link>
          <span>|</span>
          <Link
            href="/terms-of-use"
            className="transition-colors hover:text-[#289BDE]"
          >
            Terms of use
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 flex items-center gap-4">
          {socials.map(
            ({ icon: Icon, label, link }) =>
              link && (
                <a
                  key={label}
                  href={formatUrl(link)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#242424] text-white transition-colors hover:bg-[#289BDE]"
                >
                  <Icon size={18} />
                </a>
              ),
          )}
        </div>

        {/* Copyright */}
        <p className="mt-10 font-['Poppins'] text-[14px] text-[#777777]">
          © {new Date().getFullYear()} {siteTitle}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
