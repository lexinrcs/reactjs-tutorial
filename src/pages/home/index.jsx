const Header = () => {
  return (
    <header className="sticky top-0 bg-navyNeutral-50 border-b border-navyNeutral-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-[1.75rem] font-bold text-greenCore-400">
          My Website
        </h1>

        <nav className="flex gap-6">
          <a href="#home" className="text-greenCore-400 hover:text-navyNeutral-400">
            Home
          </a>
          <a href="#about" className="text-greenCore-400 hover:text-navyNeutral-400">
            About
          </a>
          <a href="#services" className="text-greenCore-400 hover:text-navyNeutral-400">
            Services
          </a>
          <a href="#contact" className="text-greenCore-400 hover:text-navyNeutral-400">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header