"use client";
import { useRouter } from "next/navigation";
import ThemeToggle from "../ThemeToggle";
import "./Navbar.css"; // Assuming a separate CSS file for styles

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <svg
          className="navbar-logo"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7m-7 7v6"
          />
        </svg>
        <span
          onClick={() => {
            router.push("/");
          }}
          className="navbar-title cursor-pointer"
        >
          ConsentLayer
        </span>
      </div>
      <div className="navbar-links">
        <div
          onClick={() => {
            router.push("/#how");
          }}
          className="navbar-link cursor-pointer"
        >
          How It Works
        </div>
        <div
          onClick={() => {
            router.push("/#pricing");
          }}
          className="navbar-link cursor-pointer"
        >
          Pricing
        </div>
        <div
          onClick={() => {
            router.push("/register");
          }}
          className="navbar-signup cursor-pointer"
        >
          Sign Up
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
