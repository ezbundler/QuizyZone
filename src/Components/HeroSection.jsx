import React from 'react'

import { useNavigate } from 'react-router-dom';
const HeroSection = () => {


  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/questions/${category}`);
  };

  return (
    <div className='hero  text-black dark:bg-gray-800 dark:text-white p-6 my-4 md:mx-8 sm:ml-6 sm:mr-3 lg:mx-10 md:h-48 sm:h-56 w-11/12 content-center rounded-lg'>
      <div className=' w-4/5 md:w-11/12 sm:w-full' ><h1 className=' md:text-3xl sm:text-2xl sm:font-normal'>Test Your Knowledge with Quizzes</h1>
  <p className=' md:w-4/5 sm:w-5/6 sm:text-base md:font-medium lg:w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos optio repellendus dolore veniam ipsa eius qui provident aut impedit reiciendis.</p>
  <button onClick={()=>handleClick("random")} className="md:ml-3  px-4 py-2 m-2 rounded bg-gray-800 text-white border-none cursor-pointer hover:bg-[#735DA5] focus:outline-none focus:ring-2 focus:ring-blue-500">Play Now</button>
      </div>
    </div>
  )
}

export default HeroSection