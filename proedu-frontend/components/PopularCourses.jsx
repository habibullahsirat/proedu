const COURSES = [
  {
    title: "Fundamental Of UI/UX Design",
    price: "20$",
    image:
      "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=400&q=80",
  },
  {
    title: "Javascript Basic to advanced",
    price: "20$",
    image:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&q=80",
  },
  {
    title: "Fullstack Web Development",
    price: "20$",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80",
  },
  {
    title: "Digital Marketing",
    price: "20$",
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&q=80",
  },
  {
    title: "Photography Basic Rules",
    price: "20$",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80",
  },
  {
    title: "Motion Graphics",
    price: "20$",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&q=80",
  },
];

function CourseCard({ course }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-[5px] border border-[#E8E8E8] bg-white sm:flex-row">
      <img
        src={course.image}
        alt={course.title}
        className="h-[180px] w-full object-cover sm:h-auto sm:w-[200px]"
      />
      <div className="flex flex-1 flex-col justify-center gap-2 p-6">
        <h3 className="font-['Poppins'] text-[20px] font-semibold leading-snug text-[#4A4A4A] sm:text-[25px]">
          {course.title}
        </h3>
        <p className="font-['Poppins'] text-[15px] leading-6 text-[#777777] sm:text-[16px]">
          Some quick example text to build on the card title and make up the
          bulk of the card.
        </p>
        <p className="font-['Poppins'] text-[16px] font-semibold text-[#289BDE] sm:text-[18px]">
          Price : {course.price}
        </p>
      </div>
    </div>
  );
}

export default function PopularCourses() {
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
          It is a long established fact that a reader will be distracted by
          the readable content of a page when looking at its layout.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {COURSES.map((course) => (
          <CourseCard key={course.title} course={course} />
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
