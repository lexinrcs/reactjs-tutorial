import aboutImage from './assets/images/about-us.jpg'
import contactImage from './assets/images/contact.jpg'
import homeImage from './assets/images/home.jpg'
import servicesImage from './assets/images/services.jpg'

function App() {
  return (
    <div className="">
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
      
		{/* Home Section */}
		<div className="md:mx-auto">
			<img className="w-full bg-greenCore-50" src={homeImage} alt="Modern website workspace" />
			<h2 className="mb-3 text-2xl text-slate-800"> Welcome to my Website</h2>
			<p className="max-w-3xl text-slate-500">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
			<div className="flex flex-col gap-3 sm:flex-row">
				<a className="inline-block rounded-lg bg-greenCore-500 px-5 py-3 text-white no-underline"> Learn More </a>
				<a className="inline-block rounded-lg border border-greenCore-500 bg-greenCore-50 px-5 py-3 text-greenCore-700 no-underline"> Get in Touch</a>
			</div>
		</div>

		{/* About Section */}
    	<div className="md:mx-auto">
			<img className="w-full bg-greenCore-50" src={aboutImage} alt="Team collaboration meeting" />
			<h2 className="mb-3 text-2xl text-slate-800">About Us</h2>
			<p className="mb-4 max-w-3xl text-slate-500">
				We are a creative team focused on building simple, useful, and modern digital experiences.
				Our goal is to help clients turn ideas into clear and engaging websites that are easy to use.
			</p>
			<p className="max-w-3xl text-slate-500">
				From planning and design to development and support, we value quality work, strong communication,
				and practical solutions that match real business needs.
			</p>
      	</div>

		{/* Services Section */}
    	<div className="md:mx-auto">
			<img className="w-full bg-greenCore-50" src={servicesImage} alt="Web design and development services" />
			<h2 className="mb-3 text-2xl text-slate-800">Our Services</h2>
			<p className="mb-4 max-w-3xl text-slate-500">
				We offer web design, responsive front-end development, website updates, and general maintenance
				for small businesses, student projects, and personal brands.
			</p>
			<p className="max-w-3xl text-slate-500">
				Whether you need a landing page, a portfolio, or a complete company website, we can help create
				a clean and professional online presence.
			</p>
      	</div>

		{/* Contact Section */}
		<div className="md:mx-auto">
			<img className="w-full bg-greenCore-50" src={contactImage} alt="Customer support contact desk" />
			<h2 className="mb-1 text-2xl text-slate-800"> Contact Us</h2>
			<label className="mt-1 text-slate-700"> Name:</label>
			<input className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition" type="text" id="name"/>

			<label className="mt-1 text-slate-700"> Email:</label>
			<input className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition" type="email" id="email"/>

			<label className="mt-1 text-slate-700"> Message:</label>
			<textarea className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition" id="message" rows="4" cols="40"></textarea>

			<button className="mt-2 w-full rounded-xl bg-greenCore-500 px-5 py-3 text-white sm:w-fit" type="submit"> Send Message</button>
		</div>

		<footer className="px-8 pt-6 text-center text-slate-500">
			<p className="mb-3"> &copy; 2026 My Website. All rights reserved.</p>
			<a className="mx-2 text-green-700 no-underline"> Privacy Policy</a>
			<a className="mx-2 text-green-700 no-underline"> Terms of Service</a>
		</footer>
    </div>
  )
}

export default App