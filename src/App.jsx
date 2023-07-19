import "./App.css"
import Navbar from './components/Navbar'
import Home from './components/Home'
import Features from './components/Features'
import Guide from './components/Guide'

function App() {
  return (
    <div className='w-[70%] mx-auto font-Comfortaa'>
     <Navbar/>
     <Home/>
     <Features/>
     <Guide/>
    </div>
  )
}

export default App
