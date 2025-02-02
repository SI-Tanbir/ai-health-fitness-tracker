"use client";
import { signInWithGoogle, logout, auth } from "@/lib/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";

export default function Login() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  if (user) {
    router.push("/dashboard");
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center bg-white p-6 rounded-lg shadow-lg">
        {user ? (
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={signInWithGoogle}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Sign in with Google
          </button>
        )}
      </div>
    </div>
  );
}
