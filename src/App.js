/* eslint-disable react-hooks/exhaustive-deps */
import  React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Home, Login, Register, Error, ForgetPassword } from './pages/Expor';

import './App.css';
import LayoutAdmin from './Layouts/LayoutAdmin';

const App = () => {
  return (

    <BrowserRouter>
        <Routes>              
              <Route path="/" element={(<Login />)} />
              <Route path="/register" element={(<Register />)}/>
              <Route path="/forget" element={(<ForgetPassword />)}/>
              {/* dashboard  */}
          <Route path="/" element={(<LayoutAdmin/>)} >
              <Route path='home' element={(<Home />)} />
              <Route path="ecommerce" element={(<Ecommerce />)}/>

              {/* pages  */}
              <Route path="orders" element={<Orders />} />
              <Route path="employees" element={<Employees />} />
              <Route path="customers" element={<Customers />} />

              {/* apps  */}
              <Route path="kanban" element={<Kanban />} />
              <Route path="editor" element={<Editor />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="color-picker" element={<ColorPicker />} />

              {/* charts  */}
              <Route path="line" element={<Line />} />
              <Route path="area" element={<Area />} />
              <Route path="bar" element={<Bar />} />
              <Route path="pie" element={<Pie />} />
              <Route path="financial" element={<Financial />} />
              <Route path="color-mapping" element={<ColorMapping />} />
              <Route path="pyramid" element={<Pyramid />} />
              <Route path="stacked" element={<Stacked />} />
         </Route>
         <Route path="*" element={<Error />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
