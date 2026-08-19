import Image from "next/image";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/course`;

async function getCourses() {
  const response = await fetch(API_URL, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch courses");
  }

  return response.json();
}

function CourseCard({ course }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-[5px] border border-[#E8E8E8] bg-white sm:flex-row">
      <div className="relative h-[180px] w-full shrink-0 sm:h-auto sm:w-[200px]">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 640px) 100vw, 200px"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-center gap-2 p-6">
        <h3 className="font-['Poppins'] text-[20px] font-semibold leading-snug text-[#4A4A4A] sm:text-[25px]">
          {course.title}
        </h3>

        <p className="font-['Poppins'] text-[15px] leading-6 text-[#777777] sm:text-[16px]">
          {course.description}
        </p>

        <p className="font-['Poppins'] text-[16px] font-semibold text-[#289BDE] sm:text-[18px]">
          Price : {course.price}$
        </p>
      </div>
    </div>
  );
}

export default async function PopularCourses() {
  const courses = await getCourses();

  return (
    <section
      id="courses"
      className="mx-auto max-w-[1600px] px-6 py-20 lg:px-[140px] lg:py-[100px]"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-['Poppins'] text-[32px] font-semibold leading-tight text-[#1D1D1D] sm:text-[45px] sm:leading-[60px]">
          Discover Our Popular Courses
        </h2>

        <p className="mt-4 font-['Poppins'] text-[15px] leading-7 text-[#777777] sm:text-[16px]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="#courses"
          className="rounded-[5px] border border-[#289BDE] bg-[#289BDE] px-8 py-3.5 font-['Poppins'] text-[18px] font-semibold text-white transition-colors hover:bg-[#1f83bd] sm:text-[20px]"
        >
          See More Courses
        </a>
      </div>
    </section>
  );
}
