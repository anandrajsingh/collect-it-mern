import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo_no_background from "../../assets/logo_no_background.png";
import toggle_night from "../../assets/night.png"
import toggle_day from "../../assets/day.png";

function Navbar({theme, setTheme}) {
  const toggle_mode = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
  }
  return (
    <div className='nav'>

      <img src={logo_no_background} alt="logo" className="logo"/>

      <ul>
        <li>Home</li>
        <li>Settings</li>
        <li>About Us</li>
      </ul>

      <img onClick={() => {toggle_mode()}} src={theme == 'light' ? toggle_night : toggle_day} alt="" className="toggle-icon"/>

    </div>
  )
}

export default Navbar
