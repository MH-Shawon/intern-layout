
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Pages/Home/Shared/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/Home/About/About'
import Portfolio from './Pages/Portfolio/Portfolio'
import Rockstar from './Pages/BuyRockstar/Rockstar'
import Contact from './Pages/Contact/Contact'
import All from './Pages/Portfolio/All'
import Marketing from './Pages/Portfolio/Marketing'
import Web from './Pages/Portfolio/Web'
import Graphics from './Pages/Portfolio/Graphics'

function App() {
  

  return (
    <div  className=''>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='home' element={<Home></Home>}/>
        <Route path='about'element={<About></About>}/>
        <Route path='portfolio'element={<Portfolio></Portfolio>}/>
        <Route path='contact'element={<Contact></Contact>}/>
        <Route path='buyrockstar'element={<Rockstar></Rockstar>}/>
        <Route path='all'element={<All></All>}/>
        <Route path='marketing'element={<Marketing></Marketing>}/>
        <Route path='web'element={<Web></Web>}/>
        <Route path='graphics'element={<Graphics></Graphics>}/>
      </Routes>
    </div>
  )
}

export default App
