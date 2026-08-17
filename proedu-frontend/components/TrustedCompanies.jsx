const COMPANIES = [
  "Coursera",
  "Udemy",
  "FedEx",
  "Education",
  "Elecom",
  "Indeed",
];

export default function TrustedCompanies() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 pb-20 lg:px-[140px] lg:pb-[100px]">
      <h2 className="mx-auto max-w-3xl text-center font-['Poppins'] text-[28px] font-semibold leading-tight text-[#1D1D1D] sm:text-[45px] sm:leading-[60px]">
        Trusted by over 800+ companies
      </h2>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
        {COMPANIES.map((name) => (
          <span
            key={name}
            className="font-['Poppins'] text-[22px] font-semibold tracking-wide text-[#4A4A4A] opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 sm:text-[26px]"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
