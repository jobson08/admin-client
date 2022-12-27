
import React, {useMemo} from 'react';
import { useTable } from 'react-table';
import { ColumnsTransations, Transations} from '../../data/dummy';

const TableEdit = () => {
    
        const columns = useMemo(() => ColumnsTransations, [])
        const data = useMemo(() => Transations, [])

        const tableInstance = useTable({
            columns,
            data
        })
        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow,
        }= tableInstance
  return (
    <div >
    <table {...getTableProps()}  className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            {headerGroups.map((headerGroup) => (
                 <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) =>(
                    <th {...column.getHeaderProps()} scope="col" className="py-3 px-6">
                   {column.render('Header')}
                </th>
                ))}  
            </tr>
            ))}    
        </thead>
        <tbody  {...getTableBodyProps()}>
            {rows.map(row =>{
                prepareRow(row)
                return(
             <tr {...row.getRowProps()} className="bg-white uppercase border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                {row.cells.map(cell => {
                    return<td {...cell.getCellProps()} className="py-3 px-6">{cell.render('Cell')} </td>
                })}
            </tr> 
                )
            })}
        </tbody>
    </table>
    </div>
  )
}

export default TableEdit