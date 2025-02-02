"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-green-500 text-white text-center p-6">
      <motion.h1
        className="text-5xl font-extrabold drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Health & Fitness Tracker
      </motion.h1>
      <motion.p
        className="mt-4 text-lg max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Track workouts, nutrition, and progress with AI-powered coaching.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Link href="/auth/login">
          <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold text-lg rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
            Get Started
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
