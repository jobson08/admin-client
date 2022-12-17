/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Button from '../components/Button'
import Header from '../components/Header'
import Table from '../components/Table';
import { useStateContext } from '../contexts/ ContextProvider';

const Transactions = () => {
    const { currentColor} = useStateContext();
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
       <div className='dark:text-gray-200' >
       <div className="mt-1 flex justify-end ">
            <Button
              color="white"
              bgColor={currentColor}
              text="Adiciona"
              borderRadius="10px"
            />
          </div>
        
     <Header category="Page" title="Transaçoes" />
     <Table />
    {/* 
     <div className="flex flex-col">
    <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                            >
                                ID
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                            >
                                Name
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                            >
                                Email
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                            >
                                Edit
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                            >
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 text-sm font-medium dark:text-gray-200 whitespace-nowrap">
                                1
                            </td>
                            <td className="px-6 py-4 text-sm dark:text-gray-200 whitespace-nowrap">
                                Jone Doe
                            </td>
                            <td className="px-6 py-4 text-sm dark:text-gray-200 whitespace-nowrap">
                                jonne62@gmail.com
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                <a
                                    className="text-green-500 hover:text-green-700"
                                    href="#"
                                >
                                    Edit
                                </a>
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                <a
                                    className="text-red-500 hover:text-red-700"
                                    href="#"
                                >
                                    Delete
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
     </div>
  </div>*/}

        </div>
    </div>
  )
}

export default Transactions