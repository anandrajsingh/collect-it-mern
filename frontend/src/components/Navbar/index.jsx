import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo_no_background from "../../assets/logo_no_background.png";
import toggle_night from "../../assets/night.png"
import toggle_day from "../../assets/day.png";
import { useState } from "react";

function Navbar({ theme, setTheme }) {
  const toggle_mode = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
  }
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='nav'>

      <Link to="/">
        <img src={logo_no_background} alt="logo" className="logo" />
      </Link>

      <div onClick={() => {setMenuOpen(!menuOpen)}} className="menu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open": ""}>
        <li><NavLink to="/profile">Profile</NavLink></li>
        <li><NavLink to="/settings">Settings</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
      </ul>

      <img onClick={() => { toggle_mode() }} src={theme == 'light' ? toggle_night : toggle_day} alt="" className={menuOpen ? "toggle-icon-open" : "toggle-icon"} />

    </div>
  )
}

export default Navbar
