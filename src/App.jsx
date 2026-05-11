import aboutImage from './assets/images/about-us.jpg'
import contactImage from './assets/images/contact.jpg'
import homeImage from './assets/images/home.jpg'
import servicesImage from './assets/images/services.jpg'

function App() {
  return (
    <div className="">
      	<header className="sticky top-0 border-b border-slate-200 bg-white p-5 max-md:px-8">
  <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
    
    {/* H1 */}
    <h1 className="m-0 font-manulifeBold text-[1.75rem] text-greenCore-500">
      My Website
    </h1>

    {/* NAV */}
    <nav className="flex flex-wrap max-md:gap-4 md:gap-5">
      
      {/* LINKS */}
      <a className="py-2 font-manulifeDemiBold text-greenCore-500 transition-colors hover:text-greenCore-700 hover:no-underline" href="home">
        Home
      </a>

      <a className="py-2 font-manulifeDemiBold text-greenCore-500 transition-colors hover:text-greenCore-700 hover:no-underline" href="about">
        About
      </a>

      <a className="py-2 font-manulifeDemiBold text-greenCore-500 transition-colors hover:text-greenCore-700 hover:no-underline" href="services">
        Services
      </a>

      <a className="py-2 font-manulifeDemiBold text-greenCore-500 transition-colors hover:text-greenCore-700 hover:no-underline" href="contact">
        Contact
      </a>

    </nav>
  </div>
</header>
      
		{/* Home Section */}
<div className="mx-4 my-6 max-w-5xl rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
  
  {/* Image */}
  <img
    className="mb-5 h-[220px] w-full rounded-xl object-cover max-md:h-[200px]"
    src={homeImage}
    alt="Modern website workspace"
  />

  {/* Title */}
  <h2 className="mb-3 font-manulifeBold text-2xl text-slate-800">
    Welcome to my Website
  </h2>

  {/* Paragraph */}
  <p className="mb-4 max-w-3xl leading-7 text-slate-500">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>

  {/* Buttons */}
  <div className="flex flex-col gap-3 sm:flex-row">
    
    <a className="rounded-lg bg-greenCore-500 px-5 py-3 text-center font-manulifeDemiBold text-white transition-colors hover:bg-greenCore-700">
      Learn More
    </a>

    <a className="rounded-lg border border-greenCore-500 bg-greenCore-50 px-5 py-3 text-center font-manulifeDemiBold text-greenCore-700 transition-colors hover:bg-greenCore-100">
      Get in Touch
    </a>

  </div>
</div>

		{/* About Section */}
<div className="mx-4 my-6 max-w-5xl rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
  <img
    className="mb-5 h-[220px] w-full rounded-xl object-cover max-md:h-[200px]"
    src={aboutImage}
    alt="Team collaboration meeting"
  />
  <h2 className="mb-3 text-2xl font-manulifeBold text-slate-800">
    About Us
  </h2>
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
    	<div className="mx-4 my-6 max-w-5xl rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
			<img className="mb-5 h-[220px] w-full rounded-xl object-cover max-md:h-[200px]" src={servicesImage} alt="Web design and development services" />
			<h2 className="mb-3 text-2xl font-manulifeBold text-slate-800">Our Services</h2>
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
<div className="mx-4 my-6 max-w-5xl rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">

  {/* Image */}
  <img
    src={contactImage}
    alt="Customer support contact desk"
    className="mb-5 h-[220px] w-full rounded-xl object-cover max-md:h-[200px]"
  />

  {/* Title */}
  <h2 className="mb-3 text-2xl font-manulifeBold text-slate-800">
    Contact Us
  </h2>

  {/* Name */}
  <label className="block font-manulifeDemiBold text-slate-700 mt-2">
    Name:
  </label>
  <input
    type="text"
    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-greenCore-500 focus:ring-4 focus:ring-greenCore-100"
  />

  {/* Email */}
  <label className="block font-manulifeDemiBold text-slate-700 mt-2">
    Email:
  </label>
  <input
    type="email"
    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-greenCore-500 focus:ring-4 focus:ring-greenCore-100"
  />

  {/* Message */}
  <label className="block font-manulifeDemiBold text-slate-700 mt-2">
    Message:
  </label>
  <textarea
    rows="4"
    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-greenCore-500 focus:ring-4 focus:ring-greenCore-100"
  ></textarea>

  {/* Button */}
  <button className="mt-3 w-full rounded-xl bg-greenCore-500 px-5 py-3 font-manulifeDemiBold text-white transition-all hover:-translate-y-[1px] hover:bg-greenCore-600 sm:w-fit">
    Send Message
  </button>

</div>
<footer className="px-8 pt-6 text-center text-slate-500">
  <p className="mb-3">© 2026 My Website. All rights reserved.</p>
  <a className="mx-2 font-manulifeDemiBold text-green-700 hover:underline">Privacy Policy</a>
  <a className="mx-2 font-manulifeDemiBold text-green-700 hover:underline">Terms of Service</a>
</footer>

    </div>
  )
}

export default App