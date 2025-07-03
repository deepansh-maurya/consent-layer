import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur z-50 fixed top-0 left-0">
      <div className="font-bold text-lg">ConsentLayer</div>
      <div className="flex items-center space-x-2">
        <a href="#how" className="text-sm hover:underline">How It Works</a>
        <a href="#pricing" className="text-sm hover:underline">Pricing</a>
        <a href="#signup" className="text-sm font-semibold px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition">Sign Up</a>
        <ThemeToggle />
      </div>
    </nav>
  );
}
