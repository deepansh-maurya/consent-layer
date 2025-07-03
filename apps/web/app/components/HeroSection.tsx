export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 pt-24 pb-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Universal Consent Management, <span className="text-blue-600">Simplified</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
        ConsentLayer lets organizations manage user consent & tracking across all platforms. Easy SDK, analytics, and compliance – in minutes.
      </p>
      <a href="#signup" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition text-lg">
        Get Started Free
      </a>
    </section>
  );
}
