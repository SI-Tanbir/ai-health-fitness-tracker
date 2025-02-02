"use client";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow-md">
      <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
        🏋️‍♂️ Fitness Tracker
      </Link>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <Link
          href="/auth/login"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500 transition"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
