// const STUDENTS = [
//   {
//     name: "Awlad Hossain",
//     role: "UIUX Designer",
//     image:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
//   },
//   {
//     name: "Jannatul Islam",
//     role: "Motion Design",
//     image:
//       "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
//   },
//   {
//     name: "Imran Hossain",
//     role: "Graphic Designer",
//     image:
//       "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
//   },
//   {
//     name: "Nishi Akter",
//     role: "Web Developer",
//     image:
//       "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
//   },
// ];

// export default function SuccessfulStudents() {
//   return (
//     <section
//       id="success"
//       className="mx-auto max-w-[1600px] px-6 py-20 lg:px-[140px] lg:py-[100px]"
//     >
//       <div className="max-w-xl">
//         <h2 className="font-['Poppins'] text-[32px] font-semibold leading-tight text-[#1D1D1D] sm:text-[45px] sm:leading-[60px]">
//           Meet Our Successfull Students
//         </h2>
//         <p className="mt-4 font-['Poppins'] text-[15px] leading-7 text-[#777777] sm:text-[16px]">
//           It is a long established fact that a reader will be distracted by
//           the readable content of a page when looking at its layout.
//         </p>
//       </div>

//       <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//         {STUDENTS.map((student) => (
//           <div
//             key={student.name}
//             className="overflow-hidden rounded-[5px] border border-[#E8E8E8] bg-white"
//           >
//             <img
//               src={student.image}
//               alt={student.name}
//               className="h-[300px] w-full object-cover"
//             />
//             <div className="p-5">
//               <p className="font-['Poppins'] text-[18px] font-semibold text-[#4A4A4A] sm:text-[20px]">
//                 {student.name}
//               </p>
//               <p className="mt-1 font-['Poppins'] text-[15px] text-[#777777] sm:text-[16px]">
//                 {student.role}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-12 flex justify-center">
//         <a
//           href="#success"
//           className="rounded-[5px] border border-[#289BDE] bg-[#289BDE] px-8 py-3.5 font-['Poppins'] text-[18px] font-semibold text-white transition-colors hover:bg-[#1f83bd] sm:text-[20px]"
//         >
//           View All
//         </a>
//       </div>
//     </section>
//   );
// }

// Dynamic Version
import Image from "next/image";

async function getStudents() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/student`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch students");
  }

  return response.json();
}

export default async function SuccessfulStudents() {
  const students = await getStudents();

  return (
    <section
      id="success"
      className="mx-auto max-w-[1600px] px-6 py-20 lg:px-[140px] lg:py-[100px]"
    >
      <div className="max-w-xl">
        <h2 className="font-['Poppins'] text-[32px] font-semibold leading-tight text-[#1D1D1D] sm:text-[45px] sm:leading-[60px]">
          Meet Our Successfull Students
        </h2>

        <p className="mt-4 font-['Poppins'] text-[15px] leading-7 text-[#777777] sm:text-[16px]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {students.map((student) => (
          <div
            key={student._id}
            className="overflow-hidden rounded-[5px] border border-[#E8E8E8] bg-white"
          >
            <div className="relative h-[300px] w-full">
              <Image
                src={student.image}
                alt={student.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <p className="font-['Poppins'] text-[18px] font-semibold text-[#4A4A4A] sm:text-[20px]">
                {student.name}
              </p>

              <p className="mt-1 font-['Poppins'] text-[15px] text-[#777777] sm:text-[16px]">
                {student.department}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="#success"
          className="rounded-[5px] border border-[#289BDE] bg-[#289BDE] px-8 py-3.5 font-['Poppins'] text-[18px] font-semibold text-white transition-colors hover:bg-[#1f83bd] sm:text-[20px]"
        >
          View All
        </a>
      </div>
    </section>
  );
}
