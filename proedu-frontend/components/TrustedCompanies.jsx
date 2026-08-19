import Image from "next/image";

async function getPartners() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/partner`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch partners");
  }

  return res.json();
}

export default async function TrustedCompanies() {
  const partners = await getPartners();

  return (
    <section className="mx-auto max-w-[1600px] px-6 pb-20 lg:px-[140px] lg:pb-[100px]">
      <h2 className="mx-auto max-w-3xl text-center font-['Poppins'] text-[28px] font-semibold leading-tight text-[#1D1D1D] sm:text-[45px] sm:leading-[60px]">
        Trusted by over 800+ companies
      </h2>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
        {partners.map((partner) => (
          <div
            key={partner._id}
            className="relative h-12 w-32  sm:h-14 sm:w-40"
          >
            <Image
              src={partner.image}
              alt={partner.title}
              fill
              sizes="(max-width: 640px) 128px, 160px"
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
