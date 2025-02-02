"use client"; 
import { useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function AICoach() {
  const [goal, setGoal] = useState("");
  const [plan, setPlan] = useState("");

  const getWorkoutPlan = async () => {
    const res = await axios.post("/api/ai-coach", { goal });
    setPlan(res.data.plan);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">AI Coach</h2>
        <input
          type="text"
          className="w-full p-2 border rounded-lg mb-2"
          placeholder="Enter fitness goal (e.g., lose weight, build muscle)"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <button onClick={getWorkoutPlan} className="w-full py-2 bg-blue-500 text-white rounded-lg">
          Get Workout Plan
        </button>
        {plan && <p className="mt-4 p-4 bg-gray-200 rounded-lg">{plan}</p>}
      </div>
    </div>
  );
}
