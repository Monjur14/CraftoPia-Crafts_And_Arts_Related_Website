import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
    <Navbar/>
      <div className='flex flex-col w-full h-screen'>       
        <div className='flex-1'>
          <Outlet/>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default App
