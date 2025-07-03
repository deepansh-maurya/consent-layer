import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import PricingSection from "../components/PricingSection";
import SignupForm from "../components/SignupForm";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors">
      <Navbar />
      <main className="flex flex-col items-center justify-center">
        <HeroSection />
        <HowItWorks />
        <PricingSection />
        <section className="py-16 flex justify-center items-center w-full bg-gray-50 dark:bg-gray-800">
          <SignupForm />
        </section>
      </main>
      <footer className="text-center text-gray-500 text-sm p-6">
        © {new Date().getFullYear()} ConsentLayer. All rights reserved.
      </footer>
    </div>
  );
}
