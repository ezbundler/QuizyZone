import React from 'react'
import ThemeToggle from './themeToggler.jsx'
import { useNavigate } from 'react-router-dom'


const Nav = () => {

const navigate = useNavigate();
  
const handleLogOut =()=>{
navigate("/");
}
 
  




  return (
    <div className='navbar flex justify-between bg-[#735DA5] w-full text-black text-xl font-medium dark:bg-[#b993eb] dark:text-white p-2 '>Navbar
    
    <div>
    <ThemeToggle/>
    <button onClick={handleLogOut} className="md:ml-3  px-4 py-2 m-2 rounded bg-gray-800 text-white border-none cursor-pointer hover:bg-[#D3C5E5] focus:outline-none focus:ring-2 focus:ring-blue-500">Log Out</button>
    </div>
    </div>
  )
}

export default Nav