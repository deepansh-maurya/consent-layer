import { useState } from "react";

type Signup = {
  org: string;
  email: string;
  password: string;
};

export default function SignupForm() {
  const [data, setData] = useState<Signup>({ org: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
    }, 1500);
  };

  if (done)
    return (
      <div className="p-6 text-center text-green-600 font-semibold">
        🎉 Signup successful! Check your email for next steps.
      </div>
    );

  return (
    <form
      className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 max-w-md w-full space-y-5"
      onSubmit={handleSubmit}
      id="signup"
    >
      <h3 className="text-2xl font-bold mb-3 text-center">Sign Up</h3>
      <input
        name="org"
        placeholder="Organization Name"
        className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
        value={data.org}
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        placeholder="Work Email"
        className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
        value={data.email}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
        value={data.password}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-bold p-3 rounded-lg hover:bg-blue-700 transition"
        disabled={loading}
      >
        {loading ? "Signing up..." : "Sign Up"}
      </button>
      <div className="text-xs text-gray-500 mt-2 text-center">
        By signing up you agree to our <a className="underline" href="#">Terms</a> and <a className="underline" href="#">Privacy Policy</a>.
      </div>
    </form>
  );
}
