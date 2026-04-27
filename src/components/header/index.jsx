const Header = () => {
    return (
        <header className="sticky top-0 border-b border-slate-200 bg-white px-5 py-5 md:px-8">
            <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <h1 className="m-0 text-[1.75rem] font-bold text-greenCore-500"> My Website</h1>
            <nav className="flex flex-wrap gap-5 md:gap-4">
              <a className="py-2 font-semibold text-greenCore-500 no-underline transition-colors hover:text-greenCore-700" href="home"> Home </a>
              <a className="py-2 font-semibold text-greenCore-500 no-underline transition-colors hover:text-greenCore-700" href="about"> About</a>
              <a className="py-2 font-semibold text-greenCore-500 no-underline transition-colors hover:text-greenCore-700" href="services"> Services</a>
              <a className="py-2 font-semibold text-greenCore-500 no-underline transition-colors hover:text-greenCore-700" href="contact"> Contact</a>
            </nav>
          </div>
        </header>
    )
}

export default Header;