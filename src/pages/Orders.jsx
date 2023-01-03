/* eslint-disable no-whitespace-before-property */
import React, { useState } from 'react'
//import {GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids'
import {  Transations, recentTransactionsData } from '../data/dummy'
import { Header, ModalCompo} from '../components/Expor';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { Tab } from '@headlessui/react';
import {  RiCoinsFill, RiFileTextLine, RiCalendarEventLine, RiCheckboxCircleLine, RiContactsBookLine } from 'react-icons/ri'

const Orders = () => {

 //const editing = { allowDeleting: true, allowEditing: true };
 const [showModalAdd, setShowModalAdd] = useState( false );
 const [showModalEdit, setShowModalEdit] = useState( false );

  return (
  <>
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header title="Orders" />
      <div className="mt-1 flex justify-end ">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounde"
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
                     Icone
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
            {recentTransactionsData.map((recentTransactionsData,index)=>(
             <tr  key= {index} className="bg-white uppercase border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th className="py-3 px-6" scope='row'>{index + 1}</th>
                <td className='py-3 px-6' style={{color: recentTransactionsData.iconColor,}}>{recentTransactionsData.icon}</td>
                <td className={`py-3 px-6 text-${recentTransactionsData.pcColor}`}>{recentTransactionsData.amount}</td>
                <td className={`py-3 px-6 text-${recentTransactionsData.pcColor}`}>{recentTransactionsData.title}</td>
                <td className={`py-3 px-6 text-${recentTransactionsData.pcColor}`}>{recentTransactionsData.category}</td>
                <td className={`py-3 px-6 text-${recentTransactionsData.pcColor}`}>{recentTransactionsData.desc}</td>
                <td className={`py-3 px-6 text-${recentTransactionsData.pcColor}`}>{recentTransactionsData.dat}</td>
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
{/*Modal Adicionar  */}
    <ModalCompo isVisible ={showModalAdd} onClose ={() => setShowModalAdd(false)}>
    <Header title="Adicionar" />
    <Tab.Group>
      <Tab.List className='flex space-x-1  p-1'>
        <Tab className="w-full rounded-xl py-2.5 text-white font-bold leading-5 bg-blue-800">Recieta</Tab>
        <Tab className="w-full rounded-xl py-2.5 text-white font-bold leading-5 bg-red-800">Despesas</Tab>
        <Tab className="w-full rounded-xl py-2.5 text-white font-bold leading-5 bg-green-800">Transferência</Tab>
      </Tab.List>

      <Tab.Panels>
      <Tab.Panel className="rounded-xl bg-blue-800 p-3">
        <div className="w-full mb-1">
        <form>
        <div className='p-5 pt-1'>
        <div className="relative mb-2 flex">
          <RiCoinsFill className='absolute  text-blue-500 top-1/2 -translate-y-1/2 left-2'/>
            <input
              type="number"
              className="py-2 pl-8 pr-4 w-full outline-none rounded-lg"
              placeholder="Valor"
              />
            <input
              type="date"
              className="py-2 pl-8 pr-4 w-full outline-none rounded-lg"
              placeholder="Titulo"
            />
          
          </div>
          
          <div className="relative mb-2">
          <RiFileTextLine  className='absolute  text-blue-500 top-1/2 -translate-y-1/2 left-2'/>
            <input
              type="text"
              className="py-2 pl-8 pr-4 w-full outline-none rounded-lg"
              placeholder="Descrição"
            />
          </div>
          <label htmlFor="category">Categoria</label>
          <div className="relative mb-2">
          <RiCheckboxCircleLine className='absolute  text-blue-500 top-1/2 -translate-y-1/2 left-2'/>
          <select className="py-2 pl-8 pr-4 w-full outline-none rounded-lg dark:text-gray-500">
                <option value="1">Padaria</option>
                <option value="2">Fabrica</option>
                <option value="3">Despesa pessoal</option>
             </select>     
          </div>
          <label htmlFor="conta">Conta</label>
          <div className="relative mb-2">
          <RiContactsBookLine className='absolute  text-blue-500 top-1/2 -translate-y-1/2 left-2'/>
          <select className="py-2 pl-8 pr-4 w-full outline-none rounded-lg dark:text-gray-500">
                <option value="1">Carteira</option>
                <option value="2">Cartão de credito</option>
                <option value="3">Conta corrente</option>
                <option value="4">Poupança</option>
             </select>     
          </div>
          <div className="w-full max-w-md mx-auto flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember"  />
              <label htmlFor="remember">Consolidar</label>
            </div>
          </div>
          <div className="w-full max-w-md mx-auto">
            <button
              type="submit"
              className="w-full bg-blue-500 py-2 px-4 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
             SALVAR E NOVA
            </button>
          </div>
          </div>
        </form>
      </div>
     </Tab.Panel>

        <Tab.Panel  className="rounded-xl bg-red-800 p-3">
        <div className="w-full mb-1">
        <form>
        <div className='p-5 pt-1'>
        <div className="relative mb-2 flex">
          <RiCoinsFill className='absolute  text-red-500 top-1/2 -translate-y-1/2 left-2'/>
            <input
              type="number"
              className="py-2 pl-8 pr-4 w-full outline-none rounded-lg"
              placeholder="Valor"
              />
            <input
              type="date"
              className="py-2 pl-8 pr-4 w-full outline-none rounded-lg"
              placeholder="Titulo"
            />
          
          </div>
          <div className="relative mb-2">
          <RiFileTextLine  className='absolute  text-red-500 top-1/2 -translate-y-1/2 left-2'/>
            <input
              type="text"
              className="py-2 pl-8 pr-4 w-full outline-none rounded-lg"
              placeholder="Descrição"
            />
          </div>
          <label htmlFor="category">Categoria</label>
          <div className="relative mb-2">
          <RiCheckboxCircleLine className='absolute  text-red-500 top-1/2 -translate-y-1/2 left-2'/>
          <select className="py-2 pl-8 pr-4 w-full outline-none rounded-lg dark:text-gray-500">
                <option value="1">Padaria</option>
                <option value="2">Fabrica</option>
                <option value="3">Despesa pessoal</option>
             </select>  
          </div>
          <label htmlFor="conta">Conta</label>
          <div className="relative mb-2">
          <RiContactsBookLine className='absolute  text-red-500 top-1/2 -translate-y-1/2 left-2'/>
          <select className="py-2 pl-8 pr-4 w-full outline-none rounded-lg dark:text-gray-500">
                <option value="1">Carteira</option>
                <option value="2">Cartão de credito</option>
                <option value="3">Conta corrente</option>
                <option value="4">Poupança</option>
             </select>       
          </div>
          <div className="w-full max-w-md mx-auto flex items-center justify-between  mb-8">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember"  />
              <label htmlFor="remember">Consolidar</label>
            </div>
          </div>
          <div className="w-full max-w-md mx-auto">
            <button
              type="submit"
              className="w-full bg-red-500 py-2 px-4 text-white rounded-md hover:bg-red-600 transition-colors"
            >
             SALVAR E NOVA
            </button>
          </div>
          </div>
        </form>
      </div>
        </Tab.Panel>

        <Tab.Panel className="rounded-xl bg-green-800 p-3">
        <div className="w-full mb-1">
        <form>
        <div className='p-5 pt-1'>
        <div className="relative mb-2 flex">
          <RiCoinsFill className='absolute  text-green-500 top-1/2 -translate-y-1/2 left-2'/>
            <input
              type="number"
              className="py-2 pl-8 pr-4 w-full outline-none rounded-lg"
              placeholder="Valor"
              />
            <input
              type="date"
              className="py-2 pl-8 pr-4 w-full outline-none rounded-lg"
              placeholder="Titulo"
            />
          </div>
          <div className="relative mb-2">
          <RiFileTextLine  className='absolute  text-green-500 top-1/2 -translate-y-1/2 left-2'/>
            <input
              type="text"
              className="py-2 pl-8 pr-4 w-full outline-none rounded-lg"
              placeholder="Descrição"
            />
          </div>
          <label htmlFor="category">Categoria</label>
          <div className="relative mb-2">
          <RiCheckboxCircleLine className='absolute  text-green-500 top-1/2 -translate-y-1/2 left-2'/>
          <select className="py-2 pl-8 pr-4 w-full outline-none rounded-lg dark:text-gray-500">
                <option value="1">Padaria</option>
                <option value="2">Fabrica</option>
                <option value="3">Despesa pessoal</option>
             </select>  
          </div>
          <label htmlFor="conta">Conta</label>
          <div className="relative mb-2">
          <RiContactsBookLine className='absolute  text-green-500 top-1/2 -translate-y-1/2 left-2'/>
          <select className="py-2 pl-8 pr-4 w-full outline-none rounded-lg dark:text-gray-500">
                <option value="1">Carteira</option>
                <option value="2">Cartão de credito</option>
                <option value="3">Conta corrente</option>
                <option value="4">Poupança</option>
             </select>     
          </div>
          <div className="w-full max-w-md mx-auto flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember"  />
              <label htmlFor="remember">Consolidar</label>
            </div>
          </div>
          <div className="w-full max-w-md mx-auto">
            <button
              type="submit"
              className="w-full bg-green-500 py-2 px-4 text-white rounded-md hover:bg-green-600 transition-colors"
            >
             SALVAR E NOVA
            </button>
          </div>
          </div>
        </form>
      </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
   
    </ModalCompo>

{/*Modal Editar */}
    <ModalCompo isVisible ={showModalEdit} onClose ={() => setShowModalEdit(false)}>
    <Header title="Editar" />
    <div className="w-full mb-1">
    <form>
        <div className='p-14 pt-1'>
        <div className="relative mb-4 flex">
          <RiCoinsFill className='absolute  text-blue-500 top-1/2 -translate-y-1/2 left-2'/>
            <input
              type="number"
              className="py-2 pl-8 pr-4 w-full outline-none rounded-lg"
              placeholder="Valor"
              />
             <select className="py-2 pl-8 pr-4 w-full outline-none rounded-lg dark:text-gray-500">
                <option value="1">Padaria</option>
                <option value="2">Fabrica</option>
                <option value="3">Despesa pessoal</option>
             </select>  
          </div>
          <div className="relative mb-4">
          <RiCalendarEventLine  className='absolute  text-blue-500 top-1/2 -translate-y-1/2 left-2'/>
            <input
              type="date"
              className="py-2 pl-8 pr-4 w-full outline-none rounded-lg"
              placeholder="Titulo"
            />
          </div>
          <div className="relative mb-4">
          <RiFileTextLine  className='absolute  text-blue-500 top-1/2 -translate-y-1/2 left-2'/>
            <input
              type="text"
              className="py-2 pl-8 pr-4 w-full outline-none rounded-lg"
              placeholder="Descrição"
            />
          </div>
          <div className="relative mb-6">
          <RiCheckboxCircleLine className='absolute  text-blue-500 top-1/2 -translate-y-1/2 left-2'/>
          <select className="py-2 pl-8 pr-4 w-full outline-none rounded-lg dark:text-gray-500">
                <option value="Receita">Categoria</option>
                <option value="Despesa">Despesa</option>
                <option value="Poupança">Transferência</option>
             </select>     
          </div>
          <div className="relative mb-6">
          <RiContactsBookLine className='absolute  text-blue-500 top-1/2 -translate-y-1/2 left-2'/>
          <select className="py-2 pl-8 pr-4 w-full outline-none rounded-lg dark:text-gray-500">
                <option value="Receita">Conta</option>
                <option value="Despesa">Despesa</option>
                <option value="Poupança">Transferência</option>
             </select>     
          </div>
          <div className="w-full max-w-md mx-auto flex items-center justify-between text-blue-500 mb-8">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember"  />
              <label htmlFor="remember">Consolidar</label>
            </div>
          </div>
          <div className="w-full max-w-md mx-auto">
            <button
              type="submit"
              className="w-full bg-blue-500 py-2 px-4 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
             SALVAR
            </button>
          </div>
          </div>
        </form>
      </div>
    </ModalCompo>
    </>
  )
}

export default Orders
