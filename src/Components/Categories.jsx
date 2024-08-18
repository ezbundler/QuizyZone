// Categories.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import ReactLogo from "../public/React.png";
import JSLogo from "../public/JS.png";
import CLogo from "../public/C++.png";
import HTMLLogo from "../public/HTML.png";
import PythonLogo from "../public/Python.png";

const Categories = () => {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/questions/${category}`);
  };

  return (
    <div className="categories flex flex-col justify-center mt-5 bg-[#D3C5E5] text-black dark:bg-gray-900 dark:text-white">
      <div>
        <h1 className="text-3xl font-semibold m-2">Categories</h1>
      </div>
      <div className="flex justify-center">
      <button
        onClick={() => handleClick("html")}
        className="w-32 h-32 m-2 rounded bg-[#735DA5] text-gray-900  hover:border-2 hover:border-[#025c03] cursor-pointer flex items-center justify-center"
      >
        <img src={HTMLLogo} alt="HTML" className="w-16 h-16" />
      </button>
      <button
        onClick={() => handleClick("javascript")}
        className="w-32 h-32 m-2 rounded bg-[#735DA5] text-gray-900  hover:border-2 hover:border-[#025c03] cursor-pointer flex items-center justify-center"
      >
        <img src={JSLogo} alt="JavaScript" className="w-16 h-16" />
      </button>
      <button
        onClick={() => handleClick("react")}
        className="w-32 h-32 m-2 rounded bg-[#735DA5] text-gray-900  hover:border-2 hover:border-[#025c03] cursor-pointer flex items-center justify-center"
      >
        <img src={ReactLogo} alt="React" className="w-16 h-16" />
      </button>
      <button
        onClick={() => handleClick("c++")}
        className="w-32 h-32 m-2 rounded bg-[#735DA5] text-gray-900  hover:border-2 hover:border-[#025c03] cursor-pointer flex items-center justify-center"
      >
        <img src={CLogo} alt="C++" className="w-16 h-16" />
      </button>
      <button
        onClick={() => handleClick("python")}
        className="w-32 h-32 m-2 rounded bg-[#735DA5] text-gray-900  hover:border-2 hover:border-gray-800 cursor-pointer flex items-center justify-center"
      >
        <img src={PythonLogo} alt="Python" className="w-16 h-16" />
      </button>
      </div>
    </div>
  );
};

export default Categories;
