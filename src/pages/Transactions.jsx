/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useMemo} from 'react'
import Button from '../components/Button'
import Header from '../components/Header'
import { useTable, usePagination } from 'react-table';
import { ColumnsTransations, Transations} from '../data/dummy';
import { useStateContext } from '../contexts/ ContextProvider';
import { AiOutlineLeft, AiOutlineRight, AiOutlineVerticalLeft, AiOutlineVerticalRight, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';



const Transactions = () => {
    const { currentColor} = useStateContext();

    const columns = useMemo(() => ColumnsTransations, [])
    const data = useMemo(() => Transations, [])

    const tableInstance = useTable({
        columns,
        data
    },
    usePagination
    )
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        prepareRow,
        pageOptions,
        gotoPage,
        pageCount,
        state,
    }= tableInstance

    const { pageIndex } = state

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
        <div className="flex flex-col">
            <div className="overflow-x-auto">
            <div className="p-1.5 w-full inline-block align-middle">
      
             <table {...getTableProps()}  className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                 {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                         {headerGroup.headers.map((column) =>(
                        <th {...column.getHeaderProps()} scope="col" className="py-3 px-6">    {column.render('Header')}</th>    
                         ))}  
                    </tr>
                     ))}    
                </thead>

            <tbody  {...getTableBodyProps()}>
                {page.map(row =>{ 
                    prepareRow(row)
                    return(
                <tr {...row.getRowProps()} className="bg-white uppercase border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    {row.cells.map(cell => {
                        return<td {...cell.getCellProps()} className="py-3 px-6">{cell.render('Cell')} </td>
                })}
                 <td className="py-4 px-3">
                    <button className="text-blue-600 md:text-xl dark:text-blue-500 hover:underline"><AiOutlineEdit /> </button>
                    
                </td>
                <td className="py-4 px-3">
                    <button className=" text-red-600 md:text-xl dark:text-red-500 hover:underline"> <AiOutlineDelete /> </button>
                </td>
            </tr> 
                )
            })}
        </tbody>
    </table>

         <div >
            {/**pagination */}
                <button
                type="button" 
                style={{ backgroundColor: currentColor }}  
                className="text-1xl hover:drop-shadow-xl text-white rounded-full p-1 m-1"
                onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                <AiOutlineVerticalRight />
                </button>

                <button 
                type="button" 
                style={{ backgroundColor: currentColor }}  
                className="text-1xl hover:drop-shadow-xl text-white rounded-full p-1 m-1"
                onClick={() => previousPage()} disabled={!canPreviousPage}>
                <AiOutlineLeft />
                </button>
                <span>
                    {' '}
                    <strong>
                        {pageIndex + 1} de {pageOptions.length}
                    </strong>{' '}
                </span> 
                <button 
                type="button" 
                style={{ backgroundColor: currentColor }}  
                className="text-1xl hover:drop-shadow-xl text-white rounded-full p-1 m-1" 
                onClick={() => nextPage()} disabled={!canNextPage}> 
                <AiOutlineRight />
                </button>
                
                <button 
                type="button" 
                style={{ backgroundColor: currentColor }}  
                className="text-1xl hover:drop-shadow-xl text-white rounded-full p-1 m-1"
                onClick={() => gotoPage(pageCount -1 )} disabled={!canNextPage}>
                <AiOutlineVerticalLeft />
                </button>
                </div>
            </div>
        </div>
    </div>
 </div>
</div>
  )
}

export default Transactions