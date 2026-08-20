"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

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
        {item.feedback}
      </p>

      <div className="flex items-center gap-4">
        <Image
          src={item.image}
          alt={item.name}
          width={42}
          height={42}
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
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    async function fetchFeedback() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/feedback`,
          {
            cache: "no-store",
          },
        );

        if (!res.ok) {
          throw new Error("Failed to fetch feedback");
        }

        const data = await res.json();

        setTestimonials(data);
        setPage(0);
      } catch (error) {
        console.error("Failed to fetch feedback:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchFeedback();
  }, []);

  const totalPages = Math.ceil(testimonials.length / PER_PAGE);

  const visibleTestimonials = testimonials.slice(
    page * PER_PAGE,
    page * PER_PAGE + PER_PAGE,
  );

  const goPrev = () => {
    if (totalPages <= 1) return;

    setPage((currentPage) =>
      currentPage === 0 ? totalPages - 1 : currentPage - 1,
    );
  };

  const goNext = () => {
    if (totalPages <= 1) return;

    setPage((currentPage) =>
      currentPage === totalPages - 1 ? 0 : currentPage + 1,
    );
  };

  return (
    <section className="mx-auto max-w-[1600px] px-6 py-20 lg:px-[140px] lg:py-[100px]">
      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-['Poppins'] text-[32px] font-semibold leading-tight text-[#1D1D1D] sm:text-[45px] sm:leading-[60px]">
          Some Students Feedback
        </h2>

        <p className="mt-4 font-['Poppins'] text-[15px] leading-7 text-[#777777] sm:text-[16px]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      {/* Testimonials */}
      <div className="relative mt-12">
        {loading ? (
          <div className="flex min-h-[250px] items-center justify-center">
            <p className="font-['Poppins'] text-[16px] text-[#777777]">
              Loading feedback...
            </p>
          </div>
        ) : testimonials.length === 0 ? (
          <div className="flex min-h-[250px] items-center justify-center">
            <p className="font-['Poppins'] text-[16px] text-[#777777]">
              No feedback available.
            </p>
          </div>
        ) : (
          <>
            {/* Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {visibleTestimonials.map((item) => (
                <TestimonialCard key={item._id} item={item} />
              ))}
            </div>

            {/* Navigation */}
            {totalPages > 1 && (
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
            )}
          </>
        )}
      </div>
    </section>
  );
}
