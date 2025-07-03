"use client"
import { useRouter } from "next/navigation";
import ThemeToggle from "../ThemeToggle";
import "./Navbar.css"; // Assuming a separate CSS file for styles

export default function Navbar() {
  const router = useRouter()
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <svg className="navbar-logo" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7m-7 7v6" />
        </svg>
        <span 
        onClick={()=>{
            router.push("/")
        }}
        className="navbar-title cursor-pointer">ConsentLayer</span>
      </div>
      <div className="navbar-links">
        <a href="#how" className="navbar-link">How It Works</a>
        <a href="#pricing" className="navbar-link">Pricing</a>
        <a href="#signup" className="navbar-signup">Sign Up</a>
        <ThemeToggle />
      </div>
    </nav>
  );
}