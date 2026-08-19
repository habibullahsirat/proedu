import { ChevronDown } from "lucide-react";

async function getFAQs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/faq`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch FAQs");
  }

  return res.json();
}

export default async function FAQ() {
  const faqs = await getFAQs();

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
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-4">
        {faqs.map((faq, index) => (
          <details
            key={faq._id}
            open={index === 0}
            className="group overflow-hidden rounded-[5px] border border-[#E8E8E8] bg-white open:border-transparent open:bg-[#289BDE]/10"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-left sm:px-8 [&::-webkit-details-marker]:hidden">
              <span className="pr-4 font-['Poppins'] text-[16px] font-semibold text-[#4A4A4A] sm:text-[20px]">
                {faq.question}
              </span>

              <ChevronDown
                size={18}
                strokeWidth={2}
                className="shrink-0 text-[#4A4A4A] transition-transform duration-200 group-open:rotate-180"
              />
            </summary>

            <p className="px-6 pb-6 font-['Poppins'] text-[15px] leading-7 text-[#777777] sm:px-8 sm:text-[16px] sm:leading-[30px]">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
