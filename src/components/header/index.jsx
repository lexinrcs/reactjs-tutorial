const Header = () => {
    return (
        <header className="sticky top-0 bg-white">
            <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <h1 className="m-0 text-[1.75rem]"> My Website</h1>
                <nav className="">
                    <a className="py-2" href="home"> Home </a>
                    <a className="py-2" href="about"> About</a>
                    <a className="py-2" href="services"> Services</a>
                    <a className="py-2" href="contact"> Contact</a>
                </nav>
            </div>
        </header>
    )
}

export default Header