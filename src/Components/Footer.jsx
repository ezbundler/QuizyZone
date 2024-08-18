import React from 'react'

const Footer = () => {
  return (
<nav className="bg-[#735DA5] dark:bg-[#b993eb] p-4 flex justify-around items-center text-grey-800">
      <a href="/" className="flex flex-col items-center hover:text-[#b993eb] dark:hover:text-[#443071]">
        <i className="fa-solid fa-house text-2xl"></i>
        <span className="text-sm">Home</span>
      </a>
      <a href="/account" className="flex flex-col items-center hover:text-[#b993eb] dark:hover:text-[#443071]">
        <i className="fa-solid fa-user text-2xl"></i>
        <span className="text-sm">Account</span>
      </a>
      <a href="/likes" className="flex flex-col items-center hover:text-[#b993eb] dark:hover:text-[#443071]">
        <i className="fa-solid fa-heart text-2xl"></i>
        <span className="text-sm">Likes</span>
      </a>
    </nav>  )
}

export default Footer