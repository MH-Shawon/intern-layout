
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Pages/Home/Shared/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/Home/About/About'
import Portfolio from './Pages/Portfolio/Portfolio'
import Contact from './Pages/Contact/Contact'

function App() {
  

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/about'element={<About></About>}/>
        <Route path='/portfolio'element={<Portfolio></Portfolio>}/>
        <Route path='/contact'element={<Contact></Contact>}/>
        <Route path='/buyrockstar'element={<Portfolio></Portfolio>}/>
      </Routes>
    </div>
  )
}

export default App
