import React from 'react';
import Main from './Main';
import InvoicesList from './invoices/list';
import InvoicesAdd from './invoices/add'
//import List from './invoices/list'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>}>
        <Route index path="invoices" element={<InvoicesList/>} />
        <Route path="invoicesAdd" element={<InvoicesAdd/>} />
      </Route>
    </Routes>
  </BrowserRouter> 
)}

export default App;