const Header = () => {
    return (
          <header className="sticky top-0 border-b border-slate-200 bg-white p-5 max-md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <h1 className="m-0 font-manulife-bold text-[1.75rem] text-greenCore-500">
          My Website
        </h1>

       
        <nav className="flex flex-wrap gap-4 md:gap-5">
          <a
            href="/home"
            className="pt-2 font-manulife-demibold text-greenCore-500 no-underline transition-colors hover:text-greenCore-700"
          >
            Home
          </a>

          <a
            href="/about"
            className="pt-2 font-manulife-demibold text-greenCore-500 no-underline transition-colors hover:text-greenCore-700"
          >
            About
          </a>

          <a
            href="/services"
            className="pt-2 font-manulife-demibold text-greenCore-500 no-underline transition-colors hover:text-greenCore-700"
          >
            Services
          </a>

          <a
            href="/contact"
            className="pt-2 font-manulife-demibold text-greenCore-500 no-underline transition-colors hover:text-greenCore-700"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
    )
}

export default Header