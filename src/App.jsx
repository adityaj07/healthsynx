import "./App.css"
import Navbar from './components/Navbar'
import Home from './components/Home'
import Features from './components/Features'
import Guide from './components/Guide'
import Pricing from "./components/Pricing"
// import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="w-[70%] mx-auto font-Comfortaa">
     <Navbar/>
     <Home/>
     <Features/>
     <Guide/>
     <Pricing/>
     <Footer/>
    </div>
  )
}

export default App
