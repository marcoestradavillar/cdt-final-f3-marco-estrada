
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Contact from './Pages/Contact'
import Favs from './Pages/Favs'
import Detail from './Pages/Detail'
import Footer from './Components/Footer'


function App() {


  return (
    <>

    <h1>BIENVENIDOS A LA CLINICA ODONTOLOGICA</h1>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/favs' element={<Favs/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>

      </Routes>
      <Footer/>
    </>
  )
}

export default App
