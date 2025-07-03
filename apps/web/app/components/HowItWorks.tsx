const steps = [
  {
    title: "Sign Up",
    desc: "Create your free ConsentLayer account for your organization.",
    icon: "📝",
  },
  {
    title: "Integrate SDK",
    desc: "Add our lightweight SDK to your website/app in minutes.",
    icon: "🔗",
  },
  {
    title: "Collect & Control",
    desc: "Easily manage user consent, preferences & compliance.",
    icon: "✅",
  },
  {
    title: "View Insights",
    desc: "Access real-time consent analytics from your admin panel.",
    icon: "📊",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">How ConsentLayer Works</h2>
        <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="text-4xl mb-2">{step.icon}</div>
              <div className="font-semibold text-lg mb-1">{step.title}</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
