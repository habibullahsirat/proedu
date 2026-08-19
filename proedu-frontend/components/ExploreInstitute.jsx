import Image from "next/image";
import Link from "next/link";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/explore`;

const STAT_LABELS = ["Online Course", "Expert member", "Rating & Review"];

async function getExploreData() {
  const res = await fetch(API_URL, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch explore data");
  }

  const data = await res.json();

  return data?.[0] ?? null;
}

export default async function ExploreInstitute() {
  const explore = await getExploreData();

  if (!explore) {
    return null;
  }

  const stats = [
    { value: explore.stat1, label: STAT_LABELS[0] },
    { value: explore.stat2, label: STAT_LABELS[1] },
    { value: explore.stat3, label: STAT_LABELS[2] },
  ];

  return (
    <section className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-[140px]">
      <div
        className="
          grid
          w-full
          overflow-hidden
          rounded-[5px]
          bg-[#F4FAFD]
          grid-cols-1
          lg:grid-cols-[minmax(0,600px)_minmax(0,1fr)]
        "
      >
        {/* Image */}
        <div className="relative w-full">
          <Image
            src={explore.image}
            alt={explore.title}
            width={600}
            height={806}
            priority
            className="
              block
              h-[320px]
              w-full
              object-cover
              object-top
              sm:h-[400px]
              md:h-[500px]
              lg:h-full
              lg:min-h-[700px]
              lg:max-h-[806px]
            "
          />
        </div>

        {/* Content */}
        <div
          className="
            flex
            w-full
            flex-col
            px-5
            py-10
            sm:px-8
            sm:py-12
            md:px-10
            md:py-14
            lg:min-h-[700px]
            lg:px-10
            lg:py-16
            xl:px-[60px]
            xl:py-[130px]
          "
        >
          {/* Heading */}
          <h2
            className="
              w-full
              max-w-[549px]
              font-['Poppins']
              text-[28px]
              font-semibold
              leading-[38px]
              text-[#1D1D1D]
              sm:text-[32px]
              sm:leading-[44px]
              md:text-[38px]
              md:leading-[50px]
              lg:text-[42px]
              lg:leading-[56px]
              xl:text-[45px]
              xl:leading-[60px]
            "
          >
            {explore.title}
          </h2>

          {/* Description */}
          <div
            className="
              mt-5
              w-full
              max-w-[606px]
              font-['Poppins']
              text-[14px]
              font-normal
              leading-[25px]
              text-[#777777]
              sm:text-[15px]
              sm:leading-[27px]
              md:text-[16px]
              md:leading-[30px]
              lg:mt-6
              xl:mt-[10px]
            "
          >
            <p>{explore.description}</p>
          </div>

          {/* Stats */}
          <div
            className="
              mt-8
              grid
              w-full
              max-w-[559px]
              grid-cols-1
              gap-6
              sm:grid-cols-3
              sm:gap-4
              md:gap-6
              lg:mt-8
              xl:mt-[30px]
            "
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="
                  min-w-0
                  font-['Poppins']
                  sm:text-center
                  md:text-left
                "
              >
                <p
                  className="
                    font-['Poppins']
                    text-[32px]
                    font-semibold
                    leading-[42px]
                    text-[#1D1D1D]
                    sm:text-[34px]
                    sm:leading-[45px]
                    md:text-[38px]
                    md:leading-[50px]
                    lg:text-[40px]
                    xl:text-[45px]
                    xl:leading-[60px]
                  "
                >
                  {stat.value}
                </p>

                <p
                  className="
                    whitespace-nowrap
                    font-['Poppins']
                    text-[15px]
                    font-medium
                    leading-[24px]
                    text-[#777777]
                    sm:text-[14px]
                    md:text-[16px]
                    lg:text-[18px]
                    xl:text-[20px]
                    xl:leading-[30px]
                  "
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Button */}
          <Link
            href="#about"
            className="
              mt-8
              inline-flex
              w-fit
              items-center
              justify-center
              rounded-[5px]
              border
              border-[#289BDE]
              bg-[#289BDE]
              px-6
              py-3
              font-['Poppins']
              text-[16px]
              font-semibold
              text-white
              transition-colors
              duration-200
              hover:bg-[#1f83bd]
              focus:outline-none
              focus:ring-2
              focus:ring-[#289BDE]
              focus:ring-offset-2
              sm:px-7
              sm:py-3.5
              sm:text-[18px]
              md:text-[20px]
              lg:mt-10
              xl:mt-[40px]
            "
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}
