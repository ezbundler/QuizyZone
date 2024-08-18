import React from 'react';
import { data } from '../utils/data.js';
const RecentActivities = ({ activities }) => {

  // const recentActivity = activities.map((activity)=>{
  //   activities.category

  // })

//  const handleActivity = (category)=>{
//   if(category.toUpperCase()===data.quiz.category.toUpperCase()){
//     return data.quiz.category.link
//   }
// console.log(data.quiz.category.link);
//  }


  return (
    <div className="bg-[#D3C5E5] text-black dark:bg-gray-900 dark:text-white p-4">
      <h2 className="text-lg font-bold">Recent Activities</h2>
      {activities.length === 0 ? (
        <p>No recent activities.</p>

      ) : (
        <ul>
          {activities.map((activity, index) => (
            <li key={index} className="p-2 border-b border-gray-200 dark:border-gray-700">
              <div className='recent-activities  text-black dark:bg-gray-800 dark:text-white p-6  md:mx-8 sm:ml-6 sm:mr-3 lg:mx-10 md:h-48 sm:h-56 w-11/12 content-center rounded-lg'>
              
              {/* {handleActivity(activity.category)} */}
              <span className="font-semibold">{activity.category.toUpperCase()}</span>: Scored {activity.score} points
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecentActivities;
