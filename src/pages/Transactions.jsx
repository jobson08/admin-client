import React from 'react'
import Header from '../components/Header'
import {GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids'
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy'
const Transactions = () => {
    const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
       <div className='dark:text-gray-200' >
     <Header category="Page" title="Transaçoes" />
     <GridComponent
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
      </GridComponent>
        </div>
    </div>
  )
}

export default Transactions