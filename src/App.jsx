import Header from './components/header'
import Home from './pages/home'
import About from './pages/about'
import Services from './pages/services'
import Contact from './pages/contact'
import Footer from './components/footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 pb-12 text-slate-800 font-ManulifeRegular">
      <Header />
      
			{/* Home Section */}
			<Home/>

			{/* About Section */}
			<About/>

			{/* Services Section */}
			<Services/>

			{/* Contact Section */}
      <Contact/>

			<Footer />
      
    </div>
  )
}

export default App
