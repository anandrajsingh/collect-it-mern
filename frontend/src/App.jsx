import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar'

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
          <Route exact path='/' element={<span>Home Page</span>} />
          <Route exact path='*' element={<Navigate to="/" />} />
          <Route exact path='/user' element={<span>User Profile</span>} />
          <Route exact path='/settings' element={<span>settings Page</span>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
