import Hero from "@/components/Hero";
import PopularCourses from "@/components/PopularCourses";
import ExploreInstitute from "@/components/ExploreInstitute";
import CtaBanner from "@/components/CtaBanner";
import SuccessfulStudents from "@/components/SuccessfulStudents";
import StudentsFeedback from "@/components/StudentsFeedback";
import FAQ from "@/components/FAQ";
import TrustedCompanies from "@/components/TrustedCompanies";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <PopularCourses />
      <ExploreInstitute />
      <CtaBanner />
      <SuccessfulStudents />
      <StudentsFeedback />
      <FAQ />
      <TrustedCompanies />
    </div>
  );
}
