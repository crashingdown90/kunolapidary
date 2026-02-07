import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl font-bold text-[#D2B48C] mb-4">404</div>
        <h1 className="text-3xl font-bold text-[#2D1810] mb-4">
          Page Not Found
        </h1>
        <p className="text-[#8B7D6B] mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-[#5C4033] text-white font-medium rounded-lg hover:bg-[#4A3328] transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/blog"
            className="px-6 py-3 border-2 border-[#5C4033] text-[#5C4033] font-medium rounded-lg hover:bg-[#5C4033] hover:text-white transition-colors"
          >
            Browse Articles
          </Link>
        </div>
      </div>
    </div>
  );
}
