export default function CtaBanner() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-20 lg:px-[140px] lg:py-[100px]">
      <div className="flex flex-col items-start gap-8 rounded-[5px] bg-[#289BDE] p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between lg:p-[80px]">
        <div className="max-w-xl">
          <h2 className="font-['Poppins'] text-[30px] font-semibold leading-tight text-white sm:text-[45px] sm:leading-[60px]">
            Ready to join?
          </h2>
          <p className="mt-3 font-['Poppins'] text-[15px] leading-7 text-[#F4F4F4] sm:text-[16px] sm:leading-[30px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        <a
          href="#register"
          className="shrink-0 rounded-[5px] border border-white bg-white px-8 py-3.5 font-['Poppins'] text-[18px] font-semibold text-[#289BDE] transition-colors hover:bg-transparent hover:text-white sm:text-[20px]"
        >
          Register Now
        </a>
      </div>
    </section>
  );
}
