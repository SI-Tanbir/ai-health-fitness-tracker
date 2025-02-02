import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-xl font-bold">Dashboard</h1>

        <div className="mt-6 space-y-4">
          <Link href="/dashboard/workouts" className="block bg-green-500 p-3 text-white text-center rounded-lg">
            Log Workouts
          </Link>
          <Link href="/dashboard/ai-coach" className="block bg-blue-500 p-3 text-white text-center rounded-lg">
            AI Coach
          </Link>
        </div>
      </div>
    </div>
  );
}
