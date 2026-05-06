import Header from './components/header'
import Home from './components/home'
import About from './components/about'
import Services from './components/services'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  return (

    <div className="min-h-screen pb-12 bg-slate-50">
		<Header/>
      
		{/* Home Section */}
		<Home/>

		{/* About Section */}
    	<About/>

		{/* Services Section */}
		<Services/>
    	

		{/* Contact Section */}
		<Contact/>

		<Footer/>
    </div>
  )
}

export default App