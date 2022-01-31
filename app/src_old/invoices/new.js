import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const MUTATION_ADD_INVOICE = gql`
    mutation addInvoice (
      $id: Int!
      $date: date!
      $client: Int!
      $total: money!
    ) {
      insert_invoices(objects: {
        id: $id
        date: $date
        client: $client
        total: $total
      }) {
        affected_rows
      }
    }
`

function InvoicesInsert() {

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
    <form onSubmit={handleSubmit}>
      <label>
        <span>Id</span>
        <input type="number" onChange={(e) => setFormState({ ...formState, id: e.target.value })} 
            value={formState.id}></input>
      </label>
      <div className="display-linebreak"/> 
      <label>
        <span>Date</span>
        <input type="date" onChange={(e) => setFormState({ ...formState, date: e.target.value })} 
            value={formState.date}></input>
      </label>          
      <div className="display-linebreak"/> 
      <label>
        <span>Client</span>
        <input type="number" onChange={(e) => setFormState({ ...formState, client: e.target.value })} 
            value={formState.client}></input>
      </label>
      <div className="display-linebreak"/> 

      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  </div>
  )
}

export default InvoicesInsert;