import React from 'react'
import {BrowserRouter, Link, Outlet, Route, Routes} from 'react-router-dom'
import Invoices from './invoices/list'
import InvoicesAdd from './invoices/add'

const MainRouter = () => {
    return (<div>
      <h1>Welcome invoices</h1>

      <Link to="/invoices">List</Link> | 
      <Link to="/invoicesAdd">Add</Link>
      <Outlet />

    </div>    
    )
} 

export default MainRouter