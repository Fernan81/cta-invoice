import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { TextField, Box } from '@mui/material';

const MUTATION_ADD_INVOICE = gql`
mutation InvoiceInsert(
  $id: Int!,
  $user: Int!, 
  $subtotal: money!, 
  $tax: money!, 
  $discount: money!, 
  $total: money!) {
    insert_invoices(objects: {id: $id, 
      user: $user, 
      subtotal: $subtotal, tax: $tax, discount: $discount, total: $total}) {
      returning {
        id
      }
    }
  }`

export default function InvoiceInsert() {
  
  const navigate = useNavigate();
  const [addInvoice, { data, loading, error }] = useMutation(MUTATION_ADD_INVOICE)

  const initialState = {
    id: 1,
    date: new Date(),
    client: 0,
    total: 0
  }

  const [formState, setFormState] = useState(initialState)

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const handleSubmit = event => {

    event.preventDefault();

    addInvoice({
      variables: formState,
    });

    setFormState(initialState);
    navigate('/invoices');
  }

    return (

        <div>
            <h2>New invoice</h2>
            <form onSubmit={handleSubmit} >
                <label>
                  <span>Id Invoice</span>
                  <input type="number" onChange={(e) => setFormState({ ...formState, id: e.target.value })} 
                      value={formState.id}></input>
                </label>
                <label>
                  <span>User</span>
                  <input type="number" onChange={(e) => setFormState({ ...formState, user: e.target.value })} 
                      value={formState.user}></input>
                </label> 
                <label>
                  <span>Date</span>
                  <input type="date" onChange={(e) => setFormState({ ...formState, date: e.target.value })} 
                      value={formState.date}></input>
                </label>   
                <label>
                  <span>Subtotal</span>
                  <input type="number" onChange={(e) => setFormState({ ...formState, subtotal: e.target.value })} 
                      value={formState.subtotal}></input>
                </label> 
                <label>
                  <span>Tax</span>
                  <input type="number" onChange={(e) => setFormState({ ...formState, tax: e.target.value })} 
                      value={formState.tax}></input>
                </label> 
                <label>
                  <span>Discount</span>
                  <input type="number" onChange={(e) => setFormState({ ...formState, discount: e.target.value })} 
                      value={formState.discount}></input>
                </label> 
                <div className="display-linebreak"/> 
                <TextField id="total" 
                  label="Total"
                  value={formState.total} 
                  onChange={(e) => setFormState({ ...formState, total: e.target.value })} 
                  type="number" 
                  variant="standard"/>
                <button type="submit">Save</button>
            </form>
        </div>

    )
};