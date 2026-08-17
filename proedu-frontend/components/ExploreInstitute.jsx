const STATS = [
  { value: "3.2K+", label: "Online Course" },
  { value: "600+", label: "Expert member" },
  { value: "1k+", label: "Rating & Review" },
];

export default function ExploreInstitute() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 lg:px-[140px]">
      <div className="grid grid-cols-1 overflow-hidden rounded-[5px] bg-[#F4FAFD] lg:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
          alt="Student working on a laptop"
          className="h-[320px] w-full object-cover lg:h-auto"
        />

        <div className="flex flex-col justify-center gap-6 p-8 sm:p-12 lg:p-[60px]">
          <h2 className="font-['Poppins'] text-[30px] font-semibold leading-tight text-[#1D1D1D] sm:text-[45px] sm:leading-[60px]">
            Explore The elearning Institute
          </h2>

          <p className="font-['Poppins'] text-[15px] leading-7 text-[#777777] sm:text-[16px] sm:leading-[30px]">
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by
            injected humour, or randomised words which don&apos;t look even
            slightly believable. If you are going to use a passage of Lorem
            Ipsum, you need to be sure.
          </p>
          <p className="font-['Poppins'] text-[15px] leading-7 text-[#777777] sm:text-[16px] sm:leading-[30px]">
            Anything embarrassing hidden in the middle of text. All the Lorem
            Ipsum generators on the Internet tend to repeat predefined.
          </p>

          <div className="flex flex-wrap gap-8 sm:gap-12">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-['Poppins'] text-[32px] font-semibold text-[#1D1D1D] sm:text-[45px]">
                  {stat.value}
                </p>
                <p className="font-['Poppins'] text-[16px] font-medium text-[#777777] sm:text-[20px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#about"
            className="inline-block w-fit rounded-[5px] border border-[#289BDE] bg-[#289BDE] px-8 py-3.5 font-['Poppins'] text-[18px] font-semibold text-white transition-colors hover:bg-[#1f83bd] sm:text-[20px]"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
