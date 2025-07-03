const plans = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Up to 1,000 users/month",
      "Basic analytics",
      "Email support",
      "Easy SDK integration",
    ],
  },
  {
    title: "Pro",
    price: "$49/mo",
    features: [
      "Unlimited users",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
    ],
    highlight: true,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 bg-blue-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Pricing</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`flex-1 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border-2 ${
                plan.highlight
                  ? "border-blue-600 scale-105"
                  : "border-transparent"
              } transition`}
            >
              <div className="text-xl font-semibold mb-2">{plan.title}</div>
              <div className="text-3xl font-bold mb-4">{plan.price}</div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#signup"
                className={`block text-center px-6 py-3 rounded-xl font-semibold ${
                  plan.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-100 text-blue-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-blue-300"
                } transition`}
              >
                {plan.highlight ? "Start Pro" : "Start Free"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
