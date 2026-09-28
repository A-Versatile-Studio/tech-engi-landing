export default function Header() {
  return (
    <header className="sticky top-0 z-[9] border-b border-line/80 bg-bg/78 backdrop-blur-[14px]">
      <div className="mx-auto flex h-[76px] max-w-[1200px] items-center justify-between gap-4 px-8">
        <a href="#top" className="flex items-center gap-2.5 text-xl font-semibold text-ink">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#7B95F5"
            strokeWidth={1.8}
            strokeLinejoin="round"
          >
            <path d="M12 2l8.5 5v10L12 22 3.5 17V7z" />
            <path d="M12 22V12M12 12L3.5 7M12 12l8.5-5" />
          </svg>
          Tech Engi
        </a>

        <nav className="hidden gap-9 text-[0.95rem] md:flex">
          <a href="#who" className="hover:text-ink">
            Platform
          </a>
          <a href="#how" className="hover:text-ink">
            How it works
          </a>
          <a href="#leads" className="hover:text-ink">
            Leads
          </a>
          <a href="#faq" className="hover:text-ink">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-2.5">
          <a href="#top" className="btn-outline btn-sm hidden sm:inline-flex">
            Login
          </a>
          <a href="#leads" className="btn btn-sm">
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}
