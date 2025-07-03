import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <h1 className="hero-title">
        Universal Consent Management, <span className="hero-title-highlight">Simplified</span>
      </h1>
      <p className="hero-description">
        ConsentLayer lets organizations manage user consent & tracking across all platforms. Easy SDK, analytics, and compliance – in minutes.
      </p>
      <a href="#signup" className="hero-cta">
        Get Started Free
      </a>
    </section>
  );
}