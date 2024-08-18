import React from 'react';
import Nav from './Nav.jsx';
import HeroSection from './HeroSection.jsx';
import SearchSection from './SearchSection.jsx';
import Categories from './Categories.jsx';
import RecentActivities from './RecentActivities.jsx';
import Footer from './Footer.jsx';

const Container = ({ activities }) => {
  return (
    <div className='container min-h-screen w-screen flex flex-col bg-[#D3C5E5] text-black dark:bg-gray-900 dark:text-white'>
      <Nav/>
      <div className=' min-w-full flex flex-col min-h-screen justify-center bg-[#D3C5E5] text-black dark:bg-gray-900 dark:text-white'>
      <HeroSection/>
      <SearchSection/>
      <Categories/>
      <RecentActivities activities={activities} />
      
      </div>
      <Footer/>
    </div>
  );
};

export default Container;
