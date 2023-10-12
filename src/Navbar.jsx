import { useState } from "react";
import { Outlet , NavLink } from "react-router-dom";

const Navbar = () => {

  const [ isDark , setDark ] = useState(false);

  const handleClick = (e)=>{
    if( isDark ){
      setDark(false);
      document.body.style.background = "white"
      document.body.style.color = "black"
      e.target.innerHTML = "Dark";
    }else{
      setDark(true)
      e.target.innerHTML = "Light";
      document.body.style.background = "#060918"
      document.body.style.color = "white"

    }
  }

  return (
    <>
    <nav>
      <NavLink to="/" >React-Router-Dom </NavLink>
      <div>
      <NavLink to="/" >Home </NavLink>
      <NavLink to="/about" >About</NavLink>
      <NavLink onClick={handleClick} > Dark </NavLink>

      
      </div>
    </nav>
    <div>
      <Outlet />
    </div>
   </>
  )
}

export default Navbar;