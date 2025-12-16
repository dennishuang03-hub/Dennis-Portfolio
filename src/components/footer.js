export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-400 border-t border-white/10">
      {/* Accent line */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col gap-6 text-center">

          {/* Primary line */}
          <p className="text-sm font-mono">
            © 2025 · Built by{" "}
            <span className="text-lime-400 font-semibold">
              Dennis
            </span>{" "}
            ·{" "}
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-lime-400 transition"
            >
              Code available on GitHub
            </a>
          </p>

          {/* Secondary line */}
          <p className="text-xs text-gray-500 font-mono">
            Made with React.js & Tailwind CSS · Assisted by Claude AI & ChatGPT · December 2025
          </p>

        </div>
      </div>
    </footer>
  );
}
