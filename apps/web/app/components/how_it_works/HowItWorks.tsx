"use client";
import React, { useState, useEffect } from "react";
import "./HowItWorks.css";
import { useRouter } from "next/navigation";

// Define interfaces for type safety
interface Step {
  title: string;
  desc: string;
  icon: string;
}

const steps: Step[] = [
  {
    title: "Sign Up",
    desc: "Create your free ConsentLayer account for your organization.",
    icon: "📝"
  },
  {
    title: "Integrate SDK",
    desc: "Add our lightweight SDK to your website/app in minutes.",
    icon: "🔗"
  },
  {
    title: "Collect & Control",
    desc: "Easily manage user consent, preferences & compliance.",
    icon: "✅"
  },
  {
    title: "View Insights",
    desc: "Access real-time consent analytics from your admin panel.",
    icon: "📊"
  }
];

const HowItWorks: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  // Simulate loading for dynamic content (optional, can be removed if static)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <section id="how" className="how-it-works">
      <div className="how-it-works__overlay"></div>
      <div className="how-it-works__container">
        {/* Header and Intro */}
        <div className="how-it-works__header">
          <h2 className="how-it-works__title">How ConsentLayer Works</h2>
          <p className="how-it-works__intro">
            Streamline compliance with ConsentLayer’s powerful consent
            management platform. Follow these simple steps to ensure user trust
            and regulatory adherence.
          </p>
        </div>

        {/* Steps Grid */}
        {loading ? (
          <div className="how-it-works__loading">Loading...</div>
        ) : (
          <div className="how-it-works__grid">
            {steps.map((step, i) => (
              <div key={i} className={`how-it-works__card card-${i}`}>
                <div className="how-it-works__icon">{step.icon}</div>
                <h3 className="how-it-works__card-title">{step.title}</h3>
                <p className="how-it-works__card-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* CTA Button */}
        <div className="how-it-works__cta">
          <div className="how-it-works__cta-button" 
          onClick={()=>{
            router.push("/register")
          }}
          >
            Get Started with ConsentLayer
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
