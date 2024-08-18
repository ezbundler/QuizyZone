import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './Components/Container.jsx';
import Questions from './Components/Questions.jsx';
import './App.css';
import Login from './Components/Login.jsx';


function App() {
  const [activities, setActivities] = useState([]);

  return (
    <Router>
      <div className='flex justify-center bg-[#D3C5E5] text-black dark:bg-gray-900 dark:text-white'>
        
        <Routes>
        <Route path="/" element= {<Login/>} />
          <Route path="/container" element={<Container activities={activities} />} />
          <Route path="/questions/:category" element={<Questions setActivities={setActivities} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
