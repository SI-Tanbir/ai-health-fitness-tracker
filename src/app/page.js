import Link from "next/link";

export default function Home() {
  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-green-400 text-white text-center p-6">
      <h1 className="text-5xl font-extrabold drop-shadow-lg">Health & Fitness Tracker</h1>
      <p className="mt-4 text-lg max-w-lg">
        Track workouts, nutrition, and progress with AI-powered coaching.
      </p>
      <Link href="/auth/login">
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold text-lg rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
          Get Started
        </button>
      </Link>
    </div>
  );
}
