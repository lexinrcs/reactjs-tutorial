import Header from './components/header'
import Home from './pages/home'
import AboutUs from './pages/about'
import Services from './pages/services'
import ContactUs from './pages/contact'
import Footer from './components/footer'

function App() {
  return (
    <div className="min-h-screen pb-12 bg-slate-50">
		{/* Header Section */}
		<Header/>
			
		{/* Home Section */}
		<Home/>

		{/* About Section */}
    	<AboutUs/>

		{/* Services Section */}
    	<Services/>

		{/* Contact Section */}
		<ContactUs/>

		{/* Footer Section*/}
		<Footer/>

    </div>
  )
}

export default App