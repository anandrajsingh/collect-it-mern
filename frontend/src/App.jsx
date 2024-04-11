import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import AboutUs from './pages/About Us'

function App() {

  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    localStorage.setItem('current_theme', theme)
  }, [theme])

  return (
    <div className={`container ${theme}`}>
      <BrowserRouter >
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route exact path='/' element={<Homepage/>} />
          <Route exact path='*' element={<Navigate to="/" />} />
          <Route exact path='/profile' element={ <Profile/> } />
          <Route exact path='/settings' element={<Settings/>} />
          <Route exact path='/about' element={<AboutUs/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
