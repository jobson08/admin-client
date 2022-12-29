/* eslint-disable no-whitespace-before-property */
import React, { useState } from 'react'
//import {GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids'
import {  Transations } from '../data/dummy'
import { Header, ModalTable} from '../components/Expor';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { Link} from 'react-router-dom';
import { RiLockLine, RiMailLine } from 'react-icons/ri'

const Orders = () => {

 //const editing = { allowDeleting: true, allowEditing: true };
 const [showModalAdd, setShowModalAdd] = useState( false );
 const [showModalEdit, setShowModalEdit] = useState( false );
  return (
  <>
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header title="Orders" />
      <div className="mt-1 flex justify-end ">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounde"
      onClick={() => setShowModalAdd(true)}
      >
        Adicionar
      </button>
          </div>   
      
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-2">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-50 dark:bg-gray-700 ">
            
            <tr className="bg-white uppercase border-b dark:bg-gray-500 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="col" className="py-3 px-6">
                     ID
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
                    <button className="text-blue-600 md:text-xl dark:text-blue-500 hover:underline" 
                    onClick={() => setShowModalEdit(true)}><AiOutlineEdit /> </button>
                </td>
                <td className="py-4 px-3">
                     <button className=" text-red-600 md:text-xl dark:text-red-500 hover:underline"> <AiOutlineDelete /> </button>
                </td>
            </tr> 
            ))}
        </tbody>
    </table>

    {/*  <GridComponent
      id="gridcomp"
      dataSource={ordersData}
      allowPaging
      allowSorting
      allowExcelExport
      allowPdfExport
      contextMenuItems={contextMenuItems}
      editSettings={editing}
      >
      <ColumnsDirective>
          {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>*/}
 
    </div>
    <ModalTable isVisible ={showModalEdit} onClose ={() => setShowModalEdit(false)}>
    <Header title="Editar" />
    <div className="w-full mb-1">
        <form>
        <div className='p-14 pt-1'>
          <div className="relative mb-4">
          <RiMailLine  className='absolute  text-blue-500 top-1/2 -translate-y-1/2 left-2'/>
            <input
              type="email"
              className="py-2 pl-8 pr-4 w-full outline-none rounded-lg"
              placeholder="Emtre com Email"
            />
          </div>
          <div className="relative mb-6">
          <RiLockLine className='absolute  text-blue-500 top-1/2 -translate-y-1/2 left-2'/>
            <input
             
              className="py-2 px-8 w-full outline-none rounded-lg"
              placeholder="Senha"
              />             
          </div>
          <div className="w-full max-w-md mx-auto flex items-center justify-between text-blue-500 mb-8">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Lembrar</label>
            </div>
            <div>
            <Link
           to='/forget'
            className="text-blue-500 hover:underline transition-all"
          >
            Esquceu a Senha?
          </Link>
            </div>
          </div>
          <div className="w-full max-w-md mx-auto">
            <button
              type="submit"
              className="w-full bg-blue-500 py-2 px-4 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Iniciar sessão
            </button>
          </div>
          </div>
        </form>
      </div>
    </ModalTable>

    <ModalTable isVisible ={showModalAdd} onClose ={() => setShowModalAdd(false)}>
    <Header title="Adicionar" />
    <div className="w-full mb-1">
        <form>
        <div className='p-14 pt-1'>
          <div className="relative mb-4">
          <RiMailLine  className='absolute  text-blue-500 top-1/2 -translate-y-1/2 left-2'/>
            <input
              type="email"
              className="py-2 pl-8 pr-4 w-full outline-none rounded-lg"
              placeholder="Emtre com Email"
            />
          </div>
          <div className="relative mb-6">
          <RiLockLine className='absolute  text-blue-500 top-1/2 -translate-y-1/2 left-2'/>
            <input
             
              className="py-2 px-8 w-full outline-none rounded-lg"
              placeholder="Senha"
              />             
          </div>
          <div className="w-full max-w-md mx-auto flex items-center justify-between text-blue-500 mb-8">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Lembrar</label>
            </div>
            <div>
            <Link
           to='/forget'
            className="text-blue-500 hover:underline transition-all"
          >
            Esquceu a Senha?
          </Link>
            </div>
          </div>
          <div className="w-full max-w-md mx-auto">
            <button
              type="submit"
              className="w-full bg-blue-500 py-2 px-4 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Iniciar sessão
            </button>
          </div>
          </div>
        </form>
      </div>
    </ModalTable>
    </>
  )
}

export default Orders
