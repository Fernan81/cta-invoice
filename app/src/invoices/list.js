import { gql, useQuery } from '@apollo/client';
import React, { useRef } from 'react';

const SELECT_INVOICE = gql`
query SelectInvoices {
  invoices {
    id
    date
    user
    discount
    subtotal
    tax
    total
  }
}`

export default function InvoicesList() {
    const [selectionstate, setSelection] = React.useState([0]);
    const selection = useRef({});

  
    const {loading, error, data} = useQuery(SELECT_INVOICE, {
      pollInterval: 0,
      fetchPolicy: "network-only",   // Used for first execution
      nextFetchPolicy: "no-cache" // Used for subsequent executions
    })
    
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  
    console.log(data);
  
    function currentlySelected(selections) {
       if (selectionstate !== selections) { // I didn't write it in but you'll need to do object comparison here
         setSelection(`/invoices/invoice/${selections.toString()}`);
         console.log(selections);
       }
    }
  
    return (
      <div>
        {data && data.invoices.map (item => 
          item.id
          )}
      </div>)
    ;
}