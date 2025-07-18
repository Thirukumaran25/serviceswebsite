
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Cctv from './components/Cctv'
import About from './components/About'
import Project from './components/Project'
import Electrical from './components/Electrical'
import Bms from './components/Bms'
import Quote from './components/Quote'
import Terms from './components/Terms'
import Privacy from './components/Privacy'
import Carrer from './components/Carrer'


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/cctv' element={<Cctv/>}/>
        <Route path='/electric' element={<Electrical/>}/>
        <Route path='/bms' element={<Bms/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/quote' element={<Quote/>}/>
        <Route path='/term' element={<Terms/>}/>
        <Route path='/policy' element={<Privacy/>}/>
        <Route path='/career' element={<Carrer/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
