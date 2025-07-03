"use client"
import React, { useState, useEffect } from "react";
import "./PricingSection.css";

// Define interfaces for type safety
interface Plan {
  title: string;
  price: string;
  features: string[];
  highlight?: boolean;
}

const plans: Plan[] = [
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

const PricingSection: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  // Simulate loading for dynamic content (optional, can be removed if static)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-section__overlay"></div>
      <div className="pricing-section__container">
        {/* Header and Intro */}
        <div className="pricing-section__header">
          <h2 className="pricing-section__title">Pricing Plans</h2>
          <p className="pricing-section__intro">
            Choose the perfect plan for your organization’s consent management needs. From startups to enterprises, ConsentLayer offers flexible solutions to ensure compliance and user trust.
          </p>
        </div>

        {/* Plans Grid */}
        {loading ? (
          <div className="pricing-section__loading">Loading...</div>
        ) : (
          <div className="pricing-section__grid">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`pricing-section__card ${plan.highlight ? "highlight" : ""} card-${i}`}
              >
                <div className="pricing-section__card-header">
                  <h3 className="pricing-section__card-title">{plan.title}</h3>
                  <div className="pricing-section__card-price">{plan.price}</div>
                </div>
                <ul className="pricing-section__features">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="pricing-section__feature">
                      <span className="pricing-section__check">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#signup"
                  className={`pricing-section__cta-button ${plan.highlight ? "highlight" : ""}`}
                >
                  {plan.highlight ? "Start Pro" : "Start Free"}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingSection;