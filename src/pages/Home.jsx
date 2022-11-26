/* eslint-disable no-unused-vars */
import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { Button, Pie, SparkLine, Stacked } from '../components/Expor';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { useStateContext } from '../contexts/ ContextProvider';
import { GoPrimitiveDot } from 'react-icons/go';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

import { sumaryBar, ecomPieChartData, SparklineAreaData, dropdownData} from '../data/dummy';


const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Home = () => {
const { currentColor,currentMode } = useStateContext();

return (
<div className="mt-20 m-2 md:m-15 p-2 md:p-5 bg-half-transparent rounded-3xl">
   
 {/*TEMPORIZADOR */}
<div className=' bg-white  dark:bg-secondary-dark-bg p-5 rounded-xl'>

  <div className='flex flex-wrap lg:flex-nowrap m-3 justify-center '>
    <button 
     type="button" 
     style={{ backgroundColor: currentColor }}  
     className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3">
   <AiFillCaretLeft />
  </button>

    <h1 className='text-1xl font-extrabold dark:text-gray-200 text-center m-2'> Dezembro de 2022</h1>

    <button 
     type="button" 
     style={{ backgroundColor: currentColor }}  
     className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3">
    <AiFillCaretRight />
    </button>
  </div>
 
    {/*<hr className=' my-5 border-gray-100'/>*/}
</div> 

        {/*CARD */}
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
              <span className='dark:text-gray-200  text-xl font-extrabold'>{item.value}</span>
            </p>
            <span className={`text-sm text-${item.pcColor} ml-2`}>
                {item.percentage}
              </span>
            <p className=" font-bold text-gray-400  mt-1">{item.title}</p>
          </div>
          <div style={{ width: 110, height: 110, marginTop: -40 }}>
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

    {/*Revenue Updates */}
    <div className="flex gap-10 flex-wrap justify-center">
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
        <div className="flex justify-between">
          <p className="font-semibold text-xl">Revenue Updates</p>
          <div className="flex items-center gap-4">
            <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
              <span>
                <GoPrimitiveDot />
              </span>
              <span>Expense</span>
            </p>
            <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
              <span>
                <GoPrimitiveDot />
              </span>
              <span>Budget</span>
            </p>
          </div>
        </div>
        <div className="mt-10 flex gap-10 flex-wrap justify-center">
          <div className=" border-r-1 border-color m-4 pr-10">
            <div>
              <p>
                <span className="text-3xl font-semibold">$93,438</span>
                <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                  23%
                </span>
              </p>
              <p className="text-gray-500 mt-1">Budget</p>
            </div>
            <div className="mt-8">
              <p className="text-3xl font-semibold">$48,487</p>

              <p className="text-gray-500 mt-1">Expense</p>
            </div>

            <div className="mt-5">
              <SparkLine currentColor={currentColor} id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color={currentColor} />
            </div>
            <div className="mt-10">
              <Button
                color="white"
                bgColor={currentColor}
                text="Download Report"
                borderRadius="10px"
              />
            </div>
          </div>
          <div>
            <Stacked currentMode={currentMode} width="320px" height="360px" />
          </div>
        </div>
      </div>
      <div>

    {/*EARINGS */}
    <div
          className=" rounded-2xl md:w-400 p-4 m-3"
          style={{ backgroundColor: currentColor }}
        >
          <div className="flex justify-between items-center ">
            <p className="font-semibold text-white text-2xl">Earnings</p>

            <div>
              <p className="text-2xl text-white font-semibold mt-8">$63,448.78</p>
              <p className="text-gray-200">Monthly revenue</p>
            </div>
          </div>

          <div className="mt-4">
            <SparkLine currentColor={currentColor} id="column-sparkLine" height="100px" type="Column" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
          </div>
        </div>

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
          <div>
            <p className="text-2xl font-semibold ">$43,246</p>
            <p className="text-gray-400">Yearly sales</p>
          </div>

          <div className="w-40">
            <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" />
        </div>
      </div>
    </div>
  </div>

</div>
);
};

export default Home
