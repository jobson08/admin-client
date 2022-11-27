/* eslint-disable no-unused-vars */
import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { Button, Pie, SparkLine, Stacked, Pie as PieChart } from '../components/Expor';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { useStateContext } from '../contexts/ ContextProvider';
import { GoPrimitiveDot } from 'react-icons/go';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

import { sumaryBar, ecomPieChartData, SparklineAreaData, dropdownData, pieChartData} from '../data/dummy';


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
  <div className='bg-white  dark:bg-secondary-dark-bg p-5 rounded-xl'>

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

       {/*Despesas por categoria */}
  <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl  ">
        <div className="flex justify-center">
          <p className="font-semibold text-xl">Despesas por categoria</p>
        </div>

        <div className="full">
            <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
          </div>
      </div>

{/*Fluco de caixas */}
    <div  className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl ">
      <div className="flex justify-center">
          <p className="font-semibold text-xl">Fluxo de caixa</p>
      </div>
      <div>
            <Stacked currentMode={currentMode}  height="full" />
          </div>       
  </div>

{/*Comparativo */}
  <div  className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl">
      <div className="flex justify-center">
          <p className="font-semibold text-xl">comparativo</p>
        </div>
  </div>

</div>


);
};

export default Home
