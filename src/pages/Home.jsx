import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { sumaryBar} from '../data/dummy';
//import { useStateContext } from '../contexts/ ContextProvider';

const Home = () => {
//const { currentColor, } = useStateContext();

  return (
<div className="mt-20">
    
  <div className="flex flex-wrap lg:flex-nowrap m-3 justify-center gap-2 ">
        {sumaryBar.map((item) => (
    <div key={item.title} className="  bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-50  p-4 pt-9 rounded-2xl w-full hover:drop-shadow-xl ">
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="text-2xl opacity-0.9 rounded-full  p-4 pt-0 hover:drop-shadow-xl"
            >
              {item.icon}
            </button>

        <div className='flex justify-between items-center'>
          <div className=''>
            <p className="mt-1">
              <span className='text-green-600 font-extrabold'>{item.value}</span>
            </p>
            <p className=" font-bold text-gray-400  mt-1">{item.title}</p>
          </div>
          <div style={{ width: 130, height: 130, marginTop: -40 }}>
            <CircularProgressbar value={item.percent}  text={`${item.percent}%`}
              styles={{
                trail: {
                  transform: 'rotate(-135deg)',
                  transformOrigin: 'center center',
                  strokeWidth: 2,
                },

                path: {
                  transform: 'rotate(-135deg)',
                  transformOrigin: 'center center',
                  stroke: "#34ccfc",
                  strokeWidth: 5,
                }
              }}
            />
          </div>
       </div>     

    </div>

        ))}
  </div>
       

</div>
);
};

export default Home
