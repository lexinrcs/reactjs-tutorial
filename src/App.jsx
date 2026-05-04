import Header from './components/header/header'
import Home from './pages/home'
import About from './pages/about'
import Services from './pages/services'
import Contact from './pages/contact'
import Footer from './components/footer'

function App() {
  return (
    <div className="min-h-screen pb-12 bg-slate-50">
      <Header />
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
