import React from 'react';

const SearchSection = () => {
  return (
    <div className="search mt-4 mx-8 flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 w-4/5 h-full rounded-tl-lg rounded-bl-lg border border-[#735DA5] "
      />
      <button
        onClick={() => {}}
        className="h-full px-4 py-2 w-14  bg-[#735DA5] text-white rounded-tr-lg rounded-br-lg border-none cursor-pointer hover:bg-[#270e30] focus:outline-none focus:ring-2 focus:ring-gray-800"
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      <button className="h-full px-4 py-2 ml-36 bg-[#735DA5] text-white rounded-tr-lg rounded-br-lg border-none cursor-pointer hover:bg-[#270e30] focus:outline-none focus:ring-2 focus:ring-gray-800">
        <i className="fa-solid fa-sliders"></i>
      </button>
    </div>
  );
};

export default SearchSection;
