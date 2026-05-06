const Header = () => {
    return (
        <header className="sticky top-0 bg-white p-5 border-b-slate-50 sm:px-8">
			<div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
				<h1 className="m-0 text-[1.75rem] font-ManulifeBold text-greenCore-500"> My Website</h1>
				<nav className="flex-wrap: wrap gap-5 sm:gap-4">
					<a className="py-2 pt-2 text-greenCore-500 hover:text-greenCore-700 transition font-ManulifeDemiBold" href="home"> Home </a>
					<a className="py-2 pt-2 text-greenCore-500 hover:text-greenCore-700 transition font-ManulifeDemiBold" href="about"> About</a>
					<a className="py-2 pt-2 text-greenCore-500 hover:text-greenCore-700 transition font-ManulifeDemiBold" href="services"> Services</a>
					<a className="py-2 pt-2 text-greenCore-500 hover:text-greenCore-700 transition font-ManulifeDemiBold" href="contact"> Contact</a>
				</nav>
			</div>
		</header>
    )
};

export default Header;