"use client"; 
import { useState } from "react";
import Link from "next/link";

export default function Workouts() {
  const [workout, setWorkout] = useState("");
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = () => {
    if (workout) {
      setWorkouts([...workouts, workout]);
      setWorkout("");
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 text-black">
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Log Your Workout</h2>
        <input
          type="text"
          className="w-full p-2 border rounded-lg mb-2"
          placeholder="Enter workout (e.g., 10 pushups)"
          value={workout}
          onChange={(e) => setWorkout(e.target.value)}
        />
        <button onClick={addWorkout} className="w-full py-2 bg-green-500  rounded-lg">
          Add Workout
        </button>
        <ul className="mt-4">
          {workouts.map((w, index) => (


            <li key={index} className="p-2 bg-gray-200 rounded-lg my-1">{w}</li>


          ))}
        </ul>

        <Link href="/dashboard" className="block mt-6 bg-gray-500 p-3 text-white text-center rounded-lg">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
