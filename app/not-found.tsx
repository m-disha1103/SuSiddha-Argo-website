import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F8F4E8] px-6 text-center">
      <h1 className="text-7xl font-bold text-[#1F5132]">404</h1>

      <h2 className="mt-4 text-3xl font-bold">
        Page Not Found
      </h2>

      <p className="mt-4 text-gray-600 max-w-md">
        The page you are looking for doesn't exist.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-full bg-[#1F5132] px-8 py-4 text-white font-semibold hover:bg-[#184228]"
      >
        Back to Home
      </Link>
    </div>
  );
}