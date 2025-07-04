"use client";
import React, { useState } from "react";
import "./SignupForm.css";
import Navbar from "../components/nav_bar/Navbar";
import { OrganisationHandler } from "@/src/interfaces/handlers/organisationHandler";

// Define interfaces for type safety
interface Signup {
  org: string;
  website: string;
  adminName: string;
  email: string;
  password: string;
  country: string;
}

// Mock country options (ISO 3166-1 alpha-2 codes for simplicity)
const countries = [
  { value: "", label: "Select Country/Region" },
  { value: "US", label: "United States" },
  { value: "GB", label: "United Kingdom" },
  { value: "CA", label: "Canada" },
  { value: "AU", label: "Australia" },
  { value: "DE", label: "Germany" },
  { value: "FR", label: "France" },
  { value: "IN", label: "India" }
  // Add more as needed
];

const SignupForm: React.FC = () => {
  const [data, setData] = useState<Signup>({
    org: "",
    website: "",
    adminName: "",
    email: "",
    password: "",
    country: ""
  });
  const [errors, setErrors] = useState<Partial<Signup>>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(false);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: Partial<Signup> = {};
    if (!data.org) newErrors.org = "Organization Name is required";
    if (!data.website) {
      newErrors.website = "Website URL is required";
    } else if (
      !/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/.test(data.website)
    ) {
      newErrors.website = "Invalid URL format";
    }
    if (!data.adminName) newErrors.adminName = "Admin Name is required";
    if (!data.email) {
      newErrors.email = "Admin Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!data.password) {
      newErrors.password = "Password is required";
    } else if (data.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    const result = await OrganisationHandler.createOrganizationController(
      data.org,
      data.adminName,
      data.email,
      data.website,
      data.country,
      data.password
    );

    setTimeout(() => {
      setLoading(false);
      setDone(true);
    }, 1500);
  };

  // Handle redirect after signup
  const handleRedirect = () => {
    // In a real app, redirect to dashboard or login
    window.location.href = "/dashboard";
  };

  if (done) {
    return (
      <div className="signup-form__success">
        <div className="signup-form__success-icon">🎉</div>
        <h3 className="signup-form__success-title">Signup Successful!</h3>
        <p className="signup-form__success-message">
          Check your email for next steps to activate your ConsentLayer account.
        </p>
        <button
          onClick={handleRedirect}
          className="signup-form__success-button"
        >
          Go to Dashboard
        </button>
      </div>
    );
  }

  return (
    <section className="signup-form">
      <Navbar />
      <div className="signup-form__overlay"></div>
      <div className="signup-form__container">
        <form className="signup-form__form" onSubmit={handleSubmit} id="signup">
          <h3 className="signup-form__title">Sign Up for ConsentLayer</h3>
          <p className="signup-form__intro">
            Create your account to start managing user consent with ease.
          </p>
          <div className="signup-form__field">
            <label className="signup-form__label" htmlFor="org">
              Organization Name
            </label>
            <input
              name="org"
              id="org"
              placeholder="Enter your organization name"
              className="signup-form__input"
              required
              value={data.org}
              onChange={handleChange}
            />
            {errors.org && (
              <span className="signup-form__error">{errors.org}</span>
            )}
          </div>
          <div className="signup-form__field">
            <label className="signup-form__label" htmlFor="website">
              Website URL
            </label>
            <input
              name="website"
              id="website"
              type="url"
              placeholder="https://example.com"
              className="signup-form__input"
              required
              value={data.website}
              onChange={handleChange}
            />
            {errors.website && (
              <span className="signup-form__error">{errors.website}</span>
            )}
          </div>
          <div className="signup-form__field">
            <label className="signup-form__label" htmlFor="adminName">
              Admin Name (owner)
            </label>
            <input
              name="adminName"
              id="adminName"
              placeholder="Enter admin full name"
              className="signup-form__input"
              required
              value={data.adminName}
              onChange={handleChange}
            />
            {errors.adminName && (
              <span className="signup-form__error">{errors.adminName}</span>
            )}
          </div>
          <div className="signup-form__field">
            <label className="signup-form__label" htmlFor="email">
              Admin Email
            </label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Enter admin email"
              className="signup-form__input"
              required
              value={data.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="signup-form__error">{errors.email}</span>
            )}
          </div>
          <div className="signup-form__field">
            <label className="signup-form__label" htmlFor="password">
              Password
            </label>
            <input
              name="password"
              id="password"
              type="password"
              placeholder="Create a password"
              className="signup-form__input"
              required
              value={data.password}
              onChange={handleChange}
            />
            {errors.password && (
              <span className="signup-form__error">{errors.password}</span>
            )}
          </div>
          <div className="signup-form__field">
            <label className="signup-form__label" htmlFor="country">
              Country/Region 
            </label>
            <select
              name="country"
              id="country"
              className="signup-form__input"
              value={data.country}
              onChange={handleChange}
            >
              {countries.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="signup-form__button"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
          <div className="signup-form__terms">
            By signing up, you agree to our{" "}
            <a className="signup-form__link" href="#">
              Terms
            </a>{" "}
            and{" "}
            <a className="signup-form__link" href="#">
              Privacy Policy
            </a>
            .
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignupForm;
