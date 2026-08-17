"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "What other services are you compatible with?",
    answer:
      "There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the generators on the.",
  },
  {
    question: "I have a technical issue I need resolved, who do I email?",
    answer:
      "Reach out to our support team directly and include as much detail as possible about the issue, your device, and steps to reproduce it, so we can help you as quickly as possible.",
  },
  {
    question: "What other services are you compatible with?",
    answer:
      "Our courses integrate with most popular note-taking, calendar, and productivity tools so you can keep learning in the flow of your existing workflow.",
  },
  {
    question: "What other services are you compatible with?",
    answer:
      "We support single sign-on and third-party billing integrations for teams and institutions that need centralized account management.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="about"
      className="mx-auto max-w-[1600px] px-6 py-20 lg:px-[140px] lg:py-[100px]"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-['Poppins'] text-[32px] font-semibold leading-tight text-[#1D1D1D] sm:text-[45px] sm:leading-[60px]">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 font-['Poppins'] text-[15px] leading-7 text-[#777777] sm:text-[16px]">
          It is a long established fact that a reader will be distracted by
          the readable content of a page when looking at its layout.
        </p>
      </div>

      <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-4">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={`${faq.question}-${index}`}
              className={`overflow-hidden rounded-[5px] border transition-colors ${
                isOpen
                  ? "border-transparent bg-[#289BDE]/10"
                  : "border-[#E8E8E8] bg-white"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left sm:px-8"
                aria-expanded={isOpen}
              >
                <span className="pr-4 font-['Poppins'] text-[16px] font-semibold text-[#4A4A4A] sm:text-[20px]">
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  strokeWidth={2}
                  className={`shrink-0 text-[#4A4A4A] transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <p className="px-6 pb-6 font-['Poppins'] text-[15px] leading-7 text-[#777777] sm:px-8 sm:text-[16px] sm:leading-[30px]">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
