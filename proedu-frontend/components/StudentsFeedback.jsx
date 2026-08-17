"use client";

import { useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Awlad Hossain",
    role: "UI Designer",
    rating: 4,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    quote:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.",
  },
  {
    name: "Shanta Akter",
    role: "Graphic Designer",
    rating: 4,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    quote:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.",
  },
  {
    name: "Imran Hossain",
    role: "Web Developer",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
    quote:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.",
  },
  {
    name: "Jannatul Islam",
    role: "Motion Designer",
    rating: 4,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    quote:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.",
  },
];

const PER_PAGE = 2;

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={20}
          className={
            i < rating
              ? "fill-[#FBBF24] text-[#F59E0B]"
              : "fill-[#FEF3C7] text-[#FCD34D]"
          }
        />
      ))}
    </div>
  );
}

function TestimonialCard({ item }) {
  return (
    <div className="flex flex-col gap-6 rounded-[5px] border border-[#E8E8E8] bg-white p-6 sm:p-10">
      <div className="flex items-start justify-between">
        <Quote size={44} className="fill-[#D2D2D2] text-[#D2D2D2]" />
        <StarRating rating={item.rating} />
      </div>

      <p className="font-['Poppins'] text-[15px] leading-7 text-[#777777] sm:text-[16px] sm:leading-[30px]">
        {item.quote}
      </p>

      <div className="flex items-center gap-4">
        <img
          src={item.avatar}
          alt={item.name}
          className="h-[42px] w-[42px] rounded-full object-cover"
        />
        <div>
          <p className="font-['Poppins'] text-[18px] font-semibold text-[#4A4A4A]">
            {item.name}
          </p>
          <p className="font-['Poppins'] text-[16px] text-[#777777]">
            {item.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function StudentsFeedback() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(TESTIMONIALS.length / PER_PAGE);

  const visible = TESTIMONIALS.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const goPrev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const goNext = () => setPage((p) => (p + 1) % totalPages);

  return (
    <section className="mx-auto max-w-[1600px] px-6 py-20 lg:px-[140px] lg:py-[100px]">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-['Poppins'] text-[32px] font-semibold leading-tight text-[#1D1D1D] sm:text-[45px] sm:leading-[60px]">
          Some Students Feedback
        </h2>
        <p className="mt-4 font-['Poppins'] text-[15px] leading-7 text-[#777777] sm:text-[16px]">
          It is a long established fact that a reader will be distracted by
          the readable content of a page when looking at its layout.
        </p>
      </div>

      <div className="relative mt-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {visible.map((item) => (
            <TestimonialCard key={item.name} item={item} />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={goPrev}
            aria-label="Previous testimonials"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E6F6FF] text-[#289BDE] transition-colors hover:bg-[#289BDE] hover:text-white"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={goNext}
            aria-label="Next testimonials"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#289BDE] text-white transition-colors hover:bg-[#1f83bd]"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
