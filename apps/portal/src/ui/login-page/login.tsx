import React from "react";

function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#191b22] to-[#23262f] gap-20 px-2 py-8">
      {/* Glass Heading */}
      <div className="
        w-full max-w-5xl
        rounded-2xl mb-10
        py-7 
        bg-gradient-to-br from-white/40 via-white/10 to-white/5
        border border-white/40
        shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
        backdrop-blur-2xl
        flex flex-col items-center
        "
      >
        <h1 className="text-3xl md:text-3xl font-bold text-white tracking-tight text-center drop-shadow-lg">
          Welcome back! Log in to manage your organization’s consent settings
        </h1>
       
      </div>
      {/* Login Card */}
      <div className="
        w-full max-w-md
        rounded-2xl
        px-7 py-10
        bg-gradient-to-br from-white/40 via-white/10 to-white/5
        border border-white/40
        shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
        backdrop-blur-2xl
        "
      >
        <div className="mb-8 flex flex-col items-center">
          <span className="text-2xl font-bold text-white tracking-wide drop-shadow-lg">Sign In</span>
          <span className="text-sm mt-2 text-white/70">Welcome back! Please enter your details.</span>
        </div>
        <form className="flex flex-col gap-6">
          <input
            className="rounded-xl px-4 py-3 bg-white/30 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 shadow-inner backdrop-blur-md"
            type="text"
            placeholder="Slug"
            autoComplete="off"
          />
          <input
            className="rounded-xl px-4 py-3 bg-white/30 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 shadow-inner backdrop-blur-md"
            type="email"
            placeholder="Email"
            autoComplete="off"
          />
          <input
            className="rounded-xl px-4 py-3 bg-white/30 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 shadow-inner backdrop-blur-md"
            type="password"
            placeholder="Password"
            autoComplete="off"
          />
          <button
            type="submit"
            className="mt-3 bg-white/80 text-black font-semibold rounded-xl py-3 shadow-lg hover:bg-white hover:scale-105 transition-all duration-200"
          >
            Login
          </button>
        </form>
        <div className="mt-6 flex justify-between text-sm text-gray-200">
          <a href="#" className="hover:underline hover:text-white">Forgot password?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
