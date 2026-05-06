



import Header from './pages/home/index.jsx'
import Home from './pages/home/home.jsx'
import About from './pages/about/index.jsx'
import Service from './pages/about/service.jsx'
import Contact from './pages/contact/index.jsx'

function App() {
  return (
    <div className="">
		<Header/>
      
		{/* Home Section */}
		<Home/>
		<About/>
		<Service/>
		<Contact/>
		{/* Services Section */}


		{/* Contact Section */}
	

		<footer className="px-8 pt-6 text-center text-slate-500">
			<p className="mb-3"> &copy; 2026 My Website. All rights reserved.</p>
			<a className="mx-2 text-green-700 no-underline"> Privacy Policy</a>
			<a className="mx-2 text-green-700 no-underline"> Terms of Service</a>
		</footer>
    </div>
  )
}

export default App