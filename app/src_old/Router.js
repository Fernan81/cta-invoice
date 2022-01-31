import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './core/Home'
import Invoices from './invoices/Invoices'
import InvoicesNew from './invoices/new'

const MainRouter = () => {
    return (<div>
      <Routes>
        <Route exact path="/" element={<InvoicesNew />} />
        <Route path="/invoices" element={<Invoices />}/>        
        <Route path="/invoices/new" element={<InvoicesNew />}/>    
      </Routes>
    </div>)
}

export default MainRouter