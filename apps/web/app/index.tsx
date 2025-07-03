import Navbar from "./components/nav_bar/Navbar";
import HeroSection from "./components/hero_section/HeroSection";
import HowItWorks from "./components/how_it_works/HowItWorks";
import PricingSection from "./components/pricing_section/PricingSection";
import SignupForm from "./register/page";

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
