/* eslint-disable no-unused-vars */
import React, {useMemo, useState}  from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../contexts/ ContextProvider';
import { useTable, usePagination } from 'react-table';
import {Transations} from '../../data/dummy';
import { AiOutlineLeft, AiOutlineRight, AiOutlineVerticalLeft, AiOutlineVerticalRight, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import PaginationTable from './PaginationTable';


const TablesTest = () => {
    const [totalItens, setTotalItens]= useState(0);
    const [currentPage, setCurrentPage]= useState();
    const ITENS_PER_PAGE = 50;
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            
            <tr className="bg-white uppercase border-b dark:bg-gray-500 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <label for="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" className="py-3 px-6">
                     AMOUNT
                </th>
                <th scope="col" className="py-3 px-6">
                     TITLE
                </th>
                <th scope="col" className="py-3 px-6">
                    CATEGORY
                </th>
                <th scope="col" className="py-3 px-6">
                     TYPE
                </th>
                <th scope="col" className="py-3 px-6">
                    DATE
                </th>
                <th scope="col" className="py-3 px-2">
                    Edit
                </th>
                <th scope="col" className="py-3 px-2">
                    Delete
                </th>
            </tr>
        </thead>
        <tbody>
            {Transations.map((Transations,index)=>(
             <tr  key= {index} className="bg-white uppercase border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th className="py-3 px-6" scope='row'>{index + 1}</th>
                <td className="py-3 px-6">{Transations.amount}</td>
                <td className="py-3 px-6">{Transations.title}</td>
                <td className="py-3 px-6">{Transations.category}</td>
                <td className="py-3 px-6">{Transations.type}</td>
                <td className="py-3 px-6">{Transations.date}</td>
                <td className="py-4 px-3">
                    <Link className="text-blue-600 md:text-xl dark:text-blue-500 hover:underline"><AiOutlineEdit /> </Link>
                </td>
                <td className="py-4 px-3">
                     <Link className=" text-red-600 md:text-xl dark:text-red-500 hover:underline"> <AiOutlineDelete /> </Link>
                </td>
            </tr> 
            ))}
        </tbody>
    </table>
    <PaginationTable
        total = {totalItens}
        itensPerPage = {ITENS_PER_PAGE}
        currentPage = {currentPage}
        onPageChange ={page => setCurrentPage(page)}
    />
</div>
  )
}

export default TablesTest