import Header from './components/header'
import Home from './pages/home'
import About from './pages/about'
import Services from './pages/services'
import Contact from './pages/contact'
import Footer from './pages/footer'
function App() {
  return (
    <div className="">
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