import aboutImage from './assets/images/about-us.jpg'
import contactImage from './assets/images/contact.jpg'
import homeImage from './assets/images/home.jpg'
import servicesImage from './assets/images/services.jpg'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 pb-12 text-slate-800 font-ManulifeRegular">
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
      
			{/* Home Section */}
      <div className="mx-4 my-6 max-w-5xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:mx-auto">
      <img className="mb-5 h-[220px] w-full rounded-xl bg-greenCore-50 object-cover md:h-[200px]" src={homeImage} alt="Modern website workspace" />
          <h2 className="mb-3 text-2xl font-bold text-slate-800"> Welcome to my Website</h2>
          <p className="mb-4 max-w-3xl leading-7 text-slate-500">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a className="inline-block rounded-lg bg-greenCore-500 px-5 py-3 text-center font-semibold text-white no-underline transition-colors hover:bg-greenCore-600"> Learn More </a>
            <a className="inline-block rounded-lg border border-greenCore-500 bg-greenCore-50 px-5 py-3 text-center font-semibold text-greenCore-700 no-underline transition-colors hover:bg-greenCore-100"> Get in Touch</a>
          </div>
      </div>

			{/* About Section */}
    <div className="mx-4 my-6 max-w-5xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:mx-auto">
      <img className="mb-5 h-[220px] w-full rounded-xl bg-green-50 object-cover md:h-[200px]" src={aboutImage} alt="Team collaboration meeting" />
      <h2 className="mb-3 text-2xl font-bold text-slate-800">About Us</h2>
      <p className="mb-4 max-w-3xl leading-7 text-slate-500">
						We are a creative team focused on building simple, useful, and modern digital experiences.
						Our goal is to help clients turn ideas into clear and engaging websites that are easy to use.
          </p>
      <p className="max-w-3xl leading-7 text-slate-500">
						From planning and design to development and support, we value quality work, strong communication,
						and practical solutions that match real business needs.
          </p>
      </div>

			{/* Services Section */}
    	<div className="mx-4 my-6 max-w-5xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:mx-auto">
				<img className="mb-5 h-[220px] w-full rounded-xl bg-green-50 object-cover md:h-[200px]" src={servicesImage} alt="Web design and development services" />
				<h2 className="mb-3 text-2xl font-bold text-slate-800">Our Services</h2>
				<p className="mb-4 max-w-3xl leading-7 text-slate-500">
					We offer web design, responsive front-end development, website updates, and general maintenance
					for small businesses, student projects, and personal brands.
				</p>
				<p className="max-w-3xl leading-7 text-slate-500">
					Whether you need a landing page, a portfolio, or a complete company website, we can help create
					a clean and professional online presence.
				</p>
      </div>

			{/* Contact Section */}
      <div className="mx-4 my-6 grid max-w-5xl gap-3 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:mx-auto">
          <img className="mb-2 h-[220px] w-full rounded-xl bg-greenCore-50 object-cover md:h-[200px]" src={contactImage} alt="Customer support contact desk" />
          <h2 className="mb-1 text-2xl font-bold text-slate-800"> Contact Us</h2>
          <label className="mt-1 font-semibold text-slate-700"> Name:</label>
          <input className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-greenCore-500 focus:ring-4 focus:ring-greenCore-100" type="text" id="name"/>

          <label className="mt-1 font-semibold text-slate-700"> Email:</label>
          <input className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-greenCore-500 focus:ring-4 focus:ring-greenCore-100" type="email" id="email"/>

          <label className="mt-1 font-semibold text-slate-700"> Message:</label>
          <textarea className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-greenCore-500 focus:ring-4 focus:ring-greenCore-100" id="message" rows="4" cols="40"></textarea>

				<button className="mt-2 w-full rounded-xl bg-greenCore-500 px-5 py-3 font-semibold text-white transition hover:-translate-y-px hover:bg-greenCore-600 sm:w-fit" type="submit"> Send Message</button>
    	</div>

        <footer className="px-8 pt-6 text-center text-slate-500">
          <p className="mb-3"> &copy; 2026 My Website. All rights reserved.</p>
          <a className="mx-2 font-semibold text-green-700 no-underline hover:underline"> Privacy Policy</a>
          <a className="mx-2 font-semibold text-green-700 no-underline hover:underline"> Terms of Service</a>
      </footer>
    </div>
  )
}

export default App
