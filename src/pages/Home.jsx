/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Button, Pie, Stacked, Pie as PieChart, Tabe} from '../components/Expor';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { useStateContext } from '../contexts/ ContextProvider';
import { AiFillCaretLeft, AiFillCaretRight, AiFillAlert } from 'react-icons/ai';

import { sumaryBar, ecomPieChartData, dropdownData, pieChartData, recentTransactionsData} from '../data/dummy';
import { Link } from 'react-router-dom';
import { BsBoxArrowInRight } from 'react-icons/bs';


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
              style={{ color: item.iconColor}}
              className="text-3xl "
            >
              {item.icon}
            </button>

          <div className='flex justify-between items-center'>
            <div>
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
 <div className='grid grid-cols-1 md:grid-cols-2 '>
   <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl  ">
        <div className="flex justify-center">
          <p className="font-semibold text-xl">Despesas por categoria</p>
        </div>
{/*Despesas por categoria */}
        <div className="full justify-center">
            <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="200px" />
        </div>
        <div>
        <Link to="/" className="flex items-center md:text-xl hover:text-blue-400 transition-colors" >
            Ver mais <BsBoxArrowInRight/> 
            </Link>
          </div>
      </div>
{/*Receitas por categoria */}
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl  ">
        <div className="flex justify-center">
          <p className="font-semibold text-xl">Receita por categoria</p>
        </div>

        <div className="full justify-center">
            <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity height="200px" />
          </div>
          <div>
            <Link to="/" className="flex items-center md:text-xl hover:text-blue-400 transition-colors" >
            Ver mais <BsBoxArrowInRight/> 
            </Link>
          </div>
      </div>
  </div>      
 

{/*Fluco de caixas */}
<div className='grid grid-cols-1 md:grid-cols-2 '>
      <div  className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl ">
      <div className="flex justify-center">
          <p className="font-semibold text-xl">Fluxo de caixa</p>
      </div>
      <div>
            <Stacked currentMode={currentMode}  height="full" />
          </div>       
  </div>
  {/*Transações recentes*/}
  <div className="flex gap-10 m-2 flex-wrap justify-center">
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
        <div className="flex justify-between items-center gap-2">
          <p className="text-xl font-semibold">Transações recentes</p>
          <DropDown currentMode={currentMode} />
        </div>
        <div className="mt-10 w-72 md:w-400">
          { recentTransactionsData.map((item) => (
            <div key={item.id} className="flex justify-between mt-4">
              <div className="flex gap-4">
                <button
                  type="button"
                  style={{
                    color: item.iconColor,
                    backgroundColor: item.iconBg,
                  }}
                  className="text-14 rounded-lg p-4 hover:drop-shadow-xl"
                >
                  {item.icon}
                </button>
                <div>
                  <p className="text-md font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
              </div>
              <p className={`text-${item.pcColor}`}>{item.amount}</p>
              <p className=" txt-sm">{item.dat}</p>
            </div>
            
          ))}
        </div>
        <div className="flex justify-between items-center mt-5 border-t-1 border-color">
          <div className="mt-3">
            <Button
              color="white"
              bgColor={currentColor}
              text="Add"
              borderRadius="10px"
            />
          </div>
          <Link to="/" className="flex items-center md:text-xl hover:text-blue-400 transition-colors">36 Transações recentes</Link>
        </div>
      </div>
    </div>
</div>


{/*Comparativo */}
  <div  className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl">
      <div className="flex justify-center">
          <p className="font-semibold text-xl">comparativo</p>
        </div>     
        <div>
          <Tabe />
        </div>           
        
  </div>

</div>


);
};

export default Home
