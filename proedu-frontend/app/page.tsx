import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PopularCourses from "@/components/PopularCourses";
import ExploreInstitute from "@/components/ExploreInstitute";
import CtaBanner from "@/components/CtaBanner";
import SuccessfulStudents from "@/components/SuccessfulStudents";
import StudentsFeedback from "@/components/StudentsFeedback";
import FAQ from "@/components/FAQ";
import TrustedCompanies from "@/components/TrustedCompanies";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <PopularCourses />
      <ExploreInstitute />
      <CtaBanner />
      <SuccessfulStudents />
      <StudentsFeedback />
      <FAQ />
      <TrustedCompanies />
      <Footer />
    </div>
  );
}
